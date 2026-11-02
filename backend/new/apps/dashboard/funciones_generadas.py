"""
Funciones y disparadores del esquema del dashboard, para el intérprete de PL/pgSQL.

GENERADO por `manage.py generar_vistas`: no se edita a mano.
"""

FUNCIONES = {'abrir_emergencia': ('p_motivo TEXT, p_reparacion UUID DEFAULT NULL, p_lat NUMERIC DEFAULT NULL, p_lng '
                      'NUMERIC DEFAULT NULL, p_vehiculo UUID DEFAULT NULL, p_km_inicio INT DEFAULT NULL',
                      'UUID',
                      'plpgsql',
                      '\n'
                      'DECLARE\n'
                      '    v_tec    UUID := mi_tecnico_id();\n'
                      "    v_motivo TEXT := NULLIF(BTRIM(p_motivo), '');\n"
                      '    v_no     TEXT;\n'
                      '    v_id     UUID;\n'
                      '    u        RECORD;\n'
                      'BEGIN\n'
                      '    IF v_tec IS NULL THEN\n'
                      "        RAISE EXCEPTION 'Tu usuario no está vinculado a un técnico.';\n"
                      '    END IF;\n'
                      '    IF en_servicio(v_tec, NOW()) THEN\n'
                      "        RAISE EXCEPTION 'Ya estás en servicio: tu jornada está abierta. La emergencia "
                      "es un trabajo más del día.';\n"
                      '    END IF;\n'
                      '\n'
                      '    v_no := motivo_sin_emergencia();\n'
                      '    IF v_no IS NOT NULL THEN\n'
                      "        RAISE EXCEPTION '%', v_no USING ERRCODE = '42501';\n"
                      '    END IF;\n'
                      '\n'
                      '    IF p_reparacion IS NOT NULL AND NOT ve_reparacion(p_reparacion) THEN\n'
                      "        RAISE EXCEPTION 'Esa reparación no está asignada a tu cuadrilla.' USING "
                      "ERRCODE = '42501';\n"
                      '    END IF;\n'
                      '\n'
                      '    IF v_motivo IS NULL AND p_reparacion IS NOT NULL THEN\n'
                      "        SELECT 'Reparación #' || numero || ': ' || titulo INTO v_motivo\n"
                      '          FROM reparaciones_red WHERE id = p_reparacion;\n'
                      '    END IF;\n'
                      '    IF v_motivo IS NULL THEN\n'
                      "        RAISE EXCEPTION 'Cuenta por qué sales: qué se cayó o quién te llamó.';\n"
                      '    END IF;\n'
                      '\n'
                      '    INSERT INTO salidas_emergencia (tecnico_id, reparacion_id, motivo, lat_ingreso, '
                      'lng_ingreso,\n'
                      '                                    vehiculo_id, km_inicio)\n'
                      '    VALUES (v_tec, p_reparacion, v_motivo, p_lat, p_lng, p_vehiculo, p_km_inicio)\n'
                      '    RETURNING id INTO v_id;\n'
                      '\n'
                      '    FOR u IN\n'
                      '        SELECT id FROM usuarios_sistema\n'
                      "         WHERE activo AND rol IN ('super_admin', 'admin', 'jefe_tecnico')\n"
                      '    LOOP\n'
                      '        PERFORM notificar(\n'
                      "            u.id, 'emergencia_salida',\n"
                      "            (SELECT nombre FROM tecnicos WHERE id = v_tec) || ' salió por una "
                      "emergencia',\n"
                      '            LEFT(v_motivo, 200),\n'
                      "            '/soporte/jornadas', 'emergencia', v_id::text);\n"
                      '    END LOOP;\n'
                      '\n'
                      '    RETURN v_id;\n'
                      'END;\n'),
 'abrir_expediente_al_ganar': ('',
                               'TRIGGER',
                               'plpgsql',
                               '\n'
                               'BEGIN\n'
                               "    IF NEW.estado = 'ganado' AND (OLD.estado IS DISTINCT FROM 'ganado') "
                               'THEN\n'
                               '        INSERT INTO expedientes (prospecto_id, creado_por)\n'
                               '        VALUES (NEW.id, NEW.vendedor_id)\n'
                               '        ON CONFLICT (prospecto_id) DO NOTHING;\n'
                               '    END IF;\n'
                               '    RETURN NEW;\n'
                               'END '),
 'abrir_gestion_recuperacion': ('p_cliente UUID, p_dias INT DEFAULT 30',
                                'UUID',
                                'plpgsql',
                                '\n'
                                'DECLARE\n'
                                '    v_legajo UUID := mi_legajo_id();\n'
                                '    v_vendedor UUID;\n'
                                '    v_id UUID;\n'
                                'BEGIN\n'
                                '    SELECT cv.vendedor_id INTO v_vendedor\n'
                                '      FROM comision_ventas cv\n'
                                '     WHERE cv.cliente_id = p_cliente\n'
                                "       AND cv.estado <> 'anulada'\n"
                                '     LIMIT 1;\n'
                                '\n'
                                '    IF v_vendedor IS NULL THEN\n'
                                "        RAISE EXCEPTION 'Ese abonado no figura como venta de nadie';\n"
                                '    END IF;\n'
                                '\n'
                                '    IF NOT ve_comisiones_de_todos() AND v_vendedor IS DISTINCT FROM '
                                'v_legajo THEN\n'
                                "        RAISE EXCEPTION 'Ese abonado no es de tu cartera';\n"
                                '    END IF;\n'
                                '\n'
                                '    -- Si ya hay una activa, se devuelve esa: dos gestiones abiertas sobre '
                                'el\n'
                                '    -- mismo abonado parten el historial en dos.\n'
                                '    SELECT id INTO v_id FROM cobranza_asignaciones\n'
                                "     WHERE cliente_id = p_cliente AND estado = 'activa' LIMIT 1;\n"
                                '\n'
                                '    IF v_id IS NOT NULL THEN\n'
                                '        RETURN v_id;\n'
                                '    END IF;\n'
                                '\n'
                                '    INSERT INTO cobranza_asignaciones\n'
                                '        (cliente_id, vendedor_id, vence_el, saldo_inicial, motivo, '
                                'asignado_por)\n'
                                '    SELECT p_cliente, v_vendedor, CURRENT_DATE + p_dias,\n'
                                '           (SELECT saldo FROM v_clientes_ficha WHERE id = p_cliente),\n'
                                "           'Recuperación: dejó de renovar', v_legajo\n"
                                '    RETURNING id INTO v_id;\n'
                                '\n'
                                '    RETURN v_id;\n'
                                'END '),
 'abrir_incidencia': ('p_id UUID, p_usuario UUID DEFAULT NULL',
                      'JSONB',
                      'plpgsql',
                      '\n'
                      'DECLARE\n'
                      '    v incidencias_masivas%ROWTYPE;\n'
                      '    v_encolados INT := 0;\n'
                      'BEGIN\n'
                      '    SELECT * INTO v FROM incidencias_masivas WHERE id = p_id FOR UPDATE;\n'
                      '    IF NOT FOUND THEN\n'
                      "        RAISE EXCEPTION 'No existe esa incidencia';\n"
                      '    END IF;\n'
                      "    IF v.estado = 'abierta' THEN\n"
                      "        RAISE EXCEPTION 'Esa incidencia ya está abierta';\n"
                      '    END IF;\n'
                      "    IF v.estado IN ('resuelta', 'cancelada') THEN\n"
                      "        RAISE EXCEPTION 'Esa incidencia ya se cerró: crea una nueva';\n"
                      '    END IF;\n'
                      '\n'
                      '    IF v.avisar_apertura THEN\n'
                      '        INSERT INTO incidencia_avisos (incidencia_id, client_id, momento)\n'
                      "        SELECT p_id, a.client_id, 'apertura'\n"
                      '          FROM afectados_por_incidencia(p_id) a\n'
                      '        -- Si alguien vuelve a abrirla, los que ya tienen renglón no reciben otro.\n'
                      '        ON CONFLICT (incidencia_id, client_id, momento) DO NOTHING;\n'
                      '\n'
                      '        GET DIAGNOSTICS v_encolados = ROW_COUNT;\n'
                      '    END IF;\n'
                      '\n'
                      '    UPDATE incidencias_masivas\n'
                      "       SET estado     = 'abierta',\n"
                      '           abierta_at = NOW(),\n'
                      '           afectados  = (SELECT COUNT(*) FROM afectados_por_incidencia(p_id))\n'
                      '     WHERE id = p_id;\n'
                      '\n'
                      '    RETURN jsonb_build_object(\n'
                      "        'incidencia_id', p_id,\n"
                      "        'afectados', (SELECT afectados FROM incidencias_masivas WHERE id = p_id),\n"
                      "        'encolados', v_encolados\n"
                      '    );\n'
                      'END;\n'),
 'afectados_por_alcance': ('p_alcance TEXT, p_zona TEXT DEFAULT NULL, p_punto_id UUID DEFAULT NULL, '
                           'p_nodo_id UUID DEFAULT NULL, p_olt_id UUID DEFAULT NULL, p_puerto_pon TEXT '
                           "DEFAULT NULL, p_router_id UUID DEFAULT NULL, p_manual UUID[] DEFAULT '{}'",
                           'TABLE (client_id UUID)',
                           'plpgsql',
                           '\n'
                           'BEGIN\n'
                           "    IF p_alcance = 'zona' THEN\n"
                           '        -- Un alcance de zona sin zona traería a TODOS los que tienen zona '
                           'nula,\n'
                           '        -- que en un padrón recién migrado son casi todos.\n'
                           '        IF p_zona IS NULL THEN RETURN; END IF;\n'
                           '        RETURN QUERY\n'
                           '        SELECT c.id FROM clientes c\n'
                           "         WHERE c.zona = p_zona AND c.estado <> 'baja';\n"
                           '\n'
                           "    ELSIF p_alcance = 'punto' THEN\n"
                           '        IF p_punto_id IS NULL THEN RETURN; END IF;\n'
                           '        RETURN QUERY\n'
                           '        SELECT c.id FROM clientes c\n'
                           '         WHERE (c.nap_id = p_punto_id OR c.conectado_a_id = p_punto_id)\n'
                           "           AND c.estado <> 'baja';\n"
                           '\n'
                           "    ELSIF p_alcance = 'router' THEN\n"
                           '        IF p_router_id IS NULL THEN RETURN; END IF;\n'
                           '        RETURN QUERY\n'
                           '        SELECT c.id FROM clientes c\n'
                           "         WHERE c.router_id = p_router_id AND c.estado <> 'baja';\n"
                           '\n'
                           "    ELSIF p_alcance = 'olt' THEN\n"
                           '        IF p_olt_id IS NULL THEN RETURN; END IF;\n'
                           '        RETURN QUERY\n'
                           '        SELECT DISTINCT c.id\n'
                           '          FROM clientes c\n'
                           '          LEFT JOIN onus o       ON o.id = c.onu_id\n'
                           '          LEFT JOIN puntos_red p ON p.id = c.nap_id\n'
                           "         WHERE c.estado <> 'baja'\n"
                           '           AND (\n'
                           '                -- Por la ONT: es el dato más confiable, lo escribe la OLT.\n'
                           '                (o.olt_id = p_olt_id AND (p_puerto_pon IS NULL OR o.puerto::TEXT '
                           '= p_puerto_pon))\n'
                           '                -- O por la caja de la que cuelga, para el abonado cuya ONT\n'
                           '                -- todavía no se emparejó con la ficha.\n'
                           '             OR (p.olt_id = p_olt_id AND (p_puerto_pon IS NULL OR p.puerto_pon = '
                           'p_puerto_pon))\n'
                           '           );\n'
                           '\n'
                           "    ELSIF p_alcance = 'nodo' THEN\n"
                           '        IF p_nodo_id IS NULL THEN RETURN; END IF;\n'
                           '        RETURN QUERY\n'
                           '        WITH RECURSIVE rama AS (\n'
                           '            SELECT n.id, n.punto_id, n.olt_id\n'
                           '              FROM nodos_red n WHERE n.id = p_nodo_id\n'
                           '            UNION ALL\n'
                           '            SELECT h.id, h.punto_id, h.olt_id\n'
                           '              FROM nodos_red h\n'
                           '              JOIN rama r ON h.padre_id = r.id\n'
                           '        )\n'
                           '        SELECT DISTINCT c.id\n'
                           '          FROM clientes c\n'
                           '          LEFT JOIN onus o ON o.id = c.onu_id\n'
                           "         WHERE c.estado <> 'baja'\n"
                           '           AND (\n'
                           '                -- De la caja o la antena que ese nodo representa.\n'
                           '                c.nap_id         IN (SELECT punto_id FROM rama WHERE punto_id IS '
                           'NOT NULL)\n'
                           '             OR c.conectado_a_id IN (SELECT punto_id FROM rama WHERE punto_id IS '
                           'NOT NULL)\n'
                           '                -- De la OLT que ese nodo representa.\n'
                           '             OR o.olt_id        IN (SELECT olt_id FROM rama WHERE olt_id IS NOT '
                           'NULL)\n'
                           '           );\n'
                           '\n'
                           "    ELSIF p_alcance = 'manual' THEN\n"
                           '        RETURN QUERY\n'
                           '        SELECT c.id FROM clientes c\n'
                           "         WHERE c.id = ANY(p_manual) AND c.estado <> 'baja';\n"
                           '    END IF;\n'
                           '    -- Un alcance desconocido no devuelve nada, a propósito: es preferible un\n'
                           '    -- aviso que no sale a uno que sale a todo el padrón.\n'
                           'END;\n'),
 'afectados_por_incidencia': ('p_id UUID',
                              'TABLE (client_id UUID)',
                              'sql',
                              '\n'
                              '    SELECT a.client_id\n'
                              '      FROM incidencias_masivas i\n'
                              '      CROSS JOIN LATERAL afectados_por_alcance(\n'
                              '          i.alcance, i.zona, i.punto_id, i.nodo_id, i.olt_id, i.puerto_pon,\n'
                              '          i.router_id, i.clientes_manual\n'
                              '      ) a\n'
                              '     WHERE i.id = p_id;\n'),
 'agendar_retiro_equipo': ('p_retiro UUID, p_cuando TIMESTAMPTZ, p_nota TEXT DEFAULT NULL',
                           'retiros_equipo',
                           'plpgsql',
                           '\n'
                           'DECLARE v_fila retiros_equipo%ROWTYPE;\n'
                           'BEGIN\n'
                           '    SELECT * INTO v_fila FROM retiros_equipo WHERE id = p_retiro;\n'
                           '    IF NOT FOUND THEN\n'
                           "        RAISE EXCEPTION 'No existe esa orden de retiro';\n"
                           '    END IF;\n'
                           '\n'
                           '    IF NOT puede_gestionar_retiros()\n'
                           '       AND v_fila.responsable_id IS DISTINCT FROM mi_legajo_id()\n'
                           '       AND v_fila.tecnico_id IS DISTINCT FROM mi_tecnico_id() THEN\n'
                           "        RAISE EXCEPTION 'Esa orden de retiro no es tuya';\n"
                           '    END IF;\n'
                           '\n'
                           "    IF v_fila.estado NOT IN ('pendiente', 'asignado') THEN\n"
                           "        RAISE EXCEPTION 'Esa orden ya está cerrada (%)', v_fila.estado;\n"
                           '    END IF;\n'
                           '\n'
                           '    UPDATE retiros_equipo\n'
                           '       SET agendado_para = p_cuando,\n'
                           "           agenda_nota   = COALESCE(NULLIF(BTRIM(p_nota), ''), agenda_nota),\n"
                           '           recordado_en  = NULL\n'
                           '     WHERE id = p_retiro\n'
                           '    RETURNING * INTO v_fila;\n'
                           '\n'
                           '    RETURN v_fila;\n'
                           'END '),
 'alertas_por_enviar': ('',
                        'TABLE ( id UUID, regla VARCHAR, nombre VARCHAR, entidad VARCHAR, entidad_id '
                        'VARCHAR, etiqueta VARCHAR, zona VARCHAR, abonados INT, detalle JSONB, empezo_en '
                        'TIMESTAMPTZ, resuelto BOOLEAN )',
                        'sql',
                        '\n'
                        '    SELECT e.id, e.regla, r.nombre, e.entidad, e.entidad_id, e.etiqueta, e.zona,\n'
                        '           e.abonados, e.detalle, e.empezo_en,\n'
                        '           (e.resuelto_en IS NOT NULL) AS resuelto\n'
                        '      FROM alerta_eventos e\n'
                        '      JOIN alerta_reglas r ON r.clave = e.regla\n'
                        '     WHERE r.activa\n'
                        '       AND (\n'
                        '         (e.avisado_en IS NULL\n'
                        '          AND e.resuelto_en IS NULL\n'
                        "          AND e.empezo_en <= NOW() - (r.espera_min || ' minutes')::INTERVAL\n"
                        "          AND (e.regla <> 'subida_saturada' OR e.detalle ? 'confirmado_en'))\n"
                        '         OR\n'
                        '         (e.resuelto_en IS NOT NULL AND e.avisado_en IS NOT NULL AND '
                        'e.resuelto_avisado_en IS NULL)\n'
                        '       )\n'
                        '       -- La franja, en la hora del ISP y no en la del servidor de la base (UTC).\n'
                        '       -- Si cruza la medianoche (20:00 a 07:00) vale de un lado o del otro.\n'
                        '       AND (r.desde_hora IS NULL OR r.hasta_hora IS NULL\n'
                        '            OR CASE WHEN r.desde_hora <= r.hasta_hora\n'
                        '                    THEN (NOW() AT TIME ZONE zona_horaria())::time BETWEEN '
                        'r.desde_hora AND r.hasta_hora\n'
                        '                    ELSE (NOW() AT TIME ZONE zona_horaria())::time >= r.desde_hora\n'
                        '                      OR (NOW() AT TIME ZONE zona_horaria())::time <= r.hasta_hora\n'
                        '               END)\n'
                        '     ORDER BY e.abonados DESC, e.empezo_en\n'),
 'alta_copia_aceptacion_anexo2': ('',
                                  'TRIGGER',
                                  'plpgsql',
                                  '\n'
                                  'BEGIN\n'
                                  '    -- Solo al momento de cerrarse, y solo si la orden trae respuesta. '
                                  'El\n'
                                  '    -- COALESCE protege lo que ya tenga la ficha: un abonado viejo que se '
                                  'muda no\n'
                                  '    -- pierde el consentimiento que dio en su día porque la orden de '
                                  'traslado\n'
                                  '    -- venga sin responder.\n'
                                  "    IF NEW.estado = 'hecha'\n"
                                  '       AND NEW.client_id IS NOT NULL\n'
                                  '       AND NEW.acepta_datos_personales IS NOT NULL THEN\n'
                                  '        UPDATE clientes\n'
                                  '           SET acepta_datos_personales =\n'
                                  '                   COALESCE(acepta_datos_personales, '
                                  'NEW.acepta_datos_personales)\n'
                                  '         WHERE id = NEW.client_id;\n'
                                  '    END IF;\n'
                                  '    RETURN NEW;\n'
                                  'END;\n'),
 'anotar_entrante_whatsapp': ('p_telefono TEXT, p_texto TEXT DEFAULT NULL, p_client_id UUID DEFAULT NULL, '
                              'p_cuando TIMESTAMPTZ DEFAULT NOW()',
                              'TIMESTAMPTZ',
                              'plpgsql',
                              '\n'
                              'DECLARE\n'
                              '    v_cuando TIMESTAMPTZ;\n'
                              'BEGIN\n'
                              '    INSERT INTO ventanas_whatsapp (telefono, client_id, ultimo_entrante, '
                              'ultimo_texto)\n'
                              "    VALUES (p_telefono, p_client_id, p_cuando, LEFT(COALESCE(p_texto, ''), "
                              '300))\n'
                              '    ON CONFLICT (telefono) DO UPDATE\n'
                              '       SET ultimo_entrante = GREATEST(ventanas_whatsapp.ultimo_entrante, '
                              'EXCLUDED.ultimo_entrante),\n'
                              '           ultimo_texto    = COALESCE(EXCLUDED.ultimo_texto, '
                              'ventanas_whatsapp.ultimo_texto),\n'
                              '           -- El abonado se completa si antes no se lo conocía, y no se borra '
                              'si\n'
                              '           -- esta vez no se lo pudo resolver.\n'
                              '           client_id       = COALESCE(EXCLUDED.client_id, '
                              'ventanas_whatsapp.client_id),\n'
                              '           mensajes        = ventanas_whatsapp.mensajes + 1\n'
                              '    RETURNING ultimo_entrante INTO v_cuando;\n'
                              '\n'
                              '    RETURN v_cuando;\n'
                              'END;\n'),
 'anular_comision_venta': ('p_venta UUID, p_motivo TEXT',
                           'comision_ventas',
                           'plpgsql',
                           '\n'
                           'DECLARE\n'
                           '    v_legajo UUID := mi_legajo_id();\n'
                           '    v_fila comision_ventas%ROWTYPE;\n'
                           'BEGIN\n'
                           "    IF NOT tiene_permiso_comision('comisiones.anular') THEN\n"
                           "        RAISE EXCEPTION 'No tienes permiso para anular comisiones';\n"
                           '    END IF;\n'
                           '\n'
                           "    IF COALESCE(BTRIM(p_motivo), '') = '' THEN\n"
                           "        RAISE EXCEPTION 'Hace falta el motivo. Nada financiero se modifica en "
                           "silencio.';\n"
                           '    END IF;\n'
                           '\n'
                           '    UPDATE comision_ventas\n'
                           "       SET estado = 'anulada',\n"
                           '           motivo_anulacion = p_motivo,\n'
                           '           anulada_por = v_legajo,\n'
                           '           anulada_en = NOW(),\n'
                           '           actualizado_en = NOW()\n'
                           '     WHERE id = p_venta\n'
                           '    RETURNING * INTO v_fila;\n'
                           '\n'
                           '    IF NOT FOUND THEN\n'
                           "        RAISE EXCEPTION 'No existe esa venta comisionable';\n"
                           '    END IF;\n'
                           '\n'
                           '    INSERT INTO auditoria_sistema (\n'
                           '        usuario_id, usuario_nombre, usuario_rol, accion, descripcion, entidad, '
                           'entidad_id, datos\n'
                           '    )\n'
                           "    SELECT u.id, TRIM(CONCAT(u.nombre, ' ', COALESCE(u.apellido, ''))), u.rol,\n"
                           "           'comisiones.anular',\n"
                           "           FORMAT('Anuló una comisión de %s: %s', v_fila.base, p_motivo),\n"
                           "           'comision_venta', p_venta,\n"
                           "           jsonb_build_object('cliente', v_fila.cliente_id, 'periodo', "
                           'v_fila.periodo,\n'
                           "                              'estado_anterior', v_fila.estado, 'motivo', "
                           'p_motivo)\n'
                           '    FROM usuarios_sistema u WHERE u.id = v_legajo;\n'
                           '\n'
                           '    RETURN v_fila;\n'
                           'END '),
 'aplicar_cobro': ("p_client_id UUID, p_monto NUMERIC, p_forma_pago TEXT DEFAULT 'efectivo', p_cuenta_id "
                   'UUID DEFAULT NULL, p_n_transaccion TEXT DEFAULT NULL, p_fecha_pago DATE DEFAULT '
                   'CURRENT_DATE, p_notas TEXT DEFAULT NULL, p_comision NUMERIC DEFAULT 0, p_factura_id UUID '
                   'DEFAULT NULL, p_facturar BOOLEAN DEFAULT NULL, p_activo_servicio BOOLEAN DEFAULT FALSE, '
                   'p_solo_servicio BOOLEAN DEFAULT TRUE, p_created_by UUID DEFAULT NULL',
                   'JSONB',
                   'plpgsql',
                   '\n'
                   'DECLARE\n'
                   '    v_cliente     clientes%ROWTYPE;\n'
                   '    v_nombre      TEXT;\n'
                   '    v_electronica BOOLEAN;\n'
                   '    v_resta       NUMERIC;\n'
                   '    v_factura     RECORD;\n'
                   '    v_saldo       NUMERIC;\n'
                   '    v_usa         NUMERIC;\n'
                   '    v_cierra      BOOLEAN;\n'
                   '    v_principal   UUID := NULL;\n'
                   '    v_numero      BIGINT := NULL;\n'
                   '    v_pago_id     UUID;\n'
                   '    v_aplicado    NUMERIC := 0;\n'
                   "    v_detalle     JSONB := '[]'::JSONB;\n"
                   '    v_excedente   NUMERIC := 0;\n'
                   'BEGIN\n'
                   '    IF p_monto IS NULL OR p_monto <= 0 THEN\n'
                   "        RAISE EXCEPTION 'El monto del cobro tiene que ser mayor que cero';\n"
                   '    END IF;\n'
                   '\n'
                   '    SELECT * INTO v_cliente FROM clientes WHERE id = p_client_id;\n'
                   '    IF NOT FOUND THEN\n'
                   "        RAISE EXCEPTION 'No existe ese cliente';\n"
                   '    END IF;\n'
                   '\n'
                   '    v_nombre      := v_cliente.nombre;\n'
                   '    -- NULL cuenta como "sí factura": es el valor de los clientes viejos, y\n'
                   '    -- dejarlos afuera de la cola del SRI sería peor que meterlos de más.\n'
                   '    v_electronica := COALESCE(p_facturar, v_cliente.factura_electronica, TRUE);\n'
                   '    v_resta       := ROUND(p_monto, 2);\n'
                   '\n'
                   '    FOR v_factura IN\n'
                   '        SELECT f.id, f.numero, f.total, f.document_id, f.tipo\n'
                   '          FROM facturas f\n'
                   '         WHERE f.client_id = p_client_id\n'
                   '           AND NOT f.anulada\n'
                   '           -- La elegida entra siempre: es la que el cobrador quiso cobrar.\n'
                   "           AND (NOT p_solo_servicio OR f.tipo = 'servicios' OR f.id = p_factura_id)\n"
                   '         ORDER BY\n'
                   '             -- La que el cobrador tenía abierta va primero.\n'
                   '             (f.id = p_factura_id) DESC,\n'
                   '             f.fecha_emision,\n'
                   '             f.numero\n'
                   '    LOOP\n'
                   '        EXIT WHEN v_resta <= 0.005;\n'
                   '\n'
                   '        v_saldo := v_factura.total - COALESCE((\n'
                   '            SELECT SUM(monto) FROM pagos\n'
                   '             WHERE factura_id = v_factura.id AND NOT anulado\n'
                   '        ), 0);\n'
                   '\n'
                   '        CONTINUE WHEN v_saldo <= 0.005;\n'
                   '\n'
                   '        v_usa := ROUND(LEAST(v_resta, v_saldo), 2);\n'
                   '\n'
                   '        -- Si este cobro termina de pagar la factura. Es la condición para\n'
                   '        -- emitir: mientras deba, el comprobante no sale.\n'
                   '        v_cierra := v_usa >= v_saldo - 0.005;\n'
                   '\n'
                   '        INSERT INTO pagos (\n'
                   '            client_id, cliente_nombre, factura_id, document_id, cuenta_id,\n'
                   '            monto, comision, forma_pago, n_transaccion, fecha_pago, notas,\n'
                   '            facturar, activo_servicio, es_excedente, es_reparto, pago_origen_id, '
                   'created_by\n'
                   '        )\n'
                   '        VALUES (\n'
                   '            p_client_id, v_nombre, v_factura.id, v_factura.document_id, p_cuenta_id,\n'
                   '            v_usa,\n'
                   '            -- La comisión del medio de pago es una sola: va en la fila principal.\n'
                   '            CASE WHEN v_principal IS NULL THEN COALESCE(p_comision, 0) ELSE 0 END,\n'
                   '            p_forma_pago,\n'
                   '            -- El número del banco identifica la transferencia, no cada imputación:\n'
                   '            -- repetirlo en las hijas chocaría contra el índice único.\n'
                   '            CASE WHEN v_principal IS NULL THEN NULLIF(TRIM(COALESCE(p_n_transaccion, '
                   "'')), '') END,\n"
                   '            p_fecha_pago,\n'
                   '            CASE\n'
                   '                WHEN v_principal IS NULL THEN p_notas\n'
                   "                ELSE 'Parte del cobro N° ' || v_numero || ' aplicada a esta factura'\n"
                   '            END,\n'
                   '            -- Solo el cobro que cancela la factura entra a la cola del SRI, y\n'
                   '            -- se emite por el total de la factura, no por este abono.\n'
                   '            v_electronica AND v_factura.document_id IS NULL AND v_cierra,\n'
                   '            -- La reactivación se pide una vez, no una por factura.\n'
                   '            p_activo_servicio AND v_principal IS NULL,\n'
                   '            v_principal IS NOT NULL,\n'
                   '            v_principal IS NOT NULL,\n'
                   '            v_principal,\n'
                   '            p_created_by\n'
                   '        )\n'
                   '        RETURNING id INTO v_pago_id;\n'
                   '\n'
                   '        IF v_principal IS NULL THEN\n'
                   '            v_principal := v_pago_id;\n'
                   '            SELECT numero INTO v_numero FROM pagos WHERE id = v_pago_id;\n'
                   '        END IF;\n'
                   '\n'
                   '        -- Los abonos anteriores de esta factura ya no se facturan por separado:\n'
                   '        -- el comprobante que sale ahora cubre el total.\n'
                   '        IF v_cierra THEN\n'
                   '            UPDATE pagos\n'
                   '               SET facturar = FALSE\n'
                   '             WHERE factura_id = v_factura.id\n'
                   '               AND id <> v_pago_id\n'
                   '               AND facturar\n'
                   '               AND document_id IS NULL;\n'
                   '        END IF;\n'
                   '\n'
                   '        v_aplicado := v_aplicado + v_usa;\n'
                   '        v_resta    := ROUND(v_resta - v_usa, 2);\n'
                   '\n'
                   '        v_detalle := v_detalle || JSONB_BUILD_OBJECT(\n'
                   "            'factura_id', v_factura.id,\n"
                   "            'numero',     LPAD(v_factura.numero::TEXT, 8, '0'),\n"
                   "            'tipo',       v_factura.tipo,\n"
                   "            'monto',      v_usa\n"
                   '        );\n'
                   '    END LOOP;\n'
                   '\n'
                   '    -- Lo que sobró después de saldar todo. Entra a la misma cuenta: es plata que\n'
                   '    -- el abonado entregó, no una promesa.\n'
                   '    IF v_resta > 0.005 THEN\n'
                   '        v_excedente := v_resta;\n'
                   '\n'
                   '        INSERT INTO pagos (\n'
                   '            client_id, cliente_nombre, cuenta_id, monto, comision, forma_pago,\n'
                   '            n_transaccion, fecha_pago, notas, activo_servicio, es_excedente,\n'
                   '            pago_origen_id, created_by\n'
                   '        )\n'
                   '        VALUES (\n'
                   '            p_client_id, v_nombre, p_cuenta_id, v_resta, 0, p_forma_pago,\n'
                   '            CASE WHEN v_principal IS NULL\n'
                   "                 THEN NULLIF(TRIM(COALESCE(p_n_transaccion, '')), '') END,\n"
                   '            p_fecha_pago,\n'
                   '            CASE\n'
                   "                WHEN v_principal IS NULL THEN COALESCE(p_notas, 'Cobro sin facturas "
                   "pendientes: queda a favor del cliente')\n"
                   "                ELSE 'Excedente del cobro N° ' || v_numero || ': queda a favor del "
                   "cliente'\n"
                   '            END,\n'
                   '            p_activo_servicio AND v_principal IS NULL,\n'
                   '            -- Sin facturas que saldar no hay de qué ser excedente: es el cobro.\n'
                   '            v_principal IS NOT NULL,\n'
                   '            v_principal,\n'
                   '            p_created_by\n'
                   '        )\n'
                   '        RETURNING id INTO v_pago_id;\n'
                   '\n'
                   '        IF v_principal IS NULL THEN\n'
                   '            v_principal := v_pago_id;\n'
                   '            SELECT numero INTO v_numero FROM pagos WHERE id = v_pago_id;\n'
                   '        END IF;\n'
                   '    END IF;\n'
                   '\n'
                   '    RETURN JSONB_BUILD_OBJECT(\n'
                   "        'pago_id',   v_principal,\n"
                   "        'numero',    v_numero,\n"
                   "        'recibo',    LPAD(COALESCE(v_numero, 0)::TEXT, 6, '0'),\n"
                   "        'cobrado',   ROUND(p_monto, 2),\n"
                   "        'aplicado',  v_aplicado,\n"
                   "        'excedente', v_excedente,\n"
                   "        'facturas',  v_detalle\n"
                   '    );\n'
                   'END;\n'),
 'aplicar_movimiento_inventario': ('',
                                   'TRIGGER',
                                   'plpgsql',
                                   '\n'
                                   'DECLARE\n'
                                   '    v_origen  NUMERIC := 0;\n'
                                   '    v_destino NUMERIC := 0;\n'
                                   '    v_tipo_destino TEXT;\n'
                                   'BEGIN\n'
                                   '    -- Cuánto sale y cuánto entra, según el tipo.\n'
                                   "    IF NEW.tipo IN ('salida', 'consumo') THEN\n"
                                   '        v_origen := NEW.cantidad;\n'
                                   "    ELSIF NEW.tipo IN ('ingreso', 'devolucion') THEN\n"
                                   '        v_destino := NEW.cantidad;\n'
                                   "    ELSIF NEW.tipo = 'transferencia' THEN\n"
                                   '        v_origen  := NEW.cantidad;\n'
                                   '        v_destino := NEW.cantidad;\n'
                                   "    ELSIF NEW.tipo = 'ajuste' THEN\n"
                                   '        -- El ajuste lleva signo: positivo suma, negativo descuenta.\n'
                                   '        v_destino := NEW.cantidad;\n'
                                   '    END IF;\n'
                                   '\n'
                                   '    IF v_origen <> 0 AND NEW.almacen_origen_id IS NOT NULL THEN\n'
                                   '        INSERT INTO existencias (articulo_id, almacen_id, cantidad)\n'
                                   '        VALUES (NEW.articulo_id, NEW.almacen_origen_id, -v_origen)\n'
                                   '        ON CONFLICT (articulo_id, almacen_id)\n'
                                   '        DO UPDATE SET cantidad = existencias.cantidad - v_origen;\n'
                                   '    END IF;\n'
                                   '\n'
                                   '    IF v_destino <> 0 AND NEW.almacen_destino_id IS NOT NULL THEN\n'
                                   '        INSERT INTO existencias (articulo_id, almacen_id, cantidad)\n'
                                   '        VALUES (NEW.articulo_id, NEW.almacen_destino_id, v_destino)\n'
                                   '        ON CONFLICT (articulo_id, almacen_id)\n'
                                   '        DO UPDATE SET cantidad = existencias.cantidad + v_destino;\n'
                                   '    END IF;\n'
                                   '\n'
                                   '    -- El equipo con serie se mueve con su movimiento. Dejarlo a cargo '
                                   'de la\n'
                                   '    -- aplicación permitiría que el stock diga que la ONT está en el '
                                   'almacén de\n'
                                   '    -- Juan y la ficha del equipo siga diciendo "bodega central".\n'
                                   '    IF NEW.equipo_id IS NOT NULL THEN\n'
                                   '        SELECT tipo INTO v_tipo_destino FROM almacenes WHERE id = '
                                   'NEW.almacen_destino_id;\n'
                                   '\n'
                                   '        UPDATE equipos\n'
                                   '           SET almacen_id     = CASE\n'
                                   "                                  WHEN NEW.tipo = 'consumo' THEN NULL\n"
                                   '                                  ELSE COALESCE(NEW.almacen_destino_id, '
                                   'almacen_id)\n'
                                   '                                END,\n'
                                   '               estado         = CASE\n'
                                   "                                  WHEN NEW.tipo = 'consumo'    THEN "
                                   "'instalado'\n"
                                   "                                  WHEN NEW.tipo = 'devolucion' THEN "
                                   "'en_stock'\n"
                                   '                                  -- Acá está el arreglo: manda el '
                                   'destino.\n'
                                   "                                  WHEN NEW.tipo = 'transferencia' THEN\n"
                                   '                                       CASE WHEN v_tipo_destino IN '
                                   "('tecnico', 'vehiculo')\n"
                                   "                                            THEN 'asignado' ELSE "
                                   "'en_stock' END\n"
                                   '                                  ELSE estado\n'
                                   '                                END,\n'
                                   '               instalacion_id = COALESCE(NEW.instalacion_id, '
                                   'instalacion_id),\n'
                                   '               actualizado_en = NOW()\n'
                                   '         WHERE id = NEW.equipo_id;\n'
                                   '    END IF;\n'
                                   '\n'
                                   '    RETURN NEW;\n'
                                   'END '),
 'aplicar_promo_al_cliente': ('',
                              'TRIGGER',
                              'plpgsql',
                              '\n'
                              'DECLARE\n'
                              '    v_promo   RECORD;\n'
                              '    v_precio  NUMERIC;\n'
                              '    v_pct     NUMERIC;\n'
                              '    v_meses   INT;\n'
                              'BEGIN\n'
                              '    IF NEW.client_id IS NULL OR OLD.client_id IS NOT NULL THEN\n'
                              '        RETURN NEW;\n'
                              '    END IF;\n'
                              '\n'
                              '    SELECT pr.* INTO v_promo\n'
                              '      FROM prospectos p\n'
                              '      JOIN promociones pr ON pr.id = p.promocion_id\n'
                              '     WHERE p.instalacion_id = NEW.id\n'
                              '     LIMIT 1;\n'
                              '\n'
                              '    IF NOT FOUND THEN RETURN NEW; END IF;\n'
                              '\n'
                              '    -- El precio de referencia es el TOTAL con IVA, que es sobre lo que se '
                              'cotizó.\n'
                              '    SELECT precio_total INTO v_precio FROM v_planes WHERE id = NEW.plan_id;\n'
                              '\n'
                              "    IF v_promo.tipo = 'porcentaje' THEN\n"
                              '        v_pct := v_promo.valor;\n'
                              '        v_meses := v_promo.meses_aplica;\n'
                              '\n'
                              "    ELSIF v_promo.tipo = 'meses_gratis' THEN\n"
                              '        v_pct := 100;\n'
                              '        v_meses := v_promo.valor::INT;\n'
                              '\n'
                              "    ELSIF v_promo.tipo = 'precio_fijo' AND COALESCE(v_precio, 0) > 0 THEN\n"
                              '        -- Cuánto hay que descontar para que quede en el precio prometido.\n'
                              '        v_pct := ROUND(GREATEST(0, (1 - v_promo.valor / v_precio) * 100), '
                              '2);\n'
                              '        v_meses := v_promo.meses_aplica;\n'
                              '\n'
                              '    ELSE\n'
                              '        -- `instalacion_gratis` y cualquier caso sin precio de referencia: no '
                              'hay\n'
                              '        -- nada que descontar de la mensualidad.\n'
                              '        RETURN NEW;\n'
                              '    END IF;\n'
                              '\n'
                              '    UPDATE clientes\n'
                              '       SET promo_porcentaje = v_pct,\n'
                              '           promo_meses      = v_meses,\n'
                              '           -- Desde la activación, no desde la venta: el cliente empieza a '
                              'pagar\n'
                              '           -- cuando tiene el servicio.\n'
                              '           promo_desde      = COALESCE(activado_en::DATE, CURRENT_DATE)\n'
                              '     WHERE id = NEW.client_id;\n'
                              '\n'
                              '    RETURN NEW;\n'
                              'END '),
 'aplicar_saldo_a_favor': ('p_factura_id UUID',
                           'NUMERIC',
                           'plpgsql',
                           '\n'
                           'DECLARE\n'
                           '    v_factura   facturas%ROWTYPE;\n'
                           '    v_pendiente NUMERIC;\n'
                           '    v_aplicado  NUMERIC := 0;\n'
                           '    v_pago      pagos%ROWTYPE;\n'
                           '    v_usa       NUMERIC;\n'
                           'BEGIN\n'
                           '    SELECT * INTO v_factura FROM facturas WHERE id = p_factura_id;\n'
                           '    IF NOT FOUND OR v_factura.anulada THEN\n'
                           '        RETURN 0;\n'
                           '    END IF;\n'
                           '\n'
                           '    v_pendiente := v_factura.total - COALESCE((\n'
                           '        SELECT SUM(monto) FROM pagos\n'
                           '         WHERE factura_id = p_factura_id AND NOT anulado\n'
                           '    ), 0);\n'
                           '\n'
                           '    FOR v_pago IN\n'
                           '        SELECT * FROM pagos\n'
                           '         WHERE client_id = v_factura.client_id\n'
                           '           AND factura_id IS NULL\n'
                           '           AND NOT anulado\n'
                           '         ORDER BY fecha_pago, created_at\n'
                           '    LOOP\n'
                           '        EXIT WHEN v_pendiente <= 0.005;\n'
                           '\n'
                           '        v_usa := LEAST(v_pago.monto, v_pendiente);\n'
                           '\n'
                           '        IF v_usa >= v_pago.monto - 0.005 THEN\n'
                           '            UPDATE pagos SET factura_id = p_factura_id WHERE id = v_pago.id;\n'
                           '        ELSE\n'
                           '            UPDATE pagos SET monto = v_usa, factura_id = p_factura_id WHERE id = '
                           'v_pago.id;\n'
                           '\n'
                           '            INSERT INTO pagos (\n'
                           '                client_id, cliente_nombre, cuenta_id, monto, comision, '
                           'forma_pago,\n'
                           '                fecha_pago, notas, es_excedente, pago_origen_id\n'
                           '            )\n'
                           '            VALUES (\n'
                           '                v_pago.client_id, v_pago.cliente_nombre, v_pago.cuenta_id,\n'
                           '                v_pago.monto - v_usa, 0, v_pago.forma_pago, v_pago.fecha_pago,\n'
                           "                'Excedente del cobro N° ' || v_pago.numero || ': queda a favor "
                           "del cliente',\n"
                           '                TRUE,\n'
                           '                -- El excedente que sobra de partir un excedente sigue '
                           'apuntando\n'
                           '                -- al cobro original, no a la parte intermedia.\n'
                           '                COALESCE(v_pago.pago_origen_id, v_pago.id)\n'
                           '            );\n'
                           '        END IF;\n'
                           '\n'
                           '        v_aplicado  := v_aplicado + v_usa;\n'
                           '        v_pendiente := v_pendiente - v_usa;\n'
                           '    END LOOP;\n'
                           '\n'
                           '    RETURN v_aplicado;\n'
                           'END;\n'),
 'archivar_prospecto_de_instalacion': ('',
                                       'TRIGGER',
                                       'plpgsql',
                                       '\n'
                                       'BEGIN\n'
                                       "    IF NEW.estado = 'hecha' AND NEW.client_id IS NOT NULL\n"
                                       '       AND (SELECT archivar_prospectos FROM config_cartera WHERE id '
                                       '= 1) THEN\n'
                                       '        UPDATE prospectos\n'
                                       '           SET archivado_en = COALESCE(archivado_en, NOW()),\n'
                                       '               cliente_id   = COALESCE(cliente_id, NEW.client_id)\n'
                                       '         WHERE instalacion_id = NEW.id\n'
                                       '           AND archivado_en IS NULL;\n'
                                       '    END IF;\n'
                                       '    RETURN NEW;\n'
                                       'END '),
 'asignar_cobranza': ('p_cliente UUID, p_vendedor UUID, p_dias INT DEFAULT 30, p_motivo TEXT DEFAULT NULL',
                      'UUID',
                      'plpgsql',
                      '\n'
                      'DECLARE v_id UUID;\n'
                      'BEGIN\n'
                      '    IF NOT cartera_completa() THEN\n'
                      "        RAISE EXCEPTION 'Solo un administrador puede asignar una cobranza a mano';\n"
                      '    END IF;\n'
                      '\n'
                      '    INSERT INTO cobranza_asignaciones\n'
                      '        (cliente_id, vendedor_id, vence_el, saldo_inicial, motivo, asignado_por)\n'
                      '    SELECT p_cliente, p_vendedor, CURRENT_DATE + p_dias,\n'
                      '           (SELECT saldo FROM v_clientes_ficha WHERE id = p_cliente),\n'
                      "           COALESCE(p_motivo, 'Asignación manual'), mi_legajo_id()\n"
                      '    RETURNING id INTO v_id;\n'
                      '\n'
                      '    RETURN v_id;\n'
                      'END '),
 'asignar_reparacion': ('p_incidencia UUID DEFAULT NULL, p_alerta UUID DEFAULT NULL, p_cuadrilla UUID '
                        'DEFAULT NULL, p_tecnico UUID DEFAULT NULL, p_titulo TEXT DEFAULT NULL, '
                        "p_instrucciones TEXT DEFAULT NULL, p_prioridad TEXT DEFAULT 'alta'",
                        'UUID',
                        'plpgsql',
                        '\n'
                        'DECLARE\n'
                        '    v_id     UUID;\n'
                        "    v_tipo   TEXT := 'averia';\n"
                        "    v_titulo TEXT := NULLIF(BTRIM(p_titulo), '');\n"
                        '    v_lugar  TEXT;\n'
                        '    v_afect  INT;\n'
                        '    v_quien  TEXT;\n'
                        '    v_previo reparaciones_red%ROWTYPE;\n'
                        '    u        RECORD;\n'
                        'BEGIN\n'
                        '    IF NOT dirige_cuadrillas() THEN\n'
                        "        RAISE EXCEPTION 'Solo administración o un jefe técnico asigna "
                        "reparaciones.' USING ERRCODE = '42501';\n"
                        '    END IF;\n'
                        '    IF p_cuadrilla IS NULL AND p_tecnico IS NULL THEN\n'
                        "        RAISE EXCEPTION 'Elige la cuadrilla (o el técnico) que va a reparar.';\n"
                        '    END IF;\n'
                        "    IF COALESCE(p_prioridad, 'alta') NOT IN ('alta', 'media', 'baja') THEN\n"
                        "        RAISE EXCEPTION 'Prioridad desconocida: %', p_prioridad;\n"
                        '    END IF;\n'
                        '\n'
                        '    -- Lo que se copia del origen.\n'
                        '    IF p_incidencia IS NOT NULL THEN\n'
                        '        SELECT i.tipo, i.titulo,\n'
                        "               COALESCE(i.zona, p.nombre, n.nombre, o.nombre || COALESCE(' · PON ' "
                        "|| i.puerto_pon, ''), r.nombre),\n"
                        '               i.afectados\n'
                        '          INTO v_tipo, v_titulo, v_lugar, v_afect\n'
                        '          FROM incidencias_masivas i\n'
                        '          LEFT JOIN puntos_red p       ON p.id = i.punto_id\n'
                        '          LEFT JOIN nodos_red n        ON n.id = i.nodo_id\n'
                        '          LEFT JOIN olts o             ON o.id = i.olt_id\n'
                        '          LEFT JOIN routers_mikrotik r ON r.id = i.router_id\n'
                        '         WHERE i.id = p_incidencia;\n'
                        "        IF NOT FOUND THEN RAISE EXCEPTION 'No existe ese corte masivo.'; END IF;\n"
                        "        v_titulo := COALESCE(NULLIF(BTRIM(p_titulo), ''), v_titulo);\n"
                        '        SELECT * INTO v_previo FROM reparaciones_red\n'
                        "         WHERE incidencia_id = p_incidencia AND estado IN ('asignada', "
                        "'en_curso');\n"
                        '\n'
                        '    ELSIF p_alerta IS NOT NULL THEN\n'
                        "        SELECT CASE e.regla WHEN 'degradacion' THEN 'nap_degradada' ELSE e.regla "
                        'END,\n'
                        '               CASE e.regla\n'
                        "                    WHEN 'corte_grupo' THEN 'Posible daño de fibra: ' || "
                        "COALESCE(e.etiqueta, 'grupo') || ' sin señal'\n"
                        "                    WHEN 'degradacion' THEN COALESCE(e.etiqueta, 'Caja NAP') || ': "
                        "revisar la caja (potencia degradándose)'\n"
                        '                    ELSE COALESCE(e.etiqueta, e.regla) END,\n'
                        "               COALESCE(e.zona, e.detalle->>'direccion'),\n"
                        '               e.abonados\n'
                        '          INTO v_tipo, v_titulo, v_lugar, v_afect\n'
                        '          FROM alerta_eventos e\n'
                        '         WHERE e.id = p_alerta;\n'
                        "        IF NOT FOUND THEN RAISE EXCEPTION 'No existe esa alerta.'; END IF;\n"
                        "        v_titulo := COALESCE(NULLIF(BTRIM(p_titulo), ''), v_titulo);\n"
                        '        SELECT * INTO v_previo FROM reparaciones_red\n'
                        "         WHERE alerta_id = p_alerta AND estado IN ('asignada', 'en_curso');\n"
                        '    END IF;\n'
                        '\n'
                        '    IF v_titulo IS NULL THEN\n'
                        "        RAISE EXCEPTION 'Escribe qué hay que reparar.';\n"
                        '    END IF;\n'
                        '\n'
                        '    SELECT COALESCE((SELECT nombre FROM cuadrillas WHERE id = p_cuadrilla),\n'
                        '                    (SELECT nombre FROM tecnicos WHERE id = p_tecnico))\n'
                        '      INTO v_quien;\n'
                        '\n'
                        '    IF v_previo.id IS NOT NULL THEN\n'
                        '        UPDATE reparaciones_red\n'
                        '           SET cuadrilla_id  = p_cuadrilla,\n'
                        '               tecnico_id    = p_tecnico,\n'
                        '               prioridad     = COALESCE(p_prioridad, prioridad),\n'
                        "               instrucciones = COALESCE(NULLIF(BTRIM(p_instrucciones), ''), "
                        'instrucciones),\n'
                        '               titulo        = v_titulo\n'
                        '         WHERE id = v_previo.id;\n'
                        '        v_id := v_previo.id;\n'
                        '    ELSE\n'
                        '        INSERT INTO reparaciones_red\n'
                        '            (incidencia_id, alerta_id, tipo, titulo, lugar, afectados, '
                        'instrucciones,\n'
                        '             prioridad, cuadrilla_id, tecnico_id, asignada_por)\n'
                        '        VALUES\n'
                        '            (p_incidencia, CASE WHEN p_incidencia IS NULL THEN p_alerta END, '
                        'v_tipo,\n'
                        '             LEFT(v_titulo, 150), LEFT(v_lugar, 150), v_afect, '
                        "NULLIF(BTRIM(p_instrucciones), ''),\n"
                        "             COALESCE(p_prioridad, 'alta'), p_cuadrilla, p_tecnico, "
                        'mi_usuario_id())\n'
                        '        RETURNING id INTO v_id;\n'
                        '    END IF;\n'
                        '\n'
                        '    INSERT INTO reparacion_reportes (reparacion_id, tipo, texto, usuario_id)\n'
                        "    VALUES (v_id, 'asignada',\n"
                        "            CASE WHEN v_previo.id IS NOT NULL THEN 'Reasignada a ' ELSE 'Asignada a "
                        "' END || COALESCE(v_quien, '—'),\n"
                        '            mi_usuario_id());\n'
                        '\n'
                        '    -- La campana de cada uno de los que van.\n'
                        '    FOR u IN\n'
                        '        SELECT DISTINCT us.id\n'
                        '          FROM usuarios_sistema us\n'
                        '         WHERE us.activo AND us.tecnico_id IS NOT NULL\n'
                        '           AND (us.tecnico_id = p_tecnico\n'
                        '                OR us.tecnico_id IN (SELECT tecnico_id FROM cuadrilla_miembros '
                        'WHERE cuadrilla_id = p_cuadrilla))\n'
                        '    LOOP\n'
                        '        PERFORM notificar(\n'
                        "            u.id, 'reparacion_red',\n"
                        "            'Reparación asignada: ' || LEFT(v_titulo, 80),\n"
                        "            COALESCE(v_lugar || '. ', '') || "
                        "COALESCE(NULLIF(BTRIM(p_instrucciones), ''), 'Revísala en Estado de la red.'),\n"
                        "            '/campo/red', 'reparacion', v_id::text);\n"
                        '    END LOOP;\n'
                        '\n'
                        '    RETURN v_id;\n'
                        'END;\n'),
 'asignar_retiro_a': ('p_retiro UUID, p_usuario UUID',
                      'retiros_equipo',
                      'plpgsql',
                      '\n'
                      'DECLARE\n'
                      '    v_fila    retiros_equipo%ROWTYPE;\n'
                      '    v_tecnico UUID;\n'
                      '    v_quien   TEXT;\n'
                      'BEGIN\n'
                      '    IF NOT puede_gestionar_retiros() THEN\n'
                      "        RAISE EXCEPTION 'No tienes permiso para asignar retiros de equipo';\n"
                      '    END IF;\n'
                      '\n'
                      "    SELECT u.tecnico_id, TRIM(CONCAT(u.nombre, ' ', COALESCE(u.apellido, '')))\n"
                      '      INTO v_tecnico, v_quien\n'
                      '      FROM usuarios_sistema u WHERE u.id = p_usuario AND u.activo;\n'
                      '\n'
                      '    IF NOT FOUND THEN\n'
                      "        RAISE EXCEPTION 'Esa persona no existe o está dada de baja';\n"
                      '    END IF;\n'
                      '\n'
                      '    UPDATE retiros_equipo\n'
                      '       SET responsable_id = p_usuario,\n'
                      '           tecnico_id     = COALESCE(v_tecnico, tecnico_id),\n'
                      "           estado         = CASE WHEN estado = 'pendiente' THEN 'asignado' ELSE "
                      'estado END,\n'
                      '           asignado_en    = NOW()\n'
                      '     WHERE id = p_retiro\n'
                      "       AND estado IN ('pendiente', 'asignado')\n"
                      '    RETURNING * INTO v_fila;\n'
                      '\n'
                      '    IF NOT FOUND THEN\n'
                      "        RAISE EXCEPTION 'Esa orden de retiro no existe o ya está cerrada';\n"
                      '    END IF;\n'
                      '\n'
                      '    PERFORM notificar(\n'
                      '        p_usuario,\n'
                      "        'retiro_asignado',\n"
                      "        'Tienes un equipo por retirar',\n"
                      '        (SELECT c.nombre FROM clientes c WHERE c.id = v_fila.cliente_id)\n'
                      "            || COALESCE(' — ' || v_fila.serie, ''),\n"
                      "        '/campo/retiros',\n"
                      "        'retiro',\n"
                      '        v_fila.id::TEXT\n'
                      '    );\n'
                      '\n'
                      '    RETURN v_fila;\n'
                      'END '),
 'asignar_retiro_equipo': ('p_retiro UUID, p_tecnico UUID',
                           'retiros_equipo',
                           'plpgsql',
                           '\n'
                           'DECLARE v_fila retiros_equipo%ROWTYPE;\n'
                           'BEGIN\n'
                           '    IF NOT puede_gestionar_retiros() THEN\n'
                           "        RAISE EXCEPTION 'No tienes permiso para asignar retiros de equipo';\n"
                           '    END IF;\n'
                           '\n'
                           '    UPDATE retiros_equipo\n'
                           '       SET tecnico_id = p_tecnico,\n'
                           "           estado = CASE WHEN estado = 'pendiente' THEN 'asignado' ELSE estado "
                           'END,\n'
                           '           asignado_en = NOW()\n'
                           '     WHERE id = p_retiro\n'
                           "       AND estado IN ('pendiente', 'asignado')\n"
                           '    RETURNING * INTO v_fila;\n'
                           '\n'
                           '    IF NOT FOUND THEN\n'
                           "        RAISE EXCEPTION 'Esa orden de retiro no existe o ya está cerrada';\n"
                           '    END IF;\n'
                           '\n'
                           '    RETURN v_fila;\n'
                           'END '),
 'asignar_retiros_equipo': ('p_retiros UUID[], p_usuario UUID',
                            'TABLE (asignadas INT, salteadas INT)',
                            'plpgsql',
                            '\n'
                            'DECLARE\n'
                            '    v_id  UUID;\n'
                            '    v_ok  INT := 0;\n'
                            '    v_no  INT := 0;\n'
                            'BEGIN\n'
                            '    IF NOT puede_gestionar_retiros() THEN\n'
                            "        RAISE EXCEPTION 'No tienes permiso para asignar retiros de equipo';\n"
                            '    END IF;\n'
                            '\n'
                            "    FOREACH v_id IN ARRAY COALESCE(p_retiros, '{}')\n"
                            '    LOOP\n'
                            '        BEGIN\n'
                            '            PERFORM asignar_retiro_a(v_id, p_usuario);\n'
                            '            v_ok := v_ok + 1;\n'
                            '        EXCEPTION WHEN OTHERS THEN\n'
                            '            v_no := v_no + 1;\n'
                            '        END;\n'
                            '    END LOOP;\n'
                            '\n'
                            '    RETURN QUERY SELECT v_ok, v_no;\n'
                            'END '),
 'audit_actor': ('',
                 'TABLE (id UUID, email TEXT, ip TEXT)',
                 'plpgsql',
                 '\n'
                 'BEGIN\n'
                 '    RETURN QUERY SELECT\n'
                 "        NULLIF(current_setting('request.jwt.claims', TRUE)::JSONB ->> 'sub', '')::UUID,\n"
                 "        current_setting('request.jwt.claims', TRUE)::JSONB ->> 'email',\n"
                 '        SPLIT_PART(\n'
                 "            COALESCE(current_setting('request.headers', TRUE)::JSONB ->> "
                 "'x-forwarded-for', ''),\n"
                 "            ',', 1\n"
                 '        );\n'
                 'EXCEPTION WHEN OTHERS THEN\n'
                 '    -- Fuera de PostgREST esos ajustes no existen. No es un error: es un cambio\n'
                 '    -- hecho por un proceso interno.\n'
                 '    RETURN QUERY SELECT NULL::UUID, NULL::TEXT, NULL::TEXT;\n'
                 'END '),
 'audit_cambios': ('',
                   'TRIGGER',
                   'plpgsql',
                   '\n'
                   'DECLARE\n'
                   "    v_antes   JSONB := '{}'::JSONB;\n"
                   "    v_despues JSONB := '{}'::JSONB;\n"
                   '    v_actor   RECORD;\n'
                   '    v_cliente UUID;\n'
                   '    v_id      UUID;\n'
                   '    v_accion  TEXT;\n'
                   '    v_campos  TEXT[] := COALESCE(TG_ARGV, ARRAY[]::TEXT[]);\n'
                   '    k         TEXT;\n'
                   'BEGIN\n'
                   '    SELECT * INTO v_actor FROM audit_actor() LIMIT 1;\n'
                   '\n'
                   "    IF TG_OP = 'DELETE' THEN\n"
                   "        v_accion  := 'eliminar';\n"
                   '        v_antes   := to_jsonb(OLD);\n'
                   '        v_id      := OLD.id;\n'
                   "    ELSIF TG_OP = 'INSERT' THEN\n"
                   "        v_accion  := 'crear';\n"
                   '        v_despues := to_jsonb(NEW);\n'
                   '        v_id      := NEW.id;\n'
                   '    ELSE\n'
                   "        v_accion := 'modificar';\n"
                   '        v_id     := NEW.id;\n'
                   '\n'
                   '        -- Solo los campos que cambiaron. Si se declararon campos en el\n'
                   '        -- disparador, únicamente esos: en `clientes` interesan la IP, el plan y\n'
                   '        -- el estado, no que se haya tocado `updated_at`.\n'
                   '        FOR k IN SELECT jsonb_object_keys(to_jsonb(NEW))\n'
                   '        LOOP\n'
                   "            CONTINUE WHEN k IN ('updated_at', 'created_at');\n"
                   '            CONTINUE WHEN CARDINALITY(v_campos) > 0 AND NOT (k = ANY(v_campos));\n'
                   '            IF to_jsonb(NEW) -> k IS DISTINCT FROM to_jsonb(OLD) -> k THEN\n'
                   '                v_antes   := v_antes   || jsonb_build_object(k, to_jsonb(OLD) -> k);\n'
                   '                v_despues := v_despues || jsonb_build_object(k, to_jsonb(NEW) -> k);\n'
                   '            END IF;\n'
                   '        END LOOP;\n'
                   '\n'
                   '        -- Nada que registrar: un UPDATE que no cambió ninguno de los campos\n'
                   '        -- vigilados solo ensuciaría la bitácora.\n'
                   "        IF v_despues = '{}'::JSONB THEN\n"
                   '            RETURN NULL;\n'
                   '        END IF;\n'
                   '    END IF;\n'
                   '\n'
                   '    -- De qué abonado es. Las tablas que no lo tienen quedan sin cliente.\n'
                   '    BEGIN\n'
                   '        v_cliente := COALESCE(\n'
                   "            (to_jsonb(COALESCE(NEW, OLD)) ->> 'client_id')::UUID,\n"
                   "            CASE WHEN TG_TABLE_NAME = 'clientes' THEN v_id END\n"
                   '        );\n'
                   '    EXCEPTION WHEN OTHERS THEN\n'
                   '        v_cliente := NULL;\n'
                   '    END;\n'
                   '\n'
                   '    INSERT INTO audit_logs (\n'
                   '        categoria, accion, entidad, entidad_id, client_id,\n'
                   '        antes, despues, actor_id, actor_email, ip_origen\n'
                   '    )\n'
                   '    VALUES (\n'
                   '        TG_TABLE_NAME, v_accion, TG_TABLE_NAME, v_id, v_cliente,\n'
                   "        NULLIF(v_antes, '{}'::JSONB), NULLIF(v_despues, '{}'::JSONB),\n"
                   "        v_actor.id, v_actor.email, NULLIF(v_actor.ip, '')\n"
                   '    );\n'
                   '\n'
                   '    RETURN NULL;\n'
                   'END '),
 'auditar_cambio_comisiones': ('',
                               'TRIGGER',
                               'plpgsql',
                               '\n'
                               'DECLARE\n'
                               '    v_legajo  UUID := mi_legajo_id();\n'
                               '    v_antes   JSONB;\n'
                               '    v_despues JSONB;\n'
                               '    v_campos  JSONB;\n'
                               '    v_id      TEXT;\n'
                               'BEGIN\n'
                               "    v_antes   := CASE WHEN TG_OP <> 'INSERT' THEN to_jsonb(OLD) END;\n"
                               "    v_despues := CASE WHEN TG_OP <> 'DELETE' THEN to_jsonb(NEW) END;\n"
                               '\n'
                               "    IF TG_OP = 'UPDATE' THEN\n"
                               '        -- Solo los campos distintos. `actualizado_en` se ignora: cambia '
                               'siempre y\n'
                               '        -- su presencia haría que todo UPDATE parezca un cambio real.\n'
                               '        SELECT jsonb_object_agg(e.key, jsonb_build_array(v_antes -> e.key, '
                               'e.value))\n'
                               '          INTO v_campos\n'
                               '          FROM jsonb_each(v_despues) e\n'
                               '         WHERE v_antes -> e.key IS DISTINCT FROM e.value\n'
                               "           AND e.key NOT IN ('actualizado_en', 'creado_en');\n"
                               '\n'
                               '        IF v_campos IS NULL THEN\n'
                               '            RETURN NEW;  -- guardaron sin cambiar nada\n'
                               '        END IF;\n'
                               '    END IF;\n'
                               '\n'
                               '    v_id := COALESCE(\n'
                               "        v_despues ->> 'id',      v_antes ->> 'id',\n"
                               "        v_despues ->> 'esquema_id', v_antes ->> 'esquema_id'\n"
                               '    );\n'
                               '\n'
                               '    INSERT INTO auditoria_sistema (\n'
                               '        usuario_id, usuario_nombre, usuario_rol, accion, descripcion,\n'
                               '        entidad, entidad_id, datos\n'
                               '    ) VALUES (\n'
                               '        v_legajo,\n'
                               '        COALESCE(\n'
                               "            (SELECT TRIM(CONCAT(u.nombre, ' ', COALESCE(u.apellido, '')))\n"
                               '               FROM usuarios_sistema u WHERE u.id = v_legajo),\n'
                               "            'Sistema'),\n"
                               '        (SELECT u.rol FROM usuarios_sistema u WHERE u.id = v_legajo),\n'
                               "        'comisiones.regla_cambiada',\n"
                               "        FORMAT('%s en %s',\n"
                               "               CASE TG_OP WHEN 'INSERT' THEN 'Alta' WHEN 'UPDATE' THEN "
                               "'Cambio' ELSE 'Baja' END,\n"
                               '               TG_TABLE_NAME),\n'
                               '        TG_TABLE_NAME, v_id,\n'
                               '        jsonb_strip_nulls(jsonb_build_object(\n'
                               "            'operacion', TG_OP,\n"
                               "            'campos',    v_campos,\n"
                               "            'antes',     v_antes,\n"
                               "            'despues',   v_despues\n"
                               '        ))\n'
                               '    );\n'
                               '\n'
                               '    RETURN COALESCE(NEW, OLD);\n'
                               'END '),
 'avisar_bienvenida': ('',
                       'TRIGGER',
                       'plpgsql',
                       '\n'
                       'BEGIN\n'
                       '    -- Solo cuando se sella por primera vez.\n'
                       '    IF NEW.activado_en IS NULL THEN RETURN NEW; END IF;\n'
                       "    IF TG_OP = 'UPDATE' AND OLD.activado_en IS NOT NULL THEN RETURN NEW; END IF;\n"
                       '\n'
                       '    /**\n'
                       '     * Al abonado migrado no se le da la bienvenida.\n'
                       '     *\n'
                       '     * Lleva años con el servicio: decirle "bienvenido" el día que cambiamos de\n'
                       '     * sistema lo confundiría, y a quinientos a la vez sería una avalancha de\n'
                       '     * respuestas preguntando qué pasó.\n'
                       '     */\n'
                       '    IF NEW.sistema_origen IS NOT NULL THEN RETURN NEW; END IF;\n'
                       '\n'
                       '    INSERT INTO avisos_pendientes (cliente_id, tipo, referencia_id)\n'
                       "    VALUES (NEW.id, 'bienvenida', NEW.id)\n"
                       '    ON CONFLICT DO NOTHING;\n'
                       '\n'
                       '    RETURN NEW;\n'
                       'END '),
 'avisar_del_ticket': ('',
                       'TRIGGER',
                       'plpgsql',
                       '\n'
                       'BEGIN\n'
                       '    -- Un reporte de alguien que todavía no es abonado no tiene a dónde avisarle\n'
                       '    -- por los canales de la ficha.\n'
                       '    IF NEW.client_id IS NULL THEN RETURN NEW; END IF;\n'
                       '\n'
                       "    IF TG_OP = 'INSERT' THEN\n"
                       '        INSERT INTO avisos_pendientes (cliente_id, tipo, referencia_id)\n'
                       "        VALUES (NEW.client_id, 'ticket_abierto', NEW.id)\n"
                       '        ON CONFLICT DO NOTHING;\n'
                       '        RETURN NEW;\n'
                       '    END IF;\n'
                       '\n'
                       '    -- Recién cuando se le pone técnico. Reasignarlo a otro también avisa: para\n'
                       '    -- el abonado cambió quién lo va a visitar.\n'
                       '    IF NEW.tecnico_id IS NOT NULL AND NEW.tecnico_id IS DISTINCT FROM OLD.tecnico_id '
                       'THEN\n'
                       '        INSERT INTO avisos_pendientes (cliente_id, tipo, referencia_id)\n'
                       "        VALUES (NEW.client_id, 'ticket_asignado', NEW.id)\n"
                       '        -- La referencia es el ticket, así que reasignar dos veces avisa una.\n'
                       '        -- Es lo correcto: al abonado le importa que alguien vaya, no cuántas\n'
                       '        -- veces lo movimos de técnico.\n'
                       '        ON CONFLICT DO NOTHING;\n'
                       '    END IF;\n'
                       '\n'
                       '    RETURN NEW;\n'
                       'END '),
 'avisar_ficha_por_cerrar': ('p_cliente UUID',
                             'VOID',
                             'plpgsql',
                             '\n'
                             'DECLARE\n'
                             '    v_cliente clientes%ROWTYPE;\n'
                             '    r RECORD;\n'
                             'BEGIN\n'
                             '    IF p_cliente IS NULL THEN RETURN; END IF;\n'
                             '\n'
                             '    SELECT * INTO v_cliente FROM clientes WHERE id = p_cliente;\n'
                             "    IF NOT FOUND OR v_cliente.estado = 'baja' THEN RETURN; END IF;\n"
                             '\n'
                             '    -- A todos los que pueden hacerlo, no a uno solo: si el aviso le llega a '
                             'la\n'
                             '    -- persona que está de vacaciones, el pendiente se queda quieto un mes.\n'
                             '    FOR r IN\n'
                             '        SELECT id FROM usuarios_sistema\n'
                             "         WHERE activo AND (permisos ? '*' OR permisos ? 'clientes.editar' OR "
                             "permisos ? 'retiros.gestionar')\n"
                             '    LOOP\n'
                             '        PERFORM notificar(\n'
                             '            r.id,\n'
                             "            'ficha_por_cerrar',\n"
                             "            'Ficha por cerrar',\n"
                             "            v_cliente.nombre || ' se quedó sin equipo y sigue como ' || "
                             'v_cliente.estado ||\n'
                             "            '. Si ya no es abonado, márcalo como retirado.',\n"
                             "            '/inventario/retiros',\n"
                             "            'cliente',\n"
                             '            p_cliente::TEXT\n'
                             '        );\n'
                             '    END LOOP;\n'
                             'END '),
 'avisar_fichas_por_cerrar': ('',
                              'TABLE (avisadas INT)',
                              'plpgsql',
                              '\n'
                              'DECLARE\n'
                              '    r RECORD;\n'
                              '    v_n INT := 0;\n'
                              'BEGIN\n'
                              '    FOR r IN\n'
                              '        SELECT DISTINCT c.id\n'
                              '          FROM retiros_equipo re\n'
                              '          JOIN clientes c ON c.id = re.cliente_id\n'
                              "         WHERE re.estado IN ('recuperado', 'no_recuperado')\n"
                              "           AND c.estado <> 'baja'\n"
                              '           -- Solo lo cerrado en los últimos 90 días: más viejo que eso ya '
                              'es\n'
                              '           -- una decisión tomada de no darlo de baja, y seguir avisando '
                              'sería\n'
                              '           -- ruido que tapa los pendientes nuevos.\n'
                              "           AND re.cerrado_en > NOW() - INTERVAL '90 days'\n"
                              '    LOOP\n'
                              '        PERFORM avisar_ficha_por_cerrar(r.id);\n'
                              '        v_n := v_n + 1;\n'
                              '    END LOOP;\n'
                              '\n'
                              '    RETURN QUERY SELECT v_n;\n'
                              'END '),
 'avisar_pago_recibido': ('',
                          'TRIGGER',
                          'plpgsql',
                          '\n'
                          'BEGIN\n'
                          '    IF NEW.anulado OR NEW.client_id IS NULL THEN\n'
                          '        RETURN NEW;\n'
                          '    END IF;\n'
                          '\n'
                          '    INSERT INTO avisos_pendientes (cliente_id, tipo, referencia_id)\n'
                          "    VALUES (NEW.client_id, 'pago_confirmado', NEW.id)\n"
                          '    ON CONFLICT DO NOTHING;\n'
                          '\n'
                          '    RETURN NEW;\n'
                          'END '),
 'avisar_respuesta_de_ticket': ('',
                                'TRIGGER',
                                'plpgsql',
                                '\n'
                                'DECLARE\n'
                                '    v_cliente UUID;\n'
                                'BEGIN\n'
                                "    IF NEW.nota IS NULL OR TRIM(NEW.nota) = '' THEN RETURN NEW; END IF;\n"
                                '\n'
                                '    /**\n'
                                '     * El evento de APERTURA no es una respuesta.\n'
                                '     *\n'
                                '     * Al crear un ticket, la base registra sola un evento con la nota '
                                '"Ticket\n'
                                '     * creado" —el rastro lo deja la base y no la pantalla, para que un '
                                'cambio\n'
                                '     * hecho desde un script también quede—. Ese evento tiene nota, así que '
                                'sin\n'
                                '     * esta condición el abonado recibiría DOS mensajes por lo mismo: '
                                '"recibimos\n'
                                '     * su reporte" y, un segundo después, "sobre su reporte: Ticket '
                                'creado".\n'
                                '     *\n'
                                '     * Se reconoce porque es el único sin estado anterior.\n'
                                '     */\n'
                                '    IF NEW.estado_anterior IS NULL THEN RETURN NEW; END IF;\n'
                                '\n'
                                '    SELECT client_id INTO v_cliente FROM tickets WHERE id = NEW.ticket_id;\n'
                                '    IF v_cliente IS NULL THEN RETURN NEW; END IF;\n'
                                '\n'
                                '    -- La referencia es el EVENTO y no el ticket: cada respuesta es un '
                                'mensaje\n'
                                '    -- distinto y el abonado quiere leerlas todas.\n'
                                '    INSERT INTO avisos_pendientes (cliente_id, tipo, referencia_id)\n'
                                "    VALUES (v_cliente, 'ticket_respuesta', NEW.id)\n"
                                '    ON CONFLICT DO NOTHING;\n'
                                '\n'
                                '    RETURN NEW;\n'
                                'END '),
 'avisar_stock_bajo': ('',
                       'JSONB',
                       'plpgsql',
                       '\n'
                       'DECLARE\n'
                       '    a         RECORD;\n'
                       '    u         RECORD;\n'
                       '    v_lista   TEXT;\n'
                       '    v_cuantos INT;\n'
                       '    v_avisos  INT := 0;\n'
                       '    v_titulo  TEXT;\n'
                       'BEGIN\n'
                       '    FOR a IN\n'
                       '        SELECT\n'
                       '            b.almacen_id,\n'
                       '            b.almacen,\n'
                       '            b.almacen_tipo,\n'
                       '            b.tecnico_id,\n'
                       '            COUNT(*)                                    AS cuantos,\n'
                       '            COUNT(*) FILTER (WHERE b.agotado)           AS agotados,\n'
                       '            STRING_AGG(\n'
                       "                b.articulo || ': ' || b.cantidad || ' ' || b.unidad ||\n"
                       '                CASE WHEN b.sugerido > 0\n'
                       "                     THEN ' (pedir ' || TRIM(TO_CHAR(b.sugerido, 'FM999999990.99')) "
                       "|| ')'\n"
                       "                     ELSE '' END,\n"
                       "                E'\\n' ORDER BY b.agotado DESC, b.articulo\n"
                       '            )                                           AS lista\n'
                       '        FROM v_stock_bajo b\n'
                       '        GROUP BY b.almacen_id, b.almacen, b.almacen_tipo, b.tecnico_id\n'
                       '    LOOP\n'
                       '        v_cuantos := a.cuantos;\n'
                       '        v_lista := a.lista;\n'
                       '\n'
                       '        v_titulo := CASE\n'
                       "            WHEN a.agotados > 0 THEN 'Sin material en ' || a.almacen\n"
                       "            ELSE 'Se está acabando el material en ' || a.almacen\n"
                       '        END;\n'
                       '\n'
                       '        /**\n'
                       '         * Al técnico, si el almacén es suyo.\n'
                       '         *\n'
                       '         * Es el que tiene que pedir el material ANTES de salir a la ruta. Que\n'
                       '         * se entere por el aviso y no en el poste es la diferencia entre pasar\n'
                       '         * por la bodega a la mañana y perder la instalación.\n'
                       '         */\n'
                       '        IF a.tecnico_id IS NOT NULL THEN\n'
                       '            FOR u IN\n'
                       '                SELECT us.id FROM usuarios_sistema us\n'
                       '                 WHERE us.activo AND us.tecnico_id = a.tecnico_id\n'
                       '            LOOP\n'
                       '                PERFORM notificar(\n'
                       '                    u.id,\n'
                       "                    'stock_bajo',\n"
                       "                    'Te queda poco material',\n"
                       "                    'Antes de salir, pide en bodega:' || E'\\n' || v_lista,\n"
                       "                    '/campo/mi-almacen',\n"
                       "                    'almacen',\n"
                       '                    a.almacen_id::TEXT\n'
                       '                );\n'
                       '                v_avisos := v_avisos + 1;\n'
                       '            END LOOP;\n'
                       '        END IF;\n'
                       '\n'
                       '        -- Y a los que reponen. También cuando el almacén es de un técnico: el\n'
                       '        -- que despacha necesita saber que va a tener que preparar ese pedido.\n'
                       '        FOR u IN\n'
                       '            SELECT us.id FROM usuarios_sistema us\n'
                       '             WHERE us.activo\n'
                       "               AND (us.permisos ? '*' OR us.permisos ? 'inventario.gestionar'\n"
                       "                    OR us.permisos ? 'inventario.ver')\n"
                       '        LOOP\n'
                       '            PERFORM notificar(\n'
                       '                u.id,\n'
                       "                'stock_bajo',\n"
                       '                v_titulo,\n'
                       "                v_cuantos || CASE WHEN v_cuantos = 1 THEN ' artículo' ELSE ' "
                       "artículos' END ||\n"
                       "                ' en el mínimo o por debajo:' || E'\\n' || v_lista,\n"
                       "                '/inventario/stock',\n"
                       "                'almacen',\n"
                       '                a.almacen_id::TEXT\n'
                       '            );\n'
                       '            v_avisos := v_avisos + 1;\n'
                       '        END LOOP;\n'
                       '    END LOOP;\n'
                       '\n'
                       "    RETURN JSONB_BUILD_OBJECT('avisos', v_avisos);\n"
                       'END '),
 'bono_de_calidad': ('p_esquema UUID, p_calidad NUMERIC',
                     'NUMERIC',
                     'sql',
                     '\n'
                     '    SELECT COALESCE(\n'
                     '        (SELECT b.monto\n'
                     '           FROM comision_bonos_calidad b\n'
                     '          WHERE b.esquema_id = p_esquema\n'
                     '            AND p_calidad >= b.desde_pct\n'
                     '            AND p_calidad <= b.hasta_pct\n'
                     '          ORDER BY b.desde_pct DESC\n'
                     '          LIMIT 1),\n'
                     '        0\n'
                     '    )\n'),
 'cajas_del_usuario': ('p_auth UUID',
                       'TABLE (id UUID, nombre VARCHAR, tipo VARCHAR, propia BOOLEAN)',
                       'sql',
                       '\n'
                       '    WITH yo AS (\n'
                       '        SELECT u.id FROM usuarios_sistema u WHERE u.auth_id = p_auth\n'
                       '    ),\n'
                       '    mias AS (\n'
                       '        SELECT c.id, c.nombre, c.tipo, TRUE AS propia\n'
                       '          FROM cuentas_pago c\n'
                       '         WHERE c.activa\n'
                       '           AND c.usuario_id = (SELECT id FROM yo)\n'
                       '    )\n'
                       '    SELECT * FROM mias\n'
                       '    UNION ALL\n'
                       '    /**\n'
                       '     * Las de la oficina, SOLO si no tiene ninguna propia.\n'
                       '     *\n'
                       '     * Es lo que evita la confusión que motivó todo esto: al que tiene su caja no\n'
                       '     * se le ofrece la general, porque el día que cobre ahí su arqueo va a cerrar\n'
                       '     * bien y el de la oficina mal, y nadie va a saber por qué.\n'
                       '     */\n'
                       '    SELECT c.id, c.nombre, c.tipo, FALSE\n'
                       '      FROM cuentas_pago c\n'
                       '     WHERE c.activa\n'
                       '       AND c.usuario_id IS NULL\n'
                       '       AND NOT EXISTS (SELECT 1 FROM mias)\n'),
 'cancelar_reparacion': ('p_id UUID, p_motivo TEXT DEFAULT NULL',
                         'VOID',
                         'plpgsql',
                         '\n'
                         'BEGIN\n'
                         '    IF NOT dirige_cuadrillas() THEN\n'
                         "        RAISE EXCEPTION 'Solo administración o un jefe técnico cancela una "
                         "reparación.' USING ERRCODE = '42501';\n"
                         '    END IF;\n'
                         '\n'
                         '    UPDATE reparaciones_red\n'
                         "       SET estado = 'cancelada', cerrada_at = NOW(), cerrada_por = "
                         'mi_usuario_id(),\n'
                         "           cierre_nota = NULLIF(BTRIM(p_motivo), '')\n"
                         "     WHERE id = p_id AND estado IN ('asignada', 'en_curso');\n"
                         "    IF NOT FOUND THEN RAISE EXCEPTION 'Esa reparación no existe o ya está "
                         "cerrada.'; END IF;\n"
                         '\n'
                         '    INSERT INTO reparacion_reportes (reparacion_id, tipo, texto, usuario_id)\n'
                         "    VALUES (p_id, 'cancelada', COALESCE(NULLIF(BTRIM(p_motivo), ''), 'Cancelada'), "
                         'mi_usuario_id());\n'
                         'END;\n'),
 'cartera_completa': ('',
                      'BOOLEAN',
                      'sql',
                      '\n'
                      '    SELECT COALESCE(\n'
                      "        (SELECT permisos ? '*' OR permisos ? 'clientes.cartera'\n"
                      '           FROM usuarios_sistema\n'
                      '          WHERE auth_id = auth.uid() AND activo\n'
                      '          LIMIT 1),\n'
                      '        -- Sin legajo no se bloquea a nadie: es una instalación que todavía no\n'
                      '        -- corrió la migración 66, y cerrarle el paso la dejaría inutilizable de\n'
                      '        -- golpe. El frente se comporta igual por la misma razón.\n'
                      '        TRUE\n'
                      '    )\n'),
 'cerrar_emergencia': ('p_nota TEXT DEFAULT NULL, p_km_fin INT DEFAULT NULL',
                       'VOID',
                       'plpgsql',
                       '\n'
                       'DECLARE\n'
                       '    v salidas_emergencia%ROWTYPE;\n'
                       'BEGIN\n'
                       '    SELECT * INTO v FROM salidas_emergencia\n'
                       '     WHERE tecnico_id = mi_tecnico_id() AND fin_at IS NULL\n'
                       '     FOR UPDATE;\n'
                       '    IF NOT FOUND THEN\n'
                       "        RAISE EXCEPTION 'No tienes ninguna emergencia abierta.';\n"
                       '    END IF;\n'
                       '    IF v.km_inicio IS NOT NULL AND p_km_fin IS NULL THEN\n'
                       "        RAISE EXCEPTION 'Anota el kilometraje al volver.';\n"
                       '    END IF;\n'
                       '    IF p_km_fin IS NOT NULL AND v.km_inicio IS NOT NULL AND p_km_fin < v.km_inicio '
                       'THEN\n'
                       "        RAISE EXCEPTION 'El tablero no puede marcar menos que al salir (% km).', "
                       'v.km_inicio;\n'
                       '    END IF;\n'
                       '\n'
                       '    UPDATE salidas_emergencia\n'
                       '       SET fin_at = NOW(),\n'
                       "           cierre_nota = NULLIF(BTRIM(p_nota), ''),\n"
                       '           km_fin = p_km_fin\n'
                       '     WHERE id = v.id;\n'
                       'END;\n'),
 'cerrar_ficha_por_retiro': ('p_cliente UUID, p_motivo UUID DEFAULT NULL, p_nota TEXT DEFAULT NULL',
                             'clientes',
                             'plpgsql',
                             '\n'
                             'DECLARE\n'
                             '    v_retiro retiros_equipo%ROWTYPE;\n'
                             '    v_nota   TEXT;\n'
                             'BEGIN\n'
                             '    IF NOT puede_gestionar_retiros() THEN\n'
                             "        RAISE EXCEPTION 'No tienes permiso para cerrar fichas';\n"
                             '    END IF;\n'
                             '\n'
                             '    SELECT * INTO v_retiro FROM retiros_equipo\n'
                             "     WHERE cliente_id = p_cliente AND estado IN ('recuperado', "
                             "'no_recuperado')\n"
                             '     ORDER BY cerrado_en DESC LIMIT 1;\n'
                             '\n'
                             "    v_nota := COALESCE(NULLIF(BTRIM(p_nota), ''), '') ||\n"
                             '        CASE\n'
                             "            WHEN v_retiro.id IS NULL THEN ''\n"
                             "            WHEN v_retiro.estado = 'recuperado'\n"
                             "                THEN CASE WHEN p_nota IS NULL THEN '' ELSE ' · ' END ||\n"
                             "                     'Equipo recuperado el ' || TO_CHAR(v_retiro.cerrado_en AT "
                             "TIME ZONE zona_horaria(), 'DD/MM/YYYY') ||\n"
                             "                     COALESCE(' (' || v_retiro.serie || ')', '')\n"
                             "            ELSE CASE WHEN p_nota IS NULL THEN '' ELSE ' · ' END ||\n"
                             "                 'Equipo NO recuperado: ' || "
                             "COALESCE(v_retiro.categoria_cierre, 'sin categoría') ||\n"
                             "                 COALESCE(' (' || v_retiro.serie || ')', '')\n"
                             '        END;\n'
                             '\n'
                             "    RETURN dar_de_baja_cliente(p_cliente, p_motivo, NULLIF(v_nota, ''));\n"
                             'END '),
 'cerrar_periodo_comisiones': ('p_periodo DATE, p_vendedor UUID DEFAULT NULL, p_forzar BOOLEAN DEFAULT FALSE',
                               'TABLE (res_vendedor UUID, res_ventas INT, res_monto NUMERIC, res_estado '
                               'TEXT)',
                               'plpgsql',
                               '\n'
                               'DECLARE\n'
                               "    v_mes DATE := DATE_TRUNC('month', p_periodo)::DATE;\n"
                               '    v_legajo UUID := mi_legajo_id();\n'
                               '    v_reglas comision_reglas%ROWTYPE;\n'
                               '    v_desde DATE;\n'
                               '    -- El día siguiente al último de este período: todo lo que venció antes '
                               'de\n'
                               '    -- esta fecha entra acá, lo demás espera al mes que viene.\n'
                               '    v_corte DATE;\n'
                               '    r RECORD;\n'
                               'BEGIN\n'
                               "    IF NOT tiene_permiso_comision('comisiones.aprobar')\n"
                               "       AND NOT tiene_permiso_comision('comisiones.configurar') THEN\n"
                               "        RAISE EXCEPTION 'No tienes permiso para cerrar períodos de "
                               "comisión';\n"
                               '    END IF;\n'
                               '\n'
                               '    SELECT * INTO v_reglas\n'
                               '      FROM comision_reglas\n'
                               '     WHERE esquema_id = esquema_comisiones_vigente(v_mes);\n'
                               '\n'
                               "    v_desde := (v_mes + INTERVAL '1 month')::DATE + "
                               '(COALESCE(v_reglas.dia_cierre, 5) - 1);\n'
                               '\n'
                               '    IF NOT p_forzar AND CURRENT_DATE < v_desde THEN\n'
                               '        RAISE EXCEPTION\n'
                               "            'El período % se cierra a partir del %. Hasta entonces hay "
                               "ventas en período de cortesía esperando su primer pago.',\n"
                               "            TO_CHAR(v_mes, 'MM/YYYY'), TO_CHAR(v_desde, 'DD/MM/YYYY');\n"
                               '    END IF;\n'
                               '\n'
                               '    -- Los veredictos de calidad, al día. Un bono congelado con datos de '
                               'ayer no\n'
                               '    -- se puede corregir después.\n'
                               '    PERFORM evaluar_cohortes(p_vendedor, NULL::DATE);\n'
                               '\n'
                               "    v_corte := (v_mes + INTERVAL '1 month')::DATE;\n"
                               '\n'
                               '    FOR r IN\n'
                               '        -- Los del período, más los que traen bono pendiente aunque no '
                               'hayan\n'
                               '        -- vendido este mes.\n'
                               '        SELECT DISTINCT cv.vendedor_id\n'
                               '          FROM comision_ventas cv\n'
                               '         WHERE cv.periodo = v_mes\n'
                               '           AND cv.vendedor_id IS NOT NULL\n'
                               "           AND cv.estado NOT IN ('anulada')\n"
                               '           AND (p_vendedor IS NULL OR cv.vendedor_id = p_vendedor)\n'
                               '        UNION\n'
                               '        SELECT DISTINCT cc.vendedor_id\n'
                               '          FROM comision_cohortes cc\n'
                               "         WHERE cc.estado = 'cerrada'\n"
                               '           AND cc.liquidado_en IS NULL\n'
                               '           AND cc.bono > 0\n'
                               '           AND cc.cierra_el < v_corte\n'
                               '           AND (p_vendedor IS NULL OR cc.vendedor_id = p_vendedor)\n'
                               '    LOOP\n'
                               '        DECLARE\n'
                               '            v_calc RECORD;\n'
                               '            v_ya   comision_periodos%ROWTYPE;\n'
                               '            v_bono NUMERIC := 0;\n'
                               '        BEGIN\n'
                               '            SELECT * INTO v_ya\n'
                               '              FROM comision_periodos\n'
                               '             WHERE vendedor_id = r.vendedor_id AND periodo = v_mes;\n'
                               '\n'
                               "            IF v_ya.estado IN ('aprobado', 'pagado') THEN\n"
                               '                -- Ya se autorizó el gasto: no se recalcula. El bono '
                               'pendiente\n'
                               '                -- queda sin liquidar y lo toma el período siguiente.\n'
                               '                RETURN QUERY SELECT r.vendedor_id, v_ya.ventas_validas, '
                               'v_ya.monto, v_ya.estado::TEXT;\n'
                               '                CONTINUE;\n'
                               '            END IF;\n'
                               '\n'
                               '            SELECT * INTO v_calc FROM comision_de_periodo(r.vendedor_id, '
                               'v_mes);\n'
                               '\n'
                               '            SELECT COALESCE(SUM(cc.bono), 0) INTO v_bono\n'
                               '              FROM comision_cohortes cc\n'
                               '             WHERE cc.vendedor_id = r.vendedor_id\n'
                               "               AND cc.estado = 'cerrada'\n"
                               '               AND cc.liquidado_en IS NULL\n'
                               '               AND cc.bono > 0\n'
                               '               AND cc.cierra_el < v_corte;\n'
                               '\n'
                               '            INSERT INTO comision_periodos (\n'
                               '                vendedor_id, periodo, esquema_id, ventas_validas,\n'
                               '                base_total, nivel, porcentaje, monto, bono, estado, '
                               'cerrado_por, cerrado_en,\n'
                               '                notas\n'
                               '            ) VALUES (\n'
                               '                r.vendedor_id, v_mes, v_calc.esquema_id, v_calc.ventas,\n'
                               '                v_calc.base_total, v_calc.nivel, v_calc.porcentaje, '
                               'v_calc.monto, v_bono,\n'
                               "                'cerrado', v_legajo, NOW(),\n"
                               "                CASE WHEN p_forzar THEN 'Cierre forzado antes de la fecha' "
                               'END\n'
                               '            )\n'
                               '            ON CONFLICT (vendedor_id, periodo) DO UPDATE SET\n'
                               '                esquema_id     = EXCLUDED.esquema_id,\n'
                               '                ventas_validas = EXCLUDED.ventas_validas,\n'
                               '                base_total     = EXCLUDED.base_total,\n'
                               '                nivel          = EXCLUDED.nivel,\n'
                               '                porcentaje     = EXCLUDED.porcentaje,\n'
                               '                monto          = EXCLUDED.monto,\n'
                               '                -- Se SUMA, no se pisa: un segundo cierre del mismo mes no '
                               'puede\n'
                               '                -- borrar un bono que ya se le había asignado, ni contarlo '
                               'dos\n'
                               '                -- veces — de eso se encarga `liquidado_en`.\n'
                               '                bono           = comision_periodos.bono + EXCLUDED.bono,\n'
                               '                cerrado_por    = EXCLUDED.cerrado_por,\n'
                               '                cerrado_en     = NOW(),\n'
                               '                notas          = EXCLUDED.notas;\n'
                               '\n'
                               '            -- Marcadas como liquidadas: la próxima corrida ya no las suma.\n'
                               '            UPDATE comision_cohortes cc\n'
                               '               SET periodo_liquidado = v_mes,\n'
                               '                   liquidado_en = NOW()\n'
                               '             WHERE cc.vendedor_id = r.vendedor_id\n'
                               "               AND cc.estado = 'cerrada'\n"
                               '               AND cc.liquidado_en IS NULL\n'
                               '               AND cc.bono > 0\n'
                               '               AND cc.cierra_el < v_corte;\n'
                               '\n'
                               '            UPDATE comision_ventas cvu\n'
                               "               SET estado = 'generada', actualizado_en = NOW()\n"
                               '             WHERE cvu.periodo = v_mes\n'
                               '               AND cvu.vendedor_id = r.vendedor_id\n'
                               '               AND cvu.comisionable_en IS NOT NULL\n'
                               "               AND cvu.estado IN ('proyectada', 'pendiente_validacion');\n"
                               '\n'
                               '            RETURN QUERY SELECT r.vendedor_id, v_calc.ventas, v_calc.monto + '
                               "v_bono, 'cerrado'::TEXT;\n"
                               '        END;\n'
                               '    END LOOP;\n'
                               '\n'
                               '    INSERT INTO auditoria_sistema (\n'
                               '        usuario_id, usuario_nombre, usuario_rol, accion, descripcion, '
                               'entidad, entidad_id, datos\n'
                               '    )\n'
                               "    SELECT u.id, TRIM(CONCAT(u.nombre, ' ', COALESCE(u.apellido, ''))), "
                               'u.rol,\n'
                               "           'comisiones.cerrar',\n"
                               "           FORMAT('Cerró el período de comisiones %s%s', TO_CHAR(v_mes, "
                               "'MM/YYYY'),\n"
                               "                  CASE WHEN p_forzar THEN ' (forzado)' ELSE '' END),\n"
                               "           'comision_periodo', NULL,\n"
                               "           jsonb_build_object('periodo', v_mes, 'vendedor', p_vendedor, "
                               "'forzado', p_forzar)\n"
                               '    FROM usuarios_sistema u WHERE u.id = v_legajo;\n'
                               'END '),
 'cerrar_reparacion': ('p_id UUID, p_nota TEXT, p_lat NUMERIC DEFAULT NULL, p_lng NUMERIC DEFAULT NULL',
                       'JSONB',
                       'plpgsql',
                       '\n'
                       'DECLARE\n'
                       '    v          reparaciones_red%ROWTYPE;\n'
                       '    v_corte    TEXT;\n'
                       '    v_res      JSONB;\n'
                       '    v_quien    TEXT;\n'
                       '    u          RECORD;\n'
                       'BEGIN\n'
                       '    IF NOT puede_cerrar_reparacion(p_id) THEN\n'
                       "        RAISE EXCEPTION 'La reparación la cierra el jefe de grupo de hoy.' USING "
                       "ERRCODE = '42501';\n"
                       '    END IF;\n'
                       "    IF NULLIF(BTRIM(p_nota), '') IS NULL THEN\n"
                       "        RAISE EXCEPTION 'Cuenta qué se reparó: es lo que lee la oficina.';\n"
                       '    END IF;\n'
                       '\n'
                       '    SELECT * INTO v FROM reparaciones_red WHERE id = p_id FOR UPDATE;\n'
                       "    IF NOT FOUND THEN RAISE EXCEPTION 'No existe esa reparación.'; END IF;\n"
                       "    IF v.estado NOT IN ('asignada', 'en_curso') THEN\n"
                       "        RAISE EXCEPTION 'Esa reparación ya está cerrada.';\n"
                       '    END IF;\n'
                       '\n'
                       '    UPDATE reparaciones_red\n'
                       "       SET estado      = 'reparada',\n"
                       '           cerrada_at  = NOW(),\n'
                       '           cerrada_por = mi_usuario_id(),\n'
                       '           cierre_nota = BTRIM(p_nota),\n'
                       '           iniciada_at = COALESCE(iniciada_at, NOW())\n'
                       '     WHERE id = p_id;\n'
                       '\n'
                       '    INSERT INTO reparacion_reportes (reparacion_id, tipo, texto, usuario_id, '
                       'tecnico_id, lat, lng)\n'
                       "    VALUES (p_id, 'reparada', BTRIM(p_nota), mi_usuario_id(), mi_tecnico_id(), "
                       'p_lat, p_lng);\n'
                       '\n'
                       '    IF v.incidencia_id IS NOT NULL THEN\n'
                       '        SELECT estado INTO v_corte FROM incidencias_masivas WHERE id = '
                       'v.incidencia_id;\n'
                       "        IF v_corte = 'abierta' THEN\n"
                       '            v_res := resolver_incidencia(v.incidencia_id, mi_usuario_id());\n'
                       '        END IF;\n'
                       '    END IF;\n'
                       '\n'
                       '    SELECT COALESCE((SELECT nombre FROM tecnicos WHERE id = mi_tecnico_id()),\n'
                       "                    (SELECT CONCAT_WS(' ', nombre, apellido) FROM usuarios_sistema "
                       'WHERE id = mi_usuario_id()))\n'
                       '      INTO v_quien;\n'
                       '\n'
                       '    FOR u IN\n'
                       '        SELECT id FROM usuarios_sistema\n'
                       "         WHERE activo AND rol IN ('super_admin', 'admin', 'jefe_tecnico')\n"
                       '           AND id IS DISTINCT FROM mi_usuario_id()\n'
                       '    LOOP\n'
                       '        PERFORM notificar(\n'
                       "            u.id, 'reparacion_cerrada',\n"
                       "            'Reparada: ' || LEFT(v.titulo, 90),\n"
                       "            COALESCE(v_quien || ': ', '') || LEFT(BTRIM(p_nota), 200)\n"
                       "                || CASE WHEN v_res IS NOT NULL THEN ' · Se resolvió el corte masivo "
                       "y salen los avisos de restablecimiento.' ELSE '' END,\n"
                       "            '/monitoreo/incidencias', 'reparacion', p_id::text);\n"
                       '    END LOOP;\n'
                       '\n'
                       '    RETURN jsonb_build_object(\n'
                       "        'ok', true,\n"
                       "        'corte_resuelto', v_res IS NOT NULL,\n"
                       "        'avisos', COALESCE((v_res->>'encolados')::int, 0),\n"
                       '        -- El corte quedó en borrador: nunca se avisó, así que no hay "ya está"\n'
                       '        -- que mandar. Lo cancela la oficina.\n'
                       "        'corte_en_borrador', v_corte = 'borrador'\n"
                       '    );\n'
                       'END;\n'),
 'cerrar_retiro_equipo': ('p_retiro UUID, p_recuperado BOOLEAN, p_motivo TEXT DEFAULT NULL, p_observacion '
                          'TEXT DEFAULT NULL, p_serie TEXT DEFAULT NULL, p_almacen UUID DEFAULT NULL, '
                          'p_firma TEXT DEFAULT NULL, p_firmante TEXT DEFAULT NULL',
                          'retiros_equipo',
                          'plpgsql',
                          '\n'
                          'DECLARE\n'
                          '    v_fila    retiros_equipo%ROWTYPE;\n'
                          '    v_equipo  equipos%ROWTYPE;\n'
                          '    v_almacen UUID;\n'
                          '    v_legajo  UUID := mi_legajo_id();\n'
                          '    v_cat     retiro_categorias%ROWTYPE;\n'
                          'BEGIN\n'
                          '    SELECT * INTO v_fila FROM retiros_equipo WHERE id = p_retiro;\n'
                          '    IF NOT FOUND THEN\n'
                          "        RAISE EXCEPTION 'No existe esa orden de retiro';\n"
                          '    END IF;\n'
                          '\n'
                          '    IF NOT puede_gestionar_retiros()\n'
                          '       AND v_fila.tecnico_id IS DISTINCT FROM mi_tecnico_id()\n'
                          '       AND v_fila.responsable_id IS DISTINCT FROM v_legajo THEN\n'
                          "        RAISE EXCEPTION 'Esa orden de retiro no es tuya';\n"
                          '    END IF;\n'
                          '\n'
                          "    IF v_fila.estado NOT IN ('pendiente', 'asignado') THEN\n"
                          "        RAISE EXCEPTION 'Esa orden ya está cerrada (%)', v_fila.estado;\n"
                          '    END IF;\n'
                          '\n'
                          "    IF p_recuperado AND COALESCE(BTRIM(p_firma), '') = '' THEN\n"
                          "        RAISE EXCEPTION 'Falta la firma de quien entrega el equipo';\n"
                          '    END IF;\n'
                          '\n'
                          '    IF NOT p_recuperado THEN\n'
                          '        SELECT * INTO v_cat FROM retiro_categorias\n'
                          "         WHERE clave = COALESCE(NULLIF(BTRIM(p_motivo), ''), '—') AND activa;\n"
                          '\n'
                          '        IF NOT FOUND THEN\n'
                          "            RAISE EXCEPTION 'Hace falta elegir por qué no se recuperó (categoría "
                          "válida)';\n"
                          '        END IF;\n'
                          '    END IF;\n'
                          '\n'
                          "    IF COALESCE(BTRIM(p_serie), '') <> '' THEN\n"
                          '        SELECT * INTO v_equipo FROM equipos\n'
                          '         WHERE UPPER(BTRIM(serie)) = UPPER(BTRIM(p_serie)) LIMIT 1;\n'
                          '    ELSIF v_fila.equipo_id IS NOT NULL THEN\n'
                          '        SELECT * INTO v_equipo FROM equipos WHERE id = v_fila.equipo_id;\n'
                          '    END IF;\n'
                          '\n'
                          '    IF p_recuperado AND v_equipo.id IS NOT NULL THEN\n'
                          '        v_almacen := COALESCE(\n'
                          '            p_almacen,\n'
                          '            (SELECT a.id FROM almacenes a WHERE a.tecnico_id = v_fila.tecnico_id '
                          'LIMIT 1),\n'
                          "            (SELECT a.id FROM almacenes a WHERE a.tipo = 'bodega' ORDER BY "
                          'a.creado_en LIMIT 1)\n'
                          '        );\n'
                          '\n'
                          '        UPDATE equipos\n'
                          "           SET estado = 'en_stock', cliente_id = NULL, instalacion_id = NULL, "
                          'almacen_id = v_almacen\n'
                          '         WHERE id = v_equipo.id;\n'
                          '\n'
                          '        INSERT INTO movimientos_inventario (\n'
                          '            tipo, articulo_id, equipo_id, cantidad, almacen_destino_id,\n'
                          '            costo_unit, motivo, usuario_id, usuario_nombre\n'
                          '        )\n'
                          "        SELECT 'devolucion', v_equipo.articulo_id, v_equipo.id, 1, v_almacen,\n"
                          '               NULLIF(v_fila.valor, 0),\n'
                          "               FORMAT('Retiro de equipo por falta de renovación (orden %s)', "
                          'p_retiro),\n'
                          '               v_legajo,\n'
                          "               (SELECT TRIM(CONCAT(u.nombre, ' ', COALESCE(u.apellido, '')))\n"
                          '                  FROM usuarios_sistema u WHERE u.id = v_legajo);\n'
                          '\n'
                          '    ELSIF NOT p_recuperado AND v_equipo.id IS NOT NULL THEN\n'
                          "        IF v_cat.clave = 'error_de_registro' THEN\n"
                          '            UPDATE equipos SET cliente_id = NULL, instalacion_id = NULL WHERE id '
                          '= v_equipo.id;\n'
                          '        ELSE\n'
                          '            UPDATE equipos\n'
                          "               SET estado = 'baja', cliente_id = NULL, instalacion_id = NULL, "
                          'almacen_id = NULL\n'
                          '             WHERE id = v_equipo.id;\n'
                          '        END IF;\n'
                          '    END IF;\n'
                          '\n'
                          '    UPDATE retiros_equipo\n'
                          "       SET estado = CASE WHEN p_recuperado THEN 'recuperado' ELSE 'no_recuperado' "
                          'END,\n'
                          '           categoria_cierre = CASE WHEN p_recuperado THEN NULL ELSE v_cat.clave '
                          'END,\n'
                          "           motivo = COALESCE(NULLIF(BTRIM(p_motivo), ''), motivo),\n"
                          "           observaciones = COALESCE(NULLIF(BTRIM(p_observacion), ''), "
                          'observaciones),\n'
                          "           firma_b64  = COALESCE(NULLIF(BTRIM(p_firma), ''), firma_b64),\n"
                          "           firmante   = COALESCE(NULLIF(BTRIM(p_firmante), ''), firmante),\n"
                          "           firmado_en = CASE WHEN COALESCE(BTRIM(p_firma), '') <> '' THEN NOW() "
                          'ELSE firmado_en END,\n'
                          '           cerrado_por = v_legajo,\n'
                          '           cerrado_en = NOW()\n'
                          '     WHERE id = p_retiro\n'
                          '    RETURNING * INTO v_fila;\n'
                          '\n'
                          '    -- ── La deuda del equipo que no volvió ──\n'
                          '    -- Se marca la orden en la misma operación: así ni un reproceso ni un\n'
                          '    -- relleno pueden sumarla dos veces.\n'
                          '    IF NOT p_recuperado AND v_cat.es_perdida AND COALESCE(v_fila.valor, 0) > 0\n'
                          '       AND NOT v_fila.deuda_aplicada THEN\n'
                          '        UPDATE clientes\n'
                          '           SET deuda_equipo = deuda_equipo + v_fila.valor,\n'
                          '               updated_at = NOW()\n'
                          '         WHERE id = v_fila.cliente_id;\n'
                          '\n'
                          '        UPDATE retiros_equipo SET deuda_aplicada = TRUE WHERE id = p_retiro\n'
                          '        RETURNING * INTO v_fila;\n'
                          '    END IF;\n'
                          '\n'
                          '    IF NOT p_recuperado AND v_cat.cierra_ficha THEN\n'
                          '        PERFORM avisar_ficha_por_cerrar(v_fila.cliente_id);\n'
                          '    END IF;\n'
                          '\n'
                          '    RETURN v_fila;\n'
                          'END '),
 'clientes_de_nodo': ('p_nodo UUID',
                      'INT',
                      'sql',
                      '\n'
                      '    SELECT COUNT(*)::INT\n'
                      '      FROM clientes c\n'
                      '      JOIN nodos_red n ON n.id = p_nodo\n'
                      "     WHERE c.estado = 'activo'\n"
                      '       AND (\n'
                      '            (n.punto_id IS NOT NULL AND n.punto_id IN (c.conectado_a_id, c.nap_id))\n'
                      '            OR (n.olt_id IS NOT NULL\n'
                      '                AND n.olt_id = (SELECT o.olt_id FROM onus o WHERE o.id = c.onu_id))\n'
                      '       )\n'),
 'cobertura_cercana': ("p_lat NUMERIC, p_lng NUMERIC, p_tecnologia TEXT DEFAULT 'ftth', p_limite INT DEFAULT "
                       '5',
                       'TABLE ( id UUID, nombre VARCHAR, tipo VARCHAR, direccion VARCHAR, distancia_m INT, '
                       'capacidad INT, ocupados BIGINT, disponibles INT )',
                       'sql',
                       '\n'
                       '    SELECT\n'
                       '        pr.id,\n'
                       '        pr.nombre,\n'
                       '        pr.tipo,\n'
                       '        pr.direccion,\n'
                       '        ROUND((6371000 * 2 * ASIN(SQRT(\n'
                       '            POWER(SIN(RADIANS(pr.latitud - p_lat) / 2), 2) +\n'
                       '            COS(RADIANS(p_lat)) * COS(RADIANS(pr.latitud)) *\n'
                       '            POWER(SIN(RADIANS(pr.longitud - p_lng) / 2), 2)\n'
                       '        )))::NUMERIC)::INT AS distancia_m,\n'
                       '        pr.capacidad,\n'
                       '        COALESCE(u.ocupados, 0) AS ocupados,\n'
                       '        CASE WHEN pr.capacidad IS NULL THEN NULL\n'
                       '             ELSE pr.capacidad - COALESCE(u.ocupados, 0)::INT\n'
                       '        END AS disponibles\n'
                       '    FROM puntos_red pr\n'
                       '    LEFT JOIN (\n'
                       '        -- Ocupación real: los abonados colgados más las instalaciones que ya\n'
                       '        -- reservaron un puerto y todavía no se hicieron. Sin contar estas\n'
                       '        -- últimas, dos ventas del mismo día terminan asignadas a la misma caja\n'
                       '        -- llena.\n'
                       '        SELECT punto_id, COUNT(*) AS ocupados FROM (\n'
                       '            SELECT nap_id AS punto_id FROM clientes\n'
                       "             WHERE nap_id IS NOT NULL AND estado <> 'baja'\n"
                       '            UNION ALL\n'
                       '            SELECT conectado_a_id FROM clientes\n'
                       "             WHERE conectado_a_id IS NOT NULL AND estado <> 'baja'\n"
                       '            UNION ALL\n'
                       '            SELECT COALESCE(nap_id, torre_id) FROM instalaciones\n'
                       '             WHERE COALESCE(nap_id, torre_id) IS NOT NULL\n'
                       "               AND estado IN ('prospecto', 'agendada', 'en_curso')\n"
                       '        ) t\n'
                       '        GROUP BY punto_id\n'
                       '    ) u ON u.punto_id = pr.id\n'
                       '    WHERE pr.activo\n'
                       '      AND pr.latitud IS NOT NULL\n'
                       '      AND pr.longitud IS NOT NULL\n'
                       '      AND pr.tipo::TEXT = ANY (\n'
                       "          CASE WHEN p_tecnologia = 'wireless'\n"
                       "               THEN ARRAY['antena', 'torre']\n"
                       "               ELSE ARRAY['nap']\n"
                       '          END\n'
                       '      )\n'
                       '    -- Se ordena por posición y no por nombre: en una función SQL las columnas\n'
                       '    -- de RETURNS TABLE se pueden referenciar como parámetros, y `distancia_m`\n'
                       '    -- sería ambiguo entre la columna calculada y la de salida.\n'
                       '    ORDER BY 5\n'
                       '    LIMIT GREATEST(p_limite, 1);\n'),
 'comision_de_periodo': ('p_vendedor UUID, p_periodo DATE',
                         'TABLE ( ventas INT, base_total NUMERIC, nivel TEXT, porcentaje NUMERIC, monto '
                         'NUMERIC, esquema_id UUID )',
                         'plpgsql',
                         '\n'
                         'DECLARE\n'
                         '    v_esquema UUID;\n'
                         '    v_modo TEXT;\n'
                         '    v_ventas INT;\n'
                         '    v_base NUMERIC := 0;\n'
                         '    v_nivel comision_niveles%ROWTYPE;\n'
                         '    v_monto NUMERIC := 0;\n'
                         "    v_mes DATE := DATE_TRUNC('month', p_periodo)::DATE;\n"
                         'BEGIN\n'
                         '    /**\n'
                         '     * De quién es esta plata.\n'
                         '     *\n'
                         '     * La función es SECURITY DEFINER —tiene que serlo para poder leer la\n'
                         '     * configuración— y eso significa que corre saltándose RLS. Sin esta\n'
                         '     * verificación, un vendedor podía llamarla con el id de un compañero desde\n'
                         '     * la consola del navegador y ver cuánto cobra.\n'
                         '     *\n'
                         '     * La vista que la usa filtra por RLS y nunca llega acá con un vendedor\n'
                         '     * ajeno; el agujero era la llamada directa.\n'
                         '     */\n'
                         '    IF NOT ve_comisiones_de_todos() AND p_vendedor IS DISTINCT FROM mi_legajo_id() '
                         'THEN\n'
                         "        RAISE EXCEPTION 'No puedes ver la comisión de otro vendedor';\n"
                         '    END IF;\n'
                         '\n'
                         '    -- Todas las ventas del período comparten esquema: lo fija la fecha en que\n'
                         '    -- se ganaron, y un período es un mes. Si por un cambio de versión a mitad\n'
                         '    -- de mes hubiera dos, gana el de la mayoría — y el cierre de la Fase 3 deja\n'
                         '    -- constancia de cuál se usó.\n'
                         '    SELECT cv.esquema_id INTO v_esquema\n'
                         '      FROM comision_ventas cv\n'
                         '     WHERE cv.vendedor_id = p_vendedor\n'
                         '       AND cv.periodo = v_mes\n'
                         '       AND cv.comisionable_en IS NOT NULL\n'
                         "       AND cv.estado NOT IN ('anulada')\n"
                         '     GROUP BY cv.esquema_id\n'
                         '     ORDER BY COUNT(*) DESC\n'
                         '     LIMIT 1;\n'
                         '\n'
                         '    IF v_esquema IS NULL THEN\n'
                         '        RETURN QUERY SELECT 0, 0::NUMERIC, NULL::TEXT, 0::NUMERIC, 0::NUMERIC, '
                         'NULL::UUID;\n'
                         '        RETURN;\n'
                         '    END IF;\n'
                         '\n'
                         '    SELECT e.modo INTO v_modo FROM comision_esquemas e WHERE e.id = v_esquema;\n'
                         '\n'
                         '    SELECT COUNT(*), COALESCE(SUM(cv.base), 0) INTO v_ventas, v_base\n'
                         '      FROM comision_ventas cv\n'
                         '     WHERE cv.vendedor_id = p_vendedor\n'
                         '       AND cv.periodo = v_mes\n'
                         '       AND cv.comisionable_en IS NOT NULL\n'
                         "       AND cv.estado NOT IN ('anulada');\n"
                         '\n'
                         '    IF v_ventas = 0 THEN\n'
                         '        RETURN QUERY SELECT 0, 0::NUMERIC, NULL::TEXT, 0::NUMERIC, 0::NUMERIC, '
                         'v_esquema;\n'
                         '        RETURN;\n'
                         '    END IF;\n'
                         '\n'
                         '    v_nivel := nivel_comision(v_esquema, v_ventas);\n'
                         '\n'
                         "    IF v_modo = 'progresivo' THEN\n"
                         '        SELECT COALESCE(SUM(x.base * n.porcentaje / 100.0), 0) INTO v_monto\n'
                         '          FROM (\n'
                         '              SELECT cv.base,\n'
                         '                     ROW_NUMBER() OVER (ORDER BY cv.comisionable_en, cv.id) AS '
                         'pos\n'
                         '                FROM comision_ventas cv\n'
                         '               WHERE cv.vendedor_id = p_vendedor\n'
                         '                 AND cv.periodo = v_mes\n'
                         '                 AND cv.comisionable_en IS NOT NULL\n'
                         "                 AND cv.estado NOT IN ('anulada')\n"
                         '          ) x\n'
                         '          JOIN comision_niveles n\n'
                         '            ON n.esquema_id = v_esquema\n'
                         '           AND x.pos >= n.desde_ventas\n'
                         '           AND (n.hasta_ventas IS NULL OR x.pos <= n.hasta_ventas);\n'
                         '    ELSE\n'
                         '        v_monto := v_base * COALESCE(v_nivel.porcentaje, 0) / 100.0;\n'
                         '    END IF;\n'
                         '\n'
                         '    RETURN QUERY SELECT\n'
                         '        v_ventas,\n'
                         '        v_base,\n'
                         '        v_nivel.nombre::TEXT,\n'
                         '        COALESCE(v_nivel.porcentaje, 0),\n'
                         '        ROUND(v_monto, 2),\n'
                         '        v_esquema;\n'
                         'END '),
 'confirmar_pago_reportado': ('p_id UUID, p_usuario UUID DEFAULT NULL, p_cuenta_id UUID DEFAULT NULL',
                              'JSONB',
                              'plpgsql',
                              '\n'
                              'DECLARE\n'
                              '    v_r        pagos_reportados%ROWTYPE;\n'
                              '    v_cuenta   UUID;\n'
                              '    v_cobro    JSONB;\n'
                              'BEGIN\n'
                              '    SELECT * INTO v_r FROM pagos_reportados WHERE id = p_id FOR UPDATE;\n'
                              '    IF NOT FOUND THEN\n'
                              "        RAISE EXCEPTION 'No existe ese pago reportado';\n"
                              '    END IF;\n'
                              '\n'
                              "    IF v_r.estado = 'confirmado' THEN\n"
                              "        RAISE EXCEPTION 'Ese pago ya fue confirmado';\n"
                              '    END IF;\n'
                              "    IF v_r.estado = 'rechazado' THEN\n"
                              "        RAISE EXCEPTION 'Ese pago fue rechazado: %', "
                              "COALESCE(v_r.motivo_rechazo, 'sin motivo');\n"
                              '    END IF;\n'
                              '    IF v_r.client_id IS NULL THEN\n'
                              "        RAISE EXCEPTION 'El reporte no tiene abonado asociado: no se puede "
                              "aplicar';\n"
                              '    END IF;\n'
                              '\n'
                              '    SELECT COALESCE(p_cuenta_id, v_r.cuenta_id, l.cuenta_id) INTO v_cuenta\n'
                              '      FROM api_llaves l WHERE l.id = v_r.llave_id;\n'
                              '    v_cuenta := COALESCE(v_cuenta, p_cuenta_id, v_r.cuenta_id);\n'
                              '\n'
                              '    v_cobro := aplicar_cobro(\n'
                              '        p_client_id       => v_r.client_id,\n'
                              '        p_monto           => v_r.monto,\n'
                              '        p_forma_pago      => v_r.forma_pago,\n'
                              '        p_cuenta_id       => v_cuenta,\n'
                              '        p_n_transaccion   => v_r.n_transaccion,\n'
                              '        p_fecha_pago      => v_r.fecha_pago,\n'
                              "        p_notas           => CONCAT_WS(' · ',\n"
                              "                                'Reportado por ' || "
                              "COALESCE(v_r.llave_nombre, 'sistema externo'),\n"
                              "                                NULLIF(v_r.banco_origen, ''),\n"
                              "                                NULLIF(v_r.depositante, ''),\n"
                              '                                CASE v_r.metodo_verificacion\n'
                              "                                    WHEN 'bank_api'    THEN 'confirmado por "
                              "el banco'\n"
                              "                                    WHEN 'qr_validado' THEN 'QR del "
                              "comprobante validado'\n"
                              "                                    WHEN 'human'       THEN 'verificado a "
                              "mano'\n"
                              "                                    WHEN 'ocr_only'    THEN 'leído del "
                              "comprobante'\n"
                              '                                    ELSE NULL\n'
                              '                                END,\n'
                              "                                NULLIF(v_r.notas, '')),\n"
                              '        p_comision        => 0,\n'
                              '        p_factura_id      => v_r.factura_id,\n'
                              '        p_facturar        => NULL,\n'
                              '        p_activo_servicio => FALSE,\n'
                              '        p_solo_servicio   => TRUE,\n'
                              '        p_created_by      => p_usuario\n'
                              '    );\n'
                              '\n'
                              '    UPDATE pagos_reportados\n'
                              "       SET estado         = 'confirmado',\n"
                              "           pago_id        = (v_cobro->>'pago_id')::UUID,\n"
                              '           verificado_por = p_usuario,\n'
                              '           metodo_verificacion = COALESCE(\n'
                              "                                CASE WHEN p_usuario IS NOT NULL THEN 'human' "
                              'END,\n'
                              '                                v_r.metodo_verificacion),\n'
                              '           verificado_at  = NOW()\n'
                              '     WHERE id = p_id;\n'
                              '\n'
                              "    RETURN jsonb_build_object('reporte_id', p_id, 'cobro', v_cobro);\n"
                              'END;\n'),
 'consolida_cobros': ('',
                      'BOOLEAN',
                      'sql',
                      '\n'
                      '    SELECT COALESCE(\n'
                      "        (SELECT permisos ? '*'\n"
                      "             OR permisos ? 'finanzas.ver_todos'\n"
                      "             OR permisos ? 'finanzas.transferencias'\n"
                      '           FROM usuarios_sistema\n'
                      '          WHERE auth_id = auth.uid() AND activo\n'
                      '          LIMIT 1),\n'
                      '        /**\n'
                      '         * Sin legajo, TRUE.\n'
                      '         *\n'
                      '         * Es el middleware con el rol de servicio y las tareas programadas: no\n'
                      '         * tienen `auth.uid()` y necesitan ver todo para armar el cierre de caja y\n'
                      '         * el reporte. Devolver FALSE acá dejaría los dos PDF en blanco sin ningún\n'
                      '         * error que lo explique.\n'
                      '         */\n'
                      '        TRUE\n'
                      '    )\n'),
 'controlar_inicio_instalacion': ('',
                                  'TRIGGER',
                                  'plpgsql',
                                  '\n'
                                  'BEGIN\n'
                                  "    IF NEW.estado IN ('en_ruta', 'en_curso') AND NEW.estado IS DISTINCT "
                                  'FROM OLD.estado THEN\n'
                                  "        PERFORM exigir_trabajo_actual('instalacion', NEW.id);\n"
                                  '    END IF;\n'
                                  "    IF NEW.estado = 'en_curso' AND NEW.estado IS DISTINCT FROM OLD.estado "
                                  'THEN\n'
                                  '        PERFORM ingreso_automatico(NEW.llegada_at, NEW.llegada_lat, '
                                  'NEW.llegada_lng);\n'
                                  '    END IF;\n'
                                  '    RETURN NEW;\n'
                                  'END;\n'),
 'controlar_inicio_ticket': ('',
                             'TRIGGER',
                             'plpgsql',
                             '\n'
                             'BEGIN\n'
                             "    IF NEW.estado IN ('en_ruta', 'en_proceso') AND NEW.estado IS DISTINCT FROM "
                             'OLD.estado THEN\n'
                             "        PERFORM exigir_trabajo_actual('ticket', NEW.id);\n"
                             '    END IF;\n'
                             '    -- Solo la llegada marca el ingreso. "En ruta" es manejar.\n'
                             "    IF NEW.estado = 'en_proceso' AND NEW.estado IS DISTINCT FROM OLD.estado "
                             'THEN\n'
                             '        PERFORM ingreso_automatico(NEW.llegada_at, NEW.llegada_lat, '
                             'NEW.llegada_lng);\n'
                             '    END IF;\n'
                             '    RETURN NEW;\n'
                             'END;\n'),
 'controlar_km_jornada': ('',
                          'TRIGGER',
                          'plpgsql',
                          '\n'
                          'DECLARE\n'
                          '    v_jefe TEXT;\n'
                          'BEGIN\n'
                          '    -- La cuadrilla con la que salió, para los reportes. La primera que integra.\n'
                          '    IF NEW.cuadrilla_id IS NULL THEN\n'
                          '        SELECT cuadrilla_id INTO NEW.cuadrilla_id\n'
                          '          FROM cuadrilla_miembros WHERE tecnico_id = NEW.tecnico_id\n'
                          "         ORDER BY (rol = 'lider') DESC LIMIT 1;\n"
                          '    END IF;\n'
                          '\n'
                          '    IF (NEW.vehiculo_id IS NOT NULL OR NEW.km_inicio IS NOT NULL OR NEW.km_fin IS '
                          'NOT NULL)\n'
                          "       AND (TG_OP = 'INSERT'\n"
                          '            OR NEW.vehiculo_id IS DISTINCT FROM OLD.vehiculo_id\n'
                          '            OR NEW.km_inicio  IS DISTINCT FROM OLD.km_inicio\n'
                          '            OR NEW.km_fin     IS DISTINCT FROM OLD.km_fin)\n'
                          '       AND NOT puede_cargar_km(NEW.tecnico_id, NEW.fecha) THEN\n'
                          '        SELECT t.nombre INTO v_jefe FROM tecnicos t\n'
                          '         WHERE t.id = jefe_de_grupo(NEW.cuadrilla_id, NEW.fecha);\n'
                          "        RAISE EXCEPTION 'El vehículo y los kilómetros los registra el jefe de "
                          "grupo%.',\n"
                          "            COALESCE(' (' || v_jefe || ')', '')\n"
                          "            USING ERRCODE = 'P0001';\n"
                          '    END IF;\n'
                          '    RETURN NEW;\n'
                          'END;\n'),
 'controlar_reporte_reparacion': ('',
                                  'TRIGGER',
                                  'plpgsql',
                                  '\n'
                                  'BEGIN\n'
                                  "    IF NEW.tipo IN ('avance', 'reparada') THEN\n"
                                  '        PERFORM ingreso_automatico(NEW.creado_at, NEW.lat, NEW.lng);\n'
                                  '    END IF;\n'
                                  '    RETURN NEW;\n'
                                  'END;\n'),
 'convertir_cotizacion_en_prospecto': ('p_cotizacion UUID',
                                       'UUID',
                                       'plpgsql',
                                       '\n'
                                       'DECLARE\n'
                                       '    c   RECORD;\n'
                                       '    v_prospecto UUID;\n'
                                       'BEGIN\n'
                                       '    SELECT * INTO c FROM cotizaciones WHERE id = p_cotizacion;\n'
                                       '    IF NOT FOUND THEN\n'
                                       "        RAISE EXCEPTION 'No existe esa cotización';\n"
                                       '    END IF;\n'
                                       '\n'
                                       '    IF c.prospecto_id IS NOT NULL OR c.convertida_en IS NOT NULL '
                                       'THEN\n'
                                       '        RETURN COALESCE(c.prospecto_id, c.convertida_en);\n'
                                       '    END IF;\n'
                                       '\n'
                                       "    IF NULLIF(BTRIM(COALESCE(c.nombre, '')), '') IS NULL THEN\n"
                                       "        RAISE EXCEPTION 'La cotización no tiene nombre: no se puede "
                                       "crear el prospecto';\n"
                                       '    END IF;\n'
                                       '\n'
                                       '    INSERT INTO prospectos (\n'
                                       '        nombre, telefono, sector, plan_id, promocion_id, origen, '
                                       'estado,\n'
                                       '        vendedor_id, creado_por, notas\n'
                                       '    ) VALUES (\n'
                                       '        c.nombre, c.telefono, c.sector, c.plan_id, c.promocion_id, '
                                       "'local', 'cotizado',\n"
                                       '        COALESCE(c.vendedor_id, c.creado_por), c.creado_por,\n'
                                       "        'Viene de la cotización N° ' || c.numero\n"
                                       '    )\n'
                                       '    RETURNING id INTO v_prospecto;\n'
                                       '\n'
                                       '    UPDATE cotizaciones\n'
                                       '       SET prospecto_id = v_prospecto,\n'
                                       '           convertida_en = v_prospecto,\n'
                                       "           estado = CASE WHEN estado = 'borrador' THEN 'enviada' "
                                       'ELSE estado END\n'
                                       '     WHERE id = p_cotizacion;\n'
                                       '\n'
                                       '    RETURN v_prospecto;\n'
                                       'END '),
 'copiar_modelo_a_prestador': ('p_prestador UUID',
                               'INT',
                               'plpgsql',
                               '\n'
                               'DECLARE\n'
                               '    v_n INT;\n'
                               'BEGIN\n'
                               '    IF p_prestador IS NULL THEN\n'
                               "        RAISE EXCEPTION 'Falta decir a qué prestador copiarle el modelo';\n"
                               '    END IF;\n'
                               '\n'
                               '    -- Reejecutarlo no duplica: si ya tiene cláusulas propias, se deja como '
                               'está.\n'
                               '    IF EXISTS (SELECT 1 FROM clausulas_contrato WHERE prestador_id = '
                               'p_prestador) THEN\n'
                               '        RETURN 0;\n'
                               '    END IF;\n'
                               '\n'
                               '    INSERT INTO clausulas_contrato\n'
                               '        (prestador_id, orden, numeral, titulo, texto, cierre, cierre2, '
                               'numerales,\n'
                               '         bloque, bloque_final, condicion, etiqueta_condicion, raya_firma,\n'
                               '         lista_titulo, lista_campo, activa)\n'
                               '    SELECT p_prestador, orden, numeral, titulo, texto, cierre, cierre2, '
                               'numerales,\n'
                               '           bloque, bloque_final, condicion, etiqueta_condicion, raya_firma,\n'
                               '           lista_titulo, lista_campo, activa\n'
                               '      FROM clausulas_contrato\n'
                               '     WHERE prestador_id IS NULL\n'
                               '     ORDER BY orden;\n'
                               '\n'
                               '    GET DIAGNOSTICS v_n = ROW_COUNT;\n'
                               '    RETURN v_n;\n'
                               'END '),
 'copiar_numero_orden': ('',
                         'TRIGGER',
                         'plpgsql',
                         '\n'
                         'BEGIN\n'
                         '    IF NEW.client_id IS NOT NULL AND NEW.numero IS NOT NULL THEN\n'
                         '        UPDATE clientes\n'
                         '           SET numero_orden = COALESCE(numero_orden, NEW.numero)\n'
                         '         WHERE id = NEW.client_id;\n'
                         '    END IF;\n'
                         '    RETURN NEW;\n'
                         'END '),
 'crear_almacen_del_tecnico': ('',
                               'TRIGGER',
                               'plpgsql',
                               '\n'
                               'BEGIN\n'
                               '    -- Al reactivar a alguien que ya tuvo almacén no se crea otro: el suyo '
                               'sigue\n'
                               '    -- ahí con lo que tenía, que es justamente lo que hay que reclamarle.\n'
                               '    IF NEW.activo AND NOT EXISTS (SELECT 1 FROM almacenes WHERE tecnico_id = '
                               'NEW.id) THEN\n'
                               '        INSERT INTO almacenes (nombre, tipo, tecnico_id)\n'
                               "        VALUES ('Almacén de ' || NEW.nombre, 'tecnico', NEW.id);\n"
                               '\n'
                               '    -- Si le corrigieron el nombre, el almacén lo sigue. Sin esto, el\n'
                               '    -- desplegable de transferencias termina lleno de nombres viejos y '
                               'bodega\n'
                               '    -- le manda material al técnico equivocado.\n'
                               '    -- `TG_OP` no es de más: en un INSERT, OLD es NULL y la comparación '
                               'daría\n'
                               '    -- verdadera siempre, disparando un UPDATE que no encuentra nada.\n'
                               "    ELSIF TG_OP = 'UPDATE' AND NEW.nombre IS DISTINCT FROM OLD.nombre THEN\n"
                               '        UPDATE almacenes\n'
                               "           SET nombre = 'Almacén de ' || NEW.nombre\n"
                               '         WHERE tecnico_id = NEW.id;\n'
                               '    END IF;\n'
                               '    RETURN NEW;\n'
                               'END '),
 'crear_entrega_inventario': ('p_equipos UUID[], p_notas TEXT DEFAULT NULL, p_firma TEXT DEFAULT NULL',
                              'entregas_inventario',
                              'plpgsql',
                              '\n'
                              'DECLARE\n'
                              '    v_legajo  UUID := mi_legajo_id();\n'
                              '    v_tecnico UUID := mi_tecnico_id();\n'
                              '    v_almacen UUID;\n'
                              '    v_acta    entregas_inventario%ROWTYPE;\n'
                              '    v_eq      RECORD;\n'
                              '    v_n       INT := 0;\n'
                              'BEGIN\n'
                              '    IF v_legajo IS NULL THEN\n'
                              "        RAISE EXCEPTION 'No se sabe quién está entregando';\n"
                              '    END IF;\n'
                              '\n'
                              "    IF COALESCE(BTRIM(p_firma), '') = '' THEN\n"
                              "        RAISE EXCEPTION 'Falta tu firma: el acta necesita la de quien entrega "
                              "y la de quien recibe';\n"
                              '    END IF;\n'
                              '\n'
                              '    SELECT id INTO v_almacen FROM almacenes WHERE tecnico_id = v_tecnico '
                              'LIMIT 1;\n'
                              '    IF v_almacen IS NULL THEN\n'
                              "        RAISE EXCEPTION 'No tienes un almacén propio: no hay desde dónde "
                              "entregar';\n"
                              '    END IF;\n'
                              '\n'
                              '    INSERT INTO entregas_inventario (\n'
                              '        entrega_id, almacen_origen, notas, firma_entrega_b64, '
                              'firma_entrega_en\n'
                              '    )\n'
                              "    VALUES (v_legajo, v_almacen, NULLIF(BTRIM(p_notas), ''), p_firma, NOW())\n"
                              '    RETURNING * INTO v_acta;\n'
                              '\n'
                              '    FOR v_eq IN\n'
                              '        SELECT e.id, e.serie, a.nombre AS modelo,\n'
                              '               (SELECT r.id FROM retiros_equipo r\n'
                              "                 WHERE r.equipo_id = e.id AND r.estado = 'recuperado'\n"
                              '                 ORDER BY r.cerrado_en DESC LIMIT 1) AS retiro_id\n'
                              '          FROM equipos e\n'
                              '          LEFT JOIN articulos a ON a.id = e.articulo_id\n'
                              "         WHERE e.id = ANY(COALESCE(p_equipos, '{}'))\n"
                              '           AND e.almacen_id = v_almacen\n'
                              "           AND e.estado = 'en_stock'\n"
                              '    LOOP\n'
                              '        INSERT INTO entrega_items (entrega_id, equipo_id, serie, modelo, '
                              'retiro_id)\n'
                              '        VALUES (v_acta.id, v_eq.id, v_eq.serie, v_eq.modelo, '
                              'v_eq.retiro_id);\n'
                              '        v_n := v_n + 1;\n'
                              '    END LOOP;\n'
                              '\n'
                              '    IF v_n = 0 THEN\n'
                              '        -- Se borra en vez de dejar un acta vacía: un acta sin equipos es '
                              'papel\n'
                              '        -- que después alguien tiene que interpretar.\n'
                              '        DELETE FROM entregas_inventario WHERE id = v_acta.id;\n'
                              "        RAISE EXCEPTION 'Ninguno de esos equipos está en tu almacén';\n"
                              '    END IF;\n'
                              '\n'
                              '    RETURN v_acta;\n'
                              'END '),
 'dar_de_baja_cliente': ('p_cliente UUID, p_motivo UUID DEFAULT NULL, p_nota TEXT DEFAULT NULL',
                         'clientes',
                         'plpgsql',
                         '\n'
                         'DECLARE\n'
                         '    v_legajo UUID := mi_legajo_id();\n'
                         '    v_fila   clientes%ROWTYPE;\n'
                         '    v_motivo TEXT;\n'
                         'BEGIN\n'
                         '    UPDATE clientes\n'
                         "       SET estado         = 'baja',\n"
                         '           motivo_baja_id = p_motivo,\n'
                         '           baja_en        = COALESCE(baja_en, NOW()),\n'
                         "           baja_nota      = COALESCE(NULLIF(BTRIM(p_nota), ''), baja_nota),\n"
                         '           updated_at     = NOW()\n'
                         '     WHERE id = p_cliente\n'
                         '    RETURNING * INTO v_fila;\n'
                         '\n'
                         '    IF NOT FOUND THEN\n'
                         "        RAISE EXCEPTION 'No existe ese abonado';\n"
                         '    END IF;\n'
                         '\n'
                         '    SELECT nombre INTO v_motivo FROM motivos_baja WHERE id = p_motivo;\n'
                         '\n'
                         '    INSERT INTO auditoria_sistema (\n'
                         '        usuario_id, usuario_nombre, usuario_rol, accion, descripcion,\n'
                         '        entidad, entidad_id, datos\n'
                         '    ) VALUES (\n'
                         '        v_legajo,\n'
                         '        COALESCE(\n'
                         "            (SELECT TRIM(CONCAT(u.nombre, ' ', COALESCE(u.apellido, '')))\n"
                         '               FROM usuarios_sistema u WHERE u.id = v_legajo),\n'
                         "            'Sistema'),\n"
                         '        (SELECT u.rol FROM usuarios_sistema u WHERE u.id = v_legajo),\n'
                         "        'cliente.baja',\n"
                         "        FORMAT('Dio de baja a %s%s', v_fila.nombre,\n"
                         "               COALESCE(' — ' || v_motivo, '')),\n"
                         "        'cliente', p_cliente::TEXT,\n"
                         "        jsonb_build_object('motivo_id', p_motivo, 'motivo', v_motivo, 'nota', "
                         'p_nota)\n'
                         '    );\n'
                         '\n'
                         '    -- La calidad de la cohorte de ese cliente cambia con esto. Se recalcula acá\n'
                         '    -- para que la ficha muestre el efecto sin esperar a la corrida de la noche.\n'
                         '    PERFORM evaluar_cohortes_de_cliente(p_cliente);\n'
                         '\n'
                         '    RETURN v_fila;\n'
                         'END '),
 'detectar_alertas': ('',
                      'TABLE (abiertos INT, resueltos INT)',
                      'plpgsql',
                      '\n'
                      'DECLARE\n'
                      '    v_grupo   alerta_reglas%ROWTYPE;\n'
                      '    v_ind     alerta_reglas%ROWTYPE;\n'
                      '    v_pot     alerta_reglas%ROWTYPE;\n'
                      '    v_abre    INT := 0;\n'
                      '    v_cierra  INT := 0;\n'
                      '    r         RECORD;\n'
                      '    q         RECORD;\n'
                      'BEGIN\n'
                      "    SELECT * INTO v_grupo FROM alerta_reglas WHERE clave = 'corte_grupo';\n"
                      "    SELECT * INTO v_ind   FROM alerta_reglas WHERE clave = 'ont_caida';\n"
                      "    SELECT * INTO v_pot   FROM alerta_reglas WHERE clave = 'potencia_critica';\n"
                      '\n'
                      '    /*\n'
                      '     * El grupo de cada ONU: la caja si la hay, y si no el puerto PON.\n'
                      '     *\n'
                      '     * Se resuelve una sola vez porque se usa tres veces —contar caídas por\n'
                      '     * grupo, saltear los abonados de un grupo ya avisado, y cerrar el evento\n'
                      '     * cuando el grupo vuelve—.\n'
                      '     */\n'
                      '    CREATE TEMP TABLE IF NOT EXISTS _grupos_onu (\n'
                      '        onu_id UUID PRIMARY KEY,\n'
                      '        grupo_tipo TEXT,\n'
                      '        grupo_clave TEXT,\n'
                      '        grupo_nombre TEXT,\n'
                      '        caida BOOLEAN\n'
                      '    ) ON COMMIT DROP;\n'
                      '\n'
                      '    -- TRUNCATE y no DELETE: `pg_safeupdate`, que la base carga en las sesiones\n'
                      '    -- del API, rechaza un DELETE sin WHERE.\n'
                      '    TRUNCATE _grupos_onu;\n'
                      '\n'
                      '    INSERT INTO _grupos_onu\n'
                      '    SELECT\n'
                      '        o.id,\n'
                      "        CASE WHEN o.nap_id IS NOT NULL THEN 'nap' ELSE 'pon' END,\n"
                      '        CASE WHEN o.nap_id IS NOT NULL\n'
                      '             THEN o.nap_id::TEXT\n'
                      "             ELSE o.olt_id::TEXT || '/' || COALESCE(o.frame, 0) || '/' ||\n"
                      "                  COALESCE(o.slot, 0) || '/' || COALESCE(o.puerto, 0)\n"
                      '        END,\n'
                      '        CASE WHEN o.nap_id IS NOT NULL\n'
                      "             THEN COALESCE(p.nombre, 'Caja sin nombre')\n"
                      "             ELSE COALESCE(ol.nombre, 'OLT') || ' ' || COALESCE(o.frame, 0) || '/' "
                      '||\n'
                      "                  COALESCE(o.slot, 0) || '/' || COALESCE(o.puerto, 0)\n"
                      '        END,\n'
                      "        o.estado IN ('offline', 'los', 'dying_gasp')\n"
                      '      FROM onus o\n'
                      '      LEFT JOIN puntos_red p ON p.id = o.nap_id\n'
                      '      LEFT JOIN olts ol      ON ol.id = o.olt_id;\n'
                      '\n'
                      '    -- ── 1. Cortes agrupados ─────────────────────────────────────────────────\n'
                      '    IF v_grupo.activa THEN\n'
                      '        FOR r IN\n'
                      '            SELECT g.grupo_tipo, g.grupo_clave, g.grupo_nombre,\n'
                      '                   COUNT(*) FILTER (WHERE g.caida)::INT AS caidas\n'
                      '              FROM _grupos_onu g\n'
                      '             GROUP BY g.grupo_tipo, g.grupo_clave, g.grupo_nombre\n'
                      '            HAVING COUNT(*) FILTER (WHERE g.caida) >= COALESCE(v_grupo.umbral, 3)\n'
                      '        LOOP\n'
                      '            INSERT INTO alerta_eventos (regla, entidad, entidad_id, etiqueta, '
                      'abonados, detalle)\n'
                      "            VALUES ('corte_grupo', r.grupo_tipo, r.grupo_clave, r.grupo_nombre, "
                      'r.caidas,\n'
                      "                    jsonb_build_object('grupo', r.grupo_tipo))\n"
                      '            ON CONFLICT (regla, entidad, entidad_id) WHERE resuelto_en IS NULL\n'
                      '            DO UPDATE SET abonados = EXCLUDED.abonados;\n'
                      '\n'
                      '            v_abre := v_abre + 1;\n'
                      '        END LOOP;\n'
                      '    END IF;\n'
                      '\n'
                      '    -- ── 2. Las que quedaron solas ───────────────────────────────────────────\n'
                      '    IF v_ind.activa THEN\n'
                      '        FOR r IN\n'
                      '            SELECT o.id, o.sn, g.grupo_nombre\n'
                      '              FROM onus o\n'
                      '              JOIN _grupos_onu g ON g.onu_id = o.id\n'
                      '             WHERE g.caida\n'
                      '               AND NOT EXISTS (\n'
                      '                   SELECT 1 FROM alerta_eventos e\n'
                      "                    WHERE e.regla = 'corte_grupo'\n"
                      '                      AND e.entidad = g.grupo_tipo\n'
                      '                      AND e.entidad_id = g.grupo_clave\n'
                      '                      AND e.resuelto_en IS NULL\n'
                      '               )\n'
                      '        LOOP\n'
                      '            SELECT * INTO q FROM quien_es_la_onu(r.id);\n'
                      '\n'
                      '            INSERT INTO alerta_eventos (regla, entidad, entidad_id, etiqueta, zona, '
                      'abonados, detalle)\n'
                      "            VALUES ('ont_caida', 'onu', r.id::TEXT, q.nombre, q.zona, 1,\n"
                      '                    jsonb_build_object(\n'
                      "                        'cliente_id', q.cliente_id,\n"
                      "                        'codigo', q.codigo,\n"
                      "                        'telefono', q.telefono,\n"
                      "                        'direccion', q.direccion,\n"
                      "                        'sn', r.sn,\n"
                      "                        'grupo', r.grupo_nombre\n"
                      '                    ))\n'
                      '            ON CONFLICT (regla, entidad, entidad_id) WHERE resuelto_en IS NULL\n'
                      '            DO UPDATE SET etiqueta = EXCLUDED.etiqueta,\n'
                      '                          zona = EXCLUDED.zona,\n'
                      '                          detalle = EXCLUDED.detalle;\n'
                      '\n'
                      '            v_abre := v_abre + 1;\n'
                      '        END LOOP;\n'
                      '    END IF;\n'
                      '\n'
                      '    -- ── 3. Potencia bajo el umbral, con la ONT todavía arriba ───────────────\n'
                      '    IF v_pot.activa THEN\n'
                      '        FOR r IN\n'
                      '            SELECT o.id, o.sn, o.rx_power_dbm\n'
                      '              FROM onus o\n'
                      "             WHERE o.estado = 'online'\n"
                      '               AND o.rx_power_dbm IS NOT NULL\n'
                      '               AND o.rx_power_dbm < COALESCE(v_pot.umbral, -27)\n'
                      '        LOOP\n'
                      '            SELECT * INTO q FROM quien_es_la_onu(r.id);\n'
                      '\n'
                      '            INSERT INTO alerta_eventos (regla, entidad, entidad_id, etiqueta, zona, '
                      'detalle)\n'
                      "            VALUES ('potencia_critica', 'onu', r.id::TEXT, q.nombre, q.zona,\n"
                      "                    jsonb_build_object('rx_dbm', r.rx_power_dbm, 'sn', r.sn,\n"
                      "                                       'telefono', q.telefono, 'direccion', "
                      'q.direccion))\n'
                      '            ON CONFLICT (regla, entidad, entidad_id) WHERE resuelto_en IS NULL\n'
                      '            DO UPDATE SET etiqueta = EXCLUDED.etiqueta, detalle = EXCLUDED.detalle;\n'
                      '\n'
                      '            v_abre := v_abre + 1;\n'
                      '        END LOOP;\n'
                      '    END IF;\n'
                      '\n'
                      '    -- ── 4. Lo que volvió ────────────────────────────────────────────────────\n'
                      '    WITH vueltas AS (\n'
                      '        UPDATE alerta_eventos e\n'
                      '           SET resuelto_en = NOW()\n'
                      '         WHERE e.resuelto_en IS NULL\n'
                      '           AND (\n'
                      "             (e.regla = 'ont_caida' AND e.entidad = 'onu'\n"
                      '              AND EXISTS (SELECT 1 FROM onus o\n'
                      "                           WHERE o.id::TEXT = e.entidad_id AND o.estado = 'online'))\n"
                      '             OR\n'
                      "             (e.regla = 'potencia_critica' AND e.entidad = 'onu'\n"
                      '              AND EXISTS (SELECT 1 FROM onus o WHERE o.id::TEXT = e.entidad_id\n'
                      '                            AND (o.rx_power_dbm IS NULL\n'
                      '                                 OR o.rx_power_dbm >= COALESCE(v_pot.umbral, -27))))\n'
                      '             OR\n'
                      "             (e.regla = 'corte_grupo'\n"
                      '              AND (SELECT COUNT(*) FROM _grupos_onu g\n'
                      '                    WHERE g.grupo_tipo = e.entidad\n'
                      '                      AND g.grupo_clave = e.entidad_id\n'
                      '                      AND g.caida) < COALESCE(v_grupo.umbral, 3))\n'
                      '           )\n'
                      '        RETURNING 1\n'
                      '    )\n'
                      '    SELECT COUNT(*) INTO v_cierra FROM vueltas;\n'
                      '\n'
                      '    RETURN QUERY SELECT v_abre, v_cierra;\n'
                      'END '),
 'detectar_nap_degradada': ('',
                            'INT',
                            'plpgsql',
                            '\n'
                            'DECLARE\n'
                            '    v_regla   alerta_reglas%ROWTYPE;\n'
                            '    v_umbral  NUMERIC;\n'
                            '    v_nuevos  INT := 0;\n'
                            '    v_id      UUID;\n'
                            '    r         RECORD;\n'
                            '    u         RECORD;\n'
                            'BEGIN\n'
                            "    SELECT * INTO v_regla FROM alerta_reglas WHERE clave = 'degradacion';\n"
                            '    IF NOT FOUND OR NOT v_regla.activa THEN\n'
                            '        RETURN 0;\n'
                            '    END IF;\n'
                            '    v_umbral := COALESCE(v_regla.umbral, 2);\n'
                            '\n'
                            '    CREATE TEMP TABLE IF NOT EXISTS _nap_hoy (\n'
                            '        nap_id UUID PRIMARY KEY, onts INT, ahora NUMERIC, antes NUMERIC\n'
                            '    ) ON COMMIT DROP;\n'
                            '    TRUNCATE _nap_hoy;\n'
                            '\n'
                            '    INSERT INTO _nap_hoy (nap_id, onts, ahora, antes)\n'
                            '    WITH ahora AS (\n'
                            '        SELECT h.onu_id, AVG(h.rx_dbm) AS rx\n'
                            '          FROM onu_optica_historial h\n'
                            "         WHERE h.medida_at >= NOW() - INTERVAL '1 day'\n"
                            '           AND h.rx_dbm IS NOT NULL\n'
                            '         GROUP BY h.onu_id\n'
                            '    ),\n'
                            '    antes AS (\n'
                            '        SELECT h.onu_id, AVG(h.rx_dbm) AS rx\n'
                            '          FROM onu_optica_historial h\n'
                            "         WHERE h.medida_at BETWEEN NOW() - INTERVAL '8 days' AND NOW() - "
                            "INTERVAL '6 days'\n"
                            '           AND h.rx_dbm IS NOT NULL\n'
                            '         GROUP BY h.onu_id\n'
                            '    )\n'
                            '    SELECT o.nap_id, COUNT(*)::int, ROUND(AVG(a.rx), 2), ROUND(AVG(b.rx), 2)\n'
                            '      FROM ahora a\n'
                            '      JOIN antes b ON b.onu_id = a.onu_id\n'
                            '      JOIN onus o  ON o.id = a.onu_id\n'
                            '     WHERE o.nap_id IS NOT NULL\n'
                            '     GROUP BY o.nap_id\n'
                            '    HAVING COUNT(*) >= 3;\n'
                            '\n'
                            '    -- ── Abrir o actualizar ──\n'
                            '    FOR r IN\n'
                            '        SELECT n.*, p.nombre, p.direccion,\n'
                            '               (SELECT c.zona FROM clientes c\n'
                            '                 WHERE c.nap_id = n.nap_id AND c.zona IS NOT NULL\n'
                            '                 GROUP BY c.zona ORDER BY COUNT(*) DESC LIMIT 1) AS zona\n'
                            '          FROM _nap_hoy n\n'
                            '          JOIN puntos_red p ON p.id = n.nap_id\n'
                            '         WHERE n.antes - n.ahora >= v_umbral\n'
                            '    LOOP\n'
                            '        UPDATE alerta_eventos\n'
                            '           SET abonados = r.onts,\n'
                            '               detalle  = detalle || jsonb_build_object(\n'
                            "                   'hasta', r.ahora, 'onus', r.onts,\n"
                            "                   'caida', ROUND(r.antes - r.ahora, 2), 'medido_en', NOW())\n"
                            "         WHERE regla = 'degradacion' AND entidad = 'nap'\n"
                            '           AND entidad_id = r.nap_id::text AND resuelto_en IS NULL;\n'
                            '\n'
                            '        IF NOT FOUND THEN\n'
                            '            INSERT INTO alerta_eventos (regla, entidad, entidad_id, etiqueta, '
                            'zona, abonados, detalle)\n'
                            "            VALUES ('degradacion', 'nap', r.nap_id::text, r.nombre, r.zona, "
                            'r.onts,\n'
                            '                    jsonb_build_object(\n'
                            "                        'desde', r.antes, 'hasta', r.ahora,\n"
                            "                        'caida', ROUND(r.antes - r.ahora, 2), 'dias', 7,\n"
                            "                        'onus', r.onts, 'direccion', r.direccion, 'medido_en', "
                            'NOW()))\n'
                            '            RETURNING id INTO v_id;\n'
                            '            v_nuevos := v_nuevos + 1;\n'
                            '\n'
                            '            FOR u IN\n'
                            '                SELECT id FROM usuarios_sistema\n'
                            "                 WHERE activo AND rol IN ('super_admin', 'admin', "
                            "'jefe_tecnico', 'tecnico', 'finanzas')\n"
                            '            LOOP\n'
                            '                PERFORM notificar(\n'
                            "                    u.id, 'nap_degradada',\n"
                            "                    format('%s: la caja se está degradando', r.nombre),\n"
                            "                    format('El promedio de sus %s clientes bajó de %s a %s dBm "
                            "(%s dB en 7 días). '\n"
                            "                           'Es la fibra, un conector o el splitter que alimenta "
                            "la caja, no un cliente.',\n"
                            '                           r.onts, ROUND(r.antes, 1), ROUND(r.ahora, 1), '
                            'ROUND(r.antes - r.ahora, 1)),\n'
                            "                    '/naps', 'nap', r.nap_id::text);\n"
                            '            END LOOP;\n'
                            '        END IF;\n'
                            '    END LOOP;\n'
                            '\n'
                            '    -- ── Cerrar ──\n'
                            '    -- Contra el promedio de ANTES de degradarse, guardado al abrir.\n'
                            '    UPDATE alerta_eventos e\n'
                            '       SET resuelto_en = NOW(),\n'
                            "           detalle = e.detalle || jsonb_build_object('hasta', n.ahora, "
                            "'medido_en', NOW())\n"
                            '      FROM _nap_hoy n\n'
                            "     WHERE e.regla = 'degradacion' AND e.entidad = 'nap' AND e.resuelto_en IS "
                            'NULL\n'
                            '       AND e.entidad_id = n.nap_id::text\n'
                            "       AND n.ahora >= (e.detalle->>'desde')::numeric - 1;\n"
                            '\n'
                            '    -- Una caja que se quedó sin lecturas tres días (se borró, se reasignaron '
                            'sus\n'
                            '    -- ONTs, la OLT dejó de leerse) no puede quedar abierta para siempre.\n'
                            '    UPDATE alerta_eventos e\n'
                            '       SET resuelto_en = NOW()\n'
                            "     WHERE e.regla = 'degradacion' AND e.entidad = 'nap' AND e.resuelto_en IS "
                            'NULL\n'
                            "       AND COALESCE((e.detalle->>'medido_en')::timestamptz, e.empezo_en) < "
                            "NOW() - INTERVAL '3 days';\n"
                            '\n'
                            '    RETURN v_nuevos;\n'
                            'END;\n'),
 'detectar_reactivaciones': ('p_desde DATE DEFAULT NULL',
                             'TABLE (detectadas INT)',
                             'plpgsql',
                             '\n'
                             'DECLARE\n'
                             '    v_reglas comision_reglas%ROWTYPE;\n'
                             '    v_desde  DATE;\n'
                             '    v_n      INT := 0;\n'
                             'BEGIN\n'
                             '    SELECT * INTO v_reglas\n'
                             '      FROM comision_reglas\n'
                             '     WHERE esquema_id = esquema_comisiones_vigente(CURRENT_DATE);\n'
                             '\n'
                             '    IF NOT FOUND THEN\n'
                             '        RETURN QUERY SELECT 0;\n'
                             '        RETURN;\n'
                             '    END IF;\n'
                             '\n'
                             '    -- Por defecto se miran los últimos 45 días. Recorrer el historial '
                             'completo\n'
                             '    -- todas las noches es trabajo inútil: lo viejo ya se detectó. Con una '
                             'fecha\n'
                             '    -- explícita se puede reconstruir hacia atrás.\n'
                             '    v_desde := COALESCE(p_desde, CURRENT_DATE - 45);\n'
                             '\n'
                             '    WITH pagos_ordenados AS (\n'
                             '        SELECT\n'
                             '            pg.id,\n'
                             '            pg.client_id,\n'
                             '            pg.fecha_pago::DATE AS fecha,\n'
                             '            LAG(pg.fecha_pago::DATE) OVER (PARTITION BY pg.client_id ORDER BY '
                             'pg.fecha_pago) AS anterior\n'
                             '        FROM pagos pg\n'
                             '        WHERE NOT pg.anulado\n'
                             '    ),\n'
                             '    vueltas AS (\n'
                             '        SELECT\n'
                             '            p.id AS pago_id,\n'
                             '            p.client_id,\n'
                             '            p.fecha,\n'
                             '            p.anterior,\n'
                             '            (EXTRACT(YEAR FROM AGE(p.fecha, p.anterior)) * 12\n'
                             '             + EXTRACT(MONTH FROM AGE(p.fecha, p.anterior)))::INT AS meses\n'
                             '        FROM pagos_ordenados p\n'
                             '        WHERE p.anterior IS NOT NULL\n'
                             '          AND p.fecha >= v_desde\n'
                             '    ),\n'
                             '    insertadas AS (\n'
                             '        INSERT INTO reactivaciones (\n'
                             '            cliente_id, vendedor_id, pago_id, pago_anterior, reactivado_el,\n'
                             '            meses_inactivo, retiro_id, origen\n'
                             '        )\n'
                             '        SELECT\n'
                             '            v.client_id,\n'
                             '            cv.vendedor_id,\n'
                             '            v.pago_id,\n'
                             '            v.anterior,\n'
                             '            v.fecha,\n'
                             '            v.meses,\n'
                             '            (SELECT re.id FROM retiros_equipo re\n'
                             '              WHERE re.cliente_id = v.client_id\n'
                             '              ORDER BY re.creado_en DESC LIMIT 1),\n'
                             "            'automatica'\n"
                             '        FROM vueltas v\n'
                             '        LEFT JOIN v_cliente_vendedor cv ON cv.cliente_id = v.client_id\n'
                             '        WHERE v.meses >= v_reglas.meses_sin_pago_suspension\n'
                             '        ON CONFLICT (cliente_id, reactivado_el) DO NOTHING\n'
                             '        RETURNING 1\n'
                             '    )\n'
                             '    SELECT COUNT(*) INTO v_n FROM insertadas;\n'
                             '\n'
                             '    RETURN QUERY SELECT v_n;\n'
                             'END '),
 'dias_de_atraso': ('p_cliente UUID, p_hasta DATE DEFAULT CURRENT_DATE',
                    'INT',
                    'sql',
                    '\n'
                    '    SELECT GREATEST(\n'
                    '        0,\n'
                    '        COALESCE(\n'
                    '            (p_hasta - MIN(COALESCE(f.fecha_vencimiento, f.fecha_emision))::DATE),\n'
                    '            0\n'
                    '        )\n'
                    '    )\n'
                    '      FROM v_facturas_por_cobrar f\n'
                    '     WHERE f.client_id = p_cliente;\n'),
 'dirige_cuadrillas': ('',
                       'BOOLEAN',
                       'sql',
                       '\n'
                       '    SELECT EXISTS (\n'
                       '        SELECT 1 FROM usuarios_sistema\n'
                       '         WHERE auth_id = auth.uid() AND activo\n'
                       "           AND rol IN ('super_admin', 'admin', 'jefe_tecnico')\n"
                       '    )\n'),
 'distancia_m': ('p_lat1 NUMERIC, p_lng1 NUMERIC, p_lat2 NUMERIC, p_lng2 NUMERIC',
                 'INT',
                 'sql',
                 '\n'
                 '    SELECT CASE WHEN p_lat1 IS NULL OR p_lng1 IS NULL OR p_lat2 IS NULL OR p_lng2 IS NULL '
                 'THEN NULL\n'
                 '    ELSE ROUND(6371000 * 2 * ASIN(SQRT(\n'
                 '        POWER(SIN(RADIANS(p_lat2 - p_lat1) / 2), 2) +\n'
                 '        COS(RADIANS(p_lat1)) * COS(RADIANS(p_lat2)) *\n'
                 '        POWER(SIN(RADIANS(p_lng2 - p_lng1) / 2), 2))))::int\n'
                 '    END\n'),
 'documento_de_identidad': ('p_categoria TEXT',
                            'BOOLEAN',
                            'sql',
                            '\n'
                            "    SELECT p_categoria IN ('cedula_frontal', 'cedula_reverso', 'ruc', "
                            "'cedula_representante')\n"),
 'documento_reemplaza_al_anterior': ('',
                                     'TRIGGER',
                                     'plpgsql',
                                     '\n'
                                     'BEGIN\n'
                                     '    IF NOT documento_de_identidad(NEW.categoria) THEN RETURN NEW; END '
                                     'IF;\n'
                                     '    IF NEW.reemplazado_en IS NOT NULL THEN RETURN NEW; END IF;\n'
                                     '\n'
                                     '    UPDATE documentos\n'
                                     '       SET reemplazado_en  = NOW(),\n'
                                     '           reemplazado_por = NEW.id\n'
                                     '     WHERE id <> NEW.id\n'
                                     '       AND categoria = NEW.categoria\n'
                                     '       AND reemplazado_en IS NULL\n'
                                     '       AND (\n'
                                     '           (NEW.client_id IS NOT NULL AND client_id = NEW.client_id)\n'
                                     '        OR (NEW.instalacion_id IS NOT NULL AND instalacion_id = '
                                     'NEW.instalacion_id)\n'
                                     '       );\n'
                                     '\n'
                                     '    RETURN NEW;\n'
                                     'END '),
 'documentos_pasan_al_abonado': ('',
                                 'TRIGGER',
                                 'plpgsql',
                                 '\n'
                                 'BEGIN\n'
                                 '    IF NEW.client_id IS NULL THEN RETURN NEW; END IF;\n'
                                 '\n'
                                 '    UPDATE documentos\n'
                                 '       SET client_id = NEW.client_id\n'
                                 '     WHERE instalacion_id = NEW.id\n'
                                 '       AND client_id IS NULL;\n'
                                 '\n'
                                 '    RETURN NEW;\n'
                                 'END '),
 'en_servicio': ('p_tecnico UUID, p_momento TIMESTAMPTZ DEFAULT NOW()',
                 'BOOLEAN',
                 'sql',
                 '\n'
                 '    SELECT p_tecnico IS NOT NULL AND (\n'
                 '        EXISTS (\n'
                 '            SELECT 1 FROM jornadas j\n'
                 '             WHERE j.tecnico_id = p_tecnico\n'
                 '               AND j.inicio_at IS NOT NULL\n'
                 "               AND j.inicio_at <= p_momento + INTERVAL '2 minutes'\n"
                 '               AND (j.fin_at IS NULL OR j.fin_at >= p_momento)\n'
                 '        )\n'
                 '        OR EXISTS (\n'
                 '            SELECT 1 FROM salidas_emergencia e\n'
                 '             WHERE e.tecnico_id = p_tecnico\n'
                 "               AND e.inicio_at <= p_momento + INTERVAL '2 minutes'\n"
                 '               AND (e.fin_at IS NULL OR e.fin_at >= p_momento)\n'
                 '        )\n'
                 '    )\n'),
 'enviar_expediente_a_instalaciones': ('p_expediente UUID',
                                       'UUID',
                                       'plpgsql',
                                       '\n'
                                       'DECLARE\n'
                                       '    v   RECORD;\n'
                                       '    v_instalacion UUID;\n'
                                       'BEGIN\n'
                                       '    SELECT * INTO v FROM v_expedientes WHERE id = p_expediente;\n'
                                       '    IF NOT FOUND THEN\n'
                                       "        RAISE EXCEPTION 'No existe ese expediente';\n"
                                       '    END IF;\n'
                                       '\n'
                                       '    IF v.instalacion_id IS NOT NULL THEN\n'
                                       '        -- Ya se mandó. Devolver la orden existente en vez de crear '
                                       'otra evita\n'
                                       '        -- que un doble clic genere dos visitas del técnico a la '
                                       'misma casa.\n'
                                       '        RETURN v.instalacion_id;\n'
                                       '    END IF;\n'
                                       '\n'
                                       '    IF NOT v.completo THEN\n'
                                       "        RAISE EXCEPTION 'El expediente está incompleto: falta %',\n"
                                       "            CONCAT_WS(', ',\n"
                                       "                CASE WHEN NOT v.ok_datos            THEN 'confirmar "
                                       "los datos' END,\n"
                                       "                CASE WHEN NOT v.ok_cedula_frontal   THEN 'la cédula "
                                       "(frente)' END,\n"
                                       "                CASE WHEN NOT v.ok_cedula_posterior THEN 'la cédula "
                                       "(dorso)' END,\n"
                                       "                CASE WHEN NOT v.ok_fotos            THEN 'las fotos "
                                       "del domicilio' END,\n"
                                       "                CASE WHEN NOT v.ok_ubicacion        THEN 'la "
                                       "ubicación' END,\n"
                                       "                CASE WHEN NOT v.ok_plan             THEN 'el plan' "
                                       'END,\n'
                                       "                CASE WHEN NOT v.ok_contrato         THEN 'generar el "
                                       "contrato' END,\n"
                                       "                CASE WHEN NOT v.ok_firma            THEN 'la firma "
                                       "del contrato' END\n"
                                       '            );\n'
                                       '    END IF;\n'
                                       '\n'
                                       '    -- La orden nace con todo lo que el vendedor ya cargó. El '
                                       'backoffice no\n'
                                       '    -- vuelve a tipear nada: solo revisa, asigna técnico y pone '
                                       'fecha.\n'
                                       '    INSERT INTO instalaciones (\n'
                                       '        nombre, identificacion, telefono, telefono_whatsapp, email,\n'
                                       '        direccion, referencia, sector, latitud, longitud,\n'
                                       '        plan_id, precio_mensual, estado, fecha, notas\n'
                                       '    )\n'
                                       '    SELECT\n'
                                       '        p.nombre, p.identificacion, p.telefono, p.telefono_whatsapp, '
                                       'p.email,\n'
                                       '        p.direccion, p.referencia, p.sector, e.latitud, e.longitud,\n'
                                       "        p.plan_id, pl.precio, 'nueva', CURRENT_DATE,\n"
                                       "        CONCAT_WS(E'\\n',\n"
                                       "            'Venta de ' || COALESCE(TRIM(CONCAT(u.nombre, ' ', "
                                       "u.apellido)), 'un vendedor'),\n"
                                       "            NULLIF(e.notas, ''),\n"
                                       "            'Contrato ' || COALESCE(c.numero, c.id::TEXT)\n"
                                       '        )\n'
                                       '    FROM expedientes e\n'
                                       '    JOIN prospectos p            ON p.id = e.prospecto_id\n'
                                       '    LEFT JOIN planes_velocidad pl ON pl.id = p.plan_id\n'
                                       '    LEFT JOIN usuarios_sistema u  ON u.id = p.vendedor_id\n'
                                       '    LEFT JOIN contratos c         ON c.id = e.contrato_id\n'
                                       '    WHERE e.id = p_expediente\n'
                                       '    RETURNING id INTO v_instalacion;\n'
                                       '\n'
                                       '    -- Las fotos del domicilio viajan con la orden: el técnico tiene '
                                       'que poder\n'
                                       '    -- reconocer la casa antes de bajarse de la camioneta.\n'
                                       '    INSERT INTO instalacion_fotos (instalacion_id, tipo, ruta, '
                                       'descripcion)\n'
                                       '    SELECT v_instalacion,\n'
                                       "           CASE d.tipo WHEN 'fachada' THEN 'fachada' ELSE 'otro' "
                                       'END,\n'
                                       '           d.ruta,\n'
                                       "           'Del expediente de venta'\n"
                                       '      FROM expediente_documentos d\n'
                                       '     WHERE d.expediente_id = p_expediente\n'
                                       "       AND d.tipo IN ('fachada', 'referencia', "
                                       "'lugar_instalacion');\n"
                                       '\n'
                                       '    UPDATE expedientes\n'
                                       '       SET instalacion_id = v_instalacion,\n'
                                       "           estado         = 'enviado',\n"
                                       '           enviado_en     = NOW(),\n'
                                       '           actualizado_en = NOW()\n'
                                       '     WHERE id = p_expediente;\n'
                                       '\n'
                                       '    -- El prospecto queda apuntando a su instalación: es lo que '
                                       'después le deja\n'
                                       '    -- ver el ESTADO sin ver la ficha (vista `v_mis_ventas_estado` '
                                       'de la 71).\n'
                                       '    UPDATE prospectos SET instalacion_id = v_instalacion WHERE id =\n'
                                       '        (SELECT prospecto_id FROM expedientes WHERE id = '
                                       'p_expediente);\n'
                                       '\n'
                                       '    RETURN v_instalacion;\n'
                                       'END '),
 'es_tecnico_de_campo': ('',
                         'BOOLEAN',
                         'sql',
                         '\n'
                         '    SELECT EXISTS (\n'
                         '        SELECT 1 FROM usuarios_sistema\n'
                         "         WHERE auth_id = auth.uid() AND activo AND rol = 'tecnico'\n"
                         '    )\n'),
 'esquema_comisiones_vigente': ('p_fecha DATE DEFAULT CURRENT_DATE',
                                'UUID',
                                'sql',
                                '\n'
                                '    SELECT id\n'
                                '      FROM comision_esquemas\n'
                                '     WHERE vigente_desde <= p_fecha\n'
                                '       AND (vigente_hasta IS NULL OR vigente_hasta >= p_fecha)\n'
                                '     ORDER BY activo DESC, vigente_desde DESC\n'
                                '     LIMIT 1\n'),
 'estado_de_ingreso': ('',
                       'TEXT',
                       'sql',
                       '\n'
                       '    SELECT CASE\n'
                       '        WHEN NOT es_tecnico_de_campo() OR en_servicio(mi_tecnico_id(), NOW()) THEN '
                       "'en_servicio'\n"
                       '        WHEN EXISTS (SELECT 1 FROM jornadas\n'
                       '                      WHERE tecnico_id = mi_tecnico_id()\n'
                       '                        AND fecha = (NOW() AT TIME ZONE zona_horaria())::date\n'
                       "                        AND fin_at IS NOT NULL) THEN 'jornada_cerrada'\n"
                       "        ELSE 'falta_ingreso'\n"
                       '    END\n'),
 'estoy_en_servicio': ('',
                       'BOOLEAN',
                       'sql',
                       '\n    SELECT NOT es_tecnico_de_campo() OR en_servicio(mi_tecnico_id(), NOW())\n'),
 'evaluar_cohortes': ('p_vendedor UUID DEFAULT NULL, p_cohorte DATE DEFAULT NULL',
                      'TABLE ( res_vendedor UUID, res_cohorte DATE, res_evaluables INT, res_conservados INT, '
                      'res_calidad NUMERIC, res_bono NUMERIC, res_estado TEXT )',
                      'plpgsql',
                      '\n'
                      'DECLARE\n'
                      '    g RECORD;\n'
                      'BEGIN\n'
                      "    IF NOT tiene_permiso_comision('comisiones.aprobar')\n"
                      "       AND NOT tiene_permiso_comision('comisiones.configurar') THEN\n"
                      "        RAISE EXCEPTION 'No tienes permiso para evaluar cohortes de calidad';\n"
                      '    END IF;\n'
                      '\n'
                      '    FOR g IN\n'
                      '        SELECT cv.vendedor_id, cv.cohorte\n'
                      '          FROM comision_ventas cv\n'
                      '         WHERE cv.cohorte IS NOT NULL\n'
                      '           AND cv.vendedor_id IS NOT NULL\n'
                      '           AND cv.comisionable_en IS NOT NULL\n'
                      "           AND cv.estado <> 'anulada'\n"
                      '           AND (p_vendedor IS NULL OR cv.vendedor_id = p_vendedor)\n'
                      "           AND (p_cohorte  IS NULL OR cv.cohorte     = DATE_TRUNC('month', "
                      'p_cohorte)::DATE)\n'
                      '           -- Una cohorte cerrada no se vuelve a mirar. Punto 16.\n'
                      '           AND NOT EXISTS (\n'
                      '               SELECT 1 FROM comision_cohortes cc\n'
                      '                WHERE cc.vendedor_id = cv.vendedor_id\n'
                      '                  AND cc.cohorte = cv.cohorte\n'
                      "                  AND cc.estado = 'cerrada')\n"
                      '         GROUP BY cv.vendedor_id, cv.cohorte\n'
                      '    LOOP\n'
                      '        DECLARE\n'
                      '            v_esquema   UUID;\n'
                      '            v_reglas    comision_reglas%ROWTYPE;\n'
                      '            v_cierra    DATE;\n'
                      '            v_cerrar    BOOLEAN;\n'
                      '            v_conserv   INT := 0;\n'
                      '            v_perdidos  INT := 0;\n'
                      '            v_excluidos INT := 0;\n'
                      '            v_evaluables INT := 0;\n'
                      '            v_calidad   NUMERIC := 0;\n'
                      '            v_bono      NUMERIC := 0;\n'
                      '            v_detalle   TEXT;\n'
                      '            v           RECORD;\n'
                      '        BEGIN\n'
                      '            -- El esquema con el que se midieron esas ventas, no el de hoy. Si por\n'
                      '            -- un cambio de versión a mitad de mes hubiera dos, manda el de la\n'
                      '            -- mayoría — igual que en el cálculo del período.\n'
                      '            SELECT cv.esquema_id INTO v_esquema\n'
                      '              FROM comision_ventas cv\n'
                      '             WHERE cv.vendedor_id = g.vendedor_id\n'
                      '               AND cv.cohorte = g.cohorte\n'
                      '               AND cv.comisionable_en IS NOT NULL\n'
                      "               AND cv.estado <> 'anulada'\n"
                      '             GROUP BY cv.esquema_id\n'
                      '             ORDER BY COUNT(*) DESC\n'
                      '             LIMIT 1;\n'
                      '\n'
                      '            SELECT * INTO v_reglas FROM comision_reglas WHERE esquema_id = '
                      'v_esquema;\n'
                      '            IF NOT FOUND THEN\n'
                      '                CONTINUE;  -- sin reglas no hay con qué medir\n'
                      '            END IF;\n'
                      '\n'
                      '            -- 90 días contados desde que TERMINA el mes de la cohorte, para que\n'
                      '            -- el que entró el día 31 tenga el mismo plazo que el que entró el 1.\n'
                      "            v_cierra := (g.cohorte + INTERVAL '1 month')::DATE + "
                      'v_reglas.dias_cohorte;\n'
                      '            v_cerrar := CURRENT_DATE >= v_cierra;\n'
                      '\n'
                      '            -- ── El veredicto, venta por venta ──\n'
                      '            FOR v IN\n'
                      '                SELECT cv.id, cv.cliente_id,\n'
                      '                       c.estado AS estado_cliente,\n'
                      '                       mb.nombre AS motivo_baja,\n'
                      '                       COALESCE(mb.afecta_calidad, TRUE) AS baja_cuenta\n'
                      '                  FROM comision_ventas cv\n'
                      '                  LEFT JOIN clientes c      ON c.id = cv.cliente_id\n'
                      '                  LEFT JOIN motivos_baja mb ON mb.id = c.motivo_baja_id\n'
                      '                 WHERE cv.vendedor_id = g.vendedor_id\n'
                      '                   AND cv.cohorte = g.cohorte\n'
                      '                   AND cv.comisionable_en IS NOT NULL\n'
                      "                   AND cv.estado <> 'anulada'\n"
                      '            LOOP\n'
                      '                DECLARE\n'
                      '                    v_estado TEXT;\n'
                      '                    v_motivo TEXT;\n'
                      '                    v_meses  INT;\n'
                      '                BEGIN\n'
                      '                    IF v.cliente_id IS NULL THEN\n'
                      '                        -- Sin ficha no hay nada que medir. Fuera de la cuenta,\n'
                      '                        -- que es distinto de contarlo como perdido.\n'
                      "                        v_estado := 'excluido';\n"
                      "                        v_motivo := 'El abonado ya no está en el sistema';\n"
                      '\n'
                      "                    ELSIF v.estado_cliente = 'baja' AND NOT v.baja_cuenta THEN\n"
                      '                        -- Punto 17: hay bajas que no son responsabilidad de quien\n'
                      '                        -- vendió. Salen del denominador, no del numerador.\n'
                      "                        v_estado := 'excluido';\n"
                      "                        v_motivo := COALESCE(v.motivo_baja, 'Baja que no afecta la "
                      "calidad');\n"
                      '\n'
                      "                    ELSIF v.estado_cliente = 'baja' THEN\n"
                      "                        v_estado := 'perdido';\n"
                      "                        v_motivo := COALESCE(v.motivo_baja, 'Dado de baja');\n"
                      '\n'
                      '                    ELSE\n'
                      '                        v_meses := meses_sin_pago(v.cliente_id, LEAST(CURRENT_DATE, '
                      'v_cierra));\n'
                      '                        IF v_meses >= v_reglas.meses_sin_pago_retiro THEN\n'
                      '                            -- La señal negativa fuerte del punto 17. No es la\n'
                      '                            -- falta de un mes: el prepago admite saltear un\n'
                      '                            -- período y volver.\n'
                      "                            v_estado := 'perdido';\n"
                      "                            v_motivo := FORMAT('%s meses sin pagar', v_meses);\n"
                      '                        ELSE\n'
                      "                            v_estado := 'conservado';\n"
                      '                            v_motivo := NULL;\n'
                      '                        END IF;\n'
                      '                    END IF;\n'
                      '\n'
                      "                    IF v_estado = 'conservado' THEN\n"
                      '                        v_conserv := v_conserv + 1;\n'
                      "                    ELSIF v_estado = 'perdido' THEN\n"
                      '                        v_perdidos := v_perdidos + 1;\n'
                      '                    ELSE\n'
                      '                        v_excluidos := v_excluidos + 1;\n'
                      '                    END IF;\n'
                      '\n'
                      '                    UPDATE comision_ventas\n'
                      '                       SET calidad_estado = v_estado,\n'
                      '                           calidad_motivo = v_motivo,\n'
                      '                           calidad_en     = NOW(),\n'
                      '                           actualizado_en = NOW()\n'
                      '                     WHERE id = v.id;\n'
                      '                END;\n'
                      '            END LOOP;\n'
                      '\n'
                      '            v_evaluables := v_conserv + v_perdidos;\n'
                      '\n'
                      '            IF v_evaluables > 0 THEN\n'
                      '                v_calidad := ROUND(v_conserv * 100.0 / v_evaluables, 2);\n'
                      '            END IF;\n'
                      '\n'
                      '            -- ── El mínimo de clientes evaluables (punto 15) ──\n'
                      '            --\n'
                      '            -- Con 3 clientes, perder uno da 66 % y perder ninguno da 100 %: el\n'
                      '            -- bono se volvería una lotería que premia al que vendió poco.\n'
                      '            IF v_evaluables < v_reglas.min_clientes_cohorte THEN\n'
                      '                v_bono := 0;\n'
                      '                v_detalle := FORMAT(\n'
                      "                    '%s clientes evaluables; el bono pide al menos %s.',\n"
                      '                    v_evaluables, v_reglas.min_clientes_cohorte);\n'
                      '            ELSE\n'
                      '                v_bono := bono_de_calidad(v_esquema, v_calidad);\n'
                      '                v_detalle := FORMAT(\n'
                      "                    '%s de %s conservados (%s %%)%s',\n"
                      '                    v_conserv, v_evaluables, v_calidad,\n'
                      '                    CASE WHEN v_excluidos > 0\n'
                      "                         THEN FORMAT('; %s excluidos por motivo de baja', "
                      'v_excluidos)\n'
                      "                         ELSE '' END);\n"
                      '            END IF;\n'
                      '\n'
                      '            INSERT INTO comision_cohortes (\n'
                      '                vendedor_id, cohorte, esquema_id,\n'
                      '                evaluables, conservados, perdidos, excluidos,\n'
                      '                calidad, bono, detalle, cierra_el, estado,\n'
                      '                evaluado_en, cerrado_en\n'
                      '            ) VALUES (\n'
                      '                g.vendedor_id, g.cohorte, v_esquema,\n'
                      '                v_evaluables, v_conserv, v_perdidos, v_excluidos,\n'
                      '                v_calidad, v_bono, v_detalle, v_cierra,\n'
                      "                CASE WHEN v_cerrar THEN 'cerrada' ELSE 'abierta' END,\n"
                      '                NOW(),\n'
                      '                CASE WHEN v_cerrar THEN NOW() END\n'
                      '            )\n'
                      '            ON CONFLICT (vendedor_id, cohorte) DO UPDATE SET\n'
                      '                esquema_id  = EXCLUDED.esquema_id,\n'
                      '                evaluables  = EXCLUDED.evaluables,\n'
                      '                conservados = EXCLUDED.conservados,\n'
                      '                perdidos    = EXCLUDED.perdidos,\n'
                      '                excluidos   = EXCLUDED.excluidos,\n'
                      '                calidad     = EXCLUDED.calidad,\n'
                      '                bono        = EXCLUDED.bono,\n'
                      '                detalle     = EXCLUDED.detalle,\n'
                      '                cierra_el   = EXCLUDED.cierra_el,\n'
                      '                estado      = EXCLUDED.estado,\n'
                      '                evaluado_en = NOW(),\n'
                      '                cerrado_en  = COALESCE(comision_cohortes.cerrado_en, '
                      'EXCLUDED.cerrado_en);\n'
                      '\n'
                      '            IF v_cerrar THEN\n'
                      '                INSERT INTO auditoria_sistema (\n'
                      '                    usuario_id, usuario_nombre, usuario_rol, accion, descripcion,\n'
                      '                    entidad, entidad_id, datos\n'
                      '                ) VALUES (\n'
                      '                    mi_legajo_id(),\n'
                      '                    COALESCE(\n'
                      "                        (SELECT TRIM(CONCAT(u.nombre, ' ', COALESCE(u.apellido, "
                      "'')))\n"
                      '                           FROM usuarios_sistema u WHERE u.id = mi_legajo_id()),\n'
                      "                        'Sistema'),\n"
                      '                    (SELECT u.rol FROM usuarios_sistema u WHERE u.id = '
                      'mi_legajo_id()),\n'
                      "                    'comisiones.cohorte_cerrada',\n"
                      "                    FORMAT('Cerró la cohorte %s con %s %% de calidad y un bono de "
                      "%s',\n"
                      "                           TO_CHAR(g.cohorte, 'MM/YYYY'), v_calidad, v_bono),\n"
                      "                    'comision_cohorte', NULL,\n"
                      '                    jsonb_build_object(\n'
                      "                        'vendedor', g.vendedor_id, 'cohorte', g.cohorte,\n"
                      "                        'evaluables', v_evaluables, 'conservados', v_conserv,\n"
                      "                        'perdidos', v_perdidos, 'excluidos', v_excluidos,\n"
                      "                        'calidad', v_calidad, 'bono', v_bono)\n"
                      '                );\n'
                      '            END IF;\n'
                      '\n'
                      '            RETURN QUERY SELECT\n'
                      '                g.vendedor_id, g.cohorte, v_evaluables, v_conserv, v_calidad, '
                      'v_bono,\n'
                      "                (CASE WHEN v_cerrar THEN 'cerrada' ELSE 'abierta' END)::TEXT;\n"
                      '        END;\n'
                      '    END LOOP;\n'
                      'END '),
 'evaluar_cohortes_de_cliente': ('p_cliente UUID',
                                 'VOID',
                                 'plpgsql',
                                 '\n'
                                 'DECLARE\n'
                                 '    v RECORD;\n'
                                 'BEGIN\n'
                                 '    FOR v IN\n'
                                 '        SELECT DISTINCT cv.vendedor_id, cv.cohorte\n'
                                 '          FROM comision_ventas cv\n'
                                 '         WHERE cv.cliente_id = p_cliente\n'
                                 '           AND cv.cohorte IS NOT NULL\n'
                                 '           AND cv.vendedor_id IS NOT NULL\n'
                                 '    LOOP\n'
                                 '        BEGIN\n'
                                 '            PERFORM evaluar_cohortes(v.vendedor_id, v.cohorte);\n'
                                 '        EXCEPTION WHEN OTHERS THEN\n'
                                 '            NULL;\n'
                                 '        END;\n'
                                 '    END LOOP;\n'
                                 'END '),
 'exigir_en_servicio': ('p_momento TIMESTAMPTZ',
                        'VOID',
                        'plpgsql',
                        '\n'
                        'BEGIN\n'
                        '    IF es_tecnico_de_campo() AND NOT en_servicio(mi_tecnico_id(), '
                        'COALESCE(p_momento, NOW())) THEN\n'
                        '        -- 42501: la cola de campo lo trata como definitivo y no lo reintenta\n'
                        '        -- ocho veces; reintentar no le abre la jornada.\n'
                        "        RAISE EXCEPTION 'Primero marca tu ingreso en Mi jornada. Si tu jornada ya "
                        "terminó y es una emergencia, marca una salida de emergencia.'\n"
                        "            USING ERRCODE = '42501';\n"
                        '    END IF;\n'
                        'END;\n'),
 'exigir_trabajo_actual': ('p_tipo TEXT, p_id UUID',
                           'VOID',
                           'plpgsql',
                           '\n'
                           'DECLARE\n'
                           '    v_tec UUID := mi_tecnico_id();\n'
                           '    a     RECORD;\n'
                           'BEGIN\n'
                           '    IF NOT es_tecnico_de_campo() OR v_tec IS NULL THEN\n'
                           '        RETURN;\n'
                           '    END IF;\n'
                           '\n'
                           '    SELECT r.tipo, r.id, r.numero, r.nombre INTO a\n'
                           '      FROM items_de_ruta(\n'
                           '               ARRAY[v_tec],\n'
                           '               COALESCE((SELECT array_agg(cuadrilla_id) FROM cuadrilla_miembros '
                           "WHERE tecnico_id = v_tec), '{}'),\n"
                           '               hoy_isp()) r\n'
                           '     ORDER BY r.posicion\n'
                           '     LIMIT 1;\n'
                           '\n'
                           '    IF FOUND AND NOT (a.tipo = p_tipo AND a.id = p_id) THEN\n'
                           '        RAISE EXCEPTION \'Tu trabajo actual es %#% (%). Termínalo o marca "No se '
                           'pudo atender" antes de empezar otro.\',\n'
                           "            CASE a.tipo WHEN 'ticket' THEN 'el ticket ' ELSE 'la instalación ' "
                           'END, a.numero, a.nombre\n'
                           "            USING ERRCODE = '42501';\n"
                           '    END IF;\n'
                           'END;\n'),
 'fecha_de_corte': ('p_cliente UUID',
                    'DATE',
                    'sql',
                    '\n'
                    '    SELECT MIN(COALESCE(f.fecha_vencimiento, f.fecha_emision))::DATE\n'
                    '           + COALESCE((SELECT c.dias_gracia FROM clientes c WHERE c.id = p_cliente), '
                    '0)\n'
                    '      FROM v_facturas_por_cobrar f\n'
                    '     WHERE f.client_id = p_cliente;\n'),
 'finalizar_alta_instalacion': ('p_instalacion_id UUID',
                                'UUID',
                                'plpgsql',
                                '\n'
                                'DECLARE\n'
                                '    i  instalaciones%ROWTYPE;\n'
                                '    v_client_id UUID;\n'
                                '    v_numero    TEXT;\n'
                                '    v_precio    NUMERIC(12,2);\n'
                                'BEGIN\n'
                                '    SELECT * INTO i FROM instalaciones WHERE id = p_instalacion_id FOR '
                                'UPDATE;\n'
                                '\n'
                                '    IF NOT FOUND THEN\n'
                                "        RAISE EXCEPTION 'No existe la instalación %', p_instalacion_id;\n"
                                '    END IF;\n'
                                '\n'
                                "    IF i.estado = 'hecha' AND i.client_id IS NOT NULL THEN\n"
                                '        RETURN i.client_id;\n'
                                '    END IF;\n'
                                '\n'
                                "    IF i.estado = 'cancelada' THEN\n"
                                "        RAISE EXCEPTION 'La instalación está cancelada: no se puede dar de "
                                "alta';\n"
                                '    END IF;\n'
                                '\n'
                                '    IF i.equipo_sn IS NULL AND i.equipo_mac IS NULL THEN\n'
                                "        RAISE EXCEPTION 'Falta leer el equipo: serie o MAC de la ONT/CPE';\n"
                                '    END IF;\n'
                                '\n'
                                '    IF i.firma_b64 IS NULL THEN\n'
                                "        RAISE EXCEPTION 'Falta la firma de conformidad del cliente';\n"
                                '    END IF;\n'
                                '\n'
                                "    IF i.tipo_conexion = 'pppoe' AND i.usuario_ppp IS NULL THEN\n"
                                "        RAISE EXCEPTION 'Falta el usuario PPPoE con el que quedó "
                                "configurado el equipo';\n"
                                '    END IF;\n'
                                '\n'
                                '    -- ── La IP fija, sin excepciones por tipo de conexión ──\n'
                                '    --\n'
                                '    -- Antes esto solo corría para las conexiones que no eran PPPoE. En '
                                'PPPoE la\n'
                                '    -- dirección vive en el secret del router en vez de en la ONT, pero '
                                'sigue\n'
                                '    -- siendo una IP fija que alguien tiene que haber elegido de la subred '
                                'de\n'
                                '    -- ESTE sector.\n'
                                "    IF i.tipo_ip = 'fija' AND i.ip IS NULL THEN\n"
                                '        RAISE EXCEPTION\n'
                                "            'Falta la IP fija del abonado. Sácala del segmento de este "
                                'sector (el asistente la propone en el paso de red); la del domicilio '
                                "anterior es de otra subred y no le va a servir.';\n"
                                '    END IF;\n'
                                '\n'
                                '    -- ── El router, en un traslado ──\n'
                                '    --\n'
                                '    -- Un traslado a otro sector casi siempre cambia de router. Cerrarlo '
                                'con el\n'
                                '    -- del domicilio viejo deja los cortes apuntando al equipo equivocado y '
                                'el\n'
                                '    -- secret PPPoE buscándose donde no está. El paso de aprovisionamiento '
                                'ya lo\n'
                                '    -- guarda, así que exigirlo no agrega trabajo: detecta el caso en que '
                                'ese\n'
                                '    -- paso se salteó.\n'
                                "    IF i.tipo = 'traslado' AND i.router_id IS NULL THEN\n"
                                '        RAISE EXCEPTION\n'
                                "            'Falta el router del sector nuevo. Sin eso, el abonado quedaría "
                                "atado al router del domicilio anterior.';\n"
                                '    END IF;\n'
                                '\n'
                                '    v_client_id := i.client_id;\n'
                                '\n'
                                '    IF v_client_id IS NULL THEN\n'
                                '        INSERT INTO clientes (\n'
                                '            nombre, tipo_identificacion, identificacion, telefono, '
                                'telefono_movil,\n'
                                '            email, direccion, latitud, longitud,\n'
                                '            plan_id, precio_mensual, dia_facturacion,\n'
                                '            router_id, onu_id, nap_id, puerto_nap, conectado_a_id,\n'
                                '            tipo_conexion, tipo_ip, usuario_ppp, clave_ppp, ip, ipv6, '
                                'mac_address,\n'
                                '            estado, origen, fecha_instalacion, notas\n'
                                '        ) VALUES (\n'
                                "            i.nombre, COALESCE(i.tipo_identificacion, '05'), "
                                'i.identificacion,\n'
                                '            i.telefono, COALESCE(i.telefono_whatsapp, i.telefono),\n'
                                '            i.email, i.direccion, i.latitud, i.longitud,\n'
                                '            i.plan_id, i.precio_mensual, i.dia_facturacion,\n'
                                '            i.router_id, i.onu_id, i.nap_id, i.puerto_nap, i.torre_id,\n'
                                '            i.tipo_conexion, i.tipo_ip, i.usuario_ppp, i.clave_ppp, i.ip, '
                                'i.ipv6, i.equipo_mac,\n'
                                "            'activo', 'manual', i.fecha, i.referencia\n"
                                '        )\n'
                                '        RETURNING id INTO v_client_id;\n'
                                '    ELSE\n'
                                '        UPDATE clientes SET\n'
                                '            plan_id         = COALESCE(i.plan_id, plan_id),\n'
                                '            precio_mensual  = COALESCE(i.precio_mensual, precio_mensual),\n'
                                '            dia_facturacion = COALESCE(i.dia_facturacion, '
                                'dia_facturacion),\n'
                                '            onu_id          = COALESCE(i.onu_id, onu_id),\n'
                                '            nap_id          = COALESCE(i.nap_id, nap_id),\n'
                                '            puerto_nap      = COALESCE(i.puerto_nap, puerto_nap),\n'
                                '            conectado_a_id  = COALESCE(i.torre_id, conectado_a_id),\n'
                                '            tipo_conexion   = i.tipo_conexion,\n'
                                '            tipo_ip         = i.tipo_ip,\n'
                                '            usuario_ppp     = COALESCE(i.usuario_ppp, usuario_ppp),\n'
                                '            clave_ppp       = COALESCE(i.clave_ppp, clave_ppp),\n'
                                '            mac_address     = COALESCE(i.equipo_mac, mac_address),\n'
                                '            telefono        = COALESCE(telefono, i.telefono),\n'
                                '            email           = COALESCE(email, i.email),\n'
                                '\n'
                                '            /**\n'
                                '             * La red, en un traslado, se REEMPLAZA. No se conserva.\n'
                                '             *\n'
                                '             * El COALESCE existe para no borrar un dato bueno cuando el '
                                'técnico\n'
                                '             * no cargó el nuevo, y para casi todos los campos eso es '
                                'correcto.\n'
                                '             * Para la dirección IP y el router, en una mudanza, es '
                                'exactamente\n'
                                '             * al revés: lo que había pertenece a otra subred y a otro '
                                'equipo.\n'
                                '             * Conservarlo no es "no perder el dato", es guardar uno falso '
                                'que\n'
                                '             * además parece configurado.\n'
                                '             *\n'
                                '             * La validación de arriba ya garantiza que un traslado con IP '
                                'fija\n'
                                '             * traiga la suya, así que esto no borra nada que haga falta.\n'
                                '             */\n'
                                "            router_id = CASE WHEN i.tipo = 'traslado'\n"
                                '                             THEN i.router_id ELSE COALESCE(i.router_id, '
                                'router_id) END,\n'
                                "            ip        = CASE WHEN i.tipo = 'traslado'\n"
                                '                             THEN i.ip      ELSE COALESCE(i.ip, ip)      '
                                'END,\n'
                                "            ipv6      = CASE WHEN i.tipo = 'traslado'\n"
                                '                             THEN i.ipv6    ELSE COALESCE(i.ipv6, ipv6)  '
                                'END,\n'
                                '\n'
                                "            direccion = CASE WHEN i.tipo IN ('nueva', 'traslado')\n"
                                '                             THEN COALESCE(i.direccion, direccion) ELSE '
                                'direccion END,\n'
                                "            latitud   = CASE WHEN i.tipo IN ('nueva', 'traslado')\n"
                                '                             THEN COALESCE(i.latitud, latitud)     ELSE '
                                'latitud   END,\n'
                                "            longitud  = CASE WHEN i.tipo IN ('nueva', 'traslado')\n"
                                '                             THEN COALESCE(i.longitud, longitud)   ELSE '
                                'longitud  END,\n'
                                '\n'
                                '            -- La antigüedad no se pisa: un cliente de cinco años que se '
                                'muda no\n'
                                '            -- es un cliente nuevo. Cuándo fue la mudanza está en la '
                                'orden.\n'
                                '            fecha_instalacion = COALESCE(fecha_instalacion, i.fecha)\n'
                                '        WHERE id = v_client_id;\n'
                                '    END IF;\n'
                                '\n'
                                '    -- '
                                '=========================================================================\n'
                                '    -- El contrato del expediente de venta, si lo hay\n'
                                '    -- '
                                '=========================================================================\n'
                                '    --\n'
                                '    -- El vendedor lo genera y lo hace firmar antes de que exista el '
                                'abonado,\n'
                                '    -- así que nace sin cliente. Al dar el alta se le pone el abonado en '
                                'vez\n'
                                '    -- de crear otro: si no, quedaban dos contratos para la misma venta, y '
                                'el\n'
                                '    -- firmado era el que no figuraba en la ficha.\n'
                                '    UPDATE contratos\n'
                                '       SET client_id = v_client_id\n'
                                '     WHERE client_id IS NULL\n'
                                '       AND id IN (SELECT contrato_id FROM expedientes\n'
                                '                   WHERE instalacion_id = p_instalacion_id AND contrato_id '
                                'IS NOT NULL);\n'
                                '\n'
                                '    -- '
                                '=========================================================================\n'
                                '    -- El contrato, con el número que dice el papel\n'
                                '    -- '
                                '=========================================================================\n'
                                '    --\n'
                                '    -- Solo si no tiene uno vigente. Eso cubre el traslado —el abonado ya '
                                'tiene\n'
                                '    -- el suyo y mudarse no lo cambia— y cubre volver a correr el alta.\n'
                                '    IF NOT EXISTS (\n'
                                '        SELECT 1 FROM contratos WHERE client_id = v_client_id AND estado = '
                                "'vigente'\n"
                                '    ) THEN\n'
                                "        v_numero := NULLIF(TRIM(COALESCE(i.numero::TEXT, '')), '');\n"
                                '\n'
                                '        /**\n'
                                '         * Si ese número ya está tomado, el contrato nace sin número.\n'
                                '         *\n'
                                '         * `idx_contratos_numero` es único, así que insertar un repetido '
                                'haría\n'
                                '         * fallar la transacción entera — y con ella el alta. Un técnico en '
                                'la\n'
                                '         * vereda vería "no se pudo cerrar la instalación" por un choque '
                                'de\n'
                                '         * numeración que no puede resolver ni entender.\n'
                                '         *\n'
                                '         * Perder el número es reversible desde la ficha en diez segundos;\n'
                                '         * perder el alta no. Por eso se prefiere el contrato sin número al '
                                'alta\n'
                                '         * caída.\n'
                                '         */\n'
                                '        IF v_numero IS NOT NULL\n'
                                '           AND EXISTS (SELECT 1 FROM contratos WHERE numero = v_numero) '
                                'THEN\n'
                                '            v_numero := NULL;\n'
                                '        END IF;\n'
                                '\n'
                                '        -- El precio de la orden si el vendedor lo pactó; si no, el que le '
                                'quedó\n'
                                '        -- a la ficha. La columna es NOT NULL, así que el 0 es el último '
                                'recurso.\n'
                                '        SELECT COALESCE(i.precio_mensual, c.precio_mensual, 0)\n'
                                '          INTO v_precio\n'
                                '          FROM clientes c WHERE c.id = v_client_id;\n'
                                '\n'
                                '        INSERT INTO contratos (\n'
                                '            client_id, numero, plan_id, fecha_inicio,\n'
                                '            permanencia_meses, precio_mensual, dia_pago, estado\n'
                                '        ) VALUES (\n'
                                '            v_client_id,\n'
                                '            v_numero,\n'
                                '            i.plan_id,\n'
                                '            COALESCE(i.fecha, CURRENT_DATE),\n'
                                '            -- El CHECK pide >= 0. Un valor raro se descarta en vez de '
                                'tumbar el alta.\n'
                                '            CASE WHEN i.permanencia_meses >= 0 THEN i.permanencia_meses '
                                'END,\n'
                                '            v_precio,\n'
                                '            -- El CHECK pide entre 1 y 28: el 29, 30 y 31 no existen todos '
                                'los meses.\n'
                                '            CASE WHEN i.dia_facturacion BETWEEN 1 AND 28 THEN '
                                'i.dia_facturacion END,\n'
                                "            'vigente'\n"
                                '        );\n'
                                '    END IF;\n'
                                '\n'
                                '    UPDATE instalaciones\n'
                                '       SET client_id = v_client_id,\n'
                                "           estado    = 'hecha',\n"
                                '           paso      = 5,\n'
                                '           alta_at   = COALESCE(alta_at, NOW())\n'
                                '     WHERE id = p_instalacion_id;\n'
                                '\n'
                                '    RETURN v_client_id;\n'
                                'END;\n'),
 'firma_actualiza_contrato': ('',
                              'TRIGGER',
                              'plpgsql',
                              '\n'
                              'BEGIN\n'
                              '    IF NEW.contrato_id IS NULL OR NEW.estado IS NOT DISTINCT FROM OLD.estado '
                              'THEN\n'
                              '        RETURN NEW;\n'
                              '    END IF;\n'
                              '\n'
                              '    UPDATE contratos\n'
                              '       SET firma_estado = CASE NEW.estado\n'
                              "               WHEN 'firmado'   THEN 'firmado'\n"
                              "               WHEN 'enviado'   THEN 'enviado'\n"
                              "               WHEN 'rechazado' THEN 'rechazado'\n"
                              "               WHEN 'vencido'   THEN 'vencido'\n"
                              '               ELSE firma_estado\n'
                              '           END,\n'
                              '           firma_proveedor  = COALESCE(NEW.proveedor, firma_proveedor),\n'
                              '           firma_referencia = COALESCE(NEW.referencia_proveedor, '
                              'firma_referencia),\n'
                              '           firma_enviado_en = COALESCE(NEW.enviado_en, firma_enviado_en),\n'
                              '           firma_en         = COALESCE(NEW.fecha_firma, firma_en),\n'
                              '           firma_evidencia_url = COALESCE(NEW.documento_firmado_url, '
                              'firma_evidencia_url),\n'
                              '           contenido_hash   = COALESCE(NEW.contenido_hash, contenido_hash)\n'
                              '     WHERE id = NEW.contrato_id;\n'
                              '\n'
                              '    RETURN NEW;\n'
                              'END '),
 'firma_manual_requiere_autorizacion': ('',
                                        'TRIGGER',
                                        'plpgsql',
                                        '\n'
                                        'BEGIN\n'
                                        '    -- Solo cuando se está ESTAMPANDO la autorización, no en cada '
                                        'guardado.\n'
                                        '    IF NEW.autorizado_por IS NOT NULL\n'
                                        "       AND (TG_OP = 'INSERT' OR OLD.autorizado_por IS DISTINCT FROM "
                                        'NEW.autorizado_por)\n'
                                        '       AND NOT puede_autorizar_firma_manual() THEN\n'
                                        '        RAISE EXCEPTION\n'
                                        "            'Tu usuario no puede habilitar la firma en papel. "
                                        'Pídeselo a un administrador: habilitar el papel saltea la '
                                        'verificación biométrica y tiene que quedar registrado quién lo '
                                        "permitió.';\n"
                                        '    END IF;\n'
                                        '\n'
                                        '    NEW.actualizado_en := NOW();\n'
                                        '    RETURN NEW;\n'
                                        'END '),
 'foto_ingreso_grupal': ('p_id UUID, p_ruta TEXT',
                         'VOID',
                         'plpgsql',
                         '\n'
                         'BEGIN\n'
                         '    UPDATE ingresos_grupales SET foto = p_ruta\n'
                         '     WHERE id = p_id AND jefe_id = mi_tecnico_id();\n'
                         '    IF NOT FOUND THEN\n'
                         "        RAISE EXCEPTION 'Ese ingreso grupal no es tuyo.' USING ERRCODE = '42501';\n"
                         '    END IF;\n'
                         '\n'
                         '    UPDATE jornadas\n'
                         '       SET foto_ingreso = p_ruta, foto_ingreso_at = NOW()\n'
                         '     WHERE ingreso_grupal_id = p_id AND foto_ingreso IS NULL;\n'
                         'END;\n'),
 'generar_comisiones': ('p_cliente UUID DEFAULT NULL',
                        'TABLE (creadas INT, actualizadas INT, comisionables INT)',
                        'plpgsql',
                        '\n'
                        'DECLARE\n'
                        '    r RECORD;\n'
                        '    v_creadas INT := 0;\n'
                        '    v_actualizadas INT := 0;\n'
                        '    v_comisionables INT := 0;\n'
                        '    v_existe UUID;\n'
                        '    v_estado TEXT;\n'
                        'BEGIN\n'
                        '    FOR r IN\n'
                        '        SELECT\n'
                        '            p.id            AS prospecto_id,\n'
                        '            p.cliente_id,\n'
                        '            p.vendedor_id,\n'
                        '            p.ganado_en,\n'
                        '            p.tipo_operacion,\n'
                        '            c.plan_id       AS plan_activado,\n'
                        '            c.estado        AS estado_cliente,\n'
                        '\n'
                        '            (SELECT MIN(COALESCE(i.alta_at, i.fecha::TIMESTAMPTZ))\n'
                        '               FROM instalaciones i\n'
                        '              WHERE i.client_id = p.cliente_id\n'
                        "                AND i.tipo = 'nueva'\n"
                        "                AND i.estado = 'hecha')            AS instalado_en,\n"
                        '\n'
                        "            CASE WHEN c.estado <> 'baja'\n"
                        '                 THEN COALESCE(c.activado_en, c.fecha_instalacion::TIMESTAMPTZ)\n'
                        '            END                                     AS activado_en,\n'
                        '\n'
                        '            (SELECT e.actualizado_en FROM v_expedientes e\n'
                        '              WHERE e.prospecto_id = p.id\n'
                        '                AND e.ok_datos AND e.ok_cedula_frontal\n'
                        '                AND e.ok_cedula_posterior AND e.ok_fotos AND e.ok_ubicacion\n'
                        '              LIMIT 1)                              AS documentado_en,\n'
                        '\n'
                        '            (SELECT MIN(ct.fecha_inicio::TIMESTAMPTZ) FROM contratos ct\n'
                        '              WHERE ct.client_id = p.cliente_id\n'
                        "                AND ct.firma_estado = 'firmado')     AS contrato_en,\n"
                        '\n'
                        '            (SELECT MIN(pg.fecha_pago::TIMESTAMPTZ) FROM pagos pg\n'
                        '              WHERE pg.client_id = p.cliente_id\n'
                        '                AND NOT pg.anulado)                  AS primer_pago_en,\n'
                        '\n'
                        '            (SELECT sv.validado_en FROM solicitudes_validacion sv\n'
                        '              WHERE sv.prospecto_id = p.id\n'
                        "                AND sv.estado = 'aprobado'\n"
                        '              LIMIT 1)                               AS aprobado_en\n'
                        '        FROM prospectos p\n'
                        '        JOIN clientes c ON c.id = p.cliente_id\n'
                        "        WHERE p.estado = 'ganado'\n"
                        '          AND p.cliente_id IS NOT NULL\n'
                        "          AND p.tipo_operacion = 'nueva'\n"
                        '          AND (p_cliente IS NULL OR p.cliente_id = p_cliente)\n'
                        '    LOOP\n'
                        '        SELECT id, estado INTO v_existe, v_estado\n'
                        '          FROM comision_ventas\n'
                        '         WHERE cliente_id = r.cliente_id\n'
                        "         ORDER BY (estado <> 'anulada') DESC, creado_en DESC\n"
                        '         LIMIT 1;\n'
                        '\n'
                        "        IF v_estado IN ('aprobada', 'pagada', 'anulada') THEN\n"
                        '            CONTINUE;\n'
                        '        END IF;\n'
                        '\n'
                        '        DECLARE\n'
                        '            v_esquema UUID;\n'
                        '            v_reglas  comision_reglas%ROWTYPE;\n'
                        '            v_base    NUMERIC(12,2);\n'
                        '            v_comisionable TIMESTAMPTZ;\n'
                        '            v_espera  DATE;\n'
                        '            v_nuevo_estado TEXT;\n'
                        '            v_fecha_ref DATE;\n'
                        '        BEGIN\n'
                        '            v_fecha_ref := COALESCE(r.ganado_en::DATE, CURRENT_DATE);\n'
                        '            v_esquema := esquema_comisiones_vigente(v_fecha_ref);\n'
                        '            IF v_esquema IS NULL THEN CONTINUE; END IF;\n'
                        '\n'
                        '            SELECT * INTO v_reglas FROM comision_reglas WHERE esquema_id = '
                        'v_esquema;\n'
                        '\n'
                        '            SELECT b.base INTO v_base\n'
                        '              FROM comision_bases_plan b\n'
                        '             WHERE b.esquema_id = v_esquema\n'
                        '               AND b.plan_id = r.plan_activado\n'
                        '               AND b.comisiona;\n'
                        '\n'
                        '            v_comisionable := NULL;\n'
                        '            IF  (NOT v_reglas.requiere_aprobacion    OR r.aprobado_en    IS NOT '
                        'NULL)\n'
                        '            AND (NOT v_reglas.requiere_documentacion OR r.documentado_en IS NOT '
                        'NULL)\n'
                        '            AND (NOT v_reglas.requiere_contrato      OR r.contrato_en    IS NOT '
                        'NULL)\n'
                        '            AND (NOT v_reglas.requiere_instalacion   OR r.instalado_en   IS NOT '
                        'NULL)\n'
                        '            AND (NOT v_reglas.requiere_activacion    OR r.activado_en    IS NOT '
                        'NULL)\n'
                        '            AND (NOT v_reglas.requiere_primer_pago   OR r.primer_pago_en IS NOT '
                        'NULL)\n'
                        '            AND v_base IS NOT NULL\n'
                        '            THEN\n'
                        '                v_comisionable := GREATEST(\n'
                        "                    COALESCE(r.ganado_en, '-infinity'::TIMESTAMPTZ),\n"
                        '                    CASE WHEN v_reglas.requiere_aprobacion    THEN r.aprobado_en    '
                        'END,\n'
                        '                    CASE WHEN v_reglas.requiere_documentacion THEN r.documentado_en '
                        'END,\n'
                        '                    CASE WHEN v_reglas.requiere_contrato      THEN r.contrato_en    '
                        'END,\n'
                        '                    CASE WHEN v_reglas.requiere_instalacion   THEN r.instalado_en   '
                        'END,\n'
                        '                    CASE WHEN v_reglas.requiere_activacion    THEN r.activado_en    '
                        'END,\n'
                        '                    CASE WHEN v_reglas.requiere_primer_pago   THEN r.primer_pago_en '
                        'END\n'
                        '                );\n'
                        '            END IF;\n'
                        '\n'
                        '            v_espera := NULL;\n'
                        '            IF r.instalado_en IS NOT NULL THEN\n'
                        '                v_espera := CASE\n'
                        '                    WHEN EXTRACT(DAY FROM r.instalado_en) >= '
                        'v_reglas.dia_cortesia_desde\n'
                        "                    THEN (DATE_TRUNC('month', r.instalado_en) + INTERVAL '1 "
                        "month')::DATE\n"
                        '                         + (v_reglas.pago_ventana_hasta - 1)\n'
                        "                    ELSE (DATE_TRUNC('month', r.instalado_en))::DATE\n"
                        '                         + (v_reglas.pago_ventana_hasta - 1)\n'
                        '                END;\n'
                        '            END IF;\n'
                        '\n'
                        "            v_nuevo_estado := 'proyectada';\n"
                        '            IF v_comisionable IS NULL\n'
                        '               AND v_reglas.requiere_primer_pago\n'
                        '               AND r.primer_pago_en IS NULL\n'
                        '               AND r.instalado_en IS NOT NULL\n'
                        '               AND r.activado_en IS NOT NULL\n'
                        '               AND v_espera >= CURRENT_DATE\n'
                        '            THEN\n'
                        "                v_nuevo_estado := 'pendiente_validacion';\n"
                        '            END IF;\n'
                        '\n'
                        '            IF v_comisionable IS NOT NULL THEN\n'
                        '                v_comisionables := v_comisionables + 1;\n'
                        '            END IF;\n'
                        '\n'
                        '            INSERT INTO comision_ventas (\n'
                        '                prospecto_id, cliente_id, vendedor_id, plan_id, tipo_operacion,\n'
                        '                esquema_id, base, periodo, cohorte,\n'
                        '                ganado_en, aprobado_en, documentado_en, contrato_en,\n'
                        '                instalado_en, activado_en, primer_pago_en,\n'
                        '                comisionable_en, espera_pago_hasta, estado\n'
                        '            ) VALUES (\n'
                        '                r.prospecto_id, r.cliente_id, r.vendedor_id, r.plan_activado, '
                        'r.tipo_operacion,\n'
                        '                v_esquema, v_base,\n'
                        "                DATE_TRUNC('month', COALESCE(v_comisionable, NOW()))::DATE,\n"
                        '                -- LA LÍNEA. Sin venta comisionable no hay cohorte: entra al grupo\n'
                        '                -- el mes en que empieza a contar, no el día que se cargó.\n'
                        '                CASE WHEN v_comisionable IS NOT NULL\n'
                        "                     THEN DATE_TRUNC('month', v_comisionable)::DATE END,\n"
                        '                r.ganado_en, r.aprobado_en, r.documentado_en, r.contrato_en,\n'
                        '                r.instalado_en, r.activado_en, r.primer_pago_en,\n'
                        '                v_comisionable, v_espera, v_nuevo_estado\n'
                        '            )\n'
                        '            ON CONFLICT (cliente_id) WHERE cliente_id IS NOT NULL AND estado <> '
                        "'anulada'\n"
                        '            DO UPDATE SET\n'
                        '                vendedor_id    = EXCLUDED.vendedor_id,\n'
                        '                plan_id        = EXCLUDED.plan_id,\n'
                        '                esquema_id     = EXCLUDED.esquema_id,\n'
                        '                base           = EXCLUDED.base,\n'
                        '                periodo        = EXCLUDED.periodo,\n'
                        '                -- Una vez que entró a un grupo, ahí se queda.\n'
                        '                cohorte        = COALESCE(comision_ventas.cohorte, '
                        'EXCLUDED.cohorte),\n'
                        '                ganado_en      = EXCLUDED.ganado_en,\n'
                        '                aprobado_en    = EXCLUDED.aprobado_en,\n'
                        '                documentado_en = EXCLUDED.documentado_en,\n'
                        '                contrato_en    = EXCLUDED.contrato_en,\n'
                        '                instalado_en   = EXCLUDED.instalado_en,\n'
                        '                activado_en    = EXCLUDED.activado_en,\n'
                        '                primer_pago_en = EXCLUDED.primer_pago_en,\n'
                        '                comisionable_en = EXCLUDED.comisionable_en,\n'
                        '                espera_pago_hasta = EXCLUDED.espera_pago_hasta,\n'
                        "                estado = CASE WHEN comision_ventas.estado = 'generada'\n"
                        "                              THEN 'generada' ELSE EXCLUDED.estado END,\n"
                        '                actualizado_en = NOW();\n'
                        '\n'
                        '            IF v_existe IS NULL THEN\n'
                        '                v_creadas := v_creadas + 1;\n'
                        '            ELSE\n'
                        '                v_actualizadas := v_actualizadas + 1;\n'
                        '            END IF;\n'
                        '        END;\n'
                        '    END LOOP;\n'
                        '\n'
                        '    RETURN QUERY SELECT v_creadas, v_actualizadas, v_comisionables;\n'
                        'END '),
 'generar_retiros_equipo': ('',
                            'TABLE (creadas INT, canceladas INT)',
                            'plpgsql',
                            '\n'
                            'DECLARE\n'
                            '    v_reglas comision_reglas%ROWTYPE;\n'
                            '    v_creadas INT := 0;\n'
                            '    v_canceladas INT := 0;\n'
                            '    r RECORD;\n'
                            'BEGIN\n'
                            '    SELECT * INTO v_reglas\n'
                            '      FROM comision_reglas\n'
                            '     WHERE esquema_id = esquema_comisiones_vigente(CURRENT_DATE);\n'
                            '\n'
                            '    IF NOT FOUND THEN\n'
                            '        -- Sin esquema no hay umbral configurado, y no se inventa uno acá: el\n'
                            '        -- punto 2 pide que estos números no estén quemados en código.\n'
                            '        RETURN QUERY SELECT 0, 0;\n'
                            '        RETURN;\n'
                            '    END IF;\n'
                            '\n'
                            '    -- ── Cancelar las que dejaron de tener sentido ──\n'
                            '    -- El abonado volvió a pagar y está activo: el equipo se queda donde está.\n'
                            '    -- Va primero, para no mandar a nadie a buscar algo que ya no hay que\n'
                            '    -- buscar.\n'
                            '    WITH cancelar AS (\n'
                            '        UPDATE retiros_equipo re\n'
                            "           SET estado = 'cancelado',\n"
                            "               motivo = 'cliente_volvio',\n"
                            "               observaciones = COALESCE(re.observaciones, '') ||\n"
                            "                   CASE WHEN re.observaciones IS NULL THEN '' ELSE E'\\n' END "
                            '||\n'
                            "                   'Cancelada automáticamente: el abonado volvió a pagar.',\n"
                            '               cerrado_en = NOW()\n'
                            '          FROM clientes c\n'
                            '         WHERE c.id = re.cliente_id\n'
                            "           AND re.estado IN ('pendiente', 'asignado')\n"
                            "           AND c.estado <> 'baja'\n"
                            '           AND meses_sin_pago(c.id) < v_reglas.meses_sin_pago_retiro\n'
                            '        RETURNING 1\n'
                            '    )\n'
                            '    SELECT COUNT(*) INTO v_canceladas FROM cancelar;\n'
                            '\n'
                            '    -- ── Abrir las nuevas ──\n'
                            '    FOR r IN\n'
                            '        SELECT\n'
                            '            c.id AS cliente_id,\n'
                            '            c.fecha_instalacion,\n'
                            '            c.onu_id,\n'
                            '            m.meses,\n'
                            '            p.ultimo_pago,\n'
                            '            cv.vendedor_id,\n'
                            '            e.equipo_id,\n'
                            '            e.serie,\n'
                            '            e.modelo,\n'
                            '            e.valor\n'
                            '        FROM clientes c\n'
                            '        -- Una sola llamada por abonado. Repetirla en el WHERE y en el SELECT '
                            'la\n'
                            '        -- ejecutaría dos veces por cada cliente de la base.\n'
                            '        CROSS JOIN LATERAL (SELECT meses_sin_pago(c.id) AS meses) m\n'
                            '        -- El último pago se usa tres veces: para la orden, para la fecha de\n'
                            '        -- suspensión y para decidir si una orden vieja todavía bloquea.\n'
                            '        CROSS JOIN LATERAL (\n'
                            '            SELECT MAX(pg.fecha_pago)::DATE AS ultimo_pago\n'
                            '              FROM pagos pg\n'
                            '             WHERE pg.client_id = c.id AND NOT pg.anulado\n'
                            '        ) p\n'
                            '        LEFT JOIN v_cliente_vendedor cv ON cv.cliente_id = c.id\n'
                            '        -- El equipo instalado, si el inventario lo tiene. Con LIMIT porque un\n'
                            '        -- abonado puede tener dos aparatos fichados —una ONT y un router— y '
                            'sin\n'
                            '        -- esto se abrirían dos órdenes para la misma casa.\n'
                            '        LEFT JOIN LATERAL (\n'
                            '            SELECT eq.id AS equipo_id, eq.serie, ar.nombre AS modelo,\n'
                            '                   COALESCE(ar.costo_ultimo, 0) AS valor\n'
                            '              FROM equipos eq\n'
                            '              LEFT JOIN articulos ar ON ar.id = eq.articulo_id\n'
                            "             WHERE eq.cliente_id = c.id AND eq.estado = 'instalado'\n"
                            "             ORDER BY (ar.categoria = 'ont') DESC NULLS LAST, eq.creado_en\n"
                            '             LIMIT 1\n'
                            '        ) e ON TRUE\n'
                            "        WHERE (c.estado = 'baja' OR m.meses >= v_reglas.meses_sin_pago_retiro)\n"
                            '          -- Que haya algo que buscar: o un equipo fichado, o una ONU '
                            'asociada.\n'
                            '          AND (e.equipo_id IS NOT NULL OR c.onu_id IS NOT NULL)\n'
                            '          AND NOT EXISTS (\n'
                            '              SELECT 1 FROM retiros_equipo x\n'
                            '               WHERE x.cliente_id = c.id\n'
                            "                 AND x.estado IN ('pendiente', 'asignado')\n"
                            '          )\n'
                            '          /**\n'
                            '           * Y que no haya una cerrada que todavía valga.\n'
                            '           *\n'
                            '           * Sin esta condición la tarea abriría una orden nueva cada noche: '
                            'el\n'
                            '           * abonado sigue en baja, los meses sin pagar siguen creciendo y el\n'
                            '           * índice único solo impide dos ABIERTAS a la vez.\n'
                            '           *\n'
                            '           * Pero "cerrada" no puede bloquear para siempre. Un abonado al que '
                            'se\n'
                            '           * le retiró el equipo, que reactivó meses después con una '
                            'instalación\n'
                            '           * nueva y que volvió a caer, es otra caída y merece su propia orden '
                            '—\n'
                            '           * si no, el segundo equipo se queda en esa casa sin que nadie lo\n'
                            '           * anote.\n'
                            '           *\n'
                            '           * El corte es el pago: una orden cerrada bloquea mientras el '
                            'abonado\n'
                            '           * no haya pagado nada después de cerrarse. Las canceladas no '
                            'bloquean,\n'
                            '           * porque cancelar significa justamente que volvió.\n'
                            '           */\n'
                            '          AND NOT EXISTS (\n'
                            '              SELECT 1 FROM retiros_equipo x\n'
                            '               WHERE x.cliente_id = c.id\n'
                            "                 AND x.estado IN ('recuperado', 'no_recuperado')\n"
                            '                 AND (p.ultimo_pago IS NULL OR p.ultimo_pago <= '
                            'x.cerrado_en::DATE)\n'
                            '          )\n'
                            '    LOOP\n'
                            '        INSERT INTO retiros_equipo (\n'
                            '            cliente_id, vendedor_id, equipo_id, onu_id, serie, modelo, valor,\n'
                            '            fecha_instalacion, ultimo_pago, suspendido_en, meses_sin_pago, '
                            'estado\n'
                            '        ) VALUES (\n'
                            '            r.cliente_id, r.vendedor_id, r.equipo_id, r.onu_id,\n'
                            '            COALESCE(r.serie, (SELECT o.sn FROM onus o WHERE o.id = '
                            'r.onu_id)),\n'
                            '            r.modelo, COALESCE(r.valor, 0),   -- sin equipo fichado (solo la '
                            'ONU) no hay costo conocido\n'
                            '            r.fecha_instalacion, r.ultimo_pago,\n'
                            '            -- Cuándo quedó suspendido: el último pago más los meses que '
                            'aguanta\n'
                            '            -- la configuración antes de considerarlo caído.\n'
                            '            CASE WHEN r.ultimo_pago IS NOT NULL\n'
                            "                 THEN (r.ultimo_pago + (v_reglas.meses_sin_pago_suspension || ' "
                            "months')::INTERVAL)::DATE\n"
                            '            END,\n'
                            "            r.meses, 'pendiente'\n"
                            '        );\n'
                            '\n'
                            '        v_creadas := v_creadas + 1;\n'
                            '    END LOOP;\n'
                            '\n'
                            '    RETURN QUERY SELECT v_creadas, v_canceladas;\n'
                            'END '),
 'hoy_isp': ('', 'DATE', 'sql', '\n    SELECT (NOW() AT TIME ZONE zona_horaria())::date\n'),
 'incidencia_activa_de': ('p_cliente UUID',
                          'incidencias_masivas',
                          'sql',
                          '\n'
                          '    SELECT i.*\n'
                          '      FROM incidencias_masivas i\n'
                          "     WHERE i.estado = 'abierta'\n"
                          '       AND EXISTS (\n'
                          '             SELECT 1 FROM afectados_por_incidencia(i.id) a WHERE a.client_id = '
                          'p_cliente\n'
                          '           )\n'
                          '     -- La más reciente: si hay dos, la que empezó después es la que explica lo\n'
                          '     -- que el abonado está viviendo ahora.\n'
                          '     ORDER BY i.ocurrio_at DESC\n'
                          '     LIMIT 1;\n'),
 'ingreso_automatico': ('p_momento TIMESTAMPTZ, p_lat NUMERIC DEFAULT NULL, p_lng NUMERIC DEFAULT NULL',
                        'VOID',
                        'plpgsql',
                        '\n'
                        'DECLARE\n'
                        '    v_tec    UUID := mi_tecnico_id();\n'
                        '    v_mom    TIMESTAMPTZ := COALESCE(p_momento, NOW());\n'
                        '    v_fecha  DATE := (COALESCE(p_momento, NOW()) AT TIME ZONE '
                        'zona_horaria())::date;\n'
                        '    j        jornadas%ROWTYPE;\n'
                        'BEGIN\n'
                        '    IF NOT es_tecnico_de_campo() OR en_servicio(v_tec, v_mom) THEN\n'
                        '        RETURN;\n'
                        '    END IF;\n'
                        '\n'
                        '    SELECT * INTO j FROM jornadas WHERE tecnico_id = v_tec AND fecha = v_fecha FOR '
                        'UPDATE;\n'
                        '\n'
                        '    IF NOT FOUND THEN\n'
                        '        INSERT INTO jornadas (tecnico_id, fecha, inicio_at, lat_ingreso, '
                        'lng_ingreso, distancia_ingreso_m)\n'
                        '        VALUES (v_tec, v_fecha, v_mom, p_lat, p_lng, 0);\n'
                        '        RETURN;\n'
                        '    END IF;\n'
                        '\n'
                        '    IF j.fin_at IS NOT NULL AND j.fin_at < v_mom THEN\n'
                        "        RAISE EXCEPTION 'Tu jornada de hoy ya está cerrada. Si es una emergencia, "
                        "marca una salida de emergencia en Mi jornada.'\n"
                        "            USING ERRCODE = '42501';\n"
                        '    END IF;\n'
                        '\n'
                        '    -- Sin ingreso todavía (solo la salida del vehículo), o con uno posterior.\n'
                        '    UPDATE jornadas\n'
                        '       SET inicio_at   = v_mom,\n'
                        '           lat_ingreso = COALESCE(p_lat, lat_ingreso),\n'
                        '           lng_ingreso = COALESCE(p_lng, lng_ingreso),\n'
                        '           distancia_ingreso_m = 0\n'
                        '     WHERE id = j.id;\n'
                        'END;\n'),
 'ingreso_grupal': ('p_presentes UUID[], p_sitio_tipo TEXT, p_sitio_id UUID, p_lat NUMERIC, p_lng NUMERIC, '
                    'p_precision INT DEFAULT NULL',
                    'UUID',
                    'plpgsql',
                    '\n'
                    'DECLARE\n'
                    '    v_tec    UUID := mi_tecnico_id();\n'
                    '    v_fecha  DATE := (NOW() AT TIME ZONE zona_horaria())::date;\n'
                    '    v_cuad   UUID;\n'
                    '    v_slat   NUMERIC;\n'
                    '    v_slng   NUMERIC;\n'
                    '    v_dist   INT;\n'
                    '    v_tol    INT := 250 + LEAST(GREATEST(COALESCE(p_precision, 0), 0), 100);\n'
                    '    v_pres   UUID[];\n'
                    '    v_id     UUID;\n'
                    '    p        UUID;\n'
                    '    j        jornadas%ROWTYPE;\n'
                    '    u        RECORD;\n'
                    'BEGIN\n'
                    '    SELECT m.cuadrilla_id INTO v_cuad\n'
                    '      FROM cuadrilla_miembros m\n'
                    '     WHERE m.tecnico_id = v_tec AND jefe_de_grupo(m.cuadrilla_id, v_fecha) = v_tec\n'
                    '     LIMIT 1;\n'
                    '    IF v_cuad IS NULL THEN\n'
                    "        RAISE EXCEPTION 'La foto grupal la toma el jefe de grupo de hoy.' USING ERRCODE "
                    "= '42501';\n"
                    '    END IF;\n'
                    '    IF p_lat IS NULL OR p_lng IS NULL THEN\n'
                    "        RAISE EXCEPTION 'Sin ubicación no se puede tomar la foto grupal: activa el GPS "
                    "del teléfono.';\n"
                    '    END IF;\n'
                    '\n'
                    '    -- Dónde queda el sitio. La coordenada del trabajo, y si no tiene, la del abonado.\n'
                    "    IF p_sitio_tipo = 'ticket' THEN\n"
                    '        SELECT COALESCE(t.latitud, c.latitud), COALESCE(t.longitud, c.longitud)\n'
                    '          INTO v_slat, v_slng\n'
                    '          FROM tickets t LEFT JOIN clientes c ON c.id = t.client_id\n'
                    '         WHERE t.id = p_sitio_id;\n'
                    "    ELSIF p_sitio_tipo = 'instalacion' THEN\n"
                    '        SELECT COALESCE(i.latitud, c.latitud), COALESCE(i.longitud, c.longitud)\n'
                    '          INTO v_slat, v_slng\n'
                    '          FROM instalaciones i LEFT JOIN clientes c ON c.id = i.client_id\n'
                    '         WHERE i.id = p_sitio_id;\n'
                    '    END IF;\n'
                    '\n'
                    '    v_dist := distancia_m(p_lat, p_lng, v_slat, v_slng);\n'
                    '    IF v_dist IS NOT NULL AND v_dist > v_tol THEN\n'
                    "        RAISE EXCEPTION 'Estás a % m del sitio. La foto grupal se toma donde el "
                    "cliente: acércate y vuelve a intentar.', v_dist\n"
                    "            USING ERRCODE = '42501';\n"
                    '    END IF;\n'
                    '\n'
                    '    -- Solo integrantes de la cuadrilla, y el jefe siempre.\n'
                    '    SELECT ARRAY(\n'
                    "        SELECT DISTINCT x FROM unnest(COALESCE(p_presentes, '{}') || v_tec) AS x\n"
                    '         WHERE x IN (SELECT tecnico_id FROM cuadrilla_miembros WHERE cuadrilla_id = '
                    'v_cuad)\n'
                    '    ) INTO v_pres;\n'
                    '\n'
                    '    INSERT INTO ingresos_grupales (cuadrilla_id, jefe_id, fecha, lat, lng, precision_m, '
                    'distancia_m,\n'
                    '                                   sitio_tipo, sitio_id, presentes)\n'
                    '    VALUES (v_cuad, v_tec, v_fecha, p_lat, p_lng, p_precision, v_dist,\n'
                    "            CASE WHEN p_sitio_tipo IN ('ticket', 'instalacion', 'reparacion') THEN "
                    'p_sitio_tipo END,\n'
                    '            p_sitio_id, v_pres)\n'
                    '    RETURNING id INTO v_id;\n'
                    '\n'
                    '    -- El ingreso de cada uno. Quien ya estaba en servicio queda como estaba;\n'
                    '    -- quien ya cerró su jornada de hoy, también.\n'
                    '    FOREACH p IN ARRAY v_pres LOOP\n'
                    '        CONTINUE WHEN en_servicio(p, NOW());\n'
                    '\n'
                    '        SELECT * INTO j FROM jornadas WHERE tecnico_id = p AND fecha = v_fecha FOR '
                    'UPDATE;\n'
                    '        IF NOT FOUND THEN\n'
                    '            INSERT INTO jornadas (tecnico_id, fecha, inicio_at, lat_ingreso, '
                    'lng_ingreso,\n'
                    '                                  precision_ingreso_m, distancia_ingreso_m, '
                    'ingreso_grupal_id)\n'
                    '            VALUES (p, v_fecha, NOW(), p_lat, p_lng, p_precision, v_dist, v_id);\n'
                    '        ELSIF j.fin_at IS NULL THEN\n'
                    '            UPDATE jornadas\n'
                    '               SET inicio_at = NOW(), lat_ingreso = p_lat, lng_ingreso = p_lng,\n'
                    '                   precision_ingreso_m = p_precision, distancia_ingreso_m = v_dist,\n'
                    '                   ingreso_grupal_id = v_id\n'
                    '             WHERE id = j.id;\n'
                    '        END IF;\n'
                    '\n'
                    '        -- Que cada uno sepa que su ingreso ya está.\n'
                    '        FOR u IN SELECT id FROM usuarios_sistema WHERE tecnico_id = p AND activo AND '
                    'tecnico_id <> v_tec LOOP\n'
                    "            PERFORM notificar(u.id, 'ingreso_grupal',\n"
                    "                'Tu ingreso quedó marcado con la foto grupal',\n"
                    "                'A las ' || TO_CHAR(NOW() AT TIME ZONE zona_horaria(), 'HH24:MI') || '. "
                    "Tus horas cuentan desde ahí.',\n"
                    "                '/campo/jornada', 'ingreso_grupal', v_id::text);\n"
                    '        END LOOP;\n'
                    '    END LOOP;\n'
                    '\n'
                    '    RETURN v_id;\n'
                    'END;\n'),
 'iniciar_traslado': ('p_cliente UUID, p_direccion TEXT, p_latitud NUMERIC DEFAULT NULL, p_longitud NUMERIC '
                      'DEFAULT NULL, p_fecha DATE DEFAULT NULL, p_motivo TEXT DEFAULT NULL, p_tecnico UUID '
                      'DEFAULT NULL, p_referencia TEXT DEFAULT NULL',
                      'UUID',
                      'plpgsql',
                      '\n'
                      'DECLARE\n'
                      '    c            clientes%ROWTYPE;\n'
                      '    u            onus%ROWTYPE;\n'
                      '    v_instalacion UUID;\n'
                      '    v_traslado   UUID;\n'
                      '    v_abierto    UUID;\n'
                      'BEGIN\n'
                      '    /**\n'
                      '     * Quién puede mudar a un abonado.\n'
                      '     *\n'
                      '     * La función es SECURITY DEFINER —tiene que serlo, porque escribe en\n'
                      '     * `instalaciones` y en `traslados` en una sola transacción— y eso significa\n'
                      '     * que corre saltándose RLS. Sin esta verificación, cualquiera con sesión\n'
                      '     * podría abrirle un traslado a cualquier abonado y agendarle una visita.\n'
                      '     *\n'
                      '     * Es la misma regla que la política de escritura de la tabla: quien maneja\n'
                      '     * la cartera. Un traslado es una decisión comercial, no algo que se resuelve\n'
                      '     * parado en la vereda.\n'
                      '     */\n'
                      '    IF NOT cartera_completa() THEN\n'
                      "        RAISE EXCEPTION 'No tienes permiso para trasladar abonados';\n"
                      '    END IF;\n'
                      '\n'
                      "    IF p_direccion IS NULL OR BTRIM(p_direccion) = '' THEN\n"
                      "        RAISE EXCEPTION 'Falta la dirección nueva: sin eso no hay traslado que "
                      "agendar';\n"
                      '    END IF;\n'
                      '\n'
                      '    SELECT * INTO c FROM clientes WHERE id = p_cliente;\n'
                      '    IF NOT FOUND THEN\n'
                      "        RAISE EXCEPTION 'No existe ese abonado';\n"
                      '    END IF;\n'
                      '\n'
                      '    -- Dos traslados abiertos sobre el mismo abonado significan dos fotos del\n'
                      '    -- origen, y la segunda ya se sacó con el servicio a medio mover: guardaría\n'
                      '    -- datos falsos. Se corta y se manda a cerrar el que está.\n'
                      '    SELECT id INTO v_abierto\n'
                      '      FROM traslados\n'
                      "     WHERE cliente_id = p_cliente AND estado = 'abierto'\n"
                      '     LIMIT 1;\n'
                      '    IF v_abierto IS NOT NULL THEN\n'
                      "        RAISE EXCEPTION 'Ese abonado ya tiene un traslado en curso. Ciérralo o "
                      "cancélalo antes de abrir otro.';\n"
                      '    END IF;\n'
                      '\n'
                      '    -- La ONU de origen. Puede no haber —un abonado por radio, o uno importado\n'
                      '    -- sin enlazar— y eso no impide mudarlo: solo significa que no hay nada que\n'
                      '    -- dar de baja en ninguna OLT.\n'
                      '    IF c.onu_id IS NOT NULL THEN\n'
                      '        SELECT * INTO u FROM onus WHERE id = c.onu_id;\n'
                      '    END IF;\n'
                      '\n'
                      '    -- ── La orden de trabajo del destino ──\n'
                      '    INSERT INTO instalaciones (\n'
                      '        client_id, tipo, estado, fecha,\n'
                      '        nombre, tipo_identificacion, identificacion, telefono, email,\n'
                      '        direccion, latitud, longitud, referencia,\n'
                      '        plan_id, precio_mensual, dia_facturacion,\n'
                      '        tecnologia, tecnico_id,\n'
                      '        -- El plan y la conexión se arrastran: el abonado se muda, no cambia de\n'
                      '        -- servicio. Lo que NO se arrastra es la red —OLT, puerto, VLAN, IP—,\n'
                      '        -- que es justo lo que cambia de sector a sector.\n'
                      '        tipo_conexion, tipo_ip,\n'
                      '        notas\n'
                      '    ) VALUES (\n'
                      "        p_cliente, 'traslado', 'agendada', COALESCE(p_fecha, CURRENT_DATE),\n"
                      '        c.nombre, c.tipo_identificacion, c.identificacion, c.telefono, c.email,\n'
                      '        BTRIM(p_direccion), p_latitud, p_longitud, p_referencia,\n'
                      '        c.plan_id, c.precio_mensual, c.dia_facturacion,\n'
                      "        CASE WHEN c.conectado_a_id IS NOT NULL THEN 'wireless' ELSE 'ftth' END,\n"
                      '        p_tecnico,\n'
                      "        COALESCE(c.tipo_conexion, 'pppoe'), COALESCE(c.tipo_ip, 'dinamica'),\n"
                      '        CASE WHEN p_motivo IS NULL THEN NULL\n'
                      "             ELSE 'Traslado desde: ' || COALESCE(c.direccion, 's/d') || '. ' || "
                      'p_motivo END\n'
                      '    )\n'
                      '    RETURNING id INTO v_instalacion;\n'
                      '\n'
                      '    -- ── La foto del origen ──\n'
                      '    INSERT INTO traslados (\n'
                      '        cliente_id, instalacion_id,\n'
                      '        direccion_anterior, latitud_anterior, longitud_anterior,\n'
                      '        olt_anterior_id, onu_anterior_id, sn_anterior,\n'
                      '        slot_anterior, puerto_anterior, onu_index_anterior, vlan_anterior,\n'
                      '        nap_anterior_id, puerto_nap_anterior, router_anterior_id, ip_anterior,\n'
                      '        direccion_nueva, latitud_nueva, longitud_nueva,\n'
                      '        motivo,\n'
                      '        -- Sin ONU no hay nada que bajar de ninguna OLT: nace resuelta.\n'
                      '        pendiente_baja,\n'
                      '        tecnico_id, creado_por\n'
                      '    ) VALUES (\n'
                      '        p_cliente, v_instalacion,\n'
                      '        c.direccion, c.latitud, c.longitud,\n'
                      '        u.olt_id, u.id, u.sn,\n'
                      '        u.slot, u.puerto, u.onu_index, u.vlan,\n'
                      '        c.nap_id, c.puerto_nap, c.router_id, c.ip,\n'
                      '        BTRIM(p_direccion), p_latitud, p_longitud,\n'
                      '        p_motivo,\n'
                      '        u.id IS NOT NULL,\n'
                      '        COALESCE(p_tecnico, mi_tecnico_id()), mi_legajo_id()\n'
                      '    )\n'
                      '    RETURNING id INTO v_traslado;\n'
                      '\n'
                      '    RETURN v_traslado;\n'
                      'END '),
 'instalacion_actualiza_cliente': ('',
                                   'TRIGGER',
                                   'plpgsql',
                                   '\n'
                                   'BEGIN\n'
                                   "    IF NEW.client_id IS NULL OR NEW.estado <> 'hecha' THEN\n"
                                   '        RETURN NEW;\n'
                                   '    END IF;\n'
                                   '\n'
                                   "    IF NEW.tipo IN ('nueva', 'traslado') THEN\n"
                                   '        UPDATE clientes\n'
                                   '           SET fecha_instalacion = NEW.fecha,\n'
                                   "               estado = CASE WHEN NEW.tipo = 'nueva' THEN 'activo' ELSE "
                                   'estado END,\n'
                                   '               direccion = COALESCE(NEW.direccion, direccion),\n'
                                   '               latitud   = COALESCE(NEW.latitud, latitud),\n'
                                   '               longitud  = COALESCE(NEW.longitud, longitud),\n'
                                   '               provincia = COALESCE(NEW.provincia, provincia),\n'
                                   '               canton    = COALESCE(NEW.canton, canton),\n'
                                   '               ciudad    = COALESCE(NEW.ciudad, ciudad),\n'
                                   '               parroquia = COALESCE(NEW.parroquia, parroquia),\n'
                                   '               condicion_especial = CASE\n'
                                   "                   WHEN NEW.condicion_especial <> 'ninguna' THEN "
                                   'NEW.condicion_especial\n'
                                   '                   ELSE condicion_especial\n'
                                   '               END,\n'
                                   '               tarifa_preferencial = COALESCE(NEW.tarifa_preferencial, '
                                   'tarifa_preferencial),\n'
                                   '               acepta_arbitraje    = COALESCE(NEW.acepta_arbitraje, '
                                   'acepta_arbitraje),\n'
                                   '               equipo_modalidad    = COALESCE(NEW.equipo_modalidad, '
                                   'equipo_modalidad),\n'
                                   '               red_acceso  = COALESCE(NEW.red_acceso, red_acceso),\n'
                                   '               tipo_cuenta = COALESCE(NEW.tipo_cuenta, tipo_cuenta),\n'
                                   '               -- Lo pactado en la venta. Es de las cosas que MÁS '
                                   'importa que\n'
                                   '               -- viajen: define a qué se ató el abonado y qué se le '
                                   'cobró.\n'
                                   '               permanencia_meses = COALESCE(NEW.permanencia_meses, '
                                   'permanencia_meses),\n'
                                   '               valor_instalacion = COALESCE(NEW.valor_instalacion, '
                                   'valor_instalacion)\n'
                                   '         WHERE id = NEW.client_id;\n'
                                   '    END IF;\n'
                                   '\n'
                                   "    IF NEW.tipo = 'retiro' THEN\n"
                                   "        UPDATE clientes SET estado = 'baja' WHERE id = NEW.client_id;\n"
                                   '    END IF;\n'
                                   '\n'
                                   '    RETURN NEW;\n'
                                   'END '),
 'items_de_ruta': ('p_tecnicos UUID[], p_cuadrillas UUID[], p_fecha DATE',
                   'TABLE ( tipo TEXT, id UUID, numero BIGINT, nombre TEXT, direccion TEXT, telefono TEXT, '
                   'latitud NUMERIC, longitud NUMERIC, estado TEXT, en_curso BOOLEAN, prioridad TEXT, fecha '
                   'DATE, franja TEXT, hora TIME, detalle TEXT, tecnico_id UUID, cuadrilla_id UUID, '
                   'salida_at TIMESTAMPTZ, llegada_at TIMESTAMPTZ, orden_fijado BOOLEAN, posicion INT )',
                   'sql',
                   '\n'
                   '    WITH todo AS (\n'
                   "        SELECT 'ticket'::text AS tipo, t.id, t.numero::bigint, t.nombre::text,\n"
                   '               t.direccion::text, COALESCE(t.telefono_whatsapp, t.telefono)::text AS '
                   'telefono,\n'
                   '               COALESCE(t.latitud, c.latitud) AS latitud, COALESCE(t.longitud, '
                   'c.longitud) AS longitud,\n'
                   "               t.estado::text, t.estado IN ('en_ruta', 'en_proceso') AS en_curso,\n"
                   '               t.prioridad::text, t.fecha_visita AS fecha, t.franja::text, t.hora_visita '
                   'AS hora,\n'
                   '               t.tipo_incidencia::text AS detalle, t.tecnico_id, t.cuadrilla_id,\n'
                   '               t.salida_at, t.llegada_at, t.ruta_fecha, t.ruta_orden, t.created_at\n'
                   '          FROM tickets t\n'
                   '          LEFT JOIN clientes c ON c.id = t.client_id\n'
                   "         WHERE t.estado IN ('asignado', 'en_ruta', 'en_proceso')\n"
                   '           AND (t.tecnico_id = ANY(p_tecnicos) OR t.cuadrilla_id = ANY(p_cuadrillas))\n'
                   '           -- Sin fecha de visita cuenta como de hoy (al final), salvo que esté\n'
                   '           -- esperando que la oficina lo reprograme.\n'
                   '           AND (t.fecha_visita <= p_fecha\n'
                   '                OR (t.fecha_visita IS NULL AND t.reprogramar_desde IS NULL)\n'
                   "                OR t.estado IN ('en_ruta', 'en_proceso'))\n"
                   '        UNION ALL\n'
                   "        SELECT 'instalacion', i.id, i.numero::bigint, COALESCE(c.nombre, "
                   'i.nombre)::text,\n'
                   '               COALESCE(i.direccion, c.direccion)::text, COALESCE(i.telefono_whatsapp, '
                   'i.telefono)::text,\n'
                   '               COALESCE(i.latitud, c.latitud), COALESCE(i.longitud, c.longitud),\n'
                   "               i.estado::text, i.estado IN ('en_ruta', 'en_curso'),\n"
                   "               'media', i.fecha, i.franja::text, i.hora,\n"
                   '               i.tipo::text, i.tecnico_id, i.cuadrilla_id,\n'
                   '               NULL::timestamptz, i.llegada_at, i.ruta_fecha, i.ruta_orden, '
                   'i.created_at\n'
                   '          FROM instalaciones i\n'
                   '          LEFT JOIN clientes c ON c.id = i.client_id\n'
                   "         WHERE i.estado IN ('agendada', 'en_ruta', 'en_curso', 'reprogramada')\n"
                   '           AND (i.tecnico_id = ANY(p_tecnicos) OR i.cuadrilla_id = ANY(p_cuadrillas))\n'
                   "           AND (i.fecha <= p_fecha OR i.estado IN ('en_ruta', 'en_curso'))\n"
                   '    )\n'
                   '    SELECT tipo, id, numero, nombre, direccion, telefono, latitud, longitud, estado, '
                   'en_curso,\n'
                   '           prioridad, fecha, franja, hora, detalle, tecnico_id, cuadrilla_id, salida_at, '
                   'llegada_at,\n'
                   '           (ruta_fecha = p_fecha AND ruta_orden IS NOT NULL) AS orden_fijado,\n'
                   '           ROW_NUMBER() OVER (ORDER BY\n'
                   '               en_curso DESC,\n'
                   '               CASE WHEN ruta_fecha = p_fecha AND ruta_orden IS NOT NULL THEN ruta_orden '
                   'ELSE 100000 END,\n'
                   "               CASE prioridad WHEN 'alta' THEN 0 WHEN 'media' THEN 1 ELSE 2 END,\n"
                   '               fecha NULLS LAST,\n'
                   "               CASE franja WHEN 'manana' THEN 0 WHEN 'exacta' THEN 1 WHEN 'tarde' THEN 2 "
                   'ELSE 3 END,\n'
                   '               hora NULLS LAST,\n'
                   '               created_at,\n'
                   '               id)::int AS posicion\n'
                   '      FROM todo\n'
                   '     ORDER BY posicion\n'),
 'jefe_de_grupo': ('p_cuadrilla UUID, p_fecha DATE',
                   'UUID',
                   'sql',
                   '\n'
                   '    SELECT COALESCE(\n'
                   '        (SELECT tecnico_id FROM cuadrilla_reemplazos WHERE cuadrilla_id = p_cuadrilla '
                   'AND fecha = p_fecha),\n'
                   '        (SELECT tecnico_id FROM cuadrilla_miembros WHERE cuadrilla_id = p_cuadrilla AND '
                   "rol = 'lider' LIMIT 1)\n"
                   '    )\n'),
 'limpiar_reconexiones_vencidas': ('',
                                   'INT',
                                   'plpgsql',
                                   '\n'
                                   'DECLARE\n'
                                   '    v_cerradas INT;\n'
                                   'BEGIN\n'
                                   '    WITH cerrar AS (\n'
                                   '        UPDATE reconexiones_pendientes p\n'
                                   '           SET procesado_en = NOW(),\n'
                                   "               error = 'Ya no correspondía: el abonado no está en "
                                   "condiciones de reconexión'\n"
                                   '         WHERE p.procesado_en IS NULL\n'
                                   '           AND NOT EXISTS (\n'
                                   '               SELECT 1 FROM v_clientes_a_reconectar r WHERE '
                                   'r.cliente_id = p.cliente_id\n'
                                   '           )\n'
                                   '           -- Un minuto de gracia: el pago y su imputación pueden no '
                                   'ser\n'
                                   '           -- simultáneos, y cerrar el pedido antes de tiempo lo '
                                   'perdería.\n'
                                   "           AND p.creado_en < NOW() - INTERVAL '1 minute'\n"
                                   '        RETURNING 1\n'
                                   '    )\n'
                                   '    SELECT COUNT(*) INTO v_cerradas FROM cerrar;\n'
                                   '\n'
                                   '    RETURN v_cerradas;\n'
                                   'END '),
 'limpiar_reprogramar': ('',
                         'TRIGGER',
                         'plpgsql',
                         '\n'
                         'BEGIN\n'
                         '    IF NEW.reprogramar_desde IS NOT NULL AND NEW.fecha_visita IS NOT NULL\n'
                         '       AND NEW.fecha_visita IS DISTINCT FROM OLD.fecha_visita THEN\n'
                         '        NEW.reprogramar_desde := NULL;\n'
                         '    END IF;\n'
                         '    RETURN NEW;\n'
                         'END;\n'),
 'marcar_cambio_de_estado': ('',
                             'TRIGGER',
                             'plpgsql',
                             '\n'
                             'BEGIN\n'
                             '    IF NEW.estado IS DISTINCT FROM OLD.estado THEN\n'
                             '        NEW.estado_desde := NOW();\n'
                             '    END IF;\n'
                             '    RETURN NEW;\n'
                             'END '),
 'meses_de_atraso': ('p_cliente UUID, p_hasta DATE DEFAULT CURRENT_DATE',
                     'INT',
                     'plpgsql',
                     '\n'
                     'DECLARE\n'
                     '    v_vence DATE;\n'
                     '    v_edad  INTERVAL;\n'
                     'BEGIN\n'
                     '    /**\n'
                     '     * La más vieja de las que tienen saldo.\n'
                     '     *\n'
                     '     * `v_facturas_por_cobrar` ya excluye anuladas y pagadas, así que acá no hay\n'
                     '     * que repetir esas condiciones: si mañana se agrega otra razón para no\n'
                     '     * cobrar una factura, esta función la respeta sin que nadie la edite.\n'
                     '     *\n'
                     '     * El COALESCE con la emisión es para la factura cargada a mano sin\n'
                     '     * vencimiento: sin él, una sola factura así haría que el abonado no tenga\n'
                     '     * atraso nunca.\n'
                     '     */\n'
                     '    SELECT MIN(COALESCE(f.fecha_vencimiento, f.fecha_emision))::DATE\n'
                     '      INTO v_vence\n'
                     '      FROM v_facturas_por_cobrar f\n'
                     '     WHERE f.client_id = p_cliente;\n'
                     '\n'
                     '    IF v_vence IS NULL OR v_vence >= p_hasta THEN\n'
                     '        RETURN 0;\n'
                     '    END IF;\n'
                     '\n'
                     '    v_edad := AGE(p_hasta, v_vence);\n'
                     '    RETURN (EXTRACT(YEAR FROM v_edad) * 12 + EXTRACT(MONTH FROM v_edad))::INT;\n'
                     'END '),
 'meses_sin_pago': ('p_cliente UUID, p_hasta DATE DEFAULT CURRENT_DATE',
                    'INT',
                    'plpgsql',
                    '\n'
                    'DECLARE\n'
                    '    v_ref DATE;\n'
                    '    v_edad INTERVAL;\n'
                    'BEGIN\n'
                    '    SELECT MAX(pg.fecha_pago)::DATE INTO v_ref\n'
                    '      FROM pagos pg\n'
                    '     WHERE pg.client_id = p_cliente\n'
                    '       AND NOT pg.anulado;\n'
                    '\n'
                    '    IF v_ref IS NULL THEN\n'
                    '        SELECT COALESCE(\n'
                    '                   c.ultimo_pago_externo,\n'
                    '                   c.activado_en::DATE,\n'
                    '                   c.fecha_instalacion::DATE,\n'
                    '                   c.created_at::DATE\n'
                    '               )\n'
                    '          INTO v_ref\n'
                    '          FROM clientes c WHERE c.id = p_cliente;\n'
                    '    END IF;\n'
                    '\n'
                    '    IF v_ref IS NULL OR v_ref >= p_hasta THEN\n'
                    '        RETURN 0;\n'
                    '    END IF;\n'
                    '\n'
                    '    v_edad := AGE(p_hasta, v_ref);\n'
                    '    RETURN (EXTRACT(YEAR FROM v_edad) * 12 + EXTRACT(MONTH FROM v_edad))::INT;\n'
                    'END '),
 'mi_cuadrilla_hoy': ('p_fecha DATE',
                      'JSONB',
                      'sql',
                      '\n'
                      '    WITH c AS (\n'
                      '        SELECT m.cuadrilla_id, cu.nombre, cu.vehiculo_id, '
                      'jefe_de_grupo(m.cuadrilla_id, p_fecha) AS jefe\n'
                      '          FROM cuadrilla_miembros m\n'
                      '          JOIN cuadrillas cu ON cu.id = m.cuadrilla_id\n'
                      '         WHERE m.tecnico_id = mi_tecnico_id()\n'
                      '         -- Si integra más de una, la que dirige hoy va primero.\n'
                      '         ORDER BY (jefe_de_grupo(m.cuadrilla_id, p_fecha) = mi_tecnico_id()) DESC '
                      'NULLS LAST, cu.nombre\n'
                      '         LIMIT 1\n'
                      '    )\n'
                      '    SELECT jsonb_build_object(\n'
                      "        'cuadrilla_id', c.cuadrilla_id,\n"
                      "        'cuadrilla', c.nombre,\n"
                      '        -- El vehículo de la cuadrilla (migración 211): la jornada lo pone sola.\n'
                      "        'vehiculo_id', c.vehiculo_id,\n"
                      "        'vehiculo', (SELECT nombre FROM vehiculos WHERE id = c.vehiculo_id),\n"
                      "        'placa', (SELECT placa FROM vehiculos WHERE id = c.vehiculo_id),\n"
                      "        'jefe_id', c.jefe,\n"
                      "        'jefe', (SELECT nombre FROM tecnicos WHERE id = c.jefe),\n"
                      "        'soy_jefe', COALESCE(c.jefe = mi_tecnico_id(), false),\n"
                      "        'sin_jefe', c.jefe IS NULL,\n"
                      "        'es_reemplazo', EXISTS (SELECT 1 FROM cuadrilla_reemplazos r\n"
                      '                                 WHERE r.cuadrilla_id = c.cuadrilla_id AND r.fecha = '
                      'p_fecha),\n'
                      "        'integrantes', (\n"
                      '            SELECT COALESCE(jsonb_agg(jsonb_build_object(\n'
                      "                       'nombre', t.nombre,\n"
                      "                       'es_jefe', t.id = c.jefe,\n"
                      "                       'ingreso_at', j.inicio_at,\n"
                      "                       'con_foto', j.foto_ingreso IS NOT NULL\n"
                      "                   ) ORDER BY (t.id = c.jefe) DESC, t.nombre), '[]'::jsonb)\n"
                      '              FROM cuadrilla_miembros m\n'
                      '              JOIN tecnicos t ON t.id = m.tecnico_id\n'
                      '              LEFT JOIN jornadas j ON j.tecnico_id = t.id AND j.fecha = p_fecha\n'
                      '             WHERE m.cuadrilla_id = c.cuadrilla_id\n'
                      '        )\n'
                      '    )\n'
                      '      FROM c\n'),
 'mi_ingreso_de_hoy': ('',
                       'JSONB',
                       'plpgsql',
                       '\n'
                       'DECLARE\n'
                       '    v_tec    UUID := mi_tecnico_id();\n'
                       '    v_fecha  DATE := (NOW() AT TIME ZONE zona_horaria())::date;\n'
                       '    v_estado TEXT := estado_de_ingreso();\n'
                       '    v_cuad   UUID;\n'
                       '    v_jefe   UUID;\n'
                       'BEGIN\n'
                       "    IF v_estado <> 'falta_ingreso' THEN\n"
                       "        RETURN jsonb_build_object('estado', v_estado);\n"
                       '    END IF;\n'
                       '\n'
                       '    -- La cuadrilla que dirige hoy; si no dirige ninguna, la primera que tenga '
                       'jefe.\n'
                       '    SELECT m.cuadrilla_id, jefe_de_grupo(m.cuadrilla_id, v_fecha)\n'
                       '      INTO v_cuad, v_jefe\n'
                       '      FROM cuadrilla_miembros m\n'
                       '     WHERE m.tecnico_id = v_tec\n'
                       '       AND jefe_de_grupo(m.cuadrilla_id, v_fecha) IS NOT NULL\n'
                       '     ORDER BY (jefe_de_grupo(m.cuadrilla_id, v_fecha) = v_tec) DESC\n'
                       '     LIMIT 1;\n'
                       '\n'
                       '    IF v_cuad IS NULL THEN\n'
                       "        RETURN jsonb_build_object('estado', v_estado, 'modo', 'individual');\n"
                       '    END IF;\n'
                       '\n'
                       '    IF v_jefe = v_tec THEN\n'
                       '        RETURN jsonb_build_object(\n'
                       "            'estado', v_estado,\n"
                       "            'modo', 'grupal',\n"
                       "            'cuadrilla_id', v_cuad,\n"
                       "            'cuadrilla', (SELECT nombre FROM cuadrillas WHERE id = v_cuad),\n"
                       "            'integrantes', (\n"
                       '                SELECT COALESCE(jsonb_agg(jsonb_build_object(\n'
                       "                           'id', t.id,\n"
                       "                           'nombre', t.nombre,\n"
                       "                           'es_jefe', t.id = v_tec,\n"
                       "                           'en_servicio', en_servicio(t.id, NOW())\n"
                       "                       ) ORDER BY (t.id = v_tec) DESC, t.nombre), '[]'::jsonb)\n"
                       '                  FROM cuadrilla_miembros m\n'
                       '                  JOIN tecnicos t ON t.id = m.tecnico_id AND t.activo\n'
                       '                 WHERE m.cuadrilla_id = v_cuad));\n'
                       '    END IF;\n'
                       '\n'
                       '    -- Integrante: si su jefe ya tomó la foto hoy y él no estaba, va solo.\n'
                       '    IF EXISTS (SELECT 1 FROM ingresos_grupales\n'
                       '                WHERE cuadrilla_id = v_cuad AND fecha = v_fecha) THEN\n'
                       "        RETURN jsonb_build_object('estado', v_estado, 'modo', 'individual');\n"
                       '    END IF;\n'
                       '\n'
                       '    RETURN jsonb_build_object(\n'
                       "        'estado', v_estado,\n"
                       "        'modo', 'espera_grupal',\n"
                       "        'jefe', (SELECT nombre FROM tecnicos WHERE id = v_jefe));\n"
                       'END;\n'),
 'mi_jornada_de_hoy': ('',
                       'UUID',
                       'sql',
                       '\n'
                       '    SELECT id FROM jornadas\n'
                       '     WHERE tecnico_id = mi_tecnico_id()\n'
                       '       AND fecha = (NOW() AT TIME ZONE zona_horaria())::date\n'),
 'mi_legajo': ('',
               'UUID',
               'sql',
               '\n    SELECT id FROM usuarios_sistema WHERE auth_id = auth.uid() AND activo LIMIT 1\n'),
 'mi_legajo_id': ('',
                  'UUID',
                  'sql',
                  '\n    SELECT id FROM usuarios_sistema WHERE auth_id = auth.uid() AND activo LIMIT 1\n'),
 'mi_ruta_hoy': ('',
                 'JSONB',
                 'sql',
                 '\n'
                 '    SELECT jsonb_build_object(\n'
                 "        'items', COALESCE((SELECT jsonb_agg(jsonb_build_object('tipo', r.tipo, 'id', r.id, "
                 "'numero', r.numero, 'nombre', r.nombre, 'direccion', r.direccion, 'telefono', r.telefono, "
                 "'latitud', r.latitud, 'longitud', r.longitud, 'estado', r.estado, 'en_curso', r.en_curso, "
                 "'prioridad', r.prioridad, 'fecha', r.fecha, 'franja', r.franja, 'hora', r.hora, 'detalle', "
                 "r.detalle, 'tecnico_id', r.tecnico_id, 'cuadrilla_id', r.cuadrilla_id, 'salida_at', "
                 "r.salida_at, 'llegada_at', r.llegada_at, 'orden_fijado', r.orden_fijado, 'posicion', "
                 'r.posicion) ORDER BY r.posicion)\n'
                 '            FROM items_de_ruta(\n'
                 '                ARRAY[mi_tecnico_id()],\n'
                 '                COALESCE((SELECT array_agg(cuadrilla_id) FROM cuadrilla_miembros WHERE '
                 "tecnico_id = mi_tecnico_id()), '{}'),\n"
                 "                hoy_isp()) r), '[]'::jsonb),\n"
                 '        -- Puede reordenar: la oficina, o el jefe de grupo de hoy.\n'
                 "        'puede_ordenar', ordena_rutas() OR EXISTS (\n"
                 '            SELECT 1 FROM cuadrilla_miembros m\n'
                 '             WHERE m.tecnico_id = mi_tecnico_id()\n'
                 '               AND jefe_de_grupo(m.cuadrilla_id, hoy_isp()) = mi_tecnico_id()),\n'
                 "        'es_oficina', ordena_rutas()\n"
                 '    )\n'),
 'mi_tecnico_id': ('',
                   'UUID',
                   'sql',
                   '\n'
                   '    SELECT tecnico_id FROM usuarios_sistema WHERE auth_id = auth.uid() AND activo LIMIT '
                   '1\n'),
 'mi_usuario_id': ('',
                   'UUID',
                   'sql',
                   '\n    SELECT id FROM usuarios_sistema WHERE auth_id = auth.uid() AND activo LIMIT 1\n'),
 'mis_clientes_visibles': ('',
                           'TABLE (cliente_id UUID)',
                           'sql',
                           '\n'
                           '    WITH yo AS (\n'
                           '        SELECT id, tecnico_id FROM usuarios_sistema\n'
                           '         WHERE auth_id = auth.uid() AND activo LIMIT 1\n'
                           '    )\n'
                           '    -- Solo el técnico y los clientes de sus trabajos.\n'
                           '    --\n'
                           '    -- La cobranza SALIÓ de acá a propósito: abría la ficha completa cuando lo\n'
                           '    -- que hace falta es un nombre, un teléfono y un saldo. Va por\n'
                           '    -- `v_cobros_por_gestionar`, más abajo.\n'
                           '    SELECT t.client_id\n'
                           '      FROM tickets t JOIN yo ON t.tecnico_id = yo.tecnico_id\n'
                           '     WHERE t.client_id IS NOT NULL\n'
                           '\n'
                           '    UNION\n'
                           '\n'
                           '    SELECT i.client_id\n'
                           '      FROM instalaciones i JOIN yo ON i.tecnico_id = yo.tecnico_id\n'
                           '     WHERE i.client_id IS NOT NULL\n'),
 'mis_cuadrillas': ('',
                    'SETOF UUID',
                    'sql',
                    '\n    SELECT cuadrilla_id FROM cuadrilla_miembros WHERE tecnico_id = mi_tecnico_id()\n'),
 'motivo_sin_emergencia': ('',
                           'TEXT',
                           'plpgsql',
                           '\n'
                           'DECLARE\n'
                           '    v_tec   UUID := mi_tecnico_id();\n'
                           '    v_hora  TIME := (NOW() AT TIME ZONE zona_horaria())::time;\n'
                           '    v_fecha DATE := (NOW() AT TIME ZONE zona_horaria())::date;\n'
                           '    v_desde TIME;\n'
                           '    v_hasta TIME;\n'
                           'BEGIN\n'
                           '    SELECT horario_desde, horario_hasta INTO v_desde, v_hasta FROM config_tareas '
                           'WHERE id = 1;\n'
                           "    v_desde := COALESCE(v_desde, '07:00');\n"
                           "    v_hasta := COALESCE(v_hasta, '18:00');\n"
                           '\n'
                           '    -- Fuera del horario laboral, siempre.\n'
                           '    IF v_hora < v_desde OR v_hora >= v_hasta THEN\n'
                           '        RETURN NULL;\n'
                           '    END IF;\n'
                           '\n'
                           '    -- Dentro, solo con la jornada de hoy ya cerrada.\n'
                           '    IF EXISTS (SELECT 1 FROM jornadas\n'
                           '                WHERE tecnico_id = v_tec AND fecha = v_fecha AND fin_at IS NOT '
                           'NULL) THEN\n'
                           '        RETURN NULL;\n'
                           '    END IF;\n'
                           '\n'
                           '    RETURN format(\n'
                           "        'En horario laboral (%s a %s) no se usa la salida de emergencia: tu "
                           "ingreso se marca al llegar a tu primer cliente. '\n"
                           "        || 'La emergencia es para después de cerrar tu jornada o fuera de ese "
                           "horario.',\n"
                           "        TO_CHAR(v_desde, 'HH24:MI'), TO_CHAR(v_hasta, 'HH24:MI'));\n"
                           'END;\n'),
 'mover_periodo_comisiones': ('p_periodo_id UUID, p_destino TEXT, p_nota TEXT DEFAULT NULL',
                              'comision_periodos',
                              'plpgsql',
                              '\n'
                              'DECLARE\n'
                              '    v_legajo UUID := mi_legajo_id();\n'
                              '    v_fila comision_periodos%ROWTYPE;\n'
                              '    v_permiso TEXT;\n'
                              'BEGIN\n'
                              '    SELECT * INTO v_fila FROM comision_periodos WHERE id = p_periodo_id;\n'
                              '    IF NOT FOUND THEN\n'
                              "        RAISE EXCEPTION 'No existe ese período';\n"
                              '    END IF;\n'
                              '\n'
                              '    -- La condición nueva.\n'
                              '    IF v_legajo IS NULL THEN\n'
                              "        RAISE EXCEPTION 'Autorizar o pagar una comisión pide un legajo: tiene "
                              "que quedar registrado quién lo hizo';\n"
                              '    END IF;\n'
                              '\n'
                              '    v_permiso := CASE p_destino\n'
                              "        WHEN 'aprobado' THEN 'comisiones.aprobar'\n"
                              "        WHEN 'pagado'   THEN 'comisiones.pagar'\n"
                              '        ELSE NULL\n'
                              '    END;\n'
                              '\n'
                              '    IF v_permiso IS NULL THEN\n'
                              "        RAISE EXCEPTION 'Destino inválido: %', p_destino;\n"
                              '    END IF;\n'
                              '\n'
                              '    IF NOT tiene_permiso_comision(v_permiso) THEN\n'
                              "        RAISE EXCEPTION 'No tienes permiso para esto (%)', v_permiso;\n"
                              '    END IF;\n'
                              '\n'
                              "    IF p_destino = 'aprobado' AND v_fila.estado <> 'cerrado' THEN\n"
                              "        RAISE EXCEPTION 'Solo se puede aprobar un período cerrado. Este está "
                              "%.', v_fila.estado;\n"
                              '    END IF;\n'
                              "    IF p_destino = 'pagado' AND v_fila.estado <> 'aprobado' THEN\n"
                              "        RAISE EXCEPTION 'Solo se puede pagar un período aprobado. Este está "
                              "%.', v_fila.estado;\n"
                              '    END IF;\n'
                              '\n'
                              '    UPDATE comision_periodos\n'
                              '       SET estado = p_destino,\n'
                              "           aprobado_por = CASE WHEN p_destino = 'aprobado' THEN v_legajo ELSE "
                              'aprobado_por END,\n'
                              "           aprobado_en  = CASE WHEN p_destino = 'aprobado' THEN NOW()   ELSE "
                              'aprobado_en  END,\n'
                              "           pagado_por   = CASE WHEN p_destino = 'pagado'   THEN v_legajo ELSE "
                              'pagado_por  END,\n'
                              "           pagado_en    = CASE WHEN p_destino = 'pagado'   THEN NOW()   ELSE "
                              'pagado_en   END,\n'
                              '           notas = COALESCE(p_nota, notas)\n'
                              '     WHERE id = p_periodo_id\n'
                              '    RETURNING * INTO v_fila;\n'
                              '\n'
                              '    UPDATE comision_ventas\n'
                              "       SET estado = CASE WHEN p_destino = 'pagado' THEN 'pagada' ELSE "
                              "'aprobada' END,\n"
                              '           actualizado_en = NOW()\n'
                              '     WHERE vendedor_id = v_fila.vendedor_id\n'
                              '       AND periodo = v_fila.periodo\n'
                              '       AND comisionable_en IS NOT NULL\n'
                              "       AND estado NOT IN ('anulada');\n"
                              '\n'
                              '    INSERT INTO auditoria_sistema (\n'
                              '        usuario_id, usuario_nombre, usuario_rol, accion, descripcion, '
                              'entidad, entidad_id, datos\n'
                              '    )\n'
                              "    SELECT u.id, TRIM(CONCAT(u.nombre, ' ', COALESCE(u.apellido, ''))), "
                              'u.rol,\n'
                              "           'comisiones.' || p_destino,\n"
                              "           FORMAT('Marcó como %s la comisión de %s por %s',\n"
                              "                  p_destino, TO_CHAR(v_fila.periodo, 'MM/YYYY'), "
                              'v_fila.monto),\n'
                              "           'comision_periodo', p_periodo_id,\n"
                              "           jsonb_build_object('monto', v_fila.monto, 'ventas', "
                              "v_fila.ventas_validas, 'nota', p_nota)\n"
                              '    FROM usuarios_sistema u WHERE u.id = v_legajo;\n'
                              '\n'
                              '    RETURN v_fila;\n'
                              'END '),
 'nivel_comision': ('p_esquema UUID, p_ventas INT',
                    'comision_niveles',
                    'sql',
                    '\n'
                    '    SELECT * FROM comision_niveles\n'
                    '     WHERE esquema_id = p_esquema\n'
                    '       AND p_ventas >= desde_ventas\n'
                    '       AND (hasta_ventas IS NULL OR p_ventas <= hasta_ventas)\n'
                    '     ORDER BY desde_ventas DESC\n'
                    '     LIMIT 1\n'),
 'no_se_pudo_atender': ('p_ticket UUID, p_motivo TEXT, p_detalle TEXT, p_foto TEXT, p_lat NUMERIC DEFAULT '
                        'NULL, p_lng NUMERIC DEFAULT NULL',
                        'VOID',
                        'plpgsql',
                        '\n'
                        'DECLARE\n'
                        '    t       tickets%ROWTYPE;\n'
                        '    v_tec   UUID := mi_tecnico_id();\n'
                        '    v_min   NUMERIC;\n'
                        '    v_txt   TEXT;\n'
                        '    u       RECORD;\n'
                        'BEGIN\n'
                        '    SELECT * INTO t FROM tickets WHERE id = p_ticket FOR UPDATE;\n'
                        "    IF NOT FOUND THEN RAISE EXCEPTION 'No existe ese ticket.'; END IF;\n"
                        '\n'
                        '    IF NOT (ordena_rutas() OR t.tecnico_id = v_tec\n'
                        '            OR t.cuadrilla_id IN (SELECT cuadrilla_id FROM cuadrilla_miembros WHERE '
                        'tecnico_id = v_tec)) THEN\n'
                        "        RAISE EXCEPTION 'Ese ticket no es tuyo ni de tu cuadrilla.' USING ERRCODE = "
                        "'42501';\n"
                        '    END IF;\n'
                        "    IF t.estado <> 'en_proceso' OR t.llegada_at IS NULL THEN\n"
                        '        RAISE EXCEPTION \'Primero marca "Llegué" en el sitio: el "no se pudo" se '
                        "registra donde el cliente.';\n"
                        '    END IF;\n'
                        "    IF NULLIF(BTRIM(p_foto), '') IS NULL THEN\n"
                        "        RAISE EXCEPTION 'Falta la foto de la fachada: es la prueba de que estuviste "
                        "ahí.';\n"
                        '    END IF;\n'
                        "    IF p_motivo NOT IN ('no_contesta', 'sin_nadie', 'no_permite', "
                        "'direccion_erronea', 'falta_material', 'clima', 'otro') THEN\n"
                        "        RAISE EXCEPTION 'Motivo desconocido: %', p_motivo;\n"
                        '    END IF;\n'
                        "    IF p_motivo = 'otro' AND NULLIF(BTRIM(p_detalle), '') IS NULL THEN\n"
                        "        RAISE EXCEPTION 'Cuenta qué pasó.';\n"
                        '    END IF;\n'
                        '\n'
                        "    IF p_motivo IN ('no_contesta', 'sin_nadie') THEN\n"
                        '        v_min := EXTRACT(EPOCH FROM (NOW() - t.llegada_at)) / 60;\n'
                        '        IF v_min < 10 THEN\n'
                        "            RAISE EXCEPTION 'Espera 10 minutos desde que llegaste: faltan % min.', "
                        'CEIL(10 - v_min)::int;\n'
                        '        END IF;\n'
                        '        IF NOT EXISTS (SELECT 1 FROM campo_llamadas\n'
                        "                        WHERE item_tipo = 'ticket' AND item_id = p_ticket\n"
                        "                          AND creado_at >= t.llegada_at - INTERVAL '2 hours') THEN\n"
                        "            RAISE EXCEPTION 'Llama o escríbele al cliente desde la app antes de "
                        "marcar que no contesta.';\n"
                        '        END IF;\n'
                        '    END IF;\n'
                        '\n'
                        '    INSERT INTO visitas_fallidas (ticket_id, tecnico_id, usuario_id, motivo, '
                        'detalle, foto, lat, lng, llegada_at)\n'
                        '    VALUES (p_ticket, v_tec, mi_usuario_id(), p_motivo, NULLIF(BTRIM(p_detalle), '
                        "''), p_foto,\n"
                        '            p_lat, p_lng, t.llegada_at);\n'
                        '\n'
                        '    -- Vuelve a la oficina: sin fecha, fuera de la ruta, para reprogramar.\n'
                        '    UPDATE tickets\n'
                        "       SET estado = 'asignado', fecha_visita = NULL, ruta_fecha = NULL, ruta_orden "
                        '= NULL,\n'
                        '           salida_at = NULL, llegada_at = NULL, reprogramar_desde = NOW()\n'
                        '     WHERE id = p_ticket;\n'
                        '\n'
                        '    v_txt := CASE p_motivo\n'
                        "        WHEN 'no_contesta' THEN 'No contesta'\n"
                        "        WHEN 'sin_nadie' THEN 'No hay nadie'\n"
                        "        WHEN 'no_permite' THEN 'No permite el ingreso'\n"
                        "        WHEN 'direccion_erronea' THEN 'Dirección errónea'\n"
                        "        WHEN 'falta_material' THEN 'Faltó material'\n"
                        "        WHEN 'clima' THEN 'Lluvia o peligro'\n"
                        "        ELSE 'Otro' END;\n"
                        '\n'
                        '    FOR u IN SELECT id FROM usuarios_sistema\n'
                        "              WHERE activo AND rol IN ('super_admin', 'admin', 'jefe_tecnico')\n"
                        '    LOOP\n'
                        "        PERFORM notificar(u.id, 'visita_fallida',\n"
                        "            format('No se pudo atender el ticket #%s · %s', t.numero, t.nombre),\n"
                        "            v_txt || COALESCE(': ' || NULLIF(BTRIM(p_detalle), ''), '') || '. Hay "
                        "que reprogramarlo.',\n"
                        "            '/soporte/rutas', 'ticket', p_ticket::text);\n"
                        '    END LOOP;\n'
                        'END;\n'),
 'nodos_de_cliente': ('p_cliente UUID',
                      'SETOF UUID',
                      'sql',
                      '\n'
                      '    SELECT n.id\n'
                      '      FROM nodos_red n\n'
                      '      JOIN clientes c ON c.id = p_cliente\n'
                      '     WHERE\n'
                      '        -- Inalámbrico, o colgado de una NAP.\n'
                      '        (n.punto_id IS NOT NULL AND n.punto_id IN (c.conectado_a_id, c.nap_id))\n'
                      '        -- Fibra: por la OLT de su ONU.\n'
                      '        OR (n.olt_id IS NOT NULL\n'
                      '            AND n.olt_id = (SELECT o.olt_id FROM onus o WHERE o.id = c.onu_id))\n'),
 'notificar': ('p_usuario UUID, p_tipo TEXT, p_titulo TEXT, p_detalle TEXT DEFAULT NULL, p_ruta TEXT DEFAULT '
               'NULL, p_entidad TEXT DEFAULT NULL, p_entidad_id TEXT DEFAULT NULL',
               'VOID',
               'plpgsql',
               '\n'
               'BEGIN\n'
               '    IF p_usuario IS NULL THEN RETURN; END IF;\n'
               '\n'
               '    -- Sin este control, reagendar una instalación tres veces manda tres avisos\n'
               '    -- iguales y la campana deja de leerse. Se considera repetida la misma cosa\n'
               '    -- sobre la misma entidad en el mismo día.\n'
               '    IF EXISTS (\n'
               '        SELECT 1 FROM notificaciones\n'
               '         WHERE usuario_id = p_usuario AND tipo = p_tipo\n'
               '           AND entidad_id IS NOT DISTINCT FROM p_entidad_id\n'
               "           AND creado_en > NOW() - INTERVAL '1 day'\n"
               '    ) THEN\n'
               '        RETURN;\n'
               '    END IF;\n'
               '\n'
               '    INSERT INTO notificaciones (usuario_id, tipo, titulo, detalle, ruta, entidad, '
               'entidad_id)\n'
               '    VALUES (p_usuario, p_tipo, p_titulo, p_detalle, p_ruta, p_entidad, p_entidad_id);\n'
               'END '),
 'notificar_estado_nodo': ('',
                           'TRIGGER',
                           'plpgsql',
                           '\n'
                           'DECLARE\n'
                           '    v_usuario   UUID;\n'
                           '    v_titulo    TEXT;\n'
                           '    v_detalle   TEXT;\n'
                           '    v_tipo      TEXT;\n'
                           '    v_duracion  INT;\n'
                           'BEGIN\n'
                           '    -- Solo los cambios de estado, y solo los que son noticia.\n'
                           '    IF NEW.estado IS NOT DISTINCT FROM OLD.estado THEN RETURN NEW; END IF;\n'
                           '    IF NOT NEW.avisar THEN RETURN NEW; END IF;\n'
                           '\n'
                           "    IF NEW.estado = 'down' THEN\n"
                           '        -- ¿Es consecuencia de que su padre está caído? Entonces no es noticia.\n'
                           '        IF EXISTS (\n'
                           '            SELECT 1 FROM nodos_red p\n'
                           "             WHERE p.id = NEW.padre_id AND p.estado = 'down'\n"
                           '        ) THEN\n'
                           '            RETURN NEW;\n'
                           '        END IF;\n'
                           '\n'
                           "        v_tipo   := 'red.caida';\n"
                           "        v_titulo := NEW.nombre || ' sin conexión';\n"
                           "        v_detalle := 'Dejó de responder. '\n"
                           "                  || clientes_de_nodo(NEW.id)::TEXT || ' cliente(s) posiblemente "
                           "afectados.';\n"
                           '\n'
                           "    ELSIF NEW.estado = 'up' AND OLD.estado IN ('down', 'warning') THEN\n"
                           "        v_tipo   := 'red.recuperado';\n"
                           "        v_titulo := NEW.nombre || ' recuperado';\n"
                           '        -- Cuánto estuvo mal. Es el dato que se pregunta después, y sale del\n'
                           '        -- intervalo que ya venía abierto.\n'
                           '        SELECT (EXTRACT(EPOCH FROM (NOW() - e.desde)) / 60)::INT INTO '
                           'v_duracion\n'
                           '          FROM nodo_eventos e\n'
                           '         WHERE e.nodo_id = NEW.id AND e.hasta IS NULL\n'
                           '         ORDER BY e.desde DESC LIMIT 1;\n'
                           '        v_detalle := CASE\n'
                           "            WHEN v_duracion IS NULL THEN 'Volvió a responder.'\n"
                           "            WHEN v_duracion < 60 THEN 'Volvió a responder. Estuvo ' || "
                           "v_duracion || ' minutos sin servicio.'\n"
                           "            ELSE 'Volvió a responder. Estuvo ' || (v_duracion / 60) || 'h ' || "
                           "(v_duracion % 60) || 'm sin servicio.'\n"
                           '        END;\n'
                           '\n'
                           '    ELSE\n'
                           '        -- `warning` no avisa: un enlace que sube y baja de latencia mandaría\n'
                           '        -- avisos toda la tarde. Se ve en el tablero, que es donde corresponde.\n'
                           '        RETURN NEW;\n'
                           '    END IF;\n'
                           '\n'
                           '    -- El técnico del nodo, si tiene uno asignado.\n'
                           '    SELECT u.id INTO v_usuario\n'
                           '      FROM usuarios_sistema u\n'
                           '     WHERE u.tecnico_id = NEW.tecnico_id AND u.activo\n'
                           '     LIMIT 1;\n'
                           '\n'
                           '    IF v_usuario IS NOT NULL THEN\n'
                           '        PERFORM notificar(v_usuario, v_tipo, v_titulo, v_detalle,\n'
                           "                          '/campo/red?nodo=' || NEW.id, 'nodo', NEW.id::TEXT);\n"
                           '    END IF;\n'
                           '\n'
                           '    -- Y quien opera la red. Se excluye al de arriba para no mandarle dos.\n'
                           '    FOR v_usuario IN\n'
                           '        SELECT u.id FROM usuarios_sistema u\n'
                           '         WHERE u.activo\n'
                           "           AND (u.permisos ? '*' OR u.permisos ? 'red.monitoreo')\n"
                           '           AND (NEW.tecnico_id IS NULL OR u.tecnico_id IS DISTINCT FROM '
                           'NEW.tecnico_id)\n'
                           '    LOOP\n'
                           '        PERFORM notificar(v_usuario, v_tipo, v_titulo, v_detalle,\n'
                           "                          '/monitoreo', 'nodo', NEW.id::TEXT);\n"
                           '    END LOOP;\n'
                           '\n'
                           '    RETURN NEW;\n'
                           'END '),
 'notificar_expediente_enviado': ('',
                                  'TRIGGER',
                                  'plpgsql',
                                  '\n'
                                  'DECLARE v_vendedor UUID; v_cliente TEXT;\n'
                                  'BEGIN\n'
                                  "    IF NEW.estado = 'enviado' AND OLD.estado IS DISTINCT FROM 'enviado' "
                                  'THEN\n'
                                  '        SELECT p.vendedor_id, p.nombre INTO v_vendedor, v_cliente\n'
                                  '          FROM prospectos p WHERE p.id = NEW.prospecto_id;\n'
                                  '\n'
                                  '        PERFORM notificar(\n'
                                  "            v_vendedor, 'venta_enviada',\n"
                                  "            'Tu venta fue enviada a instalaciones',\n"
                                  "            v_cliente || ' ya está en la bandeja del backoffice.',\n"
                                  "            '/ventas/tablero', 'expediente', NEW.id::TEXT\n"
                                  '        );\n'
                                  '    END IF;\n'
                                  '    RETURN NEW;\n'
                                  'END '),
 'notificar_instalacion': ('',
                           'TRIGGER',
                           'plpgsql',
                           '\n'
                           'DECLARE v_vendedor UUID;\n'
                           'BEGIN\n'
                           '    IF NEW.estado IS NOT DISTINCT FROM OLD.estado THEN RETURN NEW; END IF;\n'
                           '\n'
                           '    v_vendedor := vendedor_de_instalacion(NEW.id);\n'
                           '    IF v_vendedor IS NULL THEN RETURN NEW; END IF;\n'
                           '\n'
                           "    IF NEW.estado = 'agendada' AND NEW.fecha IS NOT NULL THEN\n"
                           '        PERFORM notificar(\n'
                           "            v_vendedor, 'instalacion_programada',\n"
                           "            'Instalación programada',\n"
                           "            COALESCE(NEW.nombre, 'Tu cliente') || ' quedó agendado para el ' ||\n"
                           "              TO_CHAR(NEW.fecha, 'DD/MM'),\n"
                           "            '/ventas/tablero', 'instalacion', NEW.id::TEXT\n"
                           '        );\n'
                           '\n'
                           "    ELSIF NEW.estado = 'hecha' THEN\n"
                           '        PERFORM notificar(\n'
                           "            v_vendedor, 'instalacion_hecha',\n"
                           "            'Cliente instalado correctamente',\n"
                           "            COALESCE(NEW.nombre, 'Tu cliente') || ' ya tiene el servicio "
                           "andando.',\n"
                           "            '/ventas/tablero', 'instalacion', NEW.id::TEXT\n"
                           '        );\n'
                           '\n'
                           "    ELSIF NEW.estado IN ('no_realizada', 'cancelada') THEN\n"
                           '        -- Esta no estaba en tu lista y la agrego: es la que más le importa al\n'
                           '        -- vendedor. Si el técnico fue y no se pudo instalar, el que tiene que\n'
                           '        -- llamar al cliente antes de que llame él es quien se lo vendió.\n'
                           '        PERFORM notificar(\n'
                           "            v_vendedor, 'instalacion_fallida',\n"
                           "            'No se pudo instalar',\n"
                           "            COALESCE(NEW.nombre, 'Tu cliente') || ': ' ||\n"
                           "              CASE NEW.estado WHEN 'no_realizada' THEN 'el técnico fue y no se "
                           "pudo hacer'\n"
                           "                              ELSE 'la orden se canceló' END,\n"
                           "            '/ventas/tablero', 'instalacion', NEW.id::TEXT\n"
                           '        );\n'
                           '    END IF;\n'
                           '\n'
                           '    RETURN NEW;\n'
                           'END '),
 'onu_resuelve_su_modelo': ('',
                            'TRIGGER',
                            'plpgsql',
                            '\n'
                            'BEGIN\n'
                            '    /**\n'
                            '     * Solo si no lo eligieron a mano.\n'
                            '     *\n'
                            '     * Quien lo seleccionó desde la pantalla sabe algo que el texto de la ONT '
                            'no\n'
                            '     * dice —dos modelos que se reportan igual, una revisión distinta— y\n'
                            '     * pisárselo sería descartar la única información buena que hay.\n'
                            '     */\n'
                            '    IF NEW.tipo_ont_id IS NULL AND NEW.modelo IS NOT NULL THEN\n'
                            '        SELECT t.id INTO NEW.tipo_ont_id\n'
                            '          FROM tipos_ont t\n'
                            '         WHERE UPPER(TRIM(t.modelo)) = UPPER(TRIM(NEW.modelo))\n'
                            '         LIMIT 1;\n'
                            '    END IF;\n'
                            '\n'
                            '    /**\n'
                            '     * Si el modelo cambió, el enlace viejo deja de valer.\n'
                            '     *\n'
                            '     * Pasa al reemplazar el equipo del abonado conservando su fila: la ONT '
                            'nueva\n'
                            '     * reporta otro modelo y el catálogo seguiría apuntando al aparato '
                            'anterior.\n'
                            '     * Se vuelve a resolver, y si el nuevo no está en el catálogo queda NULL '
                            '—que\n'
                            '     * es honesto— en vez de mentir con el viejo.\n'
                            '     */\n'
                            "    IF TG_OP = 'UPDATE'\n"
                            '       AND NEW.modelo IS DISTINCT FROM OLD.modelo\n'
                            '       AND NEW.tipo_ont_id IS NOT DISTINCT FROM OLD.tipo_ont_id THEN\n'
                            '        SELECT t.id INTO NEW.tipo_ont_id\n'
                            '          FROM tipos_ont t\n'
                            '         WHERE UPPER(TRIM(t.modelo)) = UPPER(TRIM(NEW.modelo))\n'
                            '         LIMIT 1;\n'
                            '    END IF;\n'
                            '\n'
                            '    RETURN NEW;\n'
                            'END;\n'),
 'ordena_rutas': ('',
                  'BOOLEAN',
                  'sql',
                  '\n'
                  '    SELECT dirige_cuadrillas() OR EXISTS (\n'
                  '        SELECT 1 FROM usuarios_sistema\n'
                  '         WHERE auth_id = auth.uid() AND activo\n'
                  "           AND (permisos ? '*' OR permisos ? 'soporte.ruta')\n"
                  '    )\n'),
 'ordenar_ruta': ('p_items JSONB, p_motivo TEXT DEFAULT NULL',
                  'VOID',
                  'plpgsql',
                  '\n'
                  'DECLARE\n'
                  '    v_oficina BOOLEAN := ordena_rutas();\n'
                  '    v_tec     UUID := mi_tecnico_id();\n'
                  '    v_fecha   DATE := hoy_isp();\n'
                  '    v_mis     UUID[];\n'
                  '    it        RECORD;\n'
                  '    u         RECORD;\n'
                  'BEGIN\n'
                  "    IF jsonb_typeof(p_items) <> 'array' OR jsonb_array_length(p_items) = 0 THEN\n"
                  "        RAISE EXCEPTION 'No hay trabajos que ordenar.';\n"
                  '    END IF;\n'
                  '\n'
                  '    IF NOT v_oficina THEN\n'
                  '        -- Las cuadrillas que dirige hoy.\n'
                  '        SELECT array_agg(m.cuadrilla_id) INTO v_mis\n'
                  '          FROM cuadrilla_miembros m\n'
                  '         WHERE m.tecnico_id = v_tec AND jefe_de_grupo(m.cuadrilla_id, v_fecha) = v_tec;\n'
                  '        IF v_mis IS NULL THEN\n'
                  "            RAISE EXCEPTION 'La ruta la ordena la oficina o el jefe de grupo del día.' "
                  "USING ERRCODE = '42501';\n"
                  '        END IF;\n'
                  "        IF NULLIF(BTRIM(p_motivo), '') IS NULL THEN\n"
                  "            RAISE EXCEPTION 'Cuenta por qué cambias el orden: queda registrado.';\n"
                  '        END IF;\n'
                  '    END IF;\n'
                  '\n'
                  '    FOR it IN\n'
                  "        SELECT e->>'tipo' AS tipo, (e->>'id')::uuid AS id, ord::int AS orden\n"
                  '          FROM jsonb_array_elements(p_items) WITH ORDINALITY AS x(e, ord)\n'
                  '    LOOP\n'
                  "        IF it.tipo = 'ticket' THEN\n"
                  '            UPDATE tickets SET ruta_fecha = v_fecha, ruta_orden = it.orden\n'
                  '             WHERE id = it.id\n'
                  '               AND (v_oficina OR tecnico_id = v_tec OR cuadrilla_id = ANY(v_mis));\n'
                  "        ELSIF it.tipo = 'instalacion' THEN\n"
                  '            UPDATE instalaciones SET ruta_fecha = v_fecha, ruta_orden = it.orden\n'
                  '             WHERE id = it.id\n'
                  '               AND (v_oficina OR tecnico_id = v_tec OR cuadrilla_id = ANY(v_mis));\n'
                  '        END IF;\n'
                  '        IF NOT FOUND THEN\n'
                  "            RAISE EXCEPTION 'Uno de los trabajos no es de tu cuadrilla.' USING ERRCODE = "
                  "'42501';\n"
                  '        END IF;\n'
                  '    END LOOP;\n'
                  '\n'
                  '    INSERT INTO ruta_cambios (fecha, usuario_id, motivo, items)\n'
                  "    VALUES (v_fecha, mi_usuario_id(), NULLIF(BTRIM(p_motivo), ''), p_items);\n"
                  '\n'
                  '    -- Si lo cambió el jefe de grupo, la oficina se entera.\n'
                  '    IF NOT v_oficina THEN\n'
                  '        FOR u IN SELECT id FROM usuarios_sistema\n'
                  "                  WHERE activo AND rol IN ('super_admin', 'admin', 'jefe_tecnico')\n"
                  '        LOOP\n'
                  "            PERFORM notificar(u.id, 'ruta_cambiada',\n"
                  "                (SELECT nombre FROM tecnicos WHERE id = v_tec) || ' cambió el orden de la "
                  "ruta',\n"
                  "                LEFT(BTRIM(p_motivo), 200), '/soporte/rutas', 'ruta', v_fecha::text || "
                  "':' || v_tec::text);\n"
                  '        END LOOP;\n'
                  '    END IF;\n'
                  'END;\n'),
 'pago_cierra_promesa': ('',
                         'TRIGGER',
                         'plpgsql',
                         '\n'
                         'DECLARE\n'
                         '    v_promesa promesas_pago%ROWTYPE;\n'
                         '    v_saldo   NUMERIC;\n'
                         'BEGIN\n'
                         '    IF NEW.anulado THEN\n'
                         '        RETURN NEW;\n'
                         '    END IF;\n'
                         '\n'
                         '    SELECT * INTO v_promesa\n'
                         '      FROM promesas_pago\n'
                         '     WHERE client_id = NEW.client_id\n'
                         "       AND estado = 'activa'\n"
                         '     LIMIT 1;\n'
                         '\n'
                         '    IF NOT FOUND THEN\n'
                         '        RETURN NEW;\n'
                         '    END IF;\n'
                         '\n'
                         '    IF v_promesa.factura_id IS NOT NULL THEN\n'
                         '        -- Prometió pagar una factura puntual: manda el saldo de esa factura.\n'
                         '        SELECT COALESCE(SUM(saldo), 0) INTO v_saldo\n'
                         '          FROM v_facturas_por_cobrar\n'
                         '         WHERE id = v_promesa.factura_id;\n'
                         '    ELSE\n'
                         '        SELECT COALESCE(SUM(saldo), 0) INTO v_saldo\n'
                         '          FROM v_facturas_por_cobrar\n'
                         '         WHERE client_id = NEW.client_id;\n'
                         '    END IF;\n'
                         '\n'
                         '    UPDATE promesas_pago\n'
                         "       SET estado = CASE WHEN v_saldo <= 0.005 THEN 'cumplida' ELSE 'incumplida' "
                         'END,\n'
                         '           pago_id = NEW.id\n'
                         '     WHERE id = v_promesa.id;\n'
                         '\n'
                         '    RETURN NEW;\n'
                         'END;\n'),
 'panel_facturacion': ('p_hoy DATE DEFAULT NULL',
                       'TABLE ( facturas_hoy INT, facturado_hoy NUMERIC, cobros_hoy INT, cobrado_hoy '
                       'NUMERIC, sin_pagar INT, sin_pagar_monto NUMERIC, vencidas INT, vencidas_monto '
                       'NUMERIC )',
                       'sql',
                       '\n'
                       '    WITH d AS (\n'
                       '        -- La fecha del ISP, no la de UTC: a las 20:00 de Ecuador en UTC ya es '
                       'mañana.\n'
                       '        SELECT COALESCE(p_hoy, (NOW() AT TIME ZONE zona_horaria())::date) AS hoy\n'
                       '    ),\n'
                       '    hoy_f AS (\n'
                       '        SELECT COUNT(*)::int AS n, COALESCE(SUM(f.total), 0) AS monto\n'
                       '          FROM facturas f, d\n'
                       '         WHERE NOT f.anulada AND f.fecha_emision = d.hoy\n'
                       '    ),\n'
                       '    hoy_p AS (\n'
                       '        SELECT COUNT(*)::int AS n, COALESCE(SUM(t.cobrado), 0) AS monto\n'
                       '          FROM v_transacciones t, d\n'
                       '         WHERE NOT t.anulado AND t.fecha_pago = d.hoy\n'
                       '    ),\n'
                       '    pend AS (\n'
                       '        SELECT COUNT(*)::int                                                   AS '
                       'n,\n'
                       '               COALESCE(SUM(c.saldo), 0)                                       AS '
                       'monto,\n'
                       '               (COUNT(*) FILTER (WHERE c.fecha_vencimiento < d.hoy))::int      AS '
                       'n_venc,\n'
                       '               COALESCE(SUM(c.saldo) FILTER (WHERE c.fecha_vencimiento < d.hoy), 0) '
                       'AS monto_venc\n'
                       '          FROM v_facturas_por_cobrar c, d\n'
                       '         GROUP BY d.hoy\n'
                       '    )\n'
                       '    SELECT hoy_f.n, hoy_f.monto,\n'
                       '           hoy_p.n, hoy_p.monto,\n'
                       '           COALESCE(pend.n, 0), COALESCE(pend.monto, 0),\n'
                       '           COALESCE(pend.n_venc, 0), COALESCE(pend.monto_venc, 0)\n'
                       '      FROM hoy_f\n'
                       '     CROSS JOIN hoy_p\n'
                       '      LEFT JOIN pend ON true\n'),
 'parametros_tecnicos': ('',
                         'parametros_tecnicos',
                         'sql',
                         ' SELECT * FROM parametros_tecnicos WHERE id = 1 '),
 'pedir_reconexion': ('p_cliente UUID, p_motivo TEXT',
                      'VOID',
                      'plpgsql',
                      '\n'
                      'BEGIN\n'
                      '    IF p_cliente IS NULL THEN RETURN; END IF;\n'
                      '\n'
                      '    IF NOT EXISTS (\n'
                      "        SELECT 1 FROM clientes WHERE id = p_cliente AND estado = 'cortado'\n"
                      '    ) THEN\n'
                      '        RETURN;\n'
                      '    END IF;\n'
                      '\n'
                      '    INSERT INTO reconexiones_pendientes (cliente_id, motivo)\n'
                      '    VALUES (p_cliente, p_motivo)\n'
                      '    -- Ya hay un pedido abierto para este abonado: con uno alcanza.\n'
                      '    ON CONFLICT DO NOTHING;\n'
                      'END '),
 'prestador_hereda_del_sri': ('',
                              'TRIGGER',
                              'plpgsql',
                              '\n'
                              'DECLARE\n'
                              '    v_id UUID;\n'
                              'BEGIN\n'
                              "    IF NEW.ruc IS NULL OR TRIM(NEW.ruc) = '' THEN\n"
                              '        RETURN NEW;\n'
                              '    END IF;\n'
                              '\n'
                              '    SELECT id INTO v_id FROM prestadores WHERE ruc = NEW.ruc LIMIT 1;\n'
                              '\n'
                              '    /**\n'
                              '     * Si no hay ninguno con ese RUC, se crea — pero solo cuando NO existe\n'
                              '     * ningún prestador todavía.\n'
                              '     *\n'
                              '     * Es la diferencia entre un ISP que recién instala el sistema y uno que '
                              'ya\n'
                              '     * tiene su prestador cargado con otro RUC. Al primero se le arma solo; '
                              'al\n'
                              '     * segundo no se le agrega un segundo prestador que él no pidió y que\n'
                              '     * competiría por ser el predeterminado.\n'
                              '     */\n'
                              '    IF v_id IS NULL THEN\n'
                              '        IF EXISTS (SELECT 1 FROM prestadores) THEN\n'
                              '            RETURN NEW;\n'
                              '        END IF;\n'
                              '\n'
                              '        INSERT INTO prestadores (\n'
                              '            razon_social, nombre_comercial, ruc, direccion, telefono, email, '
                              'predeterminado\n'
                              '        ) VALUES (\n'
                              '            NEW.razon_social,\n'
                              '            NEW.nombre_comercial,\n'
                              '            NEW.ruc,\n'
                              "            -- Un campo vacío del formulario llega como '' y no como NULL: "
                              'sin el\n'
                              '            -- NULLIF, un establecimiento en blanco le ganaba a la matriz y '
                              'el\n'
                              '            -- contrato salía con "Dirección:" vacía.\n'
                              "            COALESCE(NULLIF(TRIM(NEW.dir_establecimiento), ''), "
                              "NULLIF(TRIM(NEW.dir_matriz), '')),\n"
                              "            NULLIF(TRIM(NEW.telefono), ''),\n"
                              "            NULLIF(TRIM(NEW.email), ''),\n"
                              '            TRUE\n'
                              '        );\n'
                              '        RETURN NEW;\n'
                              '    END IF;\n'
                              '\n'
                              '    /**\n'
                              '     * Y si ya existe, se le refrescan los seis campos heredables.\n'
                              '     *\n'
                              '     * Se pisan aunque tengan valor: son los mismos datos, y tener dos '
                              'versiones\n'
                              '     * de la razón social —una en cada pantalla— es cómo se llega a un '
                              'contrato\n'
                              '     * que dice algo distinto de la factura del mismo mes.\n'
                              '     *\n'
                              '     * COALESCE en el otro sentido para no borrar: si el SRI todavía no '
                              'tiene\n'
                              '     * teléfono, se conserva el que el prestador tenga cargado.\n'
                              '     */\n'
                              '    UPDATE prestadores SET\n'
                              "        razon_social     = COALESCE(NULLIF(TRIM(NEW.razon_social), ''), "
                              'razon_social),\n'
                              "        nombre_comercial = COALESCE(NULLIF(TRIM(NEW.nombre_comercial), ''), "
                              'nombre_comercial),\n'
                              "        telefono         = COALESCE(NULLIF(TRIM(NEW.telefono), ''), "
                              'telefono),\n'
                              "        email            = COALESCE(NULLIF(TRIM(NEW.email), ''), email),\n"
                              '        direccion        = COALESCE(NULLIF(TRIM(NEW.dir_establecimiento), '
                              "''),\n"
                              "                                    NULLIF(TRIM(NEW.dir_matriz), ''), "
                              'direccion),\n'
                              '        actualizado_en   = NOW()\n'
                              '    WHERE id = v_id;\n'
                              '\n'
                              '    RETURN NEW;\n'
                              'END '),
 'primera_ip_libre': ('p_subred UUID',
                      'TEXT',
                      'plpgsql',
                      '\n'
                      'DECLARE\n'
                      '    v_sub    subredes%ROWTYPE;\n'
                      '    v_desde  BIGINT;\n'
                      '    v_hasta  BIGINT;\n'
                      '    v_n      BIGINT;\n'
                      '    v_ip     TEXT;\n'
                      'BEGIN\n'
                      '    SELECT * INTO v_sub FROM subredes WHERE id = p_subred;\n'
                      '\n'
                      '    IF NOT FOUND THEN\n'
                      "        RAISE EXCEPTION 'No existe esa subred';\n"
                      '    END IF;\n'
                      '\n'
                      '    -- Solo IPv4. En un /64 de IPv6 recorrer direcciones una por una no termina\n'
                      '    -- nunca, y ahí las direcciones no se reparten así.\n'
                      '    IF family(v_sub.cidr) <> 4 THEN\n'
                      "        RAISE EXCEPTION 'La subred % no es IPv4', v_sub.nombre;\n"
                      '    END IF;\n'
                      '\n'
                      '    -- El rango declarado manda sobre el del bloque: un /24 del que el ISP solo\n'
                      '    -- entrega .100 a .200 tiene el resto para otra cosa, y proponer .10 sería\n'
                      '    -- meterse en el medio de sus enlaces.\n'
                      '    v_desde := COALESCE(\n'
                      "        v_sub.rango_desde - '0.0.0.0'::INET,\n"
                      "        (network(v_sub.cidr) - '0.0.0.0'::INET) + 1\n"
                      '    );\n'
                      '    v_hasta := COALESCE(\n'
                      "        v_sub.rango_hasta - '0.0.0.0'::INET,\n"
                      "        (broadcast(v_sub.cidr) - '0.0.0.0'::INET) - 1\n"
                      '    );\n'
                      '\n'
                      '    v_n := v_desde;\n'
                      '    WHILE v_n <= v_hasta LOOP\n'
                      "        v_ip := host('0.0.0.0'::INET + v_n);\n"
                      '\n'
                      '        IF quien_tiene_la_ip(v_ip, v_sub.router_id) IS NULL\n'
                      '           -- Ni el gateway del propio bloque, aunque nadie lo haya registrado.\n'
                      '           AND (v_sub.gateway IS NULL OR v_ip <> host(v_sub.gateway))\n'
                      '        THEN\n'
                      '            RETURN v_ip;\n'
                      '        END IF;\n'
                      '\n'
                      '        v_n := v_n + 1;\n'
                      '    END LOOP;\n'
                      '\n'
                      '    RETURN NULL;\n'
                      'END '),
 'proteger_plantillas_del_sistema': ('',
                                     'TRIGGER',
                                     'plpgsql',
                                     '\n'
                                     'BEGIN\n'
                                     '    IF OLD.del_sistema THEN\n'
                                     '        RAISE EXCEPTION\n'
                                     '            \'La plantilla "%" la usa el sistema y no se puede borrar. '
                                     "Se puede editar, o desactivar con activa = false.',\n"
                                     '            OLD.nombre;\n'
                                     '    END IF;\n'
                                     '    RETURN OLD;\n'
                                     'END '),
 'puede_autorizar_firma_manual': ('',
                                  'BOOLEAN',
                                  'sql',
                                  '\n'
                                  '    SELECT COALESCE(\n'
                                  "        (SELECT u.permisos ? '*'\n"
                                  "             OR u.permisos ? 'contratos.firma_manual'\n"
                                  '             OR (SELECT roles_autorizan FROM config_firma WHERE id = 1) ? '
                                  'u.rol\n'
                                  '           FROM usuarios_sistema u\n'
                                  '          WHERE u.auth_id = auth.uid() AND u.activo\n'
                                  '          LIMIT 1),\n'
                                  '        TRUE\n'
                                  '    )\n'),
 'puede_cargar_km': ('p_tecnico UUID, p_fecha DATE',
                     'BOOLEAN',
                     'sql',
                     '\n'
                     '    SELECT NOT EXISTS (SELECT 1 FROM cuadrilla_miembros WHERE tecnico_id = p_tecnico)\n'
                     '        OR EXISTS (\n'
                     '            SELECT 1 FROM cuadrilla_miembros m\n'
                     '             WHERE m.tecnico_id = p_tecnico\n'
                     '               AND (jefe_de_grupo(m.cuadrilla_id, p_fecha) IS NULL\n'
                     '                    OR jefe_de_grupo(m.cuadrilla_id, p_fecha) = p_tecnico)\n'
                     '        )\n'),
 'puede_cerrar_reparacion': ('p_id UUID',
                             'BOOLEAN',
                             'sql',
                             '\n'
                             '    SELECT dirige_cuadrillas() OR EXISTS (\n'
                             '        SELECT 1 FROM reparaciones_red r\n'
                             '         WHERE r.id = p_id\n'
                             '           AND ((r.tecnico_id IS NOT NULL AND r.tecnico_id = mi_tecnico_id())\n'
                             '             OR (r.cuadrilla_id IS NOT NULL\n'
                             '                 AND r.cuadrilla_id IN (SELECT mis_cuadrillas())\n'
                             '                 AND COALESCE(jefe_de_grupo(r.cuadrilla_id, (NOW() AT TIME '
                             'ZONE zona_horaria())::date),\n'
                             '                              mi_tecnico_id()) = mi_tecnico_id()))\n'
                             '    )\n'),
 'puede_configurar_alertas': ('',
                              'BOOLEAN',
                              'sql',
                              '\n'
                              '    SELECT COALESCE(\n'
                              "        (SELECT permisos ? '*' OR permisos ? 'ajustes.editar' OR permisos ? "
                              "'nms.ver'\n"
                              '           FROM usuarios_sistema\n'
                              '          WHERE auth_id = auth.uid() AND activo\n'
                              '          LIMIT 1),\n'
                              '        TRUE\n'
                              '    )\n'),
 'puede_configurar_comisiones': ('',
                                 'BOOLEAN',
                                 'sql',
                                 '\n'
                                 '    SELECT COALESCE(\n'
                                 "        (SELECT permisos ? '*' OR permisos ? 'comisiones.configurar'\n"
                                 '           FROM usuarios_sistema\n'
                                 '          WHERE auth_id = auth.uid() AND activo\n'
                                 '          LIMIT 1),\n'
                                 '        -- Sin legajo no se bloquea: misma regla que el resto del sistema, '
                                 'para\n'
                                 '        -- que una instalación a medio migrar no quede inutilizable.\n'
                                 '        TRUE\n'
                                 '    )\n'),
 'puede_gestionar_retiros': ('',
                             'BOOLEAN',
                             'sql',
                             '\n'
                             '    SELECT COALESCE(\n'
                             '        -- `inventario.transferir` también sirve: es el permiso de quien '
                             'despacha\n'
                             '        -- material a los técnicos, y un equipo que vuelve es material que\n'
                             '        -- entra. Sin esto, toda instalación que ya funciona tendría que '
                             'editar\n'
                             '        -- sus roles antes de poder cerrar la primera orden.\n'
                             "        (SELECT permisos ? '*' OR permisos ? 'retiros.gestionar' OR permisos ? "
                             "'inventario.transferir'\n"
                             '           FROM usuarios_sistema\n'
                             '          WHERE auth_id = auth.uid() AND activo\n'
                             '          LIMIT 1),\n'
                             '        TRUE\n'
                             '    )\n'),
 'puede_operar_red': ('',
                      'BOOLEAN',
                      'sql',
                      '\n'
                      '    SELECT COALESCE(\n'
                      "        (SELECT permisos ? '*' OR permisos ? 'red.monitoreo'\n"
                      '           FROM usuarios_sistema WHERE auth_id = auth.uid() AND activo LIMIT 1),\n'
                      '        TRUE\n'
                      '    )\n'),
 'puede_ver_monitoreo': ('',
                         'BOOLEAN',
                         'sql',
                         '\n'
                         '    SELECT COALESCE(\n'
                         "        (SELECT permisos ? '*'\n"
                         "             OR permisos ? 'red.monitoreo'\n"
                         "             OR permisos ? 'red.monitoreo_ver'\n"
                         '           FROM usuarios_sistema WHERE auth_id = auth.uid() AND activo LIMIT 1),\n'
                         '        -- Sin legajo se permite, igual que el resto de los ayudantes: una\n'
                         '        -- instalación que todavía no corrió la migración 66 no puede quedarse\n'
                         '        -- sin monitoreo de golpe.\n'
                         '        TRUE\n'
                         '    )\n'),
 'puede_ver_red': ('',
                   'BOOLEAN',
                   'sql',
                   '\n'
                   '    SELECT COALESCE(\n'
                   "        (SELECT permisos ? '*' OR permisos ? 'red.onus_ver' OR permisos ? "
                   "'red.olts_ver'\n"
                   '           FROM usuarios_sistema WHERE auth_id = auth.uid() AND activo LIMIT 1),\n'
                   '        TRUE\n'
                   '    )\n'),
 'quien_es_la_onu': ('p_onu UUID',
                     'TABLE (nombre TEXT, zona TEXT, direccion TEXT, telefono TEXT, cliente_id UUID, codigo '
                     'INT)',
                     'sql',
                     '\n'
                     '    SELECT\n'
                     '        COALESCE(\n'
                     "            NULLIF(BTRIM(c.nombre), ''),\n"
                     "            NULLIF(BTRIM(o.nombre_cliente), ''),\n"
                     "            'ONT ' || o.sn\n"
                     '        )::TEXT,\n'
                     "        COALESCE(NULLIF(BTRIM(c.zona), ''), NULLIF(BTRIM(o.zona), ''))::TEXT,\n"
                     "        COALESCE(NULLIF(BTRIM(c.direccion), ''), NULLIF(BTRIM(o.direccion), "
                     "''))::TEXT,\n"
                     '        COALESCE(\n'
                     "            NULLIF(BTRIM(c.telefono_movil), ''),\n"
                     "            NULLIF(BTRIM(c.telefono), ''),\n"
                     "            NULLIF(BTRIM(o.contacto), '')\n"
                     '        )::TEXT,\n'
                     '        c.id,\n'
                     '        c.codigo\n'
                     '      FROM onus o\n'
                     '      LEFT JOIN clientes c ON c.onu_id = o.id\n'
                     '     WHERE o.id = p_onu\n'),
 'quien_tiene_la_ip': ('p_ip TEXT, p_router UUID DEFAULT NULL, p_excluir UUID DEFAULT NULL',
                       'TEXT',
                       'sql',
                       '\n'
                       '    SELECT u.quien\n'
                       '      FROM v_ips_en_uso u\n'
                       '     WHERE u.ip = TRIM(p_ip)\n'
                       '       -- Sin router, se busca en toda la red: dos abonados de routers distintos\n'
                       '       -- con la misma IP privada es normal y no choca. Con router, solo ahí.\n'
                       '       AND (p_router IS NULL OR u.router_id = p_router OR u.router_id IS NULL)\n'
                       '       AND (p_excluir IS NULL OR u.cliente_id IS DISTINCT FROM p_excluir)\n'
                       '     LIMIT 1\n'),
 'racha_de_ventas': ('p_vendedor UUID',
                     'INT',
                     'sql',
                     '\n'
                     '    WITH dias AS (\n'
                     '        SELECT DISTINCT DATE(actualizado_en) AS dia\n'
                     '          FROM prospectos\n'
                     "         WHERE vendedor_id = p_vendedor AND estado = 'ganado'\n"
                     "           AND actualizado_en > NOW() - INTERVAL '60 days'\n"
                     '    ),\n'
                     '    -- El truco de siempre para rachas: a una serie de días consecutivos, restarle\n'
                     '    -- su número de orden da la misma fecha para todos. Agrupando por eso salen\n'
                     '    -- los tramos.\n'
                     '    tramos AS (\n'
                     '        SELECT dia, dia - (ROW_NUMBER() OVER (ORDER BY dia))::INT AS grupo FROM dias\n'
                     '    )\n'
                     '    SELECT COALESCE(\n'
                     '        (SELECT COUNT(*)::INT FROM tramos\n'
                     '          WHERE grupo = (SELECT grupo FROM tramos ORDER BY dia DESC LIMIT 1)\n'
                     '            -- Solo cuenta si el tramo llega hasta hoy o ayer: una racha que\n'
                     '            -- terminó la semana pasada no es una racha, es historia.\n'
                     '            AND (SELECT MAX(dia) FROM tramos) >= CURRENT_DATE - 1),\n'
                     '        0)\n'),
 'rechazar_pago_reportado': ('p_id UUID, p_motivo TEXT, p_usuario UUID DEFAULT NULL',
                             'VOID',
                             'plpgsql',
                             '\n'
                             'BEGIN\n'
                             "    IF COALESCE(TRIM(p_motivo), '') = '' THEN\n"
                             "        RAISE EXCEPTION 'Hay que decir por qué se rechaza: es lo que el "
                             "abonado va a preguntar';\n"
                             '    END IF;\n'
                             '\n'
                             '    UPDATE pagos_reportados\n'
                             "       SET estado         = 'rechazado',\n"
                             '           motivo_rechazo = TRIM(p_motivo),\n'
                             '           verificado_por = p_usuario,\n'
                             '           verificado_at  = NOW()\n'
                             "     WHERE id = p_id AND estado = 'pendiente';\n"
                             '\n'
                             '    IF NOT FOUND THEN\n'
                             "        RAISE EXCEPTION 'Ese pago reportado no existe o ya fue resuelto';\n"
                             '    END IF;\n'
                             'END;\n'),
 'recibir_entrega_inventario': ('p_entrega UUID, p_firma TEXT, p_almacen UUID DEFAULT NULL, p_notas TEXT '
                                'DEFAULT NULL',
                                'entregas_inventario',
                                'plpgsql',
                                '\n'
                                'DECLARE\n'
                                '    v_acta    entregas_inventario%ROWTYPE;\n'
                                '    v_legajo  UUID := mi_legajo_id();\n'
                                '    v_destino UUID;\n'
                                '    v_item    RECORD;\n'
                                'BEGIN\n'
                                '    SELECT * INTO v_acta FROM entregas_inventario WHERE id = p_entrega;\n'
                                '    IF NOT FOUND THEN\n'
                                "        RAISE EXCEPTION 'No existe esa acta';\n"
                                '    END IF;\n'
                                '\n'
                                "    IF v_acta.estado <> 'pendiente' THEN\n"
                                "        RAISE EXCEPTION 'Esa acta ya está %', v_acta.estado;\n"
                                '    END IF;\n'
                                '\n'
                                '    IF NOT puede_gestionar_retiros() THEN\n'
                                "        RAISE EXCEPTION 'No tienes permiso para recibir material';\n"
                                '    END IF;\n'
                                '\n'
                                '    IF v_legajo IS NOT NULL AND v_legajo = v_acta.entrega_id THEN\n'
                                "        RAISE EXCEPTION 'No puedes recibir tu propia entrega: la firma "
                                "tiene que ser de quien recibe';\n"
                                '    END IF;\n'
                                '\n'
                                "    IF COALESCE(BTRIM(p_firma), '') = '' THEN\n"
                                "        RAISE EXCEPTION 'Falta la firma de quien recibe';\n"
                                '    END IF;\n'
                                '\n'
                                '    v_destino := COALESCE(\n'
                                '        p_almacen,\n'
                                "        (SELECT a.id FROM almacenes a WHERE a.tipo = 'bodega' ORDER BY "
                                'a.creado_en LIMIT 1)\n'
                                '    );\n'
                                '\n'
                                '    IF v_destino IS NULL THEN\n'
                                "        RAISE EXCEPTION 'No hay un almacén general a dónde recibir';\n"
                                '    END IF;\n'
                                '\n'
                                '    FOR v_item IN\n'
                                '        SELECT i.equipo_id, i.retiro_id, e.articulo_id\n'
                                '          FROM entrega_items i\n'
                                '          JOIN equipos e ON e.id = i.equipo_id\n'
                                '         WHERE i.entrega_id = p_entrega\n'
                                '    LOOP\n'
                                '        UPDATE equipos SET almacen_id = v_destino WHERE id = '
                                'v_item.equipo_id;\n'
                                '\n'
                                '        INSERT INTO movimientos_inventario (\n'
                                '            tipo, articulo_id, equipo_id, cantidad,\n'
                                '            almacen_origen_id, almacen_destino_id, motivo, usuario_id, '
                                'usuario_nombre\n'
                                '        )\n'
                                "        SELECT 'transferencia', v_item.articulo_id, v_item.equipo_id, 1,\n"
                                '               v_acta.almacen_origen, v_destino,\n'
                                "               FORMAT('Entrega de equipos recuperados (acta %s)', "
                                'v_acta.numero),\n'
                                '               v_legajo,\n'
                                "               (SELECT TRIM(CONCAT(u.nombre, ' ', COALESCE(u.apellido, "
                                "'')))\n"
                                '                  FROM usuarios_sistema u WHERE u.id = v_legajo);\n'
                                '\n'
                                '        -- El equipo terminó de volver: si su dueño sigue figurando como\n'
                                '        -- abonado, ahí nace el pendiente de cerrar la ficha.\n'
                                '        IF v_item.retiro_id IS NOT NULL THEN\n'
                                '            PERFORM avisar_ficha_por_cerrar(\n'
                                '                (SELECT cliente_id FROM retiros_equipo WHERE id = '
                                'v_item.retiro_id)\n'
                                '            );\n'
                                '        END IF;\n'
                                '    END LOOP;\n'
                                '\n'
                                '    UPDATE entregas_inventario\n'
                                "       SET estado = 'recibida',\n"
                                '           recibe_id = v_legajo,\n'
                                '           almacen_destino = v_destino,\n'
                                '           firma_b64 = p_firma,\n'
                                '           firmado_en = NOW(),\n'
                                "           notas = COALESCE(NULLIF(BTRIM(p_notas), ''), notas)\n"
                                '     WHERE id = p_entrega\n'
                                '    RETURNING * INTO v_acta;\n'
                                '\n'
                                '    RETURN v_acta;\n'
                                'END '),
 'reconectar_al_pagar': ('',
                         'TRIGGER',
                         'plpgsql',
                         '\n'
                         'BEGIN\n'
                         '    IF NOT NEW.anulado THEN\n'
                         "        PERFORM pedir_reconexion(NEW.client_id, 'pago');\n"
                         '    END IF;\n'
                         '    RETURN NEW;\n'
                         'END '),
 'reconectar_al_prometer': ('',
                            'TRIGGER',
                            'plpgsql',
                            '\n'
                            'BEGIN\n'
                            "    IF NEW.estado = 'activa' AND NEW.fecha_promesa >= CURRENT_DATE THEN\n"
                            "        PERFORM pedir_reconexion(NEW.client_id, 'promesa');\n"
                            '    END IF;\n'
                            '    RETURN NEW;\n'
                            'END '),
 'recordar_retiros_agendados': ('p_horas INT DEFAULT 24',
                                'TABLE (avisadas INT, vencidas INT)',
                                'plpgsql',
                                '\n'
                                'DECLARE\n'
                                '    r        RECORD;\n'
                                '    v_prox   INT := 0;\n'
                                '    v_venc   INT := 0;\n'
                                '    v_quien  UUID;\n'
                                '    v_zona   TEXT := zona_horaria();\n'
                                'BEGIN\n'
                                '    FOR r IN\n'
                                '        SELECT re.id, re.responsable_id, re.serie, re.agendado_para, '
                                're.agenda_nota,\n'
                                '               re.recordado_en, c.nombre AS cliente,\n'
                                '               COALESCE(c.telefono_movil, c.telefono) AS telefono,\n'
                                '               (re.agendado_para < NOW()) AS vencida\n'
                                '          FROM retiros_equipo re\n'
                                '          JOIN clientes c ON c.id = re.cliente_id\n'
                                "         WHERE re.estado IN ('pendiente', 'asignado')\n"
                                '           AND re.agendado_para IS NOT NULL\n'
                                "           AND re.agendado_para <= NOW() + (p_horas || ' hours')::INTERVAL\n"
                                '           AND (re.recordado_en IS NULL OR re.recordado_en < CURRENT_DATE)\n'
                                '    LOOP\n'
                                '        v_quien := r.responsable_id;\n'
                                '\n'
                                '        IF v_quien IS NULL THEN\n'
                                '            SELECT id INTO v_quien\n'
                                '              FROM usuarios_sistema\n'
                                '             WHERE activo\n'
                                "               AND (permisos ? '*' OR permisos ? 'retiros.gestionar')\n"
                                '             ORDER BY creado_en\n'
                                '             LIMIT 1;\n'
                                '        END IF;\n'
                                '\n'
                                '        PERFORM notificar(\n'
                                '            v_quien,\n'
                                "            CASE WHEN r.vencida THEN 'retiro_vencido' ELSE "
                                "'retiro_agendado' END,\n"
                                '            CASE WHEN r.vencida\n'
                                "                 THEN 'Se pasó la hora de un retiro'\n"
                                "                 ELSE 'Retiro agendado' END,\n"
                                '            r.cliente\n'
                                '                -- Acá está el arreglo: la hora se escribe en la zona del '
                                'ISP.\n'
                                "                || ' — ' || TO_CHAR(r.agendado_para AT TIME ZONE v_zona, "
                                "'DD/MM HH24:MI')\n"
                                "                || COALESCE(' · ' || r.telefono, '')\n"
                                "                || COALESCE(E'\\n' || r.agenda_nota, ''),\n"
                                "            '/campo/retiros',\n"
                                "            'retiro',\n"
                                '            r.id::TEXT\n'
                                '        );\n'
                                '\n'
                                '        UPDATE retiros_equipo SET recordado_en = NOW() WHERE id = r.id;\n'
                                '\n'
                                '        IF r.vencida THEN v_venc := v_venc + 1; ELSE v_prox := v_prox + 1; '
                                'END IF;\n'
                                '    END LOOP;\n'
                                '\n'
                                '    RETURN QUERY SELECT v_prox, v_venc;\n'
                                'END '),
 'reemplazar_equipo_cliente': ('p_cliente UUID, p_serie_nueva TEXT, p_motivo TEXT, p_destino TEXT DEFAULT '
                               "'averiado', p_detalle TEXT DEFAULT NULL, p_ticket UUID DEFAULT NULL, "
                               'p_instalacion UUID DEFAULT NULL',
                               'UUID',
                               'plpgsql',
                               '\n'
                               'DECLARE\n'
                               '    v_tecnico   UUID;\n'
                               '    v_legajo    UUID;\n'
                               '    v_almacen   UUID;\n'
                               '    v_nuevo     equipos%ROWTYPE;\n'
                               '    v_viejo     equipos%ROWTYPE;\n'
                               '    v_onu_vieja UUID;\n'
                               '    v_reemplazo UUID;\n'
                               'BEGIN\n'
                               '    v_legajo  := mi_legajo_id();\n'
                               '    v_tecnico := mi_tecnico_id();\n'
                               '\n'
                               '    IF p_ticket IS NULL AND p_instalacion IS NULL THEN\n'
                               "        RAISE EXCEPTION 'El reemplazo tiene que estar asociado a un ticket o "
                               "a una instalación';\n"
                               '    END IF;\n'
                               '\n'
                               '    -- ── El equipo nuevo ──\n'
                               '    SELECT * INTO v_nuevo FROM equipos\n'
                               '     WHERE UPPER(BTRIM(serie)) = UPPER(BTRIM(p_serie_nueva))\n'
                               '     LIMIT 1;\n'
                               '\n'
                               '    IF NOT FOUND THEN\n'
                               "        RAISE EXCEPTION 'No hay ningún equipo cargado con la serie %. Revisa "
                               "el número o pide que lo den de alta en bodega.', p_serie_nueva;\n"
                               '    END IF;\n'
                               '\n'
                               "    IF v_nuevo.estado <> 'en_stock' THEN\n"
                               "        RAISE EXCEPTION 'El equipo % no está disponible: figura como %.', "
                               'p_serie_nueva, v_nuevo.estado;\n'
                               '    END IF;\n'
                               '\n'
                               '    -- Que salga del almacén de quien lo está instalando. Un técnico no '
                               'puede\n'
                               '    -- descontar de la camioneta de otro.\n'
                               '    IF v_tecnico IS NOT NULL THEN\n'
                               '        SELECT id INTO v_almacen FROM almacenes WHERE tecnico_id = v_tecnico '
                               'LIMIT 1;\n'
                               '        IF v_almacen IS NOT NULL AND v_nuevo.almacen_id IS DISTINCT FROM '
                               'v_almacen THEN\n'
                               "            RAISE EXCEPTION 'El equipo % no está en tu almacén. Pide la "
                               "transferencia antes de instalarlo.', p_serie_nueva;\n"
                               '        END IF;\n'
                               '    END IF;\n'
                               '\n'
                               '    -- ── El equipo viejo: el que hoy figura instalado en ese cliente ──\n'
                               '    SELECT * INTO v_viejo FROM equipos\n'
                               "     WHERE cliente_id = p_cliente AND estado = 'instalado'\n"
                               '     ORDER BY actualizado_en DESC NULLS LAST\n'
                               '     LIMIT 1;\n'
                               '\n'
                               '    -- ── 3. El viejo sale ──\n'
                               '    IF v_viejo.id IS NOT NULL THEN\n'
                               '        UPDATE equipos\n'
                               '           SET estado     = CASE p_destino\n'
                               "                              WHEN 'bodega'  THEN 'en_stock'\n"
                               "                              WHEN 'baja'    THEN 'baja'\n"
                               "                              WHEN 'cliente' THEN 'instalado'\n"
                               "                              ELSE 'averiado'\n"
                               '                            END,\n'
                               '               -- Deja de estar en casa del cliente, salvo que se le haya '
                               'dejado.\n'
                               "               cliente_id = CASE WHEN p_destino = 'cliente' THEN cliente_id "
                               'ELSE NULL END,\n'
                               "               almacen_id = CASE WHEN p_destino = 'bodega' THEN v_almacen "
                               'ELSE almacen_id END,\n'
                               '               onu_id     = NULL\n'
                               '         WHERE id = v_viejo.id;\n'
                               '    END IF;\n'
                               '\n'
                               '    -- ── 1 y 2. El nuevo entra ──\n'
                               '    UPDATE equipos\n'
                               "       SET estado     = 'instalado',\n"
                               '           cliente_id = p_cliente,\n'
                               '           almacen_id = NULL,\n'
                               '           instalacion_id = COALESCE(p_instalacion, instalacion_id)\n'
                               '     WHERE id = v_nuevo.id;\n'
                               '\n'
                               '    -- El movimiento de inventario, para que el stock cuadre. Sin esto, el\n'
                               '    -- equipo desaparece del almacén sin que la bitácora lo explique.\n'
                               '    INSERT INTO movimientos_inventario (\n'
                               '        tipo, articulo_id, equipo_id, cantidad, almacen_origen_id,\n'
                               '        instalacion_id, ticket_id, motivo, usuario_id\n'
                               '    ) VALUES (\n'
                               "        'consumo', v_nuevo.articulo_id, v_nuevo.id, 1, v_nuevo.almacen_id,\n"
                               '        p_instalacion, p_ticket,\n'
                               "        'Reemplazo de equipo: ' || p_motivo, v_legajo\n"
                               '    );\n'
                               '\n'
                               '    -- ── Cuál era la ONU, ANTES de soltarla ──\n'
                               '    --\n'
                               '    -- Este es el dato que después necesita el middleware para poner la ONT\n'
                               '    -- nueva en el mismo puerto y con el mismo perfil. Si se leyera después '
                               'de\n'
                               '    -- anular `onu_id`, ya no estaría.\n'
                               '    SELECT onu_id INTO v_onu_vieja FROM clientes WHERE id = p_cliente;\n'
                               '\n'
                               '    -- ── 5. El abonado apunta al nuevo ──\n'
                               '    --\n'
                               '    -- `onu_id` queda en NULL hasta que la OLT confirme: apuntarlo a la ONU '
                               'vieja\n'
                               '    -- sería dejar la ficha diciendo algo falso, y apuntarlo a una nueva '
                               'que\n'
                               '    -- todavía no existe en la OLT, también.\n'
                               '    UPDATE clientes\n'
                               '       SET onu_id      = NULL,\n'
                               '           mac_address = COALESCE(v_nuevo.mac, mac_address)\n'
                               '     WHERE id = p_cliente;\n'
                               '\n'
                               '    -- ── El registro ──\n'
                               '    INSERT INTO reemplazos_equipo (\n'
                               '        cliente_id, ticket_id, instalacion_id,\n'
                               '        equipo_anterior_id, equipo_nuevo_id, onu_anterior_id,\n'
                               '        serie_anterior, serie_nueva,\n'
                               '        motivo, detalle, destino_anterior, tecnico_id, creado_por\n'
                               '    ) VALUES (\n'
                               '        p_cliente, p_ticket, p_instalacion,\n'
                               '        v_viejo.id, v_nuevo.id, v_onu_vieja,\n'
                               '        v_viejo.serie, v_nuevo.serie,\n'
                               '        p_motivo, p_detalle, p_destino, v_tecnico, v_legajo\n'
                               '    )\n'
                               '    RETURNING id INTO v_reemplazo;\n'
                               '\n'
                               '    RETURN v_reemplazo;\n'
                               'END '),
 'registrar_alta_olt': ('',
                        'TRIGGER',
                        'plpgsql',
                        '\n'
                        'DECLARE\n'
                        '    autor TEXT;\n'
                        'BEGIN\n'
                        '    BEGIN\n'
                        "        autor := COALESCE(auth.jwt() ->> 'email', auth.uid()::text);\n"
                        '    EXCEPTION WHEN OTHERS THEN\n'
                        '        autor := NULL;\n'
                        '    END;\n'
                        '\n'
                        '    INSERT INTO olt_historial (olt_id, accion, campo, valor_despues, quien)\n'
                        "    VALUES (NEW.id, 'alta', 'nombre', NEW.nombre, COALESCE(autor, 'sistema'));\n"
                        '    RETURN NEW;\n'
                        'END;\n'),
 'registrar_cambio_olt': ('',
                          'TRIGGER',
                          'plpgsql',
                          '\n'
                          'DECLARE\n'
                          '    antes    JSONB := to_jsonb(OLD);\n'
                          '    despues  JSONB := to_jsonb(NEW);\n'
                          '    clave    TEXT;\n'
                          '    v_antes  TEXT;\n'
                          '    v_desp   TEXT;\n'
                          '    autor    TEXT;\n'
                          'BEGIN\n'
                          '    BEGIN\n'
                          "        autor := COALESCE(auth.jwt() ->> 'email', auth.uid()::text);\n"
                          '    EXCEPTION WHEN OTHERS THEN\n'
                          '        autor := NULL;\n'
                          '    END;\n'
                          '    -- Sin JWT el cambio vino del middleware con service_role, que es como entra\n'
                          '    -- todo lo automático.\n'
                          "    autor := COALESCE(autor, 'sistema');\n"
                          '\n'
                          '    FOR clave IN SELECT jsonb_object_keys(despues)\n'
                          '    LOOP\n'
                          "        CONTINUE WHEN clave IN ('id', 'numero', 'created_at', 'updated_at');\n"
                          '\n'
                          '        -- El sondeo de alcance reescribe esto cada pocos minutos. Registrarlo\n'
                          '        -- ahogaría el historial en ruido y taparía los cambios que sí hizo una\n'
                          '        -- persona, que son los únicos que se vienen a buscar acá.\n'
                          "        CONTINUE WHEN clave IN ('estado', 'estado_at', 'estado_latencia_ms',\n"
                          "                                'estado_detalle', 'versiones_at');\n"
                          '\n'
                          '        v_antes := antes ->> clave;\n'
                          '        v_desp  := despues ->> clave;\n'
                          '        CONTINUE WHEN v_antes IS NOT DISTINCT FROM v_desp;\n'
                          '\n'
                          '        -- Una contraseña en el historial es una contraseña filtrada: el\n'
                          '        -- historial se muestra en pantalla y no tiene el candado que sí tiene '
                          'el\n'
                          '        -- campo. Se registra QUE cambió, nunca a qué.\n'
                          "        IF clave LIKE '%encrypted%' THEN\n"
                          '            INSERT INTO olt_historial (olt_id, campo, valor_antes, valor_despues, '
                          'quien)\n'
                          "            VALUES (NEW.id, clave, '••••••', '••••••', autor);\n"
                          '        ELSE\n'
                          '            INSERT INTO olt_historial (olt_id, campo, valor_antes, valor_despues, '
                          'quien)\n'
                          '            VALUES (NEW.id, clave, v_antes, v_desp, autor);\n'
                          '        END IF;\n'
                          '    END LOOP;\n'
                          '\n'
                          '    NEW.updated_at := NOW();\n'
                          '    RETURN NEW;\n'
                          'END;\n'),
 'registrar_chequeo_nodo': ('p_nodo_id UUID, p_estado TEXT, p_latencia NUMERIC DEFAULT NULL, p_perdida INT '
                            'DEFAULT NULL, p_detalle TEXT DEFAULT NULL',
                            'BOOLEAN',
                            'plpgsql',
                            '\n'
                            'DECLARE\n'
                            '    v_anterior TEXT;\n'
                            '    v_padre    UUID;\n'
                            '    v_cambio   BOOLEAN;\n'
                            'BEGIN\n'
                            '    SELECT estado INTO v_anterior FROM nodos_red WHERE id = p_nodo_id FOR '
                            'UPDATE;\n'
                            '    IF NOT FOUND THEN\n'
                            "        RAISE EXCEPTION 'No existe el nodo %', p_nodo_id;\n"
                            '    END IF;\n'
                            '\n'
                            '    v_cambio := v_anterior IS DISTINCT FROM p_estado;\n'
                            '\n'
                            '    UPDATE nodos_red\n'
                            '       SET estado      = p_estado,\n'
                            '           latencia_ms = p_latencia,\n'
                            '           perdida_pct = p_perdida,\n'
                            '           ultimo_chequeo = NOW(),\n'
                            '           desde = CASE WHEN v_cambio THEN NOW() ELSE COALESCE(desde, NOW()) '
                            'END\n'
                            '     WHERE id = p_nodo_id;\n'
                            '\n'
                            '    IF NOT v_cambio THEN\n'
                            '        -- Mismo estado: se actualiza la medición del intervalo en curso y '
                            'listo.\n'
                            '        UPDATE nodo_eventos\n'
                            '           SET latencia_ms = p_latencia,\n'
                            '               perdida_pct = p_perdida\n'
                            '         WHERE nodo_id = p_nodo_id AND hasta IS NULL;\n'
                            '        RETURN FALSE;\n'
                            '    END IF;\n'
                            '\n'
                            '    -- Cambió: se cierra lo anterior y se abre lo nuevo.\n'
                            '    UPDATE nodo_eventos SET hasta = NOW() WHERE nodo_id = p_nodo_id AND hasta '
                            'IS NULL;\n'
                            '\n'
                            '    -- ¿La caída se explica por la del padre? Se mira en el momento, no '
                            'después:\n'
                            '    -- si el padre se recupera antes de que alguien lea el evento, la '
                            'respuesta\n'
                            '    -- correcta sigue siendo la de cuando pasó.\n'
                            "    IF p_estado = 'down' THEN\n"
                            '        SELECT n.padre_id INTO v_padre\n'
                            '          FROM nodos_red n\n'
                            '          JOIN nodos_red p ON p.id = n.padre_id\n'
                            "         WHERE n.id = p_nodo_id AND p.estado = 'down';\n"
                            '    END IF;\n'
                            '\n'
                            '    INSERT INTO nodo_eventos (nodo_id, estado, latencia_ms, perdida_pct, '
                            'causa_padre_id, detalle)\n'
                            '    VALUES (p_nodo_id, p_estado, p_latencia, p_perdida, v_padre, p_detalle);\n'
                            '\n'
                            '    RETURN TRUE;\n'
                            'END;\n'),
 'registrar_gestion_cobranza': ('p_asignacion UUID, p_canal TEXT, p_resultado TEXT, p_observacion TEXT '
                                'DEFAULT NULL, p_promesa_fecha DATE DEFAULT NULL, p_promesa_monto NUMERIC '
                                'DEFAULT NULL',
                                'UUID',
                                'plpgsql',
                                '\n'
                                'DECLARE\n'
                                '    v_yo   UUID := mi_legajo_id();\n'
                                '    v_id   UUID;\n'
                                '    v_dueno UUID;\n'
                                'BEGIN\n'
                                '    SELECT vendedor_id INTO v_dueno\n'
                                '      FROM cobranza_asignaciones\n'
                                "     WHERE id = p_asignacion AND estado = 'activa';\n"
                                '\n'
                                '    IF v_dueno IS NULL THEN\n'
                                "        RAISE EXCEPTION 'Esa gestión de cobranza no está activa';\n"
                                '    END IF;\n'
                                '\n'
                                '    -- Se verifica acá y no solo en la pantalla: la función es SECURITY '
                                'DEFINER,\n'
                                '    -- así que sin este control cualquiera podría registrar gestiones sobre '
                                'la\n'
                                '    -- cobranza de otro.\n'
                                '    IF v_dueno <> v_yo AND NOT cartera_completa() THEN\n'
                                "        RAISE EXCEPTION 'Esa cobranza no está asignada a ti';\n"
                                '    END IF;\n'
                                '\n'
                                '    INSERT INTO cobranza_gestiones (\n'
                                '        asignacion_id, canal, resultado, observacion,\n'
                                '        promesa_fecha, promesa_monto, usuario_id, usuario_nombre\n'
                                '    )\n'
                                '    SELECT p_asignacion, p_canal, p_resultado, p_observacion,\n'
                                '           p_promesa_fecha, p_promesa_monto, u.id,\n'
                                "           TRIM(CONCAT(u.nombre, ' ', u.apellido))\n"
                                '      FROM usuarios_sistema u WHERE u.id = v_yo\n'
                                '    RETURNING id INTO v_id;\n'
                                '\n'
                                '    -- Marcar "pagado" NO cierra la asignación: el saldo real lo dice la\n'
                                '    -- facturación, no lo que el cliente prometió por teléfono. La '
                                'sincronización\n'
                                '    -- la va a cerrar cuando el pago exista de verdad. Lo que sí se hace '
                                'es\n'
                                '    -- escalar, que es una decisión y no una observación.\n'
                                "    IF p_resultado = 'escalar' THEN\n"
                                '        UPDATE cobranza_asignaciones\n'
                                "           SET estado = 'escalada', cerrado_en = NOW()\n"
                                '         WHERE id = p_asignacion;\n'
                                '    END IF;\n'
                                '\n'
                                '    RETURN v_id;\n'
                                'END '),
 'registrar_intento_retiro': ('p_retiro UUID, p_resultado TEXT, p_observacion TEXT DEFAULT NULL, p_foto TEXT '
                              'DEFAULT NULL',
                              'UUID',
                              'plpgsql',
                              '\n'
                              'DECLARE\n'
                              '    v_id UUID;\n'
                              '    v_fila retiros_equipo%ROWTYPE;\n'
                              'BEGIN\n'
                              '    SELECT * INTO v_fila FROM retiros_equipo WHERE id = p_retiro;\n'
                              '    IF NOT FOUND THEN\n'
                              "        RAISE EXCEPTION 'No existe esa orden de retiro';\n"
                              '    END IF;\n'
                              '\n'
                              '    IF NOT puede_gestionar_retiros()\n'
                              '       AND v_fila.tecnico_id IS DISTINCT FROM mi_tecnico_id() THEN\n'
                              "        RAISE EXCEPTION 'Esa orden de retiro no es tuya';\n"
                              '    END IF;\n'
                              '\n'
                              '    INSERT INTO retiro_intentos (retiro_id, tecnico_id, resultado, '
                              'observacion, foto_url, usuario_id)\n'
                              '    VALUES (p_retiro, COALESCE(v_fila.tecnico_id, mi_tecnico_id()), '
                              'p_resultado,\n'
                              '            p_observacion, p_foto, mi_legajo_id())\n'
                              '    RETURNING id INTO v_id;\n'
                              '\n'
                              '    UPDATE retiros_equipo\n'
                              '       SET intentos = intentos + 1,\n'
                              '           -- La última evidencia queda a mano en la orden; el historial '
                              'completo\n'
                              '           -- vive en los intentos.\n'
                              '           evidencia_url = COALESCE(p_foto, evidencia_url)\n'
                              '     WHERE id = p_retiro;\n'
                              '\n'
                              '    RETURN v_id;\n'
                              'END '),
 'registrar_llamada': ("p_tipo TEXT, p_id UUID, p_canal TEXT DEFAULT 'llamada'",
                       'VOID',
                       'sql',
                       '\n'
                       '    INSERT INTO campo_llamadas (tecnico_id, usuario_id, item_tipo, item_id, canal)\n'
                       '    VALUES (mi_tecnico_id(), mi_usuario_id(), p_tipo, p_id,\n'
                       "            CASE WHEN p_canal = 'whatsapp' THEN 'whatsapp' ELSE 'llamada' END)\n"),
 'reportar_reparacion': ('p_id UUID, p_texto TEXT, p_lat NUMERIC DEFAULT NULL, p_lng NUMERIC DEFAULT NULL',
                         'VOID',
                         'plpgsql',
                         '\n'
                         'DECLARE\n'
                         '    v reparaciones_red%ROWTYPE;\n'
                         'BEGIN\n'
                         '    IF NOT ve_reparacion(p_id) THEN\n'
                         "        RAISE EXCEPTION 'Esa reparación no está asignada a tu cuadrilla.' USING "
                         "ERRCODE = '42501';\n"
                         '    END IF;\n'
                         "    IF NULLIF(BTRIM(p_texto), '') IS NULL THEN\n"
                         "        RAISE EXCEPTION 'Escribe qué encontraron o qué hicieron.';\n"
                         '    END IF;\n'
                         '\n'
                         '    SELECT * INTO v FROM reparaciones_red WHERE id = p_id FOR UPDATE;\n'
                         "    IF v.estado NOT IN ('asignada', 'en_curso') THEN\n"
                         "        RAISE EXCEPTION 'Esa reparación ya está cerrada.';\n"
                         '    END IF;\n'
                         '\n'
                         '    INSERT INTO reparacion_reportes (reparacion_id, tipo, texto, usuario_id, '
                         'tecnico_id, lat, lng)\n'
                         "    VALUES (p_id, 'avance', BTRIM(p_texto), mi_usuario_id(), mi_tecnico_id(), "
                         'p_lat, p_lng);\n'
                         '\n'
                         "    IF v.estado = 'asignada' THEN\n"
                         "        UPDATE reparaciones_red SET estado = 'en_curso', iniciada_at = NOW() WHERE "
                         'id = p_id;\n'
                         '    END IF;\n'
                         'END;\n'),
 'reporte_crecimiento_routers': ('p_desde DATE, p_hasta DATE',
                                 'TABLE ( mes DATE, router_id UUID, router TEXT, altas INT, carga_inicial '
                                 'INT, bajas INT, neto INT, total INT, con_foto BOOLEAN, activos INT, '
                                 'cortados INT, suspendidos INT, por_cobrar NUMERIC, vencido NUMERIC )',
                                 'sql',
                                 '\n'
                                 '    WITH RECURSIVE meses AS (\n'
                                 "        SELECT date_trunc('month', p_desde)::date AS mes,\n"
                                 "               (date_trunc('month', p_desde)::date + INTERVAL '1 "
                                 "month')::date AS siguiente\n"
                                 '        UNION ALL\n'
                                 "        SELECT m.siguiente, (m.siguiente::date + INTERVAL '1 "
                                 "month')::date\n"
                                 '          FROM meses m\n'
                                 "         WHERE m.siguiente <= date_trunc('month', p_hasta)::date\n"
                                 '    ),\n'
                                 '    abonados AS (\n'
                                 '        SELECT c.router_id,\n'
                                 '               COALESCE(c.fecha_instalacion, (c.created_at AT TIME ZONE '
                                 'zona_horaria())::date) AS alta,\n'
                                 '               -- Importado y sin fecha real: su "alta" es el día de la '
                                 'carga.\n'
                                 '               (c.fecha_instalacion IS NULL\n'
                                 "                AND (c.origen <> 'manual' OR c.sistema_origen IS NOT "
                                 'NULL))                  AS importado,\n'
                                 '               -- Solo los que HOY están de baja: uno que volvió no se '
                                 'fue.\n'
                                 "               CASE WHEN c.estado = 'baja'\n"
                                 '                    THEN (COALESCE(c.baja_en, c.estado_desde, '
                                 'c.updated_at) AT TIME ZONE zona_horaria())::date\n'
                                 '               '
                                 'END                                                                            '
                                 'AS baja\n'
                                 '          FROM clientes c\n'
                                 '    ),\n'
                                 '    equipos AS (\n'
                                 '        SELECT r.id, r.nombre::text AS nombre FROM routers_mikrotik r\n'
                                 '        UNION ALL\n'
                                 '        -- Los routers borrados que dejaron foto: su historia sigue '
                                 'contando.\n'
                                 '        SELECT x.router_id, x.router_nombre FROM (\n'
                                 '        SELECT DISTINCT ON (f.router_id) f.router_id, f.router_nombre\n'
                                 '           FROM fotos_routers_mensual f\n'
                                 '          WHERE NOT EXISTS (SELECT 1 FROM routers_mikrotik r WHERE r.id = '
                                 'f.router_id)\n'
                                 '          ORDER BY f.router_id, f.mes DESC) x\n'
                                 '        UNION ALL\n'
                                 "        SELECT NULL, 'Sin router asignado'\n"
                                 '         WHERE EXISTS (SELECT 1 FROM clientes WHERE router_id IS NULL)\n'
                                 '    ),\n'
                                 '    cuentas AS (\n'
                                 '        SELECT m.mes, e.id AS router_id, e.nombre AS router,\n'
                                 '               COUNT(a.alta) FILTER (WHERE a.alta >= m.mes AND a.alta < '
                                 'm.siguiente AND NOT a.importado)::int AS altas,\n'
                                 '               COUNT(a.alta) FILTER (WHERE a.alta >= m.mes AND a.alta < '
                                 'm.siguiente AND a.importado)::int     AS carga_inicial,\n'
                                 '               COUNT(a.baja) FILTER (WHERE a.baja >= m.mes AND a.baja < '
                                 'm.siguiente)::int                     AS bajas,\n'
                                 '               COUNT(a.alta) FILTER (WHERE a.alta < m.siguiente\n'
                                 '                                       AND (a.baja IS NULL OR a.baja >= '
                                 'm.siguiente))::int                    AS total\n'
                                 '          FROM meses m\n'
                                 '         CROSS JOIN equipos e\n'
                                 '          LEFT JOIN abonados a ON a.router_id IS NOT DISTINCT FROM e.id\n'
                                 '         GROUP BY m.mes, e.id, e.nombre\n'
                                 '    )\n'
                                 '    SELECT k.mes, k.router_id, k.router,\n'
                                 '           k.altas, k.carga_inicial, k.bajas,\n'
                                 '           k.altas + k.carga_inicial - k.bajas AS neto,\n'
                                 '           k.total,\n'
                                 '           f.mes IS NOT NULL AS con_foto,\n'
                                 '           f.activos, f.cortados, f.suspendidos, f.por_cobrar, f.vencido\n'
                                 '      FROM cuentas k\n'
                                 '      LEFT JOIN fotos_routers_mensual f ON f.mes = k.mes AND f.router_id = '
                                 'k.router_id\n'
                                 '     ORDER BY k.mes, k.router\n'),
 'resolver_incidencia': ('p_id UUID, p_usuario UUID DEFAULT NULL',
                         'JSONB',
                         'plpgsql',
                         '\n'
                         'DECLARE\n'
                         '    v incidencias_masivas%ROWTYPE;\n'
                         '    v_encolados INT := 0;\n'
                         'BEGIN\n'
                         '    SELECT * INTO v FROM incidencias_masivas WHERE id = p_id FOR UPDATE;\n'
                         '    IF NOT FOUND THEN\n'
                         "        RAISE EXCEPTION 'No existe esa incidencia';\n"
                         '    END IF;\n'
                         "    IF v.estado <> 'abierta' THEN\n"
                         "        RAISE EXCEPTION 'Solo se puede resolver una incidencia abierta';\n"
                         '    END IF;\n'
                         '\n'
                         '    IF v.avisar_resolucion THEN\n'
                         '        INSERT INTO incidencia_avisos (incidencia_id, client_id, momento)\n'
                         "        SELECT p_id, ia.client_id, 'resolucion'\n"
                         '          FROM incidencia_avisos ia\n'
                         '         WHERE ia.incidencia_id = p_id\n'
                         "           AND ia.momento = 'apertura'\n"
                         '           -- Solo a quien le llegó de verdad. Al que falló el envío no se le\n'
                         '           -- manda el "ya está" de algo que nunca supo.\n'
                         "           AND ia.estado = 'enviado'\n"
                         '        ON CONFLICT (incidencia_id, client_id, momento) DO NOTHING;\n'
                         '\n'
                         '        GET DIAGNOSTICS v_encolados = ROW_COUNT;\n'
                         '    END IF;\n'
                         '\n'
                         '    UPDATE incidencias_masivas\n'
                         "       SET estado = 'resuelta', resuelta_at = NOW()\n"
                         '     WHERE id = p_id;\n'
                         '\n'
                         "    RETURN jsonb_build_object('incidencia_id', p_id, 'encolados', v_encolados);\n"
                         'END;\n'),
 'rutas_del_dia': ('p_fecha DATE DEFAULT NULL',
                   'JSONB',
                   'plpgsql',
                   '\n'
                   'DECLARE\n'
                   '    v_fecha DATE := COALESCE(p_fecha, hoy_isp());\n'
                   "    v_salida JSONB := '[]'::jsonb;\n"
                   '    g RECORD;\n'
                   '    v_tecs UUID[];\n'
                   '    v_cuads UUID[];\n'
                   'BEGIN\n'
                   '    IF NOT ordena_rutas() THEN\n'
                   "        RAISE EXCEPTION 'Solo la oficina ve las rutas de todos.' USING ERRCODE = "
                   "'42501';\n"
                   '    END IF;\n'
                   '\n'
                   '    FOR g IN\n'
                   "        SELECT 'cuadrilla' AS clase, cu.id, cu.nombre::text AS nombre,\n"
                   '               (SELECT nombre FROM tecnicos WHERE id = jefe_de_grupo(cu.id, v_fecha)) AS '
                   'jefe\n'
                   '          FROM cuadrillas cu WHERE cu.activo\n'
                   '        UNION ALL\n'
                   "        SELECT 'tecnico', t.id, t.nombre::text, NULL\n"
                   '          FROM tecnicos t\n'
                   '         WHERE t.activo AND NOT EXISTS (SELECT 1 FROM cuadrilla_miembros m WHERE '
                   'm.tecnico_id = t.id)\n'
                   '        ORDER BY 1, 3\n'
                   '    LOOP\n'
                   "        IF g.clase = 'cuadrilla' THEN\n"
                   '            v_cuads := ARRAY[g.id];\n'
                   '            v_tecs := COALESCE((SELECT array_agg(tecnico_id) FROM cuadrilla_miembros '
                   "WHERE cuadrilla_id = g.id), '{}');\n"
                   '        ELSE\n'
                   "            v_cuads := '{}';\n"
                   '            v_tecs := ARRAY[g.id];\n'
                   '        END IF;\n'
                   '\n'
                   '        v_salida := v_salida || jsonb_build_array(jsonb_build_object(\n'
                   "            'clase', g.clase, 'id', g.id, 'nombre', g.nombre, 'jefe', g.jefe,\n"
                   "            'pendientes', COALESCE((\n"
                   "                SELECT jsonb_agg(jsonb_build_object('tipo', r.tipo, 'id', r.id, "
                   "'numero', r.numero, 'nombre', r.nombre, 'direccion', r.direccion, 'telefono', "
                   "r.telefono, 'latitud', r.latitud, 'longitud', r.longitud, 'estado', r.estado, "
                   "'en_curso', r.en_curso, 'prioridad', r.prioridad, 'fecha', r.fecha, 'franja', r.franja, "
                   "'hora', r.hora, 'detalle', r.detalle, 'tecnico_id', r.tecnico_id, 'cuadrilla_id', "
                   "r.cuadrilla_id, 'salida_at', r.salida_at, 'llegada_at', r.llegada_at, 'orden_fijado', "
                   "r.orden_fijado, 'posicion', r.posicion) ORDER BY r.posicion)\n"
                   "                  FROM items_de_ruta(v_tecs, v_cuads, v_fecha) r), '[]'::jsonb),\n"
                   "            'hechos', COALESCE((\n"
                   '                SELECT jsonb_agg(jsonb_build_object(\n'
                   "                    'tipo', 'ticket', 'id', t.id, 'numero', t.numero, 'nombre', "
                   't.nombre,\n'
                   "                    'salida_at', t.salida_at, 'llegada_at', t.llegada_at, 'cerrado_at', "
                   't.cerrado_at,\n'
                   "                    'minutos_en_sitio', (EXTRACT(EPOCH FROM (t.cerrado_at - "
                   't.llegada_at)) / 60)::int,\n'
                   "                    'minutos_de_viaje', (EXTRACT(EPOCH FROM (t.llegada_at - "
                   't.salida_at)) / 60)::int)\n'
                   '                    ORDER BY t.cerrado_at)\n'
                   '                  FROM tickets t\n'
                   "                 WHERE t.estado = 'resuelto'\n"
                   '                   AND (t.cerrado_at AT TIME ZONE zona_horaria())::date = v_fecha\n'
                   '                   AND (t.tecnico_id = ANY(v_tecs) OR t.cuadrilla_id = ANY(v_cuads))), '
                   "'[]'::jsonb),\n"
                   "            'no_se_pudo', COALESCE((\n"
                   '                SELECT jsonb_agg(jsonb_build_object(\n'
                   "                    'ticket_id', f.ticket_id, 'numero', t.numero, 'nombre', t.nombre,\n"
                   "                    'motivo', f.motivo, 'detalle', f.detalle, 'foto', f.foto,\n"
                   "                    'creado_at', f.creado_at, 'llegada_at', f.llegada_at)\n"
                   '                    ORDER BY f.creado_at)\n'
                   '                  FROM visitas_fallidas f\n'
                   '                  JOIN tickets t ON t.id = f.ticket_id\n'
                   '                 WHERE (f.creado_at AT TIME ZONE zona_horaria())::date = v_fecha\n'
                   '                   AND (f.tecnico_id = ANY(v_tecs) OR t.cuadrilla_id = ANY(v_cuads))), '
                   "'[]'::jsonb)\n"
                   '        ));\n'
                   '    END LOOP;\n'
                   '\n'
                   '    -- Solo las rutas con algo: una cuadrilla sin trabajo hoy no aporta nada.\n'
                   '    RETURN COALESCE((\n'
                   '        SELECT jsonb_agg(e.value) FROM jsonb_array_elements(v_salida) e\n'
                   "         WHERE jsonb_array_length(e.value->'pendientes') + "
                   "jsonb_array_length(e.value->'hechos')\n"
                   "             + jsonb_array_length(e.value->'no_se_pudo') > 0), '[]'::jsonb);\n"
                   'END;\n'),
 'saldar_deuda_equipo': ('p_cliente UUID, p_nota TEXT DEFAULT NULL',
                         'clientes',
                         'plpgsql',
                         '\n'
                         'DECLARE\n'
                         '    v_fila   clientes%ROWTYPE;\n'
                         '    v_legajo UUID := mi_legajo_id();\n'
                         '    v_antes  NUMERIC;\n'
                         'BEGIN\n'
                         '    IF NOT puede_gestionar_retiros() THEN\n'
                         "        RAISE EXCEPTION 'No tienes permiso para saldar deudas de equipo';\n"
                         '    END IF;\n'
                         '\n'
                         '    SELECT deuda_equipo INTO v_antes FROM clientes WHERE id = p_cliente;\n'
                         '    IF NOT FOUND THEN\n'
                         "        RAISE EXCEPTION 'No existe ese abonado';\n"
                         '    END IF;\n'
                         '\n'
                         '    UPDATE clientes\n'
                         '       SET deuda_equipo = 0, updated_at = NOW()\n'
                         '     WHERE id = p_cliente\n'
                         '    RETURNING * INTO v_fila;\n'
                         '\n'
                         '    INSERT INTO auditoria_sistema (\n'
                         '        usuario_id, usuario_nombre, usuario_rol, accion, descripcion,\n'
                         '        entidad, entidad_id, datos\n'
                         '    ) VALUES (\n'
                         '        v_legajo,\n'
                         "        COALESCE((SELECT TRIM(CONCAT(u.nombre, ' ', COALESCE(u.apellido, '')))\n"
                         "                    FROM usuarios_sistema u WHERE u.id = v_legajo), 'Sistema'),\n"
                         '        (SELECT u.rol FROM usuarios_sistema u WHERE u.id = v_legajo),\n'
                         "        'cliente.deuda_equipo_saldada',\n"
                         "        FORMAT('Saldó la deuda de equipo de %s ($%s)', v_fila.nombre, v_antes),\n"
                         "        'cliente', p_cliente::TEXT,\n"
                         "        jsonb_build_object('monto', v_antes, 'nota', p_nota)\n"
                         '    );\n'
                         '\n'
                         '    RETURN v_fila;\n'
                         'END '),
 'sellar_activacion': ('',
                       'TRIGGER',
                       'plpgsql',
                       '\n'
                       'BEGIN\n'
                       "    IF NEW.estado = 'activo' AND NEW.activado_en IS NULL THEN\n"
                       '        NEW.activado_en := NOW();\n'
                       '    END IF;\n'
                       '    RETURN NEW;\n'
                       'END '),
 'sellar_ganado': ('',
                   'TRIGGER',
                   'plpgsql',
                   '\n'
                   'BEGIN\n'
                   "    IF NEW.estado = 'ganado' AND NEW.ganado_en IS NULL THEN\n"
                   '        NEW.ganado_en := NOW();\n'
                   '    -- Si vuelve atrás —pasa: se reabre una venta que se había dado por cerrada—\n'
                   '    -- la fecha se limpia. Dejarla haría que un prospecto abierto figure con\n'
                   '    -- fecha de cierre.\n'
                   "    ELSIF NEW.estado <> 'ganado' THEN\n"
                   '        NEW.ganado_en := NULL;\n'
                   '    END IF;\n'
                   '    RETURN NEW;\n'
                   'END '),
 'sincronizar_cobranza_comercial': ('',
                                    'TABLE (abiertas INT, cerradas INT)',
                                    'plpgsql',
                                    '\n'
                                    'DECLARE\n'
                                    '    v_meses INT;\n'
                                    '    v_abiertas INT := 0;\n'
                                    '    v_cerradas INT := 0;\n'
                                    'BEGIN\n'
                                    '    SELECT ventana_cobranza_meses INTO v_meses FROM config_cartera '
                                    'WHERE id = 1;\n'
                                    '\n'
                                    '    -- ── Cerrar ──\n'
                                    '    -- Primero, para que un cliente que pagó y volvió a deber no quede '
                                    'con la\n'
                                    '    -- asignación vieja y su saldo inicial equivocado.\n'
                                    '    WITH cerrar AS (\n'
                                    '        UPDATE cobranza_asignaciones ca\n'
                                    '           SET estado     = CASE\n'
                                    '                              WHEN COALESCE(f.saldo, 0) <= 0 THEN '
                                    "'pagada'\n"
                                    "                              ELSE 'vencida'\n"
                                    '                            END,\n'
                                    '               cerrado_en = NOW()\n'
                                    '          FROM v_clientes_ficha f\n'
                                    '         WHERE f.id = ca.cliente_id\n'
                                    "           AND ca.estado = 'activa'\n"
                                    '           AND (COALESCE(f.saldo, 0) <= 0 OR ca.vence_el < '
                                    'CURRENT_DATE)\n'
                                    '        RETURNING 1\n'
                                    '    )\n'
                                    '    SELECT COUNT(*) INTO v_cerradas FROM cerrar;\n'
                                    '\n'
                                    '    -- ── Abrir ──\n'
                                    '    WITH candidatos AS (\n'
                                    '        SELECT\n'
                                    '            c.id            AS cliente_id,\n'
                                    '            cv.vendedor_id,\n'
                                    '            f.saldo,\n'
                                    '            -- La ventana se congela al asignar: si mañana se baja la\n'
                                    '            -- configuración, la gestión en curso no se corta por la '
                                    'mitad.\n'
                                    "            (c.activado_en::DATE + (v_meses || ' "
                                    "months')::INTERVAL)::DATE AS vence_el\n"
                                    '        FROM clientes c\n'
                                    '        JOIN v_clientes_ficha f  ON f.id = c.id\n'
                                    '        JOIN v_cliente_vendedor cv ON cv.cliente_id = c.id\n'
                                    '        JOIN usuarios_sistema u  ON u.id = cv.vendedor_id AND u.activo\n'
                                    '        WHERE c.activado_en IS NOT NULL\n'
                                    '          AND COALESCE(f.saldo, 0) > 0\n'
                                    '          -- Dentro de la ventana comercial.\n'
                                    "          AND c.activado_en::DATE + (v_meses || ' months')::INTERVAL >= "
                                    'CURRENT_DATE\n'
                                    '          -- Y sin una gestión ya abierta.\n'
                                    '          AND NOT EXISTS (\n'
                                    '              SELECT 1 FROM cobranza_asignaciones x\n'
                                    "               WHERE x.cliente_id = c.id AND x.estado = 'activa'\n"
                                    '          )\n'
                                    '    ),\n'
                                    '    insertar AS (\n'
                                    '        INSERT INTO cobranza_asignaciones\n'
                                    '            (cliente_id, vendedor_id, vence_el, saldo_inicial, motivo)\n'
                                    '        SELECT cliente_id, vendedor_id, vence_el, saldo,\n'
                                    "               'Deuda detectada automáticamente'\n"
                                    '          FROM candidatos\n'
                                    '        ON CONFLICT DO NOTHING\n'
                                    '        RETURNING 1\n'
                                    '    )\n'
                                    '    SELECT COUNT(*) INTO v_abiertas FROM insertar;\n'
                                    '\n'
                                    '    RETURN QUERY SELECT v_abiertas, v_cerradas;\n'
                                    'END '),
 'sincronizar_corte_del_abonado': ('',
                                   'TRIGGER',
                                   'plpgsql',
                                   '\n'
                                   'BEGIN\n'
                                   "    IF TG_OP = 'INSERT' THEN\n"
                                   '        -- Al crear, manda lo que se haya escrito explícitamente. Si '
                                   'vino el\n'
                                   '        -- booleano en falso y los meses en su valor por defecto, gana '
                                   'el\n'
                                   '        -- booleano: quien lo mandó estaba diciendo algo.\n'
                                   '        IF NOT NEW.aplicar_corte AND NEW.cortar_tras_meses = 1 THEN\n'
                                   '            NEW.cortar_tras_meses := 0;\n'
                                   '        ELSE\n'
                                   '            NEW.aplicar_corte := (NEW.cortar_tras_meses > 0);\n'
                                   '        END IF;\n'
                                   '        RETURN NEW;\n'
                                   '    END IF;\n'
                                   '\n'
                                   '    -- Al actualizar, manda la columna que cambió.\n'
                                   '    IF NEW.cortar_tras_meses IS DISTINCT FROM OLD.cortar_tras_meses '
                                   'THEN\n'
                                   '        NEW.aplicar_corte := (NEW.cortar_tras_meses > 0);\n'
                                   '    ELSIF NEW.aplicar_corte IS DISTINCT FROM OLD.aplicar_corte THEN\n'
                                   '        NEW.cortar_tras_meses := CASE\n'
                                   '            -- Al reactivar el corte se vuelve a un mes, que es el valor '
                                   'con el\n'
                                   '            -- que ese interruptor siempre trabajó.\n'
                                   '            WHEN NEW.aplicar_corte THEN GREATEST(OLD.cortar_tras_meses, '
                                   '1)\n'
                                   '            ELSE 0\n'
                                   '        END;\n'
                                   '    END IF;\n'
                                   '\n'
                                   '    RETURN NEW;\n'
                                   'END '),
 'sincronizar_ficha_tecnico': ('',
                               'TRIGGER',
                               'plpgsql',
                               '\n'
                               'DECLARE\n'
                               "    v_nombre TEXT := NULLIF(BTRIM(CONCAT_WS(' ', NEW.nombre, NEW.apellido)), "
                               "'');\n"
                               'BEGIN\n'
                               "    IF NEW.rol NOT IN ('tecnico', 'jefe_tecnico') THEN\n"
                               '        RETURN NEW;\n'
                               '    END IF;\n'
                               '\n'
                               '    IF NEW.tecnico_id IS NULL THEN\n'
                               '        INSERT INTO tecnicos (nombre, email, telefono, user_id, activo)\n'
                               "        VALUES (COALESCE(v_nombre, NEW.usuario, 'Técnico'), NEW.email, "
                               'NEW.celular, NEW.auth_id, NEW.activo)\n'
                               '        RETURNING id INTO NEW.tecnico_id;\n'
                               '        RETURN NEW;\n'
                               '    END IF;\n'
                               '\n'
                               '    -- Ya enlazado: lo que se cambia en Personal se refleja en Soporte. Solo '
                               'lo\n'
                               '    -- que cambió, para no pisar lo que se cargó a mano en la ficha '
                               '(cédula,\n'
                               '    -- especialidad) ni el nombre largo que tenía de antes.\n'
                               "    IF TG_OP = 'INSERT' THEN\n"
                               '        UPDATE tecnicos SET user_id = COALESCE(user_id, NEW.auth_id) WHERE '
                               'id = NEW.tecnico_id;\n'
                               '    ELSE\n'
                               '        UPDATE tecnicos t\n'
                               '           SET nombre   = CASE WHEN (NEW.nombre, NEW.apellido) IS DISTINCT '
                               'FROM (OLD.nombre, OLD.apellido)\n'
                               '                                AND v_nombre IS NOT NULL THEN v_nombre ELSE '
                               't.nombre END,\n'
                               '               email    = CASE WHEN NEW.email   IS DISTINCT FROM OLD.email   '
                               'THEN NEW.email   ELSE t.email END,\n'
                               '               telefono = CASE WHEN NEW.celular IS DISTINCT FROM OLD.celular '
                               'THEN NEW.celular ELSE t.telefono END,\n'
                               '               activo   = CASE WHEN NEW.activo  IS DISTINCT FROM OLD.activo  '
                               'THEN NEW.activo  ELSE t.activo END,\n'
                               '               user_id  = COALESCE(NEW.auth_id, t.user_id)\n'
                               '         WHERE t.id = NEW.tecnico_id;\n'
                               '    END IF;\n'
                               '    RETURN NEW;\n'
                               'END;\n'),
 'sincronizar_tarifa_preferencial': ('',
                                     'TRIGGER',
                                     'plpgsql',
                                     '\n'
                                     'BEGIN\n'
                                     "    IF NEW.condicion_especial <> 'ninguna' THEN\n"
                                     '        NEW.tarifa_preferencial := TRUE;\n'
                                     "    ELSIF TG_OP = 'UPDATE' AND OLD.condicion_especial <> 'ninguna' "
                                     'THEN\n'
                                     '        -- Se le quitó la condición: la casilla vuelve a NO, no a "sin '
                                     'responder".\n'
                                     '        -- Alguien la respondió y la respuesta ahora es que no le '
                                     'corresponde.\n'
                                     '        NEW.tarifa_preferencial := FALSE;\n'
                                     '    END IF;\n'
                                     '    RETURN NEW;\n'
                                     'END '),
 'sri_liberar_secuencial': ('p_document_id UUID, p_motivo TEXT DEFAULT NULL',
                            'BIGINT',
                            'plpgsql',
                            '\n'
                            'DECLARE\n'
                            '    d electronic_documents%ROWTYPE;\n'
                            'BEGIN\n'
                            '    SELECT * INTO d FROM electronic_documents WHERE id = p_document_id;\n'
                            '    IF NOT FOUND THEN\n'
                            "        RAISE EXCEPTION 'No existe ese comprobante';\n"
                            '    END IF;\n'
                            '\n'
                            '    -- Un comprobante autorizado quedó registrado en el SRI para siempre: su\n'
                            '    -- número no vuelve nunca.\n'
                            "    IF d.estado = 'AUTORIZADO' OR d.numero_autorizacion IS NOT NULL THEN\n"
                            "        RAISE EXCEPTION 'El comprobante % está autorizado: su número no se "
                            "puede reutilizar', d.clave_acceso;\n"
                            '    END IF;\n'
                            '\n'
                            '    -- ENVIADO o NO_AUTORIZADO significa que el SRI lo recibió y lo tiene\n'
                            '    -- registrado con esa clave de acceso. Reutilizar el número haría que\n'
                            '    -- rechace el comprobante nuevo por duplicado.\n'
                            "    IF d.estado IN ('ENVIADO', 'NO_AUTORIZADO') THEN\n"
                            "        RAISE EXCEPTION 'El comprobante % llegó al SRI (estado %): su número no "
                            "se puede reutilizar', d.clave_acceso, d.estado;\n"
                            '    END IF;\n'
                            '\n'
                            '    INSERT INTO sri_secuenciales_libres (\n'
                            '        tipo_doc, establecimiento, punto_emision, numero, motivo, document_id\n'
                            '    )\n'
                            '    VALUES (\n'
                            '        d.tipo_doc, d.establecimiento, d.punto_emision, d.secuencial::BIGINT,\n'
                            "        COALESCE(p_motivo, 'Comprobante anulado antes de enviarse'), d.id\n"
                            '    )\n'
                            '    ON CONFLICT (tipo_doc, establecimiento, punto_emision, numero) DO NOTHING;\n'
                            '\n'
                            '    UPDATE electronic_documents\n'
                            "       SET estado = 'ANULADO',\n"
                            "           mensaje_autorizacion = COALESCE(p_motivo, 'Anulado antes de "
                            "enviarse; su número volvió a la bolsa')\n"
                            '     WHERE id = d.id;\n'
                            '\n'
                            '    RETURN d.secuencial::BIGINT;\n'
                            'END;\n'),
 'sri_next_secuencial': ("p_tipo TEXT, p_estab TEXT DEFAULT '001', p_pto TEXT DEFAULT '001'",
                         'BIGINT',
                         'plpgsql',
                         '\n'
                         'DECLARE\n'
                         '    v_numero BIGINT;\n'
                         'BEGIN\n'
                         '    DELETE FROM sri_secuenciales_libres\n'
                         '     WHERE id = (\n'
                         '         SELECT id\n'
                         '           FROM sri_secuenciales_libres\n'
                         '          WHERE tipo_doc = p_tipo\n'
                         '            AND establecimiento = p_estab\n'
                         '            AND punto_emision = p_pto\n'
                         '          ORDER BY numero\n'
                         '            FOR UPDATE SKIP LOCKED\n'
                         '          LIMIT 1\n'
                         '     )\n'
                         '    RETURNING numero INTO v_numero;\n'
                         '\n'
                         '    IF v_numero IS NOT NULL THEN\n'
                         '        RETURN v_numero;\n'
                         '    END IF;\n'
                         '\n'
                         '    -- Sin números libres, se sigue como siempre: el UPDATE ... RETURNING\n'
                         '    -- resuelve el incremento y la lectura bajo el lock de la fila.\n'
                         '    UPDATE sri_sequences\n'
                         '       SET ultimo_numero = ultimo_numero + 1\n'
                         '     WHERE tipo_doc = p_tipo\n'
                         '       AND establecimiento = p_estab\n'
                         '       AND punto_emision = p_pto\n'
                         '    RETURNING ultimo_numero INTO v_numero;\n'
                         '\n'
                         '    IF v_numero IS NULL THEN\n'
                         '        INSERT INTO sri_sequences (tipo_doc, establecimiento, punto_emision, '
                         'ultimo_numero)\n'
                         '        VALUES (p_tipo, p_estab, p_pto, 1)\n'
                         '        RETURNING ultimo_numero INTO v_numero;\n'
                         '    END IF;\n'
                         '\n'
                         '    RETURN v_numero;\n'
                         'END;\n'),
 'subida_saturada_de': ('p_cliente UUID',
                        'TABLE ( id UUID, empezo_en TIMESTAMPTZ, resuelto_en TIMESTAMPTZ, detalle JSONB )',
                        'sql',
                        '\n'
                        '    SELECT e.id, e.empezo_en, e.resuelto_en, e.detalle\n'
                        '      FROM alerta_eventos e\n'
                        "     WHERE e.regla = 'subida_saturada'\n"
                        "       AND e.entidad = 'cliente'\n"
                        '       AND e.entidad_id = p_cliente::text\n'
                        "       AND e.detalle ? 'confirmado_en'\n"
                        '       AND auth.uid() IS NOT NULL\n'
                        '     ORDER BY e.empezo_en DESC\n'
                        '     LIMIT 50\n'),
 'sumar_consumo': ('p_client_id UUID, p_fecha DATE, p_subida BIGINT, p_bajada BIGINT, p_estado TEXT DEFAULT '
                   "'activo', p_fuente TEXT DEFAULT 'mikrotik'",
                   'VOID',
                   'plpgsql',
                   '\n'
                   'BEGIN\n'
                   '    INSERT INTO consumo_diario (client_id, fecha, subida_bytes, bajada_bytes, '
                   'estado_servicio, fuente)\n'
                   '    VALUES (p_client_id, p_fecha, GREATEST(p_subida, 0), GREATEST(p_bajada, 0), '
                   'p_estado, p_fuente)\n'
                   '    ON CONFLICT (client_id, fecha) DO UPDATE\n'
                   '        SET subida_bytes = consumo_diario.subida_bytes + GREATEST(EXCLUDED.subida_bytes, '
                   '0),\n'
                   '            bajada_bytes = consumo_diario.bajada_bytes + GREATEST(EXCLUDED.bajada_bytes, '
                   '0),\n'
                   '            -- El estado del día es el peor que tuvo: si estuvo cortado a la\n'
                   '            -- mañana, el día fue de corte aunque a la tarde volviera.\n'
                   '            estado_servicio = CASE\n'
                   "                WHEN 'cortado' IN (consumo_diario.estado_servicio, "
                   "EXCLUDED.estado_servicio) THEN 'cortado'\n"
                   "                WHEN 'suspendido' IN (consumo_diario.estado_servicio, "
                   "EXCLUDED.estado_servicio) THEN 'suspendido'\n"
                   "                WHEN 'promesa' IN (consumo_diario.estado_servicio, "
                   "EXCLUDED.estado_servicio) THEN 'promesa'\n"
                   "                ELSE 'activo'\n"
                   '            END,\n'
                   '            updated_at = NOW();\n'
                   'END;\n'),
 'ticket_registra_estado': ('',
                            'TRIGGER',
                            'plpgsql',
                            '\n'
                            'BEGIN\n'
                            "    IF TG_OP = 'INSERT' THEN\n"
                            '        INSERT INTO ticket_eventos (ticket_id, estado_anterior, estado_nuevo, '
                            'nota, created_by)\n'
                            "        VALUES (NEW.id, NULL, NEW.estado, 'Ticket creado', NEW.created_by);\n"
                            '        RETURN NEW;\n'
                            '    END IF;\n'
                            '\n'
                            '    IF NEW.estado IS DISTINCT FROM OLD.estado THEN\n'
                            '        INSERT INTO ticket_eventos (ticket_id, estado_anterior, estado_nuevo, '
                            'created_by)\n'
                            '        VALUES (NEW.id, OLD.estado, NEW.estado, NEW.cerrado_por);\n'
                            '    END IF;\n'
                            '\n'
                            '    NEW.updated_at := NOW();\n'
                            '    RETURN NEW;\n'
                            'END;\n'),
 'ticket_sella_tiempos': ('',
                          'TRIGGER',
                          'plpgsql',
                          '\n'
                          'BEGIN\n'
                          '    IF NEW.estado IS DISTINCT FROM OLD.estado THEN\n'
                          "        IF NEW.estado = 'en_ruta' AND NEW.salida_at IS NULL THEN\n"
                          '            NEW.salida_at := NOW();\n'
                          '        END IF;\n'
                          '\n'
                          "        IF NEW.estado = 'en_proceso' AND NEW.llegada_at IS NULL THEN\n"
                          '            NEW.llegada_at := NOW();\n'
                          '        END IF;\n'
                          '\n'
                          '        -- Volver atrás borra el sello: si el técnico se equivocó de ticket y lo\n'
                          '        -- devuelve a "asignado", dejar la hora vieja haría que el próximo\n'
                          '        -- intento figure con un viaje que no existió.\n'
                          "        IF NEW.estado IN ('abierto', 'asignado') THEN\n"
                          '            NEW.salida_at  := NULL;\n'
                          '            NEW.llegada_at := NULL;\n'
                          '            NEW.llegada_lat := NULL;\n'
                          '            NEW.llegada_lng := NULL;\n'
                          '            NEW.llegada_precision_m := NULL;\n'
                          '        END IF;\n'
                          '    END IF;\n'
                          '\n'
                          '    RETURN NEW;\n'
                          'END;\n'),
 'tiene_permiso_comision': ('p_clave TEXT',
                            'BOOLEAN',
                            'sql',
                            '\n'
                            '    SELECT COALESCE(\n'
                            "        (SELECT permisos ? '*' OR permisos ? p_clave\n"
                            '           FROM usuarios_sistema\n'
                            '          WHERE auth_id = auth.uid() AND activo\n'
                            '          LIMIT 1),\n'
                            '        TRUE\n'
                            '    )\n'),
 'tocar_updated_at': ('',
                      'TRIGGER',
                      'plpgsql',
                      '\nBEGIN\n    NEW.updated_at = NOW();\n    RETURN NEW;\nEND;\n'),
 'tomar_foto_routers': ('p_hoy DATE DEFAULT NULL',
                        'INT',
                        'plpgsql',
                        '\n'
                        'DECLARE\n'
                        '    v_hoy   DATE := COALESCE(p_hoy, (NOW() AT TIME ZONE zona_horaria())::date);\n'
                        "    v_mes   DATE := date_trunc('month', v_hoy)::date;\n"
                        '    v_filas INT;\n'
                        'BEGIN\n'
                        '    WITH deuda AS (\n'
                        '        SELECT f.client_id,\n'
                        '               SUM(f.saldo) FILTER (WHERE f.saldo > '
                        '0)                                    AS por_cobrar,\n'
                        '               SUM(f.saldo) FILTER (WHERE f.saldo > 0 AND f.fecha_vencimiento < '
                        'v_hoy)    AS vencido\n'
                        '          FROM v_facturas_por_cobrar f\n'
                        '         GROUP BY f.client_id\n'
                        '    )\n'
                        '    INSERT INTO fotos_routers_mensual\n'
                        '           (mes, router_id, router_nombre, activos, cortados, suspendidos, '
                        'por_cobrar, vencido, tomada_en)\n'
                        '    SELECT v_mes,\n'
                        '           r.id,\n'
                        '           r.nombre,\n'
                        "           COUNT(c.id) FILTER (WHERE c.estado = 'activo'),\n"
                        "           COUNT(c.id) FILTER (WHERE c.estado = 'cortado'),\n"
                        "           COUNT(c.id) FILTER (WHERE c.estado = 'suspendido'),\n"
                        '           COALESCE(SUM(d.por_cobrar), 0),\n'
                        '           COALESCE(SUM(d.vencido), 0),\n'
                        '           NOW()\n'
                        '      FROM routers_mikrotik r\n'
                        '      -- Los retirados no cuentan, igual que en el panel: ni su gente ni su deuda.\n'
                        "      LEFT JOIN clientes c ON c.router_id = r.id AND c.estado IN ('activo', "
                        "'cortado', 'suspendido')\n"
                        '      LEFT JOIN deuda d    ON d.client_id = c.id\n'
                        '     GROUP BY r.id, r.nombre\n'
                        '    ON CONFLICT (mes, router_id) DO UPDATE\n'
                        '       SET router_nombre = EXCLUDED.router_nombre,\n'
                        '           activos       = EXCLUDED.activos,\n'
                        '           cortados      = EXCLUDED.cortados,\n'
                        '           suspendidos   = EXCLUDED.suspendidos,\n'
                        '           por_cobrar    = EXCLUDED.por_cobrar,\n'
                        '           vencido       = EXCLUDED.vencido,\n'
                        '           tomada_en     = EXCLUDED.tomada_en;\n'
                        '\n'
                        '    GET DIAGNOSTICS v_filas = ROW_COUNT;\n'
                        '    RETURN v_filas;\n'
                        'END;\n'),
 'totales_transacciones': ('p_desde DATE DEFAULT NULL, p_hasta DATE DEFAULT NULL, p_operador UUID DEFAULT '
                           'NULL, p_router UUID DEFAULT NULL, p_ubicacion TEXT DEFAULT NULL, p_forma_pago '
                           'TEXT DEFAULT NULL, p_cuenta UUID DEFAULT NULL, p_anulados BOOLEAN DEFAULT FALSE',
                           'TABLE ( cantidad BIGINT, cobrado NUMERIC, comision NUMERIC, neto NUMERIC, '
                           'anulados BIGINT, anulado_monto NUMERIC )',
                           'sql',
                           '\n'
                           '    SELECT\n'
                           '        COUNT(*) FILTER (WHERE NOT t.anulado),\n'
                           '        COALESCE(SUM(t.cobrado)  FILTER (WHERE NOT t.anulado), 0),\n'
                           '        COALESCE(SUM(t.comision) FILTER (WHERE NOT t.anulado), 0),\n'
                           '        COALESCE(SUM(t.neto)     FILTER (WHERE NOT t.anulado), 0),\n'
                           '        /**\n'
                           '         * Lo anulado se cuenta aparte, siempre.\n'
                           '         *\n'
                           '         * Un cierre que no dice cuánto se anuló no permite explicar por qué la\n'
                           '         * caja tiene menos plata de la que dicen los recibos impresos.\n'
                           '         */\n'
                           '        COUNT(*) FILTER (WHERE t.anulado),\n'
                           '        COALESCE(SUM(t.cobrado) FILTER (WHERE t.anulado), 0)\n'
                           '      FROM v_transacciones t\n'
                           '     WHERE (p_desde      IS NULL OR t.fecha_pago  >= p_desde)\n'
                           '       AND (p_hasta      IS NULL OR t.fecha_pago  <= p_hasta)\n'
                           '       AND (p_operador   IS NULL OR t.operador_id  = p_operador)\n'
                           '       AND (p_router     IS NULL OR t.router_id    = p_router)\n'
                           '       AND (p_ubicacion  IS NULL OR t.ubicacion    = p_ubicacion)\n'
                           '       AND (p_forma_pago IS NULL OR t.forma_pago   = p_forma_pago)\n'
                           '       AND (p_cuenta     IS NULL OR t.cuenta_id    = p_cuenta)\n'
                           '       AND (p_anulados OR NOT t.anulado);\n'),
 'traslado_se_cancela': ('',
                         'TRIGGER',
                         'plpgsql',
                         '\n'
                         'BEGIN\n'
                         "    IF NEW.tipo <> 'traslado' OR NEW.estado <> 'cancelada' THEN\n"
                         '        RETURN NEW;\n'
                         '    END IF;\n'
                         '\n'
                         '    UPDATE traslados\n'
                         "       SET estado       = 'cancelado',\n"
                         '           cerrado_en   = COALESCE(cerrado_en, NOW()),\n'
                         '           -- La ONT del domicilio viejo sigue donde estaba y tiene que seguir:\n'
                         '           -- el abonado no se mudó. Se deja de reclamar la baja porque no hay\n'
                         '           -- ninguna baja que hacer.\n'
                         '           pendiente_baja = FALSE,\n'
                         "           baja_detalle = COALESCE(baja_detalle, 'El traslado se canceló: el "
                         "abonado no se mudó.')\n"
                         '     WHERE instalacion_id = NEW.id\n'
                         "       AND estado = 'abierto';\n"
                         '\n'
                         '    RETURN NEW;\n'
                         'END '),
 'traslado_se_cierra': ('',
                        'TRIGGER',
                        'plpgsql',
                        '\n'
                        'BEGIN\n'
                        "    IF NEW.tipo <> 'traslado' OR NEW.estado <> 'hecha' THEN\n"
                        '        RETURN NEW;\n'
                        '    END IF;\n'
                        '\n'
                        '    -- Solo los que ya no tienen nada colgado en la OLT de origen. El resto\n'
                        '    -- sigue abierto a propósito: es trabajo pendiente, no papeleo.\n'
                        '    UPDATE traslados\n'
                        "       SET estado     = 'hecho',\n"
                        '           cerrado_en = COALESCE(cerrado_en, NOW())\n'
                        '     WHERE instalacion_id = NEW.id\n'
                        "       AND estado = 'abierto'\n"
                        '       AND pendiente_baja = FALSE;\n'
                        '\n'
                        '    -- Una orden de traslado cancelada tampoco puede dejar al abonado trabado\n'
                        '    -- para siempre. Se cancela el traslado con ella.\n'
                        '    RETURN NEW;\n'
                        'END '),
 'validar_cobro_de_recaudacion': ('',
                                  'TRIGGER',
                                  'plpgsql',
                                  '\n'
                                  'DECLARE\n'
                                  '    v_rol   TEXT;\n'
                                  '    v_saldo NUMERIC;\n'
                                  'BEGIN\n'
                                  '    IF NEW.anulado OR NEW.created_by IS NULL THEN\n'
                                  '        RETURN NEW;\n'
                                  '    END IF;\n'
                                  '\n'
                                  '    SELECT rol INTO v_rol FROM usuarios_sistema WHERE auth_id = '
                                  'NEW.created_by;\n'
                                  "    IF v_rol IS DISTINCT FROM 'recaudacion' THEN\n"
                                  '        RETURN NEW;\n'
                                  '    END IF;\n'
                                  '\n'
                                  '    /**\n'
                                  '     * Solo efectivo.\n'
                                  '     *\n'
                                  '     * Se comprueba antes que el monto: si alguien intenta registrar una\n'
                                  '     * transferencia parcial, el mensaje que le sirve es este —"no puedes '
                                  'cobrar\n'
                                  '     * así"— y no el del monto, que lo mandaría a corregir la cifra de un '
                                  'cobro\n'
                                  '     * que igual no puede hacer.\n'
                                  '     */\n'
                                  "    IF NEW.forma_pago <> 'efectivo' THEN\n"
                                  '        RAISE EXCEPTION\n'
                                  "            'Un punto de recaudación cobra solo en efectivo. Para "
                                  "registrar % hace falta el permiso correspondiente.',\n"
                                  '            NEW.forma_pago\n'
                                  "            USING ERRCODE = 'check_violation';\n"
                                  '    END IF;\n'
                                  '\n'
                                  '    /**\n'
                                  '     * Las filas hijas de un cobro repartido no se validan por monto.\n'
                                  '     *\n'
                                  '     * Un cobro de $40 que salda dos facturas de $20 genera dos filas de '
                                  '$20 cada\n'
                                  '     * una, y ninguna "cubre el saldo" de la factura mirada por separado. '
                                  'Lo que\n'
                                  '     * importa es que el abonado entregó todo lo que debía, y eso ya lo '
                                  'garantiza\n'
                                  '     * la fila principal.\n'
                                  '     *\n'
                                  '     * La forma de pago sí se valida en todas: si la principal es '
                                  'efectivo, las\n'
                                  '     * hijas también lo son.\n'
                                  '     */\n'
                                  '    IF NEW.es_reparto OR NEW.es_excedente OR NEW.pago_origen_id IS NOT '
                                  'NULL THEN\n'
                                  '        RETURN NEW;\n'
                                  '    END IF;\n'
                                  '\n'
                                  '    IF NEW.factura_id IS NOT NULL THEN\n'
                                  '        SELECT saldo INTO v_saldo FROM v_facturas WHERE id = '
                                  'NEW.factura_id;\n'
                                  '\n'
                                  '        -- Un centavo de tolerancia: el redondeo del IVA no puede impedir '
                                  'un cobro.\n'
                                  '        IF v_saldo IS NOT NULL AND NEW.monto < v_saldo - 0.01 THEN\n'
                                  '            RAISE EXCEPTION\n'
                                  "                'Un punto de recaudación cobra el valor completo. Esta "
                                  "factura debe % y se está registrando %.',\n"
                                  "                TO_CHAR(v_saldo, 'FM999999990.00'), TO_CHAR(NEW.monto, "
                                  "'FM999999990.00')\n"
                                  "                USING ERRCODE = 'check_violation';\n"
                                  '        END IF;\n'
                                  '    END IF;\n'
                                  '\n'
                                  '    RETURN NEW;\n'
                                  'END '),
 'validar_cuenta_del_pago': ('',
                             'TRIGGER',
                             'plpgsql',
                             '\n'
                             'DECLARE\n'
                             '    v_tipo   TEXT;\n'
                             '    v_nombre TEXT;\n'
                             'BEGIN\n'
                             '    -- Los pagos anulados no se validan: anular es corregir, y exigirle la '
                             'regla\n'
                             '    -- nueva a una corrección de un cobro viejo impediría justamente '
                             'arreglarlo.\n'
                             '    IF NEW.anulado THEN\n'
                             '        RETURN NEW;\n'
                             '    END IF;\n'
                             '\n'
                             '    IF NEW.cuenta_id IS NOT NULL THEN\n'
                             '        SELECT tipo, nombre INTO v_tipo, v_nombre\n'
                             '          FROM cuentas_pago WHERE id = NEW.cuenta_id;\n'
                             '    END IF;\n'
                             '\n'
                             '    -- Lo electrónico deja rastro en algún lado, y hay que decir en cuál.\n'
                             "    IF NEW.forma_pago IN ('transferencia', 'deposito', 'tarjeta') THEN\n"
                             '        IF NEW.cuenta_id IS NULL THEN\n'
                             '            RAISE EXCEPTION\n'
                             "                'Un cobro por % tiene que decir a qué cuenta entró: sin eso no "
                             "se puede conciliar con el banco.',\n"
                             '                NEW.forma_pago\n'
                             "                USING ERRCODE = 'check_violation';\n"
                             '        END IF;\n'
                             '\n'
                             "        IF v_tipo = 'efectivo' THEN\n"
                             '            RAISE EXCEPTION\n'
                             '                \'Un cobro por % no puede entrar a "%", que es una caja de '
                             "efectivo.',\n"
                             '                NEW.forma_pago, v_nombre\n'
                             "                USING ERRCODE = 'check_violation';\n"
                             '        END IF;\n'
                             '    END IF;\n'
                             '\n'
                             '    -- Y el efectivo va a caja.\n'
                             "    IF NEW.forma_pago = 'efectivo' AND v_tipo IS NOT NULL AND v_tipo <> "
                             "'efectivo' THEN\n"
                             '        RAISE EXCEPTION\n'
                             '            \'El efectivo entra a caja, no a "%". Elige una cuenta de tipo '
                             "efectivo.',\n"
                             '            v_nombre\n'
                             "            USING ERRCODE = 'check_violation';\n"
                             '    END IF;\n'
                             '\n'
                             '    /**\n'
                             '     * La caja tiene que ser una de las suyas.\n'
                             '     *\n'
                             '     * Reemplaza a la comprobación de la 159, que solo miraba si la caja era '
                             'de\n'
                             '     * OTRO: la de la oficina no es de nadie, así que se colaba.\n'
                             '     *\n'
                             '     * Se pregunta con la misma función que usa la pantalla para ofrecer. Un '
                             'cobro\n'
                             '     * hecho por un proceso del sistema —una importación, la carga del '
                             'histórico—\n'
                             '     * no tiene usuario y no se valida: bloquearlo dejaría la migración del '
                             'padrón\n'
                             '     * sin poder cargar los pagos viejos.\n'
                             '     */\n'
                             "    IF v_tipo = 'efectivo' AND NEW.created_by IS NOT NULL THEN\n"
                             '        IF EXISTS (SELECT 1 FROM usuarios_sistema WHERE auth_id = '
                             'NEW.created_by)\n'
                             '           AND NOT EXISTS (\n'
                             '               SELECT 1 FROM cajas_del_usuario(NEW.created_by) c WHERE c.id = '
                             'NEW.cuenta_id\n'
                             '           )\n'
                             '        THEN\n'
                             '            RAISE EXCEPTION\n'
                             '                \'La caja "%" no es la tuya. Cobra contra la tuya: si no '
                             "tienes, pídela en Ajustes.',\n"
                             '                v_nombre\n'
                             "                USING ERRCODE = 'check_violation';\n"
                             '        END IF;\n'
                             '    END IF;\n'
                             '\n'
                             '    RETURN NEW;\n'
                             'END '),
 'validar_solicitud': ('p_prospecto UUID, p_estado TEXT, p_publico TEXT DEFAULT NULL, p_interno TEXT DEFAULT '
                       'NULL',
                       'UUID',
                       'plpgsql',
                       '\n'
                       'DECLARE\n'
                       '    v_legajo UUID := mi_legajo_id();\n'
                       '    v_antes  solicitudes_validacion%ROWTYPE;\n'
                       '    v_id     UUID;\n'
                       '    v_cliente UUID;\n'
                       'BEGIN\n'
                       "    IF NOT tiene_permiso_comision('ventas.validar') THEN\n"
                       "        RAISE EXCEPTION 'No tienes permiso para validar solicitudes';\n"
                       '    END IF;\n'
                       '\n'
                       "    IF p_estado IN ('rechazado', 'requiere_info') AND COALESCE(BTRIM(p_publico), '') "
                       "= '' THEN\n"
                       "        RAISE EXCEPTION 'Hace falta un motivo para el vendedor: sin eso queda "
                       "llamando a la oficina para preguntar qué pasó';\n"
                       '    END IF;\n'
                       '\n'
                       '    SELECT * INTO v_antes FROM solicitudes_validacion WHERE prospecto_id = '
                       'p_prospecto;\n'
                       '\n'
                       '    INSERT INTO solicitudes_validacion (\n'
                       '        prospecto_id, estado, motivo_publico, motivo_interno, validado_por, '
                       'validado_en\n'
                       '    ) VALUES (\n'
                       '        p_prospecto, p_estado, p_publico, p_interno, v_legajo,\n'
                       "        CASE WHEN p_estado = 'pendiente' THEN NULL ELSE NOW() END\n"
                       '    )\n'
                       '    ON CONFLICT (prospecto_id) DO UPDATE SET\n'
                       '        estado         = EXCLUDED.estado,\n'
                       '        motivo_publico = EXCLUDED.motivo_publico,\n'
                       '        motivo_interno = EXCLUDED.motivo_interno,\n'
                       '        validado_por   = EXCLUDED.validado_por,\n'
                       '        validado_en    = EXCLUDED.validado_en,\n'
                       '        actualizado_en = NOW()\n'
                       '    RETURNING id INTO v_id;\n'
                       '\n'
                       '    -- Quién validó qué y con qué motivo. El punto 26 pide registrar\n'
                       '    -- explícitamente las validaciones sensibles.\n'
                       '    INSERT INTO auditoria_sistema (\n'
                       '        usuario_id, usuario_nombre, usuario_rol, accion, descripcion,\n'
                       '        entidad, entidad_id, datos\n'
                       '    )\n'
                       '    SELECT\n'
                       "        u.id, TRIM(CONCAT(u.nombre, ' ', COALESCE(u.apellido, ''))), u.rol,\n"
                       "        'ventas.validar',\n"
                       "        FORMAT('Validó la solicitud como %s', p_estado),\n"
                       "        'solicitud', p_prospecto,\n"
                       '        jsonb_build_object(\n'
                       "            'antes', to_jsonb(v_antes),\n"
                       "            'estado', p_estado,\n"
                       "            'motivo_publico', p_publico,\n"
                       "            'motivo_interno', p_interno\n"
                       '        )\n'
                       '    FROM usuarios_sistema u WHERE u.id = v_legajo;\n'
                       '\n'
                       '    -- La comisión de ese cliente depende de esto. Se recalcula acá para que la\n'
                       '    -- aprobación se refleje sin esperar a la corrida de la noche.\n'
                       '    SELECT cliente_id INTO v_cliente FROM prospectos WHERE id = p_prospecto;\n'
                       '    IF v_cliente IS NOT NULL THEN\n'
                       '        PERFORM generar_comisiones(v_cliente);\n'
                       '    END IF;\n'
                       '\n'
                       '    RETURN v_id;\n'
                       'END '),
 'valor_del_prospecto': ('p_prospecto UUID, p_precio_lista NUMERIC',
                         'NUMERIC',
                         'sql',
                         '\n'
                         '    SELECT COALESCE(\n'
                         '        (SELECT c.precio_mensual FROM cotizaciones c\n'
                         '          WHERE c.prospecto_id = p_prospecto\n'
                         '          ORDER BY c.creado_en DESC LIMIT 1),\n'
                         '        p_precio_lista,\n'
                         '        0\n'
                         '    )\n'),
 've_comisiones_de_todos': ('',
                            'BOOLEAN',
                            'sql',
                            '\n'
                            '    SELECT COALESCE(\n'
                            "        (SELECT permisos ? '*' OR permisos ? 'comisiones.ver_todas'\n"
                            '           FROM usuarios_sistema\n'
                            '          WHERE auth_id = auth.uid() AND activo\n'
                            '          LIMIT 1),\n'
                            '        TRUE\n'
                            '    )\n'),
 've_reparacion': ('p_id UUID',
                   'BOOLEAN',
                   'sql',
                   '\n'
                   '    SELECT dirige_cuadrillas() OR EXISTS (\n'
                   '        SELECT 1 FROM reparaciones_red r\n'
                   '         WHERE r.id = p_id\n'
                   '           AND ((r.tecnico_id IS NOT NULL AND r.tecnico_id = mi_tecnico_id())\n'
                   '             OR (r.cuadrilla_id IS NOT NULL AND r.cuadrilla_id IN (SELECT '
                   'mis_cuadrillas())))\n'
                   '    )\n'),
 've_todo_el_equipo': ('',
                       'BOOLEAN',
                       'sql',
                       '\n'
                       '    SELECT COALESCE(\n'
                       "        (SELECT permisos ? '*' OR permisos ? 'ventas.equipo'\n"
                       '           FROM usuarios_sistema WHERE auth_id = auth.uid() AND activo LIMIT 1),\n'
                       '        -- Sin legajo se permite, igual que el resto de los ayudantes: una\n'
                       '        -- instalación sin la migración 66 no puede quedarse sin módulo comercial.\n'
                       '        TRUE\n'
                       '    )\n'),
 'vencer_firmas_pendientes': ('',
                              'INT',
                              'plpgsql',
                              '\n'
                              'DECLARE\n'
                              '    v_n INT;\n'
                              'BEGIN\n'
                              '    UPDATE firmas_contrato\n'
                              "       SET estado = 'vencido', actualizado_en = NOW()\n"
                              "     WHERE estado IN ('pendiente', 'enviado')\n"
                              '       AND vence_en IS NOT NULL\n'
                              '       AND vence_en < NOW();\n'
                              '\n'
                              '    GET DIAGNOSTICS v_n = ROW_COUNT;\n'
                              '    RETURN v_n;\n'
                              'END '),
 'vendedor_de_instalacion': ('p_instalacion UUID',
                             'UUID',
                             'sql',
                             '\n'
                             '    SELECT vendedor_id FROM prospectos\n'
                             '     WHERE instalacion_id = p_instalacion AND vendedor_id IS NOT NULL\n'
                             '     LIMIT 1\n'),
 'verificar_comisiones': ('',
                          'TABLE (res_prueba TEXT, res_estado TEXT, res_casos INT, res_detalle TEXT)',
                          'plpgsql',
                          '\n'
                          'DECLARE\n'
                          '    n INT;\n'
                          'BEGIN\n'
                          '    IF NOT ve_comisiones_de_todos() THEN\n'
                          "        RAISE EXCEPTION 'La revisión del módulo la corre quien puede ver todas "
                          "las comisiones';\n"
                          '    END IF;\n'
                          '\n'
                          '    -- 1. Un abonado, una comisión de venta nueva.\n'
                          '    SELECT COUNT(*) INTO n FROM (\n'
                          '        SELECT cliente_id FROM comision_ventas\n'
                          "         WHERE cliente_id IS NOT NULL AND estado <> 'anulada'\n"
                          '         GROUP BY cliente_id HAVING COUNT(*) > 1\n'
                          '    ) x;\n'
                          '    RETURN QUERY SELECT\n'
                          "        'Ningún abonado con dos comisiones vivas'::TEXT,\n"
                          "        CASE WHEN n = 0 THEN 'ok' ELSE 'revisar' END,\n"
                          '        n,\n'
                          "        CASE WHEN n = 0 THEN 'El índice único lo impide y se comprobó que sigue "
                          "vigente.'\n"
                          "             ELSE 'Hay abonados con más de una comisión sin anular. Es pago "
                          "doble.' END;\n"
                          '\n'
                          '    -- 2. Una venta comisionable siempre tiene base y esquema congelados.\n'
                          '    SELECT COUNT(*) INTO n FROM comision_ventas\n'
                          '     WHERE comisionable_en IS NOT NULL\n'
                          "       AND estado <> 'anulada'\n"
                          '       AND (base IS NULL OR esquema_id IS NULL);\n'
                          '    RETURN QUERY SELECT\n'
                          "        'Toda venta comisionable tiene base y esquema'::TEXT,\n"
                          "        CASE WHEN n = 0 THEN 'ok' ELSE 'revisar' END,\n"
                          '        n,\n'
                          "        CASE WHEN n = 0 THEN 'Sin esos dos datos una comisión pagada no se podría "
                          "explicar.'\n"
                          "             ELSE 'Hay ventas comisionables sin base o sin esquema congelado.' "
                          'END;\n'
                          '\n'
                          '    -- 3. El período cerrado coincide con lo que da el motor hoy.\n'
                          '    SELECT COUNT(*) INTO n\n'
                          '      FROM comision_periodos cp\n'
                          '      JOIN LATERAL comision_de_periodo(cp.vendedor_id, cp.periodo) c ON TRUE\n'
                          '     WHERE ROUND(cp.monto, 2) <> ROUND(c.monto, 2);\n'
                          '    RETURN QUERY SELECT\n'
                          "        'Los períodos cerrados cuadran al recalcular'::TEXT,\n"
                          "        CASE WHEN n = 0 THEN 'ok' ELSE 'revisar' END,\n"
                          '        n,\n'
                          "        CASE WHEN n = 0 THEN 'Lo congelado da lo mismo que el motor.'\n"
                          "             ELSE 'Hay períodos que no coinciden. Puede ser legítimo si después "
                          "se anuló una venta: revisar la auditoría de esos meses.' END;\n"
                          '\n'
                          '    -- 4. Las cohortes suman.\n'
                          '    SELECT COUNT(*) INTO n FROM comision_cohortes\n'
                          '     WHERE evaluables <> conservados + perdidos;\n'
                          '    RETURN QUERY SELECT\n'
                          "        'Las cohortes suman conservados + perdidos'::TEXT,\n"
                          "        CASE WHEN n = 0 THEN 'ok' ELSE 'revisar' END,\n"
                          '        n,\n'
                          "        CASE WHEN n = 0 THEN 'El porcentaje de calidad se calcula sobre un total "
                          "que cierra.'\n"
                          "             ELSE 'Hay cohortes cuyo total no es la suma de sus partes.' END;\n"
                          '\n'
                          '    -- 5. Ningún bono cerrado quedó sin liquidar más de un mes.\n'
                          '    SELECT COUNT(*) INTO n FROM comision_cohortes\n'
                          "     WHERE estado = 'cerrada' AND liquidado_en IS NULL AND bono > 0\n"
                          "       AND cierra_el < CURRENT_DATE - INTERVAL '1 month';\n"
                          '    RETURN QUERY SELECT\n'
                          "        'Los bonos cerrados se liquidaron'::TEXT,\n"
                          "        CASE WHEN n = 0 THEN 'ok' ELSE 'revisar' END,\n"
                          '        n,\n'
                          "        CASE WHEN n = 0 THEN 'No hay bonos ganados esperando en la cola.'\n"
                          "             ELSE 'Hay bonos calculados hace más de un mes que nadie liquidó: "
                          "probablemente el cierre no está corriendo.' END;\n"
                          '\n'
                          '    -- 6. Ningún bono se pagó dos veces.\n'
                          '    SELECT COUNT(*) INTO n FROM (\n'
                          '        SELECT cc.vendedor_id, cc.periodo_liquidado, SUM(cc.bono) AS bono\n'
                          '          FROM comision_cohortes cc\n'
                          '         WHERE cc.liquidado_en IS NOT NULL\n'
                          '         GROUP BY cc.vendedor_id, cc.periodo_liquidado\n'
                          '    ) l\n'
                          '    JOIN comision_periodos cp\n'
                          '      ON cp.vendedor_id = l.vendedor_id AND cp.periodo = l.periodo_liquidado\n'
                          '     WHERE ROUND(cp.bono, 2) <> ROUND(l.bono, 2);\n'
                          '    RETURN QUERY SELECT\n'
                          "        'El bono liquidado coincide con el del período'::TEXT,\n"
                          "        CASE WHEN n = 0 THEN 'ok' ELSE 'revisar' END,\n"
                          '        n,\n'
                          "        CASE WHEN n = 0 THEN 'Cada bono aparece una sola vez en una sola "
                          "liquidación.'\n"
                          "             ELSE 'Hay liquidaciones cuyo bono no coincide con las cohortes que "
                          "se le imputaron.' END;\n"
                          '\n'
                          '    -- 7. Nadie autorizó ni pagó sin quedar registrado.\n'
                          '    SELECT COUNT(*) INTO n FROM comision_periodos\n'
                          "     WHERE (estado IN ('aprobado', 'pagado') AND aprobado_por IS NULL)\n"
                          "        OR (estado = 'pagado' AND pagado_por IS NULL);\n"
                          '    RETURN QUERY SELECT\n'
                          "        'Toda aprobación y todo pago tiene firma'::TEXT,\n"
                          "        CASE WHEN n = 0 THEN 'ok' ELSE 'revisar' END,\n"
                          '        n,\n'
                          "        CASE WHEN n = 0 THEN 'Se sabe quién autorizó cada gasto.'\n"
                          "             ELSE 'Hay períodos aprobados o pagados sin quién los autorizó. Se "
                          "escribieron por fuera de las funciones.' END;\n"
                          '\n'
                          '    -- 8. Toda anulación tiene motivo.\n'
                          '    SELECT COUNT(*) INTO n FROM comision_ventas\n'
                          "     WHERE estado = 'anulada' AND COALESCE(BTRIM(motivo_anulacion), '') = '';\n"
                          '    RETURN QUERY SELECT\n'
                          "        'Toda anulación tiene motivo escrito'::TEXT,\n"
                          "        CASE WHEN n = 0 THEN 'ok' ELSE 'revisar' END,\n"
                          '        n,\n'
                          "        'Es la regla del punto 26: nada financiero se modifica en silencio.';\n"
                          '\n'
                          '    -- 9. Un solo esquema activo.\n'
                          '    SELECT COUNT(*) INTO n FROM comision_esquemas WHERE activo;\n'
                          '    RETURN QUERY SELECT\n'
                          "        'Hay exactamente un esquema vigente'::TEXT,\n"
                          "        CASE WHEN n = 1 THEN 'ok' ELSE 'revisar' END,\n"
                          '        n,\n'
                          '        CASE WHEN n = 1 THEN \'Una sola respuesta a "cuánto vale esta venta".\'\n'
                          "             WHEN n = 0 THEN 'No hay esquema activo: el motor no puede calcular "
                          "nada.'\n"
                          "             ELSE 'Hay más de uno activo. Dos respuestas distintas a la misma "
                          "pregunta.' END;\n"
                          '\n'
                          '    -- 10. Sin huecos de vigencia entre versiones.\n'
                          '    -- Todo esquema cerrado tiene que tener al siguiente empezando al día\n'
                          '    -- siguiente. El último es el vigente y no tiene `vigente_hasta`.\n'
                          '    SELECT COUNT(*) INTO n\n'
                          '      FROM comision_esquemas a\n'
                          '     WHERE a.vigente_hasta IS NOT NULL\n'
                          '       AND NOT EXISTS (\n'
                          '           SELECT 1 FROM comision_esquemas b\n'
                          '            WHERE b.vigente_desde = a.vigente_hasta + 1);\n'
                          '    RETURN QUERY SELECT\n'
                          "        'Las versiones no dejan días sin esquema'::TEXT,\n"
                          "        CASE WHEN n = 0 THEN 'ok' ELSE 'revisar' END,\n"
                          '        n,\n'
                          "        CASE WHEN n = 0 THEN 'Toda fecha cae dentro de alguna versión.'\n"
                          "             ELSE 'Hay días entre versiones sin esquema vigente: una venta de "
                          "esos días no comisiona y nadie se entera.' END;\n"
                          '\n'
                          '    -- 11. El equipo recuperado volvió al stock de verdad.\n'
                          '    SELECT COUNT(*) INTO n\n'
                          '      FROM retiros_equipo r\n'
                          '      JOIN equipos e ON e.id = r.equipo_id\n'
                          "     WHERE r.estado = 'recuperado'\n"
                          "       AND (e.estado <> 'en_stock' OR e.cliente_id IS NOT NULL);\n"
                          '    RETURN QUERY SELECT\n'
                          "        'Los equipos recuperados están en stock'::TEXT,\n"
                          "        CASE WHEN n = 0 THEN 'ok' ELSE 'revisar' END,\n"
                          '        n,\n'
                          "        CASE WHEN n = 0 THEN 'Lo que volvió, volvió también en el inventario.'\n"
                          "             ELSE 'Hay órdenes cerradas como recuperadas cuyo equipo sigue "
                          "figurando instalado.' END;\n"
                          '\n'
                          '    -- 12. Una reactivación no generó además comisión de venta nueva.\n'
                          '    SELECT COUNT(*) INTO n\n'
                          '      FROM reactivaciones ra\n'
                          '      JOIN comision_ventas cv ON cv.cliente_id = ra.cliente_id\n'
                          "     WHERE cv.estado <> 'anulada'\n"
                          "       AND cv.comisionable_en > ra.reactivado_el - INTERVAL '15 days'\n"
                          "       AND cv.comisionable_en < ra.reactivado_el + INTERVAL '45 days';\n"
                          '    RETURN QUERY SELECT\n'
                          "        'Ninguna reactivación se pagó como venta nueva'::TEXT,\n"
                          "        CASE WHEN n = 0 THEN 'ok' ELSE 'revisar' END,\n"
                          '        n,\n'
                          "        CASE WHEN n = 0 THEN 'El punto 14 se está cumpliendo.'\n"
                          "             ELSE 'Hay comisiones de venta nueva que caen justo alrededor de una "
                          "reactivación del mismo abonado. Revisar si se cargó como prospecto nuevo.' END;\n"
                          '\n'
                          '    /**\n'
                          '     * 13. Ventas cerradas antes de que existiera un esquema.\n'
                          '     *\n'
                          '     * Esta prueba existe por algo que se descubrió corriendo el módulo entero\n'
                          '     * contra una base de prueba: el generador busca el esquema vigente EL DÍA '
                          'en\n'
                          '     * que se ganó la venta, y si no hay ninguno la saltea con un `CONTINUE`.\n'
                          '     *\n'
                          '     * Es lo correcto —no se pueden aplicar reglas que nadie había definido a un\n'
                          '     * período ya cerrado— pero era invisible: la venta no genera fila, así que '
                          'no\n'
                          '     * aparece en ninguna pantalla, ni siquiera con un "le falta". El vendedor\n'
                          '     * pregunta por su venta de julio y no hay nada que mirar.\n'
                          '     *\n'
                          '     * El primer mes esto le pasa a TODO lo vendido antes de instalar el módulo.\n'
                          '     * Acá queda dicho, con el número.\n'
                          '     */\n'
                          '    SELECT COUNT(*) INTO n\n'
                          '      FROM prospectos p\n'
                          "     WHERE p.estado = 'ganado'\n"
                          '       AND p.cliente_id IS NOT NULL\n'
                          "       AND p.tipo_operacion = 'nueva'\n"
                          '       AND esquema_comisiones_vigente(COALESCE(p.ganado_en::DATE, CURRENT_DATE)) '
                          'IS NULL;\n'
                          '    RETURN QUERY SELECT\n'
                          "        'Toda venta ganada cae dentro de algún esquema'::TEXT,\n"
                          "        CASE WHEN n = 0 THEN 'ok' ELSE 'revisar' END,\n"
                          '        n,\n'
                          "        CASE WHEN n = 0 THEN 'No hay ventas fuera del alcance del motor.'\n"
                          "             ELSE 'Hay ventas cerradas antes de que existiera un esquema de "
                          'comisiones. El motor las saltea y no aparecen en ninguna pantalla. Si tienen que '
                          "comisionar, hay que crear una versión con una vigencia anterior.' END;\n"
                          '\n'
                          '    -- 14. Las tareas están corriendo.\n'
                          '    SELECT COUNT(*) INTO n FROM comision_ventas\n'
                          "     WHERE estado = 'pendiente_validacion' AND espera_pago_hasta < CURRENT_DATE - "
                          '15;\n'
                          '    RETURN QUERY SELECT\n'
                          "        'No hay ventas trabadas en cortesía'::TEXT,\n"
                          "        CASE WHEN n = 0 THEN 'ok' ELSE 'revisar' END,\n"
                          '        n,\n'
                          "        CASE WHEN n = 0 THEN 'El refresco de hitos está al día.'\n"
                          "             ELSE 'Hay ventas cuya ventana de pago venció hace más de quince días "
                          "y siguen esperando: la tarea de comisiones probablemente está apagada.' END;\n"
                          'END '),
 'zona_horaria': ('',
                  'TEXT',
                  'sql',
                  '\n'
                  '    SELECT COALESCE(\n'
                  "        (SELECT NULLIF(BTRIM(zona_horaria), '') FROM config_general WHERE id = 1),\n"
                  "        'America/Guayaquil'\n"
                  '    )\n')}

TABLAS = {'alerta_destinos': {'activo': 'BOOLEAN',
                     'canal': 'VARCHAR(12)',
                     'creado_en': 'TIMESTAMPTZ',
                     'desde_hora': 'TIME',
                     'destino': 'VARCHAR(120)',
                     'hasta_hora': 'TIME',
                     'id': 'UUID',
                     'nombre': 'VARCHAR(60)',
                     'probado_en': 'TIMESTAMPTZ',
                     'probado_ok': 'BOOLEAN',
                     'tipos': 'TEXT[]',
                     'zonas': 'TEXT[]'},
 'alerta_envios': {'canal': 'VARCHAR(12)',
                   'creado_en': 'TIMESTAMPTZ',
                   'destino': 'VARCHAR(120)',
                   'destino_id': 'UUID',
                   'estado': 'VARCHAR(12)',
                   'evento_id': 'UUID',
                   'id': 'UUID',
                   'respuesta': 'TEXT',
                   'texto': 'TEXT'},
 'alerta_eventos': {'abonados': 'INT',
                    'avisado_en': 'TIMESTAMPTZ',
                    'creado_en': 'TIMESTAMPTZ',
                    'detalle': 'JSONB',
                    'empezo_en': 'TIMESTAMPTZ',
                    'entidad': 'VARCHAR(20)',
                    'entidad_id': 'VARCHAR(80)',
                    'etiqueta': 'VARCHAR(150)',
                    'id': 'UUID',
                    'regla': 'VARCHAR(30)',
                    'resuelto_avisado_en': 'TIMESTAMPTZ',
                    'resuelto_en': 'TIMESTAMPTZ',
                    'zona': 'VARCHAR(60)'},
 'alerta_reglas': {'activa': 'BOOLEAN',
                   'actualizado_en': 'TIMESTAMPTZ',
                   'clave': 'VARCHAR(30)',
                   'descripcion': 'TEXT',
                   'desde_hora': 'TIME',
                   'espera_min': 'INT',
                   'hasta_hora': 'TIME',
                   'nombre': 'VARCHAR(80)',
                   'umbral': 'NUMERIC(8,2)'},
 'almacenes': {'activo': 'BOOLEAN',
               'creado_en': 'TIMESTAMPTZ',
               'direccion': 'TEXT',
               'id': 'UUID',
               'nombre': 'VARCHAR(100)',
               'tecnico_id': 'UUID',
               'tipo': 'VARCHAR(12)'},
 'api_llamadas': {'created_at': 'TIMESTAMPTZ',
                  'error': 'TEXT',
                  'id': 'BIGSERIAL',
                  'identificacion': 'VARCHAR(20)',
                  'ip': 'VARCHAR(60)',
                  'llave_id': 'UUID',
                  'llave_nombre': 'VARCHAR(80)',
                  'metodo': 'VARCHAR(8)',
                  'ms': 'INTEGER',
                  'ruta': 'VARCHAR(200)',
                  'status': 'INTEGER'},
 'api_llaves': {'activa': 'BOOLEAN',
                'confirma_pagos': 'BOOLEAN',
                'creada_por': 'UUID',
                'created_at': 'TIMESTAMPTZ',
                'cuenta_id': 'UUID',
                'generada_desde': 'UUID',
                'generada_desde_nombre': 'VARCHAR(150)',
                'huella': 'TEXT',
                'id': 'UUID',
                'ips_permitidas': 'TEXT[]',
                'motivo_revocacion': 'TEXT',
                'nombre': 'VARCHAR(80)',
                'notas': 'TEXT',
                'permisos': 'TEXT[]',
                'prefijo': 'VARCHAR(16)',
                'reactiva_servicio': 'BOOLEAN',
                'revocada_at': 'TIMESTAMPTZ',
                'revocada_por': 'UUID',
                'ultimo_uso': 'TIMESTAMPTZ'},
 'articulos': {'activo': 'BOOLEAN',
               'categoria': 'VARCHAR(20)',
               'codigo': 'VARCHAR(40)',
               'costo_ultimo': 'NUMERIC(12, 2)',
               'creado_en': 'TIMESTAMPTZ',
               'id': 'UUID',
               'nombre': 'VARCHAR(140)',
               'notas': 'TEXT',
               'por_serie': 'BOOLEAN',
               'stock_minimo': 'NUMERIC(12, 2)',
               'tipo_ont_id': 'UUID',
               'unidad': 'VARCHAR(10)'},
 'audit_logs': {'accion': 'VARCHAR(15)',
                'actor_email': 'VARCHAR(150)',
                'actor_id': 'UUID',
                'antes': 'JSONB',
                'categoria': 'VARCHAR(30)',
                'client_id': 'UUID',
                'created_at': 'TIMESTAMP WITH TIME ZONE',
                'descripcion': 'TEXT',
                'despues': 'JSONB',
                'entidad': 'VARCHAR(40)',
                'entidad_id': 'UUID',
                'id': 'UUID',
                'ip_origen': 'VARCHAR(45)'},
 'auditoria_sistema': {'accion': 'VARCHAR(60)',
                       'creado_en': 'TIMESTAMPTZ',
                       'datos': 'JSONB',
                       'descripcion': 'TEXT',
                       'entidad': 'VARCHAR(40)',
                       'entidad_id': 'VARCHAR(60)',
                       'id': 'BIGSERIAL',
                       'ip': 'VARCHAR(45)',
                       'user_agent': 'TEXT',
                       'usuario_id': 'UUID',
                       'usuario_nombre': 'VARCHAR(140)',
                       'usuario_rol': 'VARCHAR(20)'},
 'autorizacion_presets': {'created_at': 'TIMESTAMPTZ',
                          'gemport': 'INT',
                          'id': 'UUID',
                          'line_profile_id': 'INT',
                          'line_profile_nombre': 'VARCHAR(60)',
                          'nombre': 'VARCHAR(80)',
                          'notas': 'TEXT',
                          'olt_id': 'UUID',
                          'plan_id': 'UUID',
                          'predeterminado': 'BOOLEAN',
                          'srv_profile_id': 'INT',
                          'srv_profile_nombre': 'VARCHAR(60)',
                          'updated_at': 'TIMESTAMPTZ',
                          'vlan': 'INT',
                          'zona': 'VARCHAR(60)'},
 'avisos_pendientes': {'cliente_id': 'UUID',
                       'creado_en': 'TIMESTAMPTZ',
                       'enviar_desde': 'TIMESTAMPTZ',
                       'error': 'TEXT',
                       'id': 'BIGSERIAL',
                       'intentos': 'INT',
                       'procesado_en': 'TIMESTAMPTZ',
                       'referencia_id': 'UUID',
                       'tipo': 'VARCHAR(30)'},
 'campo_llamadas': {'canal': 'VARCHAR(10)',
                    'creado_at': 'TIMESTAMPTZ',
                    'id': 'BIGSERIAL',
                    'item_id': 'UUID',
                    'item_tipo': 'VARCHAR(12)',
                    'tecnico_id': 'UUID',
                    'usuario_id': 'UUID'},
 'cargas_combustible': {'creado_en': 'TIMESTAMPTZ',
                        'creado_por': 'UUID',
                        'estacion': 'VARCHAR(80)',
                        'fecha': 'DATE',
                        'id': 'UUID',
                        'litros': 'NUMERIC(8, 2)',
                        'monto': 'NUMERIC(10, 2)',
                        'notas': 'TEXT',
                        'odometro': 'INT',
                        'tecnico_id': 'UUID',
                        'vehiculo_id': 'UUID'},
 'clausulas_contrato': {'activa': 'BOOLEAN',
                        'actualizado_en': 'TIMESTAMPTZ',
                        'bloque': 'VARCHAR(20)',
                        'bloque_final': 'VARCHAR(20)',
                        'cierre': 'TEXT',
                        'cierre2': 'TEXT',
                        'condicion': 'VARCHAR(30)',
                        'creado_en': 'TIMESTAMPTZ',
                        'etiqueta_condicion': 'VARCHAR(120)',
                        'id': 'UUID',
                        'lista_campo': 'VARCHAR(30)',
                        'lista_titulo': 'VARCHAR(120)',
                        'numeral': 'VARCHAR(60)',
                        'numerales': 'JSONB',
                        'orden': 'INT',
                        'prestador_id': 'UUID',
                        'raya_firma': 'BOOLEAN',
                        'texto': 'TEXT',
                        'titulo': 'VARCHAR(120)'},
 'clientes': {'acepta_arbitraje': 'BOOLEAN',
              'acepta_datos_personales': 'BOOLEAN',
              'activado_en': 'TIMESTAMPTZ',
              'aplicar_corte': 'BOOLEAN',
              'aviso_dias_1': 'INT',
              'aviso_dias_2': 'INT',
              'aviso_dias_3': 'INT',
              'aviso_dias_4': 'INT',
              'aviso_factura_canales': 'TEXT[]',
              'aviso_pantalla_dias': 'INT',
              'avisos_activos': 'BOOLEAN',
              'avisos_baja_at': 'TIMESTAMPTZ',
              'avisos_baja_texto': 'VARCHAR(200)',
              'avisos_canales': 'TEXT[]',
              'avisos_pantalla': 'BOOLEAN',
              'baja_en': 'TIMESTAMPTZ',
              'baja_nota': 'TEXT',
              'canal_preferido': 'VARCHAR(15)',
              'canton': 'VARCHAR(60)',
              'ciudad': 'VARCHAR(60)',
              'clave_ppp': 'VARCHAR(100)',
              'codigo': 'INT',
              'codigo_externo': 'VARCHAR(50)',
              'codigo_pago': 'VARCHAR(50)',
              'comentario': 'TEXT',
              'condicion_especial': 'CONDICION_ABONADO',
              'conectado_a_id': 'UUID',
              'cortado_en': 'DATE',
              'cortar_tras_meses': 'INT',
              'created_at': 'TIMESTAMP WITH TIME ZONE',
              'descripcion_servicio': 'TEXT',
              'descuento_documento': 'TEXT',
              'descuento_fijo': 'NUMERIC(10,2)',
              'descuento_fijo_motivo': 'VARCHAR(160)',
              'descuento_porcentaje': 'NUMERIC(5,2)',
              'descuento_tipo': 'TEXT',
              'deuda_equipo': 'NUMERIC(12,2)',
              'dia_facturacion': 'INT',
              'dia_generar_factura': 'INT',
              'dias_gracia': 'INT',
              'direccion': 'VARCHAR(300)',
              'email': 'VARCHAR(200)',
              'equipo_modalidad': 'VARCHAR(14)',
              'estado': 'VARCHAR(20)',
              'estado_desde': 'TIMESTAMPTZ',
              'excluir_firewall': 'BOOLEAN',
              'factura_electronica': 'BOOLEAN',
              'fecha_instalacion': 'DATE',
              'id': 'UUID',
              'identificacion': 'VARCHAR(20)',
              'importado_at': 'TIMESTAMPTZ',
              'ip': 'VARCHAR(45)',
              'ip_administracion': 'VARCHAR(45)',
              'ipv6': 'VARCHAR(45)',
              'ipv6_duid': 'VARCHAR(60)',
              'ipv6_prefijo': 'VARCHAR(60)',
              'latitud': 'NUMERIC(10,7)',
              'longitud': 'NUMERIC(10,7)',
              'mac_address': 'VARCHAR(17)',
              'modalidad_pago': 'VARCHAR(10)',
              'motivo_baja_id': 'UUID',
              'nap_id': 'UUID',
              'nombre': 'VARCHAR(150)',
              'notas': 'TEXT',
              'numero_orden': 'INT',
              'onu_id': 'UUID',
              'origen': 'VARCHAR(20)',
              'parroquia': 'VARCHAR(60)',
              'pasarela': 'VARCHAR(40)',
              'permanencia_meses': 'INT',
              'plan_id': 'UUID',
              'portal_clave': 'VARCHAR(40)',
              'portal_clave_hash': 'TEXT',
              'portal_clave_puesta': 'TIMESTAMPTZ',
              'precio_mensual': 'NUMERIC(10,2)',
              'prestador_id': 'UUID',
              'promo_desde': 'DATE',
              'promo_meses': 'INTEGER',
              'promo_porcentaje': 'NUMERIC(5,2)',
              'provincia': 'VARCHAR(60)',
              'puerto_nap': 'VARCHAR(20)',
              'red_acceso': 'RED_DE_ACCESO',
              'red_ipv4': 'VARCHAR(50)',
              'referencia_servicio': 'TEXT',
              'router_id': 'UUID',
              'rutas': 'TEXT',
              'sistema_origen': 'VARCHAR(30)',
              'suspendido_hasta': 'DATE',
              'suspendido_motivo': 'TEXT',
              'tarifa_preferencial': 'BOOLEAN',
              'telefono': 'VARCHAR(30)',
              'telefono_movil': 'VARCHAR(30)',
              'telegram_chat_id': 'VARCHAR(40)',
              'tipo_antena': 'VARCHAR(50)',
              'tipo_conexion': 'VARCHAR(10)',
              'tipo_cuenta': 'TIPO_DE_CUENTA',
              'tipo_identificacion': 'VARCHAR(2)',
              'tipo_impuesto': 'VARCHAR(10)',
              'tipo_ip': 'VARCHAR(10)',
              'ultimo_pago_externo': 'DATE',
              'updated_at': 'TIMESTAMP WITH TIME ZONE',
              'usuario_ppp': 'VARCHAR(100)',
              'valor_instalacion': 'NUMERIC(12,2)',
              'velocidad_cruda': 'VARCHAR(50)',
              'zona': 'VARCHAR(60)'},
 'cobranza_asignaciones': {'asignado_por': 'UUID',
                           'cerrado_en': 'TIMESTAMPTZ',
                           'cliente_id': 'UUID',
                           'creado_en': 'TIMESTAMPTZ',
                           'estado': 'VARCHAR(12)',
                           'id': 'UUID',
                           'motivo': 'TEXT',
                           'saldo_inicial': 'NUMERIC(12,2)',
                           'vence_el': 'DATE',
                           'vendedor_id': 'UUID'},
 'cobranza_gestiones': {'asignacion_id': 'UUID',
                        'canal': 'VARCHAR(12)',
                        'creado_en': 'TIMESTAMPTZ',
                        'id': 'UUID',
                        'observacion': 'TEXT',
                        'promesa_fecha': 'DATE',
                        'promesa_monto': 'NUMERIC(12,2)',
                        'resultado': 'VARCHAR(20)',
                        'usuario_id': 'UUID',
                        'usuario_nombre': 'VARCHAR(140)'},
 'comandos_ejecutados': {'client_id': 'UUID',
                         'comando': 'VARCHAR(40)',
                         'created_at': 'TIMESTAMP WITH TIME ZONE',
                         'created_by': 'UUID',
                         'destino_id': 'UUID',
                         'destino_nombre': 'VARCHAR(150)',
                         'destino_tipo': 'VARCHAR(15)',
                         'duracion_ms': 'INTEGER',
                         'error': 'TEXT',
                         'exito': 'BOOLEAN',
                         'id': 'UUID',
                         'ip_origen': 'VARCHAR(45)',
                         'parametros': 'JSONB',
                         'salida': 'TEXT'},
 'comision_bases_plan': {'base': 'NUMERIC(12,2)',
                         'comisiona': 'BOOLEAN',
                         'esquema_id': 'UUID',
                         'plan_id': 'UUID'},
 'comision_bonos_calidad': {'desde_pct': 'NUMERIC(5,2)',
                            'esquema_id': 'UUID',
                            'hasta_pct': 'NUMERIC(5,2)',
                            'id': 'UUID',
                            'monto': 'NUMERIC(12,2)',
                            'orden': 'SMALLINT'},
 'comision_cohortes': {'bono': 'NUMERIC(12,2)',
                       'calidad': 'NUMERIC(5,2)',
                       'cerrado_en': 'TIMESTAMPTZ',
                       'cierra_el': 'DATE',
                       'cohorte': 'DATE',
                       'conservados': 'INT',
                       'detalle': 'TEXT',
                       'esquema_id': 'UUID',
                       'estado': 'VARCHAR(8)',
                       'evaluables': 'INT',
                       'evaluado_en': 'TIMESTAMPTZ',
                       'excluidos': 'INT',
                       'id': 'UUID',
                       'liquidado_en': 'TIMESTAMPTZ',
                       'perdidos': 'INT',
                       'periodo_liquidado': 'DATE',
                       'vendedor_id': 'UUID'},
 'comision_esquemas': {'activo': 'BOOLEAN',
                       'actualizado_en': 'TIMESTAMPTZ',
                       'creado_en': 'TIMESTAMPTZ',
                       'creado_por': 'UUID',
                       'id': 'UUID',
                       'modo': 'VARCHAR(12)',
                       'nombre': 'VARCHAR(80)',
                       'notas': 'TEXT',
                       'vigente_desde': 'DATE',
                       'vigente_hasta': 'DATE'},
 'comision_niveles': {'desde_ventas': 'SMALLINT',
                      'esquema_id': 'UUID',
                      'hasta_ventas': 'SMALLINT',
                      'id': 'UUID',
                      'nombre': 'VARCHAR(30)',
                      'orden': 'SMALLINT',
                      'porcentaje': 'NUMERIC(5,2)'},
 'comision_periodos': {'aprobado_en': 'TIMESTAMPTZ',
                       'aprobado_por': 'UUID',
                       'base_total': 'NUMERIC(12,2)',
                       'bono': 'NUMERIC(12,2)',
                       'cerrado_en': 'TIMESTAMPTZ',
                       'cerrado_por': 'UUID',
                       'esquema_id': 'UUID',
                       'estado': 'VARCHAR(10)',
                       'id': 'UUID',
                       'monto': 'NUMERIC(12,2)',
                       'nivel': 'VARCHAR(30)',
                       'notas': 'TEXT',
                       'pagado_en': 'TIMESTAMPTZ',
                       'pagado_por': 'UUID',
                       'periodo': 'DATE',
                       'porcentaje': 'NUMERIC(5,2)',
                       'vendedor_id': 'UUID',
                       'ventas_validas': 'INT'},
 'comision_reglas': {'actualizado_en': 'TIMESTAMPTZ',
                     'actualizado_por': 'UUID',
                     'dia_cierre': 'SMALLINT',
                     'dia_cortesia_desde': 'SMALLINT',
                     'dias_cohorte': 'SMALLINT',
                     'esquema_id': 'UUID',
                     'meses_sin_pago_retiro': 'SMALLINT',
                     'meses_sin_pago_suspension': 'SMALLINT',
                     'min_clientes_cohorte': 'SMALLINT',
                     'pago_ventana_desde': 'SMALLINT',
                     'pago_ventana_hasta': 'SMALLINT',
                     'requiere_activacion': 'BOOLEAN',
                     'requiere_aprobacion': 'BOOLEAN',
                     'requiere_contrato': 'BOOLEAN',
                     'requiere_documentacion': 'BOOLEAN',
                     'requiere_instalacion': 'BOOLEAN',
                     'requiere_primer_pago': 'BOOLEAN'},
 'comision_ventas': {'activado_en': 'TIMESTAMPTZ',
                     'actualizado_en': 'TIMESTAMPTZ',
                     'anulada_en': 'TIMESTAMPTZ',
                     'anulada_por': 'UUID',
                     'aprobado_en': 'TIMESTAMPTZ',
                     'base': 'NUMERIC(12,2)',
                     'calidad_en': 'TIMESTAMPTZ',
                     'calidad_estado': 'VARCHAR(14)',
                     'calidad_motivo': 'TEXT',
                     'cliente_id': 'UUID',
                     'cohorte': 'DATE',
                     'comisionable_en': 'TIMESTAMPTZ',
                     'contrato_en': 'TIMESTAMPTZ',
                     'creado_en': 'TIMESTAMPTZ',
                     'documentado_en': 'TIMESTAMPTZ',
                     'espera_pago_hasta': 'DATE',
                     'esquema_id': 'UUID',
                     'estado': 'VARCHAR(22)',
                     'ganado_en': 'TIMESTAMPTZ',
                     'id': 'UUID',
                     'instalado_en': 'TIMESTAMPTZ',
                     'motivo_anulacion': 'TEXT',
                     'periodo': 'DATE',
                     'plan_id': 'UUID',
                     'primer_pago_en': 'TIMESTAMPTZ',
                     'prospecto_id': 'UUID',
                     'tipo_operacion': 'VARCHAR(14)',
                     'vendedor_id': 'UUID'},
 'compra_items': {'articulo_id': 'UUID',
                  'cantidad': 'NUMERIC(12, 2)',
                  'compra_id': 'UUID',
                  'costo_unit': 'NUMERIC(12, 2)',
                  'id': 'UUID',
                  'series': 'JSONB'},
 'compras': {'almacen_id': 'UUID',
             'creado_en': 'TIMESTAMPTZ',
             'creado_por': 'UUID',
             'documento': 'VARCHAR(40)',
             'estado': 'VARCHAR(12)',
             'fecha': 'DATE',
             'id': 'UUID',
             'notas': 'TEXT',
             'numero': 'BIGSERIAL',
             'proveedor_id': 'UUID',
             'recibida_en': 'TIMESTAMPTZ',
             'total': 'NUMERIC(12, 2)'},
 'comunicaciones': {'asunto': 'VARCHAR(300)',
                    'automatico': 'BOOLEAN',
                    'canal': 'VARCHAR(15)',
                    'client_id': 'UUID',
                    'created_at': 'TIMESTAMP WITH TIME ZONE',
                    'created_by': 'UUID',
                    'cuerpo': 'TEXT',
                    'destino': 'VARCHAR(200)',
                    'direccion': 'VARCHAR(10)',
                    'entregado_at': 'TIMESTAMP WITH TIME ZONE',
                    'enviado_at': 'TIMESTAMP WITH TIME ZONE',
                    'error': 'TEXT',
                    'estado': 'VARCHAR(12)',
                    'factura_id': 'UUID',
                    'id': 'UUID',
                    'leido_at': 'TIMESTAMP WITH TIME ZONE',
                    'plantilla_id': 'UUID',
                    'proveedor_id': 'VARCHAR(200)',
                    'ticket_id': 'UUID'},
 'config_avisos_pago': {'activa': 'BOOLEAN',
                        'actualizado_en': 'TIMESTAMPTZ',
                        'canal': 'VARCHAR(15)',
                        'dias_aviso_1': 'INT',
                        'dias_aviso_2': 'INT',
                        'dias_aviso_3': 'INT',
                        'dias_aviso_4': 'INT',
                        'id': 'SMALLINT',
                        'limite': 'INT',
                        'repetir_cada_4': 'INT'},
 'config_cartera': {'actualizado_en': 'TIMESTAMPTZ',
                    'archivar_prospectos': 'BOOLEAN',
                    'comision_porcentaje': 'NUMERIC(5, 2)',
                    'id': 'SMALLINT',
                    'ventana_cobranza_meses': 'SMALLINT'},
 'config_corte': {'activa': 'BOOLEAN',
                  'actualizado_en': 'TIMESTAMPTZ',
                  'aviso_despues_de_pagar': 'TEXT',
                  'aviso_pausa_horas': 'INTEGER',
                  'cuentas_inicializadas': 'BOOLEAN',
                  'id': 'SMALLINT',
                  'mensaje': 'TEXT',
                  'mostrar_facturas': 'BOOLEAN',
                  'mostrar_saldo': 'BOOLEAN',
                  'telefono_pagos': 'VARCHAR(30)',
                  'titulo': 'VARCHAR(120)',
                  'whatsapp_pagos': 'VARCHAR(30)'},
 'config_firma': {'actualizado_en': 'TIMESTAMPTZ',
                  'api_habilitada': 'BOOLEAN',
                  'api_key_encrypted': 'TEXT',
                  'api_url': 'TEXT',
                  'id': 'INT',
                  'proveedor': 'VARCHAR(40)',
                  'roles_autorizan': 'JSONB',
                  'timeout_segundos': 'INT',
                  'vigencia_horas': 'INT'},
 'config_general': {'actualizado_en': 'TIMESTAMPTZ',
                    'id': 'INT',
                    'iva_porcentaje': 'NUMERIC(5,2)',
                    'lema': 'VARCHAR(80)',
                    'logo_b64': 'TEXT',
                    'moneda_codigo': 'VARCHAR(3)',
                    'moneda_simbolo': 'VARCHAR(5)',
                    'nombre_sistema': 'VARCHAR(60)',
                    'pais': 'VARCHAR(2)',
                    'zona_horaria': 'TEXT'},
 'config_mensajeria': {'actualizado_en': 'TIMESTAMPTZ',
                       'avisos_desde': 'TEXT',
                       'avisos_hasta': 'TEXT',
                       'id': 'INT',
                       'nms_canal': 'VARCHAR(15)',
                       'nms_destino': 'VARCHAR(120)',
                       'telegram_bot_usuario': 'VARCHAR(64)',
                       'telegram_token_encrypted': 'TEXT',
                       'twilio_desde': 'VARCHAR(32)',
                       'twilio_sid': 'VARCHAR(64)',
                       'twilio_token_encrypted': 'TEXT',
                       'whatsapp_app_secret_encrypted': 'TEXT',
                       'whatsapp_crm_header': 'VARCHAR(40)',
                       'whatsapp_crm_key_encrypted': 'TEXT',
                       'whatsapp_crm_nombre': 'VARCHAR(60)',
                       'whatsapp_crm_url': 'TEXT',
                       'whatsapp_desde': 'VARCHAR(32)',
                       'whatsapp_evolution_instancia': 'VARCHAR(64)',
                       'whatsapp_evolution_key_encrypted': 'TEXT',
                       'whatsapp_evolution_url': 'VARCHAR(200)',
                       'whatsapp_pausa_segundos': 'INT',
                       'whatsapp_phone_id': 'VARCHAR(64)',
                       'whatsapp_token_encrypted': 'TEXT',
                       'whatsapp_verify_token': 'VARCHAR(120)',
                       'whatsapp_via': 'VARCHAR(12)'},
 'config_tareas': {'actualizado_en': 'TIMESTAMPTZ',
                   'alertas_automaticas': 'BOOLEAN',
                   'alertas_cada_minutos': 'INT',
                   'avisos_pago_automatico': 'BOOLEAN',
                   'avisos_pago_hora': 'VARCHAR(5)',
                   'cartera_automatico': 'BOOLEAN',
                   'cartera_hora': 'VARCHAR(5)',
                   'cobranza_cada_minutos': 'INT',
                   'comisiones_automatico': 'BOOLEAN',
                   'comisiones_hora': 'VARCHAR(5)',
                   'consumo_automatico': 'BOOLEAN',
                   'consumo_cada_minutos': 'INT',
                   'cortes_automaticos': 'BOOLEAN',
                   'cortes_hora': 'VARCHAR(5)',
                   'cortes_limite': 'INT',
                   'esperando_automatico': 'BOOLEAN',
                   'esperando_cada_minutos': 'INT',
                   'facturacion_automatica': 'BOOLEAN',
                   'facturacion_hora': 'VARCHAR(5)',
                   'firmas_automatico': 'BOOLEAN',
                   'firmas_cada_minutos': 'INT',
                   'foto_routers_automatico': 'BOOLEAN',
                   'foto_routers_hora': 'TEXT',
                   'horario_desde': 'TIME',
                   'horario_hasta': 'TIME',
                   'id': 'INT',
                   'incidencias_automatico': 'BOOLEAN',
                   'incidencias_cada_minutos': 'INT',
                   'incidencias_cola_activa': 'BOOLEAN',
                   'incidencias_lote': 'INT',
                   'incidencias_minutos': 'INT',
                   'mora_automatico': 'BOOLEAN',
                   'mora_barrida_minutos': 'INT',
                   'mora_hora': 'VARCHAR(5)',
                   'mora_limite': 'INT',
                   'mora_reconexion_minutos': 'INT',
                   'mora_reconexion_segundos': 'INT',
                   'nms_automatico': 'BOOLEAN',
                   'nms_cada_minutos': 'INT',
                   'nms_gracia_minutos': 'INT',
                   'nms_paquetes': 'INT',
                   'nms_router_fallas': 'INT',
                   'optica_automatica': 'BOOLEAN',
                   'optica_cada_minutos': 'INT',
                   'pausas_automatico': 'BOOLEAN',
                   'pausas_hora': 'TEXT',
                   'stock_automatico': 'BOOLEAN',
                   'stock_hora': 'VARCHAR(5)',
                   'subida_automatico': 'BOOLEAN',
                   'subida_cada_minutos': 'INT'},
 'consumo_contadores': {'bajada_bytes': 'BIGINT',
                        'client_id': 'UUID',
                        'fuente': 'VARCHAR(15)',
                        'leido_at': 'TIMESTAMP WITH TIME ZONE',
                        'origen': 'VARCHAR(40)',
                        'subida_bytes': 'BIGINT',
                        'updated_at': 'TIMESTAMP WITH TIME ZONE'},
 'consumo_diario': {'bajada_bytes': 'BIGINT',
                    'client_id': 'UUID',
                    'created_at': 'TIMESTAMP WITH TIME ZONE',
                    'estado_servicio': 'VARCHAR(15)',
                    'fecha': 'DATE',
                    'fuente': 'VARCHAR(15)',
                    'id': 'UUID',
                    'subida_bytes': 'BIGINT',
                    'updated_at': 'TIMESTAMP WITH TIME ZONE'},
 'contratos': {'client_id': 'UUID',
               'contenido_hash': 'VARCHAR(64)',
               'created_at': 'TIMESTAMP WITH TIME ZONE',
               'created_by': 'UUID',
               'dia_pago': 'INT',
               'documento_url': 'TEXT',
               'estado': 'VARCHAR(15)',
               'fecha_fin': 'DATE',
               'fecha_inicio': 'DATE',
               'firma_en': 'TIMESTAMPTZ',
               'firma_enviado_en': 'TIMESTAMPTZ',
               'firma_estado': 'VARCHAR(12)',
               'firma_evidencia_url': 'TEXT',
               'firma_por': 'UUID',
               'firma_proveedor': 'VARCHAR(40)',
               'firma_referencia': 'VARCHAR(120)',
               'id': 'UUID',
               'notas': 'TEXT',
               'numero': 'VARCHAR(30)',
               'permanencia_meses': 'INT',
               'plan_id': 'UUID',
               'precio_mensual': 'NUMERIC(12,2)',
               'updated_at': 'TIMESTAMP WITH TIME ZONE',
               'version': 'SMALLINT'},
 'cotizaciones': {'convertida_en': 'UUID',
                  'costo_equipo': 'NUMERIC(12, 2)',
                  'costo_instalacion': 'NUMERIC(12, 2)',
                  'creado_en': 'TIMESTAMPTZ',
                  'creado_por': 'UUID',
                  'descuento': 'NUMERIC(12, 2)',
                  'estado': 'VARCHAR(12)',
                  'id': 'UUID',
                  'meses_contrato': 'SMALLINT',
                  'meses_promocion': 'SMALLINT',
                  'nombre': 'VARCHAR(150)',
                  'notas': 'TEXT',
                  'numero': 'BIGSERIAL',
                  'plan_id': 'UUID',
                  'plan_nombre': 'VARCHAR(120)',
                  'precio_mensual': 'NUMERIC(12, 2)',
                  'precio_promocional': 'NUMERIC(10, 2)',
                  'primer_mes': 'NUMERIC(10, 2)',
                  'promocion_id': 'UUID',
                  'promocion_nombre': 'VARCHAR(120)',
                  'prospecto_id': 'UUID',
                  'sector': 'VARCHAR(100)',
                  'telefono': 'VARCHAR(30)',
                  'validez_dias': 'SMALLINT',
                  'vendedor_id': 'UUID'},
 'cuadrilla_miembros': {'cuadrilla_id': 'UUID', 'rol': 'VARCHAR(20)', 'tecnico_id': 'UUID'},
 'cuadrilla_reemplazos': {'creado_en': 'TIMESTAMPTZ',
                          'cuadrilla_id': 'UUID',
                          'designado_por': 'UUID',
                          'fecha': 'DATE',
                          'tecnico_id': 'UUID'},
 'cuadrillas': {'activo': 'BOOLEAN',
                'created_at': 'TIMESTAMP WITH TIME ZONE',
                'id': 'UUID',
                'nombre': 'VARCHAR(100)',
                'vehiculo': 'VARCHAR(100)',
                'vehiculo_id': 'UUID',
                'zona': 'VARCHAR(100)'},
 'cuentas_pago': {'activa': 'BOOLEAN',
                  'banco': 'VARCHAR(100)',
                  'created_at': 'TIMESTAMP WITH TIME ZONE',
                  'id': 'UUID',
                  'identificacion': 'VARCHAR(20)',
                  'mostrar_en_corte': 'BOOLEAN',
                  'nombre': 'VARCHAR(100)',
                  'numero': 'VARCHAR(50)',
                  'tipo': 'VARCHAR(20)',
                  'titular': 'VARCHAR(150)',
                  'usuario_id': 'UUID'},
 'document_items': {'base_imponible_iva': 'NUMERIC(14,2)',
                    'cantidad': 'NUMERIC(14,6)',
                    'codigo_auxiliar': 'VARCHAR(25)',
                    'codigo_impuesto': 'VARCHAR(1)',
                    'codigo_porcentaje': 'VARCHAR(4)',
                    'codigo_principal': 'VARCHAR(25)',
                    'created_at': 'TIMESTAMP WITH TIME ZONE',
                    'descripcion': 'VARCHAR(300)',
                    'descuento': 'NUMERIC(14,2)',
                    'document_id': 'UUID',
                    'id': 'UUID',
                    'orden': 'INT',
                    'precio_total_sin_impuesto': 'NUMERIC(14,2)',
                    'precio_unitario': 'NUMERIC(14,6)',
                    'tarifa_iva': 'NUMERIC(5,2)',
                    'valor_iva': 'NUMERIC(14,2)'},
 'documentos': {'categoria': 'VARCHAR(30)',
                'client_id': 'UUID',
                'created_at': 'TIMESTAMP WITH TIME ZONE',
                'created_by': 'UUID',
                'firmado_at': 'TIMESTAMP WITH TIME ZONE',
                'firmante_nombre': 'VARCHAR(150)',
                'id': 'UUID',
                'instalacion_id': 'UUID',
                'mime': 'VARCHAR(100)',
                'nombre': 'VARCHAR(200)',
                'notas': 'TEXT',
                'reemplazado_en': 'TIMESTAMPTZ',
                'reemplazado_por': 'UUID',
                'ruta': 'TEXT',
                'tamano': 'BIGINT',
                'visible_cliente': 'BOOLEAN'},
 'electronic_documents': {'ambiente': 'VARCHAR(1)',
                          'clave_acceso': 'VARCHAR(49)',
                          'client_id': 'UUID',
                          'created_at': 'TIMESTAMP WITH TIME ZONE',
                          'created_by': 'UUID',
                          'direccion_comprador': 'VARCHAR(300)',
                          'doc_modificado_fecha': 'DATE',
                          'doc_modificado_numero': 'VARCHAR(17)',
                          'doc_modificado_tipo': 'VARCHAR(2)',
                          'email_comprador': 'VARCHAR(200)',
                          'enviado_por_email': 'BOOLEAN',
                          'establecimiento': 'VARCHAR(3)',
                          'estado': 'VARCHAR(15)',
                          'fecha_autorizacion': 'TIMESTAMP WITH TIME ZONE',
                          'fecha_emision': 'DATE',
                          'fecha_envio_email': 'TIMESTAMP WITH TIME ZONE',
                          'forma_pago': 'VARCHAR(2)',
                          'id': 'UUID',
                          'identificacion_comprador': 'VARCHAR(20)',
                          'importe_total': 'NUMERIC(14,2)',
                          'mensaje_autorizacion': 'TEXT',
                          'moneda': 'VARCHAR(20)',
                          'motivo': 'VARCHAR(300)',
                          'numero_autorizacion': 'VARCHAR(49)',
                          'observaciones': 'TEXT',
                          'propina': 'NUMERIC(14,2)',
                          'punto_emision': 'VARCHAR(3)',
                          'razon_social_comprador': 'VARCHAR(300)',
                          'secuencial': 'VARCHAR(9)',
                          'tipo_doc': 'VARCHAR(2)',
                          'tipo_emision': 'VARCHAR(1)',
                          'tipo_identificacion_comprador': 'VARCHAR(2)',
                          'total_descuento': 'NUMERIC(14,2)',
                          'total_iva': 'NUMERIC(14,2)',
                          'total_sin_impuestos': 'NUMERIC(14,2)',
                          'updated_at': 'TIMESTAMP WITH TIME ZONE',
                          'xml_autorizado': 'TEXT',
                          'xml_firmado': 'TEXT',
                          'xml_sin_firma': 'TEXT'},
 'entrega_items': {'entrega_id': 'UUID',
                   'equipo_id': 'UUID',
                   'estado_fisico': 'VARCHAR(12)',
                   'id': 'UUID',
                   'modelo': 'VARCHAR(150)',
                   'observacion': 'TEXT',
                   'retiro_id': 'UUID',
                   'serie': 'VARCHAR(100)'},
 'entregas_inventario': {'almacen_destino': 'UUID',
                         'almacen_origen': 'UUID',
                         'creado_en': 'TIMESTAMPTZ',
                         'entrega_id': 'UUID',
                         'estado': 'VARCHAR(12)',
                         'firma_b64': 'TEXT',
                         'firma_entrega_b64': 'TEXT',
                         'firma_entrega_en': 'TIMESTAMPTZ',
                         'firmado_en': 'TIMESTAMPTZ',
                         'id': 'UUID',
                         'motivo_anulacion': 'TEXT',
                         'notas': 'TEXT',
                         'numero': 'INT',
                         'recibe_id': 'UUID'},
 'equipos': {'actualizado_en': 'TIMESTAMPTZ',
             'almacen_id': 'UUID',
             'articulo_id': 'UUID',
             'cliente_id': 'UUID',
             'creado_en': 'TIMESTAMPTZ',
             'estado': 'VARCHAR(12)',
             'id': 'UUID',
             'instalacion_id': 'UUID',
             'mac': 'VARCHAR(20)',
             'notas': 'TEXT',
             'onu_id': 'UUID',
             'serie': 'VARCHAR(60)'},
 'equipos_cliente': {'client_id': 'UUID',
                     'created_at': 'TIMESTAMP WITH TIME ZONE',
                     'created_by': 'UUID',
                     'devuelto_at': 'TIMESTAMP WITH TIME ZONE',
                     'documento_id': 'UUID',
                     'entregado_at': 'TIMESTAMP WITH TIME ZONE',
                     'estado': 'VARCHAR(15)',
                     'id': 'UUID',
                     'mac': 'VARCHAR(20)',
                     'marca': 'VARCHAR(60)',
                     'modelo': 'VARCHAR(80)',
                     'notas': 'TEXT',
                     'propiedad': 'VARCHAR(10)',
                     'serie': 'VARCHAR(100)',
                     'tipo': 'VARCHAR(30)'},
 'existencias': {'almacen_id': 'UUID', 'articulo_id': 'UUID', 'cantidad': 'NUMERIC(12, 2)'},
 'expediente_documentos': {'bytes': 'INT',
                           'estado': 'VARCHAR(10)',
                           'expediente_id': 'UUID',
                           'id': 'UUID',
                           'mime': 'VARCHAR(60)',
                           'notas': 'TEXT',
                           'ruta': 'TEXT',
                           'subido_en': 'TIMESTAMPTZ',
                           'subido_por': 'UUID',
                           'tipo': 'VARCHAR(20)',
                           'validado_en': 'TIMESTAMPTZ',
                           'validado_por': 'UUID'},
 'expedientes': {'actualizado_en': 'TIMESTAMPTZ',
                 'cliente_id': 'UUID',
                 'contrato_id': 'UUID',
                 'creado_en': 'TIMESTAMPTZ',
                 'creado_por': 'UUID',
                 'datos_confirmados_en': 'TIMESTAMPTZ',
                 'enviado_en': 'TIMESTAMPTZ',
                 'estado': 'VARCHAR(12)',
                 'id': 'UUID',
                 'instalacion_id': 'UUID',
                 'latitud': 'NUMERIC(10, 7)',
                 'longitud': 'NUMERIC(10, 7)',
                 'notas': 'TEXT',
                 'precision_m': 'NUMERIC(8, 2)',
                 'prospecto_id': 'UUID',
                 'ubicacion_en': 'TIMESTAMPTZ',
                 'ubicacion_origen': 'VARCHAR(6)',
                 'ubicacion_por': 'UUID'},
 'factura_proveedores': {'activo': 'BOOLEAN',
                         'actualizado_en': 'TIMESTAMPTZ',
                         'datos': 'JSONB',
                         'id': 'UUID',
                         'modo_prueba': 'BOOLEAN',
                         'pais': 'VARCHAR(2)',
                         'proveedor': 'VARCHAR(40)',
                         'secretos_cifrados': 'JSONB'},
 'facturas': {'anulada': 'BOOLEAN',
              'client_id': 'UUID',
              'cliente_nombre': 'VARCHAR(150)',
              'concepto': 'VARCHAR(300)',
              'created_at': 'TIMESTAMP WITH TIME ZONE',
              'created_by': 'UUID',
              'descuento': 'NUMERIC(12,2)',
              'descuento_motivo': 'TEXT',
              'document_id': 'UUID',
              'fecha_emision': 'DATE',
              'fecha_vencimiento': 'DATE',
              'id': 'UUID',
              'impuesto': 'NUMERIC(12,2)',
              'motivo_anulacion': 'TEXT',
              'notas': 'TEXT',
              'numero': 'BIGSERIAL',
              'origen': 'VARCHAR(20)',
              'periodo_desde': 'DATE',
              'periodo_hasta': 'DATE',
              'subtotal': 'NUMERIC(12,2)',
              'tipo': 'VARCHAR(15)',
              'total': 'NUMERIC(12,2)',
              'updated_at': 'TIMESTAMP WITH TIME ZONE'},
 'firewall_bloqueos': {'activo': 'BOOLEAN',
                       'cliente_id': 'UUID',
                       'cliente_ip': 'VARCHAR(45)',
                       'comentario': 'TEXT',
                       'created_at': 'TIMESTAMP WITH TIME ZONE',
                       'id': 'UUID',
                       'lista': 'VARCHAR(50)',
                       'mac_address': 'VARCHAR(17)',
                       'onu_id': 'UUID',
                       'router_id': 'UUID',
                       'routeros_id': 'VARCHAR(30)',
                       'tipo_accion': 'VARCHAR(20)'},
 'firmas_contrato': {'actualizado_en': 'TIMESTAMPTZ',
                     'autorizado_en': 'TIMESTAMPTZ',
                     'autorizado_por': 'UUID',
                     'client_id': 'UUID',
                     'contenido_hash': 'VARCHAR(64)',
                     'contrato_id': 'UUID',
                     'creado_en': 'TIMESTAMPTZ',
                     'creado_por': 'UUID',
                     'documento_firmado_url': 'TEXT',
                     'enlace_firma': 'TEXT',
                     'enviado_en': 'TIMESTAMPTZ',
                     'error_api': 'TEXT',
                     'estado': 'VARCHAR(12)',
                     'fecha_firma': 'TIMESTAMPTZ',
                     'firmante_identificacion': 'VARCHAR(20)',
                     'firmante_nombre': 'VARCHAR(150)',
                     'id': 'UUID',
                     'instalacion_id': 'UUID',
                     'metodo': 'VARCHAR(16)',
                     'motivo_manual': 'TEXT',
                     'proveedor': 'VARCHAR(40)',
                     'referencia_proveedor': 'VARCHAR(160)',
                     'validado_en': 'TIMESTAMPTZ',
                     'validado_por': 'UUID',
                     'vence_en': 'TIMESTAMPTZ'},
 'fotos_routers_mensual': {'activos': 'INT',
                           'cortados': 'INT',
                           'mes': 'DATE',
                           'por_cobrar': 'NUMERIC(14,2)',
                           'router_id': 'UUID',
                           'router_nombre': 'TEXT',
                           'suspendidos': 'INT',
                           'tomada_en': 'TIMESTAMPTZ',
                           'vencido': 'NUMERIC(14,2)'},
 'incidencia_avisos': {'canal': 'VARCHAR(15)',
                       'client_id': 'UUID',
                       'creado_en': 'TIMESTAMPTZ',
                       'enviado_en': 'TIMESTAMPTZ',
                       'estado': 'VARCHAR(10)',
                       'id': 'BIGSERIAL',
                       'incidencia_id': 'UUID',
                       'intentos': 'INT',
                       'momento': 'VARCHAR(12)',
                       'motivo': 'TEXT'},
 'incidencias_masivas': {'abierta_at': 'TIMESTAMPTZ',
                         'afectados': 'INT',
                         'alcance': 'VARCHAR(12)',
                         'avisar_apertura': 'BOOLEAN',
                         'avisar_resolucion': 'BOOLEAN',
                         'clientes_manual': 'UUID[]',
                         'created_at': 'TIMESTAMPTZ',
                         'created_by': 'UUID',
                         'descripcion': 'TEXT',
                         'estado': 'VARCHAR(12)',
                         'estimado_at': 'TIMESTAMPTZ',
                         'fin_previsto': 'TIMESTAMPTZ',
                         'id': 'UUID',
                         'inicio_previsto': 'TIMESTAMPTZ',
                         'nodo_evento_id': 'BIGINT',
                         'nodo_id': 'UUID',
                         'notas': 'TEXT',
                         'ocurrio_at': 'TIMESTAMPTZ',
                         'olt_id': 'UUID',
                         'origen': 'VARCHAR(10)',
                         'programada': 'BOOLEAN',
                         'puerto_pon': 'VARCHAR(20)',
                         'punto_id': 'UUID',
                         'resuelta_at': 'TIMESTAMPTZ',
                         'router_id': 'UUID',
                         'tipo': 'VARCHAR(20)',
                         'titulo': 'VARCHAR(120)',
                         'zona': 'VARCHAR(60)'},
 'ingresos_grupales': {'creado_en': 'TIMESTAMPTZ',
                       'cuadrilla_id': 'UUID',
                       'distancia_m': 'INT',
                       'fecha': 'DATE',
                       'foto': 'TEXT',
                       'id': 'UUID',
                       'jefe_id': 'UUID',
                       'lat': 'NUMERIC(10,7)',
                       'lng': 'NUMERIC(10,7)',
                       'momento': 'TIMESTAMPTZ',
                       'precision_m': 'INT',
                       'presentes': 'UUID[]',
                       'sitio_id': 'UUID',
                       'sitio_tipo': 'VARCHAR(12)'},
 'instalacion_fotos': {'clave_idempotencia': 'UUID',
                       'created_at': 'TIMESTAMP WITH TIME ZONE',
                       'created_by': 'UUID',
                       'descripcion': 'VARCHAR(200)',
                       'id': 'UUID',
                       'instalacion_id': 'UUID',
                       'ruta': 'TEXT',
                       'tipo': 'VARCHAR(20)'},
 'instalaciones': {'acepta_arbitraje': 'BOOLEAN',
                   'acepta_datos_personales': 'BOOLEAN',
                   'alta_at': 'TIMESTAMP WITH TIME ZONE',
                   'aprovisionado_at': 'TIMESTAMP WITH TIME ZONE',
                   'canton': 'VARCHAR(100)',
                   'ccq': 'INT',
                   'ciudad': 'VARCHAR(60)',
                   'clave_ppp': 'VARCHAR(100)',
                   'client_id': 'UUID',
                   'condicion_especial': 'CONDICION_ABONADO',
                   'costo': 'NUMERIC(12,2)',
                   'created_at': 'TIMESTAMP WITH TIME ZONE',
                   'created_by': 'UUID',
                   'cuadrilla_id': 'UUID',
                   'detalle_no_realizada': 'TEXT',
                   'dia_facturacion': 'INT',
                   'direccion': 'VARCHAR(300)',
                   'distancia_nodo_m': 'INT',
                   'email': 'VARCHAR(200)',
                   'equipo': 'VARCHAR(150)',
                   'equipo_mac': 'VARCHAR(17)',
                   'equipo_modalidad': 'VARCHAR(14)',
                   'equipo_modelo': 'VARCHAR(100)',
                   'equipo_origen': 'VARCHAR(10)',
                   'equipo_sn': 'VARCHAR(100)',
                   'equipo_tipo': 'VARCHAR(10)',
                   'estado': 'VARCHAR(20)',
                   'factibilidad': 'VARCHAR(15)',
                   'factibilidad_at': 'TIMESTAMP WITH TIME ZONE',
                   'factibilidad_notas': 'TEXT',
                   'fecha': 'DATE',
                   'firma_b64': 'TEXT',
                   'firmante_identificacion': 'VARCHAR(20)',
                   'firmante_nombre': 'VARCHAR(150)',
                   'franja': 'VARCHAR(10)',
                   'hora': 'TIME',
                   'id': 'UUID',
                   'identificacion': 'VARCHAR(20)',
                   'ip': 'VARCHAR(45)',
                   'ipv6': 'VARCHAR(45)',
                   'latitud': 'NUMERIC(10,7)',
                   'lectura_at': 'TIMESTAMP WITH TIME ZONE',
                   'llegada_at': 'TIMESTAMPTZ',
                   'llegada_lat': 'NUMERIC(10, 7)',
                   'llegada_lng': 'NUMERIC(10, 7)',
                   'llegada_precision_m': 'INT',
                   'longitud': 'NUMERIC(10,7)',
                   'metros_cable': 'INT',
                   'motivo_no_realizada': 'VARCHAR(30)',
                   'nap_id': 'UUID',
                   'nombre': 'VARCHAR(150)',
                   'notas': 'TEXT',
                   'numero': 'INT',
                   'observaciones': 'TEXT',
                   'olt_id': 'UUID',
                   'onu_id': 'UUID',
                   'parroquia': 'VARCHAR(60)',
                   'paso': 'SMALLINT',
                   'permanencia_meses': 'INT',
                   'ping_ms': 'NUMERIC(8,1)',
                   'ping_ok': 'BOOLEAN',
                   'ping_perdida': 'INT',
                   'plan_id': 'UUID',
                   'pool': 'VARCHAR(100)',
                   'precio_mensual': 'NUMERIC(10,2)',
                   'provincia': 'VARCHAR(60)',
                   'pruebas_at': 'TIMESTAMP WITH TIME ZONE',
                   'puerto_nap': 'VARCHAR(20)',
                   'puerto_pon': 'VARCHAR(20)',
                   'red_acceso': 'RED_DE_ACCESO',
                   'referencia': 'TEXT',
                   'reprogramada_para': 'DATE',
                   'router_id': 'UUID',
                   'ruta_fecha': 'DATE',
                   'ruta_orden': 'INT',
                   'rx_power_dbm': 'NUMERIC(6,2)',
                   'sector': 'VARCHAR(100)',
                   'senal_dbm': 'NUMERIC(6,2)',
                   'tarifa_preferencial': 'BOOLEAN',
                   'tecnico': 'VARCHAR(150)',
                   'tecnico_id': 'UUID',
                   'tecnologia': 'VARCHAR(10)',
                   'telefono': 'VARCHAR(30)',
                   'telefono_whatsapp': 'VARCHAR(30)',
                   'test_bajada_mbps': 'NUMERIC(8,2)',
                   'test_subida_mbps': 'NUMERIC(8,2)',
                   'tipo': 'VARCHAR(20)',
                   'tipo_conexion': 'VARCHAR(10)',
                   'tipo_cuenta': 'TIPO_DE_CUENTA',
                   'tipo_identificacion': 'VARCHAR(2)',
                   'tipo_ip': 'VARCHAR(10)',
                   'torre_id': 'UUID',
                   'tx_power_dbm': 'NUMERIC(6,2)',
                   'updated_at': 'TIMESTAMP WITH TIME ZONE',
                   'usuario_ppp': 'VARCHAR(100)',
                   'valor_instalacion': 'NUMERIC(12,2)'},
 'ip_addresses': {'client_id': 'UUID',
                  'created_at': 'TIMESTAMP WITH TIME ZONE',
                  'descripcion': 'VARCHAR(150)',
                  'estado': 'VARCHAR(20)',
                  'id': 'UUID',
                  'interfaz': 'VARCHAR(50)',
                  'ip_address': 'VARCHAR(45)',
                  'mac_address': 'VARCHAR(17)',
                  'netmask': 'VARCHAR(15)',
                  'onu_id': 'UUID',
                  'origen': 'VARCHAR(15)',
                  'router_id': 'UUID',
                  'subred_id': 'UUID',
                  'visto_at': 'TIMESTAMP WITH TIME ZONE'},
 'jornadas': {'creado_en': 'TIMESTAMPTZ',
              'cuadrilla_id': 'UUID',
              'distancia_ingreso_m': 'INT',
              'fecha': 'DATE',
              'fin_at': 'TIMESTAMPTZ',
              'foto_ingreso': 'TEXT',
              'foto_ingreso_at': 'TIMESTAMPTZ',
              'id': 'UUID',
              'ingreso_grupal_id': 'UUID',
              'inicio_at': 'TIMESTAMPTZ',
              'km_fin': 'INT',
              'km_inicio': 'INT',
              'lat_ingreso': 'NUMERIC(10, 7)',
              'lng_ingreso': 'NUMERIC(10, 7)',
              'notas': 'TEXT',
              'precision_ingreso_m': 'INT',
              'primer_trabajo_id': 'UUID',
              'tecnico_id': 'UUID',
              'vehiculo_id': 'UUID'},
 'licencia': {'actualizado_en': 'TIMESTAMPTZ',
              'creado_en': 'TIMESTAMPTZ',
              'id': 'INT',
              'instalacion': 'UUID',
              'token': 'TEXT',
              'ultimo_contacto': 'TIMESTAMPTZ',
              'ultimo_error': 'TEXT'},
 'line_profiles': {'created_at': 'TIMESTAMP WITH TIME ZONE',
                   'gemport_id': 'INT',
                   'id': 'UUID',
                   'nombre': 'VARCHAR(100)',
                   'olt_id': 'UUID',
                   'profile_id_olt': 'INT',
                   'vlan_id': 'INT'},
 'mantenimiento_intervalos': {'cada_km': 'INT',
                              'cada_meses': 'INT',
                              'tipo_id': 'UUID',
                              'vehiculo_id': 'UUID'},
 'mantenimiento_tipos': {'activo': 'BOOLEAN',
                         'cada_km': 'INT',
                         'cada_meses': 'INT',
                         'clave': 'VARCHAR(40)',
                         'creado_en': 'TIMESTAMPTZ',
                         'id': 'UUID',
                         'nombre': 'VARCHAR(80)',
                         'orden': 'INT'},
 'mantenimientos': {'costo': 'NUMERIC(10, 2)',
                    'creado_en': 'TIMESTAMPTZ',
                    'fecha': 'DATE',
                    'id': 'UUID',
                    'nota': 'TEXT',
                    'odometro': 'INT',
                    'taller': 'VARCHAR(100)',
                    'tipo_id': 'UUID',
                    'vehiculo_id': 'UUID'},
 'mensajes_comerciales': {'canal': 'VARCHAR(20)',
                          'clave_idempotencia': 'UUID',
                          'cotizacion_id': 'UUID',
                          'creado_en': 'TIMESTAMPTZ',
                          'cuerpo': 'TEXT',
                          'destino': 'VARCHAR(40)',
                          'enviado_en': 'TIMESTAMPTZ',
                          'estado': 'VARCHAR(20)',
                          'id': 'UUID',
                          'prospecto_id': 'UUID',
                          'proveedor_id': 'TEXT',
                          'vendedor_id': 'UUID',
                          'via': 'VARCHAR(20)'},
 'metas_venta': {'anio': 'SMALLINT',
                 'creado_en': 'TIMESTAMPTZ',
                 'id': 'UUID',
                 'mes': 'SMALLINT',
                 'meta_altas': 'INT',
                 'meta_monto': 'NUMERIC(12, 2)',
                 'vendedor_id': 'UUID'},
 'motivos_baja': {'activo': 'BOOLEAN',
                  'afecta_calidad': 'BOOLEAN',
                  'creado_en': 'TIMESTAMPTZ',
                  'id': 'UUID',
                  'nombre': 'VARCHAR(80)',
                  'orden': 'SMALLINT'},
 'movimientos_inventario': {'almacen_destino_id': 'UUID',
                            'almacen_origen_id': 'UUID',
                            'articulo_id': 'UUID',
                            'cantidad': 'NUMERIC(12, 2)',
                            'clave_idempotencia': 'UUID',
                            'compra_id': 'UUID',
                            'costo_unit': 'NUMERIC(12, 2)',
                            'creado_en': 'TIMESTAMPTZ',
                            'equipo_id': 'UUID',
                            'id': 'UUID',
                            'instalacion_id': 'UUID',
                            'motivo': 'TEXT',
                            'ticket_id': 'UUID',
                            'tipo': 'VARCHAR(14)',
                            'usuario_id': 'UUID',
                            'usuario_nombre': 'VARCHAR(140)'},
 'nodo_eventos': {'causa_padre_id': 'UUID',
                  'desde': 'TIMESTAMP WITH TIME ZONE',
                  'detalle': 'TEXT',
                  'estado': 'VARCHAR(12)',
                  'hasta': 'TIMESTAMP WITH TIME ZONE',
                  'id': 'UUID',
                  'latencia_ms': 'NUMERIC(8,1)',
                  'nodo_id': 'UUID',
                  'notificado': 'BOOLEAN',
                  'notificado_at': 'TIMESTAMP WITH TIME ZONE',
                  'perdida_pct': 'INT'},
 'nodos_red': {'avisar': 'BOOLEAN',
               'created_at': 'TIMESTAMP WITH TIME ZONE',
               'desde': 'TIMESTAMP WITH TIME ZONE',
               'equipo': 'VARCHAR(100)',
               'estado': 'VARCHAR(12)',
               'id': 'UUID',
               'ip': 'VARCHAR(45)',
               'latencia_ms': 'NUMERIC(8,1)',
               'latencia_warning_ms': 'INT',
               'monitorear': 'BOOLEAN',
               'nombre': 'VARCHAR(100)',
               'notas': 'TEXT',
               'numero': 'BIGSERIAL',
               'olt_id': 'UUID',
               'padre_id': 'UUID',
               'perdida_pct': 'INT',
               'perdida_warning_pct': 'INT',
               'punto_id': 'UUID',
               'router_id': 'UUID',
               'tecnico_id': 'UUID',
               'tipo': 'VARCHAR(15)',
               'ultimo_chequeo': 'TIMESTAMP WITH TIME ZONE',
               'updated_at': 'TIMESTAMP WITH TIME ZONE'},
 'notificaciones': {'creado_en': 'TIMESTAMPTZ',
                    'detalle': 'TEXT',
                    'entidad': 'VARCHAR(40)',
                    'entidad_id': 'VARCHAR(60)',
                    'id': 'UUID',
                    'leida_en': 'TIMESTAMPTZ',
                    'ruta': 'TEXT',
                    'tipo': 'VARCHAR(30)',
                    'titulo': 'TEXT',
                    'usuario_id': 'UUID'},
 'olt_backups': {'bytes': 'INT',
                 'comando': 'TEXT',
                 'contenido': 'TEXT',
                 'created_at': 'TIMESTAMPTZ',
                 'id': 'UUID',
                 'nombre': 'VARCHAR(120)',
                 'olt_id': 'UUID',
                 'quien': 'TEXT'},
 'olt_escaneos': {'at': 'TIMESTAMPTZ',
                  'descartadas': 'INT',
                  'encontradas': 'INT',
                  'error': 'TEXT',
                  'ms': 'INT',
                  'olt_id': 'UUID',
                  'puertos': 'INT'},
 'olt_historial': {'accion': 'VARCHAR(20)',
                   'campo': 'VARCHAR(60)',
                   'created_at': 'TIMESTAMPTZ',
                   'id': 'UUID',
                   'olt_id': 'UUID',
                   'quien': 'TEXT',
                   'valor_antes': 'TEXT',
                   'valor_despues': 'TEXT'},
 'olts': {'activo': 'BOOLEAN',
          'created_at': 'TIMESTAMP WITH TIME ZONE',
          'enable_password_encrypted': 'TEXT',
          'estado': 'VARCHAR(12)',
          'estado_at': 'TIMESTAMPTZ',
          'estado_detalle': 'TEXT',
          'estado_latencia_ms': 'INT',
          'hw_version': 'VARCHAR(60)',
          'id': 'UUID',
          'ip_host': 'VARCHAR(45)',
          'iptv': 'BOOLEAN',
          'marca': 'VARCHAR(20)',
          'nombre': 'VARCHAR(100)',
          'notas': 'TEXT',
          'ntp_servers': 'TEXT',
          'numero': 'BIGSERIAL',
          'password_encrypted': 'TEXT',
          'pon_tipos': 'VARCHAR(60)',
          'puerto_ssh': 'INT',
          'snmp_puerto': 'INT',
          'snmp_ro_encrypted': 'TEXT',
          'snmp_rw_encrypted': 'TEXT',
          'snmp_trap': 'BOOLEAN',
          'sw_version': 'VARCHAR(60)',
          'tr069_interfaz': 'VARCHAR(40)',
          'tr069_perfil': 'VARCHAR(80)',
          'updated_at': 'TIMESTAMPTZ',
          'usuario': 'VARCHAR(50)',
          'versiones_at': 'TIMESTAMPTZ',
          'via_vpn': 'BOOLEAN'},
 'onts_esperando': {'created_at': 'TIMESTAMPTZ',
                    'detectada': 'TIMESTAMPTZ',
                    'id': 'BIGINT',
                    'modelo': 'VARCHAR(60)',
                    'olt_id': 'UUID',
                    'puerto': 'INT',
                    'slot': 'INT',
                    'sn': 'VARCHAR(50)',
                    'visto_at': 'TIMESTAMPTZ'},
 'onts_preautorizadas': {'automatica': 'BOOLEAN',
                         'autorizada_at': 'TIMESTAMPTZ',
                         'comentario': 'TEXT',
                         'created_at': 'TIMESTAMPTZ',
                         'estado': 'VARCHAR(20)',
                         'gemport': 'INT',
                         'id': 'UUID',
                         'instalacion_id': 'UUID',
                         'intentos': 'INT',
                         'line_profile_id': 'INT',
                         'nombre': 'VARCHAR(120)',
                         'olt_id': 'UUID',
                         'onu_id': 'UUID',
                         'plan_id': 'UUID',
                         'preset_id': 'UUID',
                         'puerto': 'INT',
                         'slot': 'INT',
                         'sn': 'VARCHAR(50)',
                         'srv_profile_id': 'INT',
                         'ultimo_error': 'TEXT',
                         'updated_at': 'TIMESTAMPTZ',
                         'vence_at': 'TIMESTAMPTZ',
                         'vlan': 'INT'},
 'onu_optica_historial': {'id': 'BIGINT',
                          'medida_at': 'TIMESTAMPTZ',
                          'onu_id': 'UUID',
                          'rx_dbm': 'NUMERIC(5,2)',
                          'temperatura_c': 'INT',
                          'tx_dbm': 'NUMERIC(5,2)'},
 'onus': {'autorizada_at': 'DATE',
          'causa_caida': 'VARCHAR(20)',
          'causa_caida_cruda': 'VARCHAR(100)',
          'clave_wifi': 'VARCHAR(128)',
          'configurada_at': 'TIMESTAMPTZ',
          'configurada_por': 'VARCHAR(15)',
          'contacto': 'VARCHAR(80)',
          'created_at': 'TIMESTAMP WITH TIME ZONE',
          'descripcion_olt': 'TEXT',
          'direccion': 'TEXT',
          'distancia_m': 'INT',
          'estado': 'VARCHAR(20)',
          'ficha_leida_at': 'TIMESTAMPTZ',
          'frame': 'INT',
          'id': 'UUID',
          'line_profile_id': 'UUID',
          'line_profile_olt': 'INT',
          'modelo': 'VARCHAR(60)',
          'nap_id': 'UUID',
          'nap_origen': 'VARCHAR(20)',
          'nombre_cliente': 'VARCHAR(150)',
          'odb': 'VARCHAR(60)',
          'olt_id': 'UUID',
          'olt_rx_power_dbm': 'NUMERIC(6,2)',
          'onu_index': 'INT',
          'optica_registrada_at': 'TIMESTAMPTZ',
          'plan_id': 'UUID',
          'plan_velocidad': 'VARCHAR(50)',
          'puerto': 'INT',
          'rx_power_dbm': 'NUMERIC(5,2)',
          'slot': 'INT',
          'sn': 'VARCHAR(50)',
          'srv_profile_nombre': 'VARCHAR(60)',
          'srv_profile_olt': 'INT',
          'ssid': 'VARCHAR(64)',
          'temperatura_c': 'NUMERIC(5,1)',
          'tipo_ont_id': 'UUID',
          'tx_power_dbm': 'NUMERIC(5,2)',
          'ultima_caida': 'VARCHAR(40)',
          'ultima_lectura': 'TIMESTAMP WITH TIME ZONE',
          'vlan': 'INT',
          'zona': 'VARCHAR(60)'},
 'pagos': {'activo_servicio': 'BOOLEAN',
           'anulado': 'BOOLEAN',
           'anulado_at': 'TIMESTAMP WITH TIME ZONE',
           'client_id': 'UUID',
           'cliente_nombre': 'VARCHAR(150)',
           'comision': 'NUMERIC(12,2)',
           'created_at': 'TIMESTAMP WITH TIME ZONE',
           'created_by': 'UUID',
           'cuenta_id': 'UUID',
           'document_id': 'UUID',
           'es_excedente': 'BOOLEAN',
           'es_reparto': 'BOOLEAN',
           'factura_id': 'UUID',
           'facturar': 'BOOLEAN',
           'fecha_pago': 'DATE',
           'forma_pago': 'VARCHAR(20)',
           'id': 'UUID',
           'monto': 'NUMERIC(12,2)',
           'motivo_anulacion': 'TEXT',
           'n_transaccion': 'VARCHAR(60)',
           'notas': 'TEXT',
           'numero': 'BIGSERIAL',
           'pago_origen_id': 'UUID',
           'updated_at': 'TIMESTAMP WITH TIME ZONE'},
 'pagos_reportados': {'banco_origen': 'VARCHAR(80)',
                      'client_id': 'UUID',
                      'cliente_nombre': 'VARCHAR(150)',
                      'comprobante_url': 'TEXT',
                      'created_at': 'TIMESTAMPTZ',
                      'cuenta_id': 'UUID',
                      'depositante': 'VARCHAR(150)',
                      'estado': 'VARCHAR(12)',
                      'factura_id': 'UUID',
                      'fecha_pago': 'DATE',
                      'forma_pago': 'VARCHAR(20)',
                      'hash_qr': 'VARCHAR(128)',
                      'id': 'UUID',
                      'identificacion': 'VARCHAR(20)',
                      'llave_id': 'UUID',
                      'llave_nombre': 'VARCHAR(80)',
                      'metodo_verificacion': 'VARCHAR(20)',
                      'monto': 'NUMERIC(12,2)',
                      'motivo_rechazo': 'TEXT',
                      'n_transaccion': 'VARCHAR(60)',
                      'notas': 'TEXT',
                      'origen': 'VARCHAR(30)',
                      'pago_id': 'UUID',
                      'referencia_externa': 'VARCHAR(120)',
                      'uuid_transaccion': 'VARCHAR(80)',
                      'verificado_at': 'TIMESTAMPTZ',
                      'verificado_por': 'UUID'},
 'parametros_tecnicos': {'actualizado_en': 'TIMESTAMPTZ',
                         'actualizado_por': 'UUID',
                         'dias_reincidencia': 'SMALLINT',
                         'id': 'SMALLINT',
                         'optica_limite': 'NUMERIC(5,2)',
                         'optica_optimo': 'NUMERIC(5,2)',
                         'optica_saturado': 'NUMERIC(5,2)',
                         'perdida_maxima_pct': 'SMALLINT',
                         'ping_bueno_ms': 'SMALLINT',
                         'ping_limite_ms': 'SMALLINT',
                         'radio_ccq_minimo': 'SMALLINT',
                         'radio_limite': 'NUMERIC(5,2)',
                         'radio_optimo': 'NUMERIC(5,2)',
                         'tolerancia_puntualidad_min': 'SMALLINT',
                         'velocidad_minima_pct': 'SMALLINT'},
 'plan_routers': {'aprovisionado_at': 'TIMESTAMP WITH TIME ZONE',
                  'created_at': 'TIMESTAMP WITH TIME ZONE',
                  'error': 'TEXT',
                  'estado': 'VARCHAR(12)',
                  'perfil_aplicado': 'VARCHAR(100)',
                  'plan_id': 'UUID',
                  'rate_limit': 'VARCHAR(100)',
                  'router_id': 'UUID'},
 'planes_velocidad': {'activo': 'BOOLEAN',
                      'bajada_kbps': 'INT',
                      'burst_bajada_kbps': 'INT',
                      'burst_limit': 'VARCHAR(50)',
                      'burst_segundos_bajada': 'INT',
                      'burst_segundos_subida': 'INT',
                      'burst_subida_kbps': 'INT',
                      'categoria': 'VARCHAR(15)',
                      'codigo_facturacion': 'VARCHAR(25)',
                      'comparticion': 'VARCHAR(8)',
                      'control_pppoe': 'VARCHAR(10)',
                      'created_at': 'TIMESTAMP WITH TIME ZONE',
                      'descripcion': 'TEXT',
                      'garantizado_bajada_kbps': 'INT',
                      'garantizado_subida_kbps': 'INT',
                      'id': 'UUID',
                      'iva_porcentaje': 'NUMERIC(5,2)',
                      'minima_bajada_kbps': 'INT',
                      'minima_subida_kbps': 'INT',
                      'nombre': 'VARCHAR(100)',
                      'perfil_ppp': 'VARCHAR(100)',
                      'precio': 'NUMERIC(10,2)',
                      'prioridad': 'SMALLINT',
                      'subida_kbps': 'INT',
                      'tablas_verificadas_at': 'TIMESTAMPTZ',
                      'tablas_verificadas_en': 'UUID',
                      'tipo_impuesto': 'VARCHAR(10)',
                      'traffic_table_bajada': 'INT',
                      'traffic_table_index': 'INT',
                      'traffic_table_subida': 'INT',
                      'umbral_bajada_kbps': 'INT',
                      'umbral_subida_kbps': 'INT'},
 'planes_velocidad_historico': {'bajada_kbps': 'INT',
                                'cambiado_en': 'TIMESTAMPTZ',
                                'id': 'UUID',
                                'motivo': 'TEXT',
                                'nombre': 'VARCHAR(100)',
                                'plan_id': 'UUID',
                                'subida_kbps': 'INT'},
 'plantillas_mensaje': {'activa': 'BOOLEAN',
                        'actualizado_en': 'TIMESTAMPTZ',
                        'actualizado_por': 'UUID',
                        'asunto': 'VARCHAR(200)',
                        'canal': 'VARCHAR(15)',
                        'categoria': 'VARCHAR(12)',
                        'clave': 'VARCHAR(60)',
                        'created_at': 'TIMESTAMP WITH TIME ZONE',
                        'cuerpo': 'TEXT',
                        'del_sistema': 'BOOLEAN',
                        'descripcion': 'TEXT',
                        'formato': 'VARCHAR(6)',
                        'id': 'UUID',
                        'nombre': 'VARCHAR(100)',
                        'variables': 'TEXT[]'},
 'plantillas_whatsapp': {'actualizado_en': 'TIMESTAMPTZ',
                         'categoria': 'VARCHAR(15)',
                         'cuerpo_meta': 'TEXT',
                         'ejemplos': 'TEXT[]',
                         'estado': 'VARCHAR(12)',
                         'id': 'UUID',
                         'idioma': 'VARCHAR(10)',
                         'meta_id': 'VARCHAR(40)',
                         'motivo_rechazo': 'TEXT',
                         'nombre_meta': 'VARCHAR(64)',
                         'notas': 'TEXT',
                         'plantilla_id': 'UUID',
                         'purpose_crm': 'VARCHAR(60)',
                         'sid_twilio': 'VARCHAR(40)',
                         'variables': 'TEXT[]'},
 'portal_codigos': {'canal': 'VARCHAR(15)',
                    'cliente_id': 'UUID',
                    'codigo_hash': 'VARCHAR(64)',
                    'creado_en': 'TIMESTAMPTZ',
                    'enviado_a': 'VARCHAR(120)',
                    'expira_en': 'TIMESTAMPTZ',
                    'id': 'UUID',
                    'intentos': 'SMALLINT',
                    'usado_en': 'TIMESTAMPTZ'},
 'portal_sesiones': {'agente': 'VARCHAR(200)',
                     'cliente_id': 'UUID',
                     'creada_en': 'TIMESTAMPTZ',
                     'expira_en': 'TIMESTAMPTZ',
                     'id': 'UUID',
                     'token_hash': 'VARCHAR(64)',
                     'ultimo_uso': 'TIMESTAMPTZ'},
 'portal_solicitudes': {'aplicada_en': 'TIMESTAMPTZ',
                        'cliente_id': 'UUID',
                        'creada_en': 'TIMESTAMPTZ',
                        'estado': 'VARCHAR(15)',
                        'id': 'UUID',
                        'intentos': 'SMALLINT',
                        'tipo': 'VARCHAR(20)',
                        'ultimo_error': 'TEXT',
                        'valor_encrypted': 'TEXT'},
 'prestadores': {'activo': 'BOOLEAN',
                 'actualizado_en': 'TIMESTAMPTZ',
                 'arbitraje_por_defecto': 'BOOLEAN',
                 'beneficio_anexo': 'TEXT',
                 'beneficios_permanencia': 'TEXT',
                 'canton': 'VARCHAR(60)',
                 'ciudad': 'VARCHAR(60)',
                 'costo_no_permanencia': 'TEXT',
                 'creado_en': 'TIMESTAMPTZ',
                 'direccion': 'TEXT',
                 'email': 'VARCHAR(120)',
                 'id': 'UUID',
                 'modelo_inscrito_el': 'DATE',
                 'nombre_comercial': 'VARCHAR(120)',
                 'parroquia': 'VARCHAR(60)',
                 'permanencia_meses': 'INT',
                 'plazo_instalacion': 'VARCHAR(40)',
                 'predeterminado': 'BOOLEAN',
                 'provincia': 'VARCHAR(60)',
                 'razon_social': 'VARCHAR(160)',
                 'reclamos_email': 'VARCHAR(120)',
                 'reclamos_horario': 'VARCHAR(80)',
                 'reclamos_oficinas': 'TEXT',
                 'reclamos_telefono': 'VARCHAR(30)',
                 'ruc': 'VARCHAR(13)',
                 'telefono': 'VARCHAR(30)',
                 'valor_instalacion': 'NUMERIC(12,2)',
                 'vigencia_meses': 'INT',
                 'web': 'VARCHAR(160)'},
 'promesas_pago': {'activo_servicio': 'BOOLEAN',
                   'client_id': 'UUID',
                   'created_at': 'TIMESTAMP WITH TIME ZONE',
                   'created_by': 'UUID',
                   'document_id': 'UUID',
                   'estado': 'VARCHAR(15)',
                   'factura_id': 'UUID',
                   'fecha_promesa': 'DATE',
                   'id': 'UUID',
                   'monto': 'NUMERIC(12,2)',
                   'nota': 'TEXT',
                   'pago_id': 'UUID',
                   'updated_at': 'TIMESTAMP WITH TIME ZONE'},
 'promocion_planes': {'plan_id': 'UUID', 'promocion_id': 'UUID'},
 'promociones': {'activa': 'BOOLEAN',
                 'color': 'VARCHAR(7)',
                 'creado_en': 'TIMESTAMPTZ',
                 'creado_por': 'UUID',
                 'descripcion': 'TEXT',
                 'id': 'UUID',
                 'meses_aplica': 'SMALLINT',
                 'nombre': 'VARCHAR(120)',
                 'tipo': 'VARCHAR(20)',
                 'valor': 'NUMERIC(10, 2)',
                 'vigente_desde': 'DATE',
                 'vigente_hasta': 'DATE'},
 'prospecto_actividades': {'completado_en': 'TIMESTAMPTZ',
                           'creado_en': 'TIMESTAMPTZ',
                           'detalle': 'TEXT',
                           'estado': 'VARCHAR(12)',
                           'id': 'UUID',
                           'programado_para': 'TIMESTAMPTZ',
                           'prospecto_id': 'UUID',
                           'proxima_accion': 'TEXT',
                           'resultado': 'VARCHAR(20)',
                           'tipo': 'VARCHAR(15)',
                           'usuario_id': 'UUID',
                           'usuario_nombre': 'VARCHAR(140)'},
 'prospectos': {'actualizado_en': 'TIMESTAMPTZ',
                'archivado_en': 'TIMESTAMPTZ',
                'canton': 'VARCHAR(100)',
                'cliente_id': 'UUID',
                'cobertura': 'VARCHAR(15)',
                'creado_en': 'TIMESTAMPTZ',
                'creado_por': 'UUID',
                'direccion': 'TEXT',
                'distancia_nodo_m': 'INT',
                'email': 'VARCHAR(200)',
                'estado': 'VARCHAR(15)',
                'ganado_en': 'TIMESTAMPTZ',
                'id': 'UUID',
                'identificacion': 'VARCHAR(20)',
                'instalacion_id': 'UUID',
                'latitud': 'NUMERIC(10, 7)',
                'longitud': 'NUMERIC(10, 7)',
                'motivo_perdida': 'TEXT',
                'nap_id': 'UUID',
                'nombre': 'VARCHAR(150)',
                'notas': 'TEXT',
                'origen': 'VARCHAR(20)',
                'plan_id': 'UUID',
                'promocion_id': 'UUID',
                'proxima_accion': 'DATE',
                'referencia': 'TEXT',
                'sector': 'VARCHAR(100)',
                'telefono': 'VARCHAR(30)',
                'telefono_whatsapp': 'VARCHAR(30)',
                'tipo_operacion': 'VARCHAR(14)',
                'vendedor_id': 'UUID'},
 'proveedores': {'activo': 'BOOLEAN',
                 'contacto': 'VARCHAR(120)',
                 'creado_en': 'TIMESTAMPTZ',
                 'direccion': 'TEXT',
                 'email': 'VARCHAR(120)',
                 'id': 'UUID',
                 'identificacion': 'VARCHAR(20)',
                 'nombre': 'VARCHAR(140)',
                 'notas': 'TEXT',
                 'telefono': 'VARCHAR(30)'},
 'puertos_pon': {'created_at': 'TIMESTAMPTZ',
                 'descripcion': 'TEXT',
                 'id': 'UUID',
                 'leido_at': 'TIMESTAMPTZ',
                 'olt_id': 'UUID',
                 'onts_equipo': 'INT',
                 'placa': 'TEXT',
                 'puerto': 'INT',
                 'slot': 'INT',
                 'updated_at': 'TIMESTAMPTZ',
                 'vlan': 'INT',
                 'vlans_equipo': 'JSONB'},
 'puntos_red': {'activo': 'BOOLEAN',
                'capacidad': 'INT',
                'created_at': 'TIMESTAMP WITH TIME ZONE',
                'direccion': 'VARCHAR(300)',
                'id': 'UUID',
                'latitud': 'NUMERIC(10,7)',
                'longitud': 'NUMERIC(10,7)',
                'nombre': 'VARCHAR(100)',
                'notas': 'TEXT',
                'olt_id': 'UUID',
                'origen': 'VARCHAR(20)',
                'puerto_pon': 'VARCHAR(20)',
                'slot': 'INT',
                'tipo': 'VARCHAR(20)'},
 'reactivaciones': {'cliente_id': 'UUID',
                    'creado_en': 'TIMESTAMPTZ',
                    'id': 'UUID',
                    'meses_inactivo': 'SMALLINT',
                    'notas': 'TEXT',
                    'origen': 'VARCHAR(10)',
                    'pago_anterior': 'DATE',
                    'pago_id': 'UUID',
                    'reactivado_el': 'DATE',
                    'retiro_id': 'UUID',
                    'vendedor_id': 'UUID'},
 'reconexiones_pendientes': {'cliente_id': 'UUID',
                             'creado_en': 'TIMESTAMPTZ',
                             'error': 'TEXT',
                             'id': 'BIGSERIAL',
                             'intentos': 'INT',
                             'motivo': 'VARCHAR(30)',
                             'procesado_en': 'TIMESTAMPTZ'},
 'reemplazos_equipo': {'cliente_id': 'UUID',
                       'creado_en': 'TIMESTAMPTZ',
                       'creado_por': 'UUID',
                       'destino_anterior': 'VARCHAR(12)',
                       'detalle': 'TEXT',
                       'equipo_anterior_id': 'UUID',
                       'equipo_nuevo_id': 'UUID',
                       'id': 'UUID',
                       'instalacion_id': 'UUID',
                       'motivo': 'VARCHAR(24)',
                       'olt_at': 'TIMESTAMPTZ',
                       'onu_anterior_id': 'UUID',
                       'pendiente_olt': 'BOOLEAN',
                       'serie_anterior': 'VARCHAR(60)',
                       'serie_nueva': 'VARCHAR(60)',
                       'tecnico_id': 'UUID',
                       'ticket_id': 'UUID'},
 'reparacion_reportes': {'creado_at': 'TIMESTAMPTZ',
                         'id': 'BIGSERIAL',
                         'lat': 'NUMERIC(10,7)',
                         'lng': 'NUMERIC(10,7)',
                         'reparacion_id': 'UUID',
                         'tecnico_id': 'UUID',
                         'texto': 'TEXT',
                         'tipo': 'VARCHAR(12)',
                         'usuario_id': 'UUID'},
 'reparaciones_red': {'afectados': 'INT',
                      'alerta_id': 'UUID',
                      'asignada_por': 'UUID',
                      'cerrada_at': 'TIMESTAMPTZ',
                      'cerrada_por': 'UUID',
                      'cierre_nota': 'TEXT',
                      'creada_at': 'TIMESTAMPTZ',
                      'cuadrilla_id': 'UUID',
                      'estado': 'VARCHAR(12)',
                      'id': 'UUID',
                      'incidencia_id': 'UUID',
                      'iniciada_at': 'TIMESTAMPTZ',
                      'instrucciones': 'TEXT',
                      'lugar': 'VARCHAR(150)',
                      'numero': 'BIGSERIAL',
                      'prioridad': 'VARCHAR(10)',
                      'tecnico_id': 'UUID',
                      'tipo': 'VARCHAR(20)',
                      'titulo': 'VARCHAR(150)'},
 'retencion_items': {'base_imponible': 'NUMERIC(14,2)',
                     'cod_doc_sustento': 'VARCHAR(2)',
                     'codigo': 'VARCHAR(1)',
                     'codigo_retencion': 'VARCHAR(5)',
                     'created_at': 'TIMESTAMP WITH TIME ZONE',
                     'document_id': 'UUID',
                     'fecha_emision_doc_sustento': 'DATE',
                     'id': 'UUID',
                     'num_doc_sustento': 'VARCHAR(17)',
                     'porcentaje_retener': 'NUMERIC(5,2)',
                     'valor_retenido': 'NUMERIC(14,2)'},
 'retiro_categorias': {'activa': 'BOOLEAN',
                       'cierra_ficha': 'BOOLEAN',
                       'clave': 'VARCHAR(24)',
                       'descripcion': 'TEXT',
                       'es_perdida': 'BOOLEAN',
                       'nombre': 'VARCHAR(80)',
                       'orden': 'SMALLINT',
                       'reclamable': 'BOOLEAN'},
 'retiro_intentos': {'creado_en': 'TIMESTAMPTZ',
                     'foto_url': 'TEXT',
                     'id': 'UUID',
                     'observacion': 'TEXT',
                     'resultado': 'VARCHAR(16)',
                     'retiro_id': 'UUID',
                     'tecnico_id': 'UUID',
                     'usuario_id': 'UUID'},
 'retiros_equipo': {'agenda_nota': 'TEXT',
                    'agendado_para': 'TIMESTAMPTZ',
                    'asignado_en': 'TIMESTAMPTZ',
                    'categoria_cierre': 'VARCHAR(24)',
                    'cerrado_en': 'TIMESTAMPTZ',
                    'cerrado_por': 'UUID',
                    'cliente_id': 'UUID',
                    'creado_en': 'TIMESTAMPTZ',
                    'creado_por': 'UUID',
                    'deuda_aplicada': 'BOOLEAN',
                    'equipo_id': 'UUID',
                    'estado': 'VARCHAR(14)',
                    'evidencia_url': 'TEXT',
                    'fecha_instalacion': 'DATE',
                    'firma_b64': 'TEXT',
                    'firmado_en': 'TIMESTAMPTZ',
                    'firmante': 'VARCHAR(150)',
                    'id': 'UUID',
                    'intentos': 'SMALLINT',
                    'meses_sin_pago': 'SMALLINT',
                    'modelo': 'VARCHAR(140)',
                    'motivo': 'VARCHAR(24)',
                    'observaciones': 'TEXT',
                    'onu_id': 'UUID',
                    'recordado_en': 'TIMESTAMPTZ',
                    'responsable_id': 'UUID',
                    'serie': 'VARCHAR(60)',
                    'suspendido_en': 'DATE',
                    'tecnico_id': 'UUID',
                    'ultimo_pago': 'DATE',
                    'valor': 'NUMERIC(12,2)',
                    'vendedor_id': 'UUID'},
 'routers_mikrotik': {'activo': 'BOOLEAN',
                      'conexion_chequeo': 'TIMESTAMP WITH TIME ZONE',
                      'conexion_desde': 'TIMESTAMP WITH TIME ZONE',
                      'conexion_detalle': 'TEXT',
                      'conexion_estado': 'VARCHAR(12)',
                      'conexion_falla_en': 'TIMESTAMP WITH TIME ZONE',
                      'conexion_fallas': 'INT',
                      'created_at': 'TIMESTAMP WITH TIME ZONE',
                      'id': 'UUID',
                      'ip_host': 'VARCHAR(45)',
                      'ipv6_activo': 'BOOLEAN',
                      'ipv6_lista_morosos': 'VARCHAR(60)',
                      'ipv6_preparado_at': 'TIMESTAMPTZ',
                      'lista_aviso': 'VARCHAR(50)',
                      'lista_morosos': 'VARCHAR(50)',
                      'modo_api': 'VARCHAR(10)',
                      'nombre': 'VARCHAR(100)',
                      'password_encrypted': 'TEXT',
                      'puerto_api': 'INT',
                      'usa_https': 'BOOLEAN',
                      'usuario': 'VARCHAR(50)'},
 'ruta_cambios': {'creado_at': 'TIMESTAMPTZ',
                  'fecha': 'DATE',
                  'id': 'BIGSERIAL',
                  'items': 'JSONB',
                  'motivo': 'TEXT',
                  'usuario_id': 'UUID'},
 'salidas_emergencia': {'cierre_nota': 'TEXT',
                        'creado_en': 'TIMESTAMPTZ',
                        'fin_at': 'TIMESTAMPTZ',
                        'foto_ingreso': 'TEXT',
                        'id': 'UUID',
                        'inicio_at': 'TIMESTAMPTZ',
                        'km_fin': 'INT',
                        'km_inicio': 'INT',
                        'lat_ingreso': 'NUMERIC(10,7)',
                        'lng_ingreso': 'NUMERIC(10,7)',
                        'motivo': 'TEXT',
                        'reparacion_id': 'UUID',
                        'tecnico_id': 'UUID',
                        'vehiculo_id': 'UUID'},
 'sesiones_conexion': {'bajada_bytes': 'BIGINT',
                       'client_id': 'UUID',
                       'created_at': 'TIMESTAMP WITH TIME ZONE',
                       'fin': 'TIMESTAMP WITH TIME ZONE',
                       'fuente': 'VARCHAR(15)',
                       'id': 'UUID',
                       'inicio': 'TIMESTAMP WITH TIME ZONE',
                       'ip': 'VARCHAR(45)',
                       'mac': 'VARCHAR(20)',
                       'motivo_desconexion': 'VARCHAR(60)',
                       'nas': 'VARCHAR(100)',
                       'subida_bytes': 'BIGINT',
                       'usuario': 'VARCHAR(100)'},
 'solicitudes_validacion': {'actualizado_en': 'TIMESTAMPTZ',
                            'creado_en': 'TIMESTAMPTZ',
                            'estado': 'VARCHAR(16)',
                            'id': 'UUID',
                            'motivo_interno': 'TEXT',
                            'motivo_publico': 'TEXT',
                            'prospecto_id': 'UUID',
                            'validado_en': 'TIMESTAMPTZ',
                            'validado_por': 'UUID'},
 'sri_config': {'agente_retencion': 'VARCHAR(10)',
                'ambiente': 'VARCHAR(1)',
                'certificado_b64': 'TEXT',
                'certificado_pass_encrypted': 'TEXT',
                'certificado_vence': 'DATE',
                'contribuyente_especial': 'VARCHAR(13)',
                'created_at': 'TIMESTAMP WITH TIME ZONE',
                'dia_maximo_pago': 'INT',
                'dir_establecimiento': 'VARCHAR(300)',
                'dir_matriz': 'VARCHAR(300)',
                'email': 'VARCHAR(200)',
                'email_from': 'VARCHAR(200)',
                'email_from_name': 'VARCHAR(200)',
                'establecimiento': 'VARCHAR(3)',
                'id': 'UUID',
                'logo_b64': 'TEXT',
                'meses_desplazado': 'INT',
                'nombre_comercial': 'VARCHAR(300)',
                'obligado_contabilidad': 'BOOLEAN',
                'plantilla_info_adicional': 'TEXT',
                'punto_emision': 'VARCHAR(3)',
                'razon_social': 'VARCHAR(300)',
                'regimen_microempresas': 'BOOLEAN',
                'ruc': 'VARCHAR(13)',
                'smtp_host': 'VARCHAR(200)',
                'smtp_pass_encrypted': 'TEXT',
                'smtp_port': 'INT',
                'smtp_secure': 'BOOLEAN',
                'smtp_user': 'VARCHAR(200)',
                'telefono': 'VARCHAR(30)',
                'tipo_emision': 'VARCHAR(1)',
                'updated_at': 'TIMESTAMP WITH TIME ZONE'},
 'sri_secuenciales_libres': {'created_at': 'TIMESTAMP WITH TIME ZONE',
                             'document_id': 'UUID',
                             'establecimiento': 'VARCHAR(3)',
                             'id': 'UUID',
                             'motivo': 'TEXT',
                             'numero': 'BIGINT',
                             'punto_emision': 'VARCHAR(3)',
                             'tipo_doc': 'VARCHAR(2)'},
 'sri_sequences': {'created_at': 'TIMESTAMP WITH TIME ZONE',
                   'establecimiento': 'VARCHAR(3)',
                   'id': 'UUID',
                   'punto_emision': 'VARCHAR(3)',
                   'tipo_doc': 'VARCHAR(2)',
                   'ultimo_numero': 'BIGINT'},
 'stock_minimos': {'almacen_id': 'UUID',
                   'articulo_id': 'UUID',
                   'creado_en': 'TIMESTAMPTZ',
                   'minimo': 'NUMERIC(12, 2)',
                   'reponer': 'NUMERIC(12, 2)'},
 'subredes': {'activo': 'BOOLEAN',
              'cidr': 'INET',
              'created_at': 'TIMESTAMP WITH TIME ZONE',
              'dns1': 'INET',
              'dns2': 'INET',
              'gateway': 'INET',
              'id': 'UUID',
              'nombre': 'VARCHAR(100)',
              'notas': 'TEXT',
              'numero': 'BIGSERIAL',
              'olt_id': 'UUID',
              'pool_router': 'VARCHAR(100)',
              'proposito': 'VARCHAR(20)',
              'punto_id': 'UUID',
              'rango_desde': 'INET',
              'rango_hasta': 'INET',
              'router_id': 'UUID',
              'tipo': 'VARCHAR(15)',
              'updated_at': 'TIMESTAMP WITH TIME ZONE',
              'vlan': 'INT'},
 'tecnicos': {'activo': 'BOOLEAN',
              'created_at': 'TIMESTAMP WITH TIME ZONE',
              'email': 'VARCHAR(150)',
              'especialidad': 'VARCHAR(20)',
              'id': 'UUID',
              'identificacion': 'VARCHAR(20)',
              'nombre': 'VARCHAR(150)',
              'notas': 'TEXT',
              'telefono': 'VARCHAR(30)',
              'user_id': 'UUID'},
 'ticket_adjuntos': {'clave_idempotencia': 'UUID',
                     'created_at': 'TIMESTAMP WITH TIME ZONE',
                     'created_by': 'UUID',
                     'descripcion': 'VARCHAR(200)',
                     'id': 'UUID',
                     'ruta': 'TEXT',
                     'ticket_id': 'UUID',
                     'tipo': 'VARCHAR(20)'},
 'ticket_eventos': {'clave_idempotencia': 'UUID',
                    'created_at': 'TIMESTAMP WITH TIME ZONE',
                    'created_by': 'UUID',
                    'estado_anterior': 'VARCHAR(15)',
                    'estado_nuevo': 'VARCHAR(15)',
                    'id': 'UUID',
                    'nota': 'TEXT',
                    'ticket_id': 'UUID'},
 'tickets': {'antena_modelo': 'VARCHAR(100)',
             'canton': 'VARCHAR(100)',
             'cerrado_at': 'TIMESTAMP WITH TIME ZONE',
             'cerrado_por': 'UUID',
             'checklist': 'JSONB',
             'client_id': 'UUID',
             'cpe_ip': 'VARCHAR(45)',
             'created_at': 'TIMESTAMP WITH TIME ZONE',
             'created_by': 'UUID',
             'cuadrilla_id': 'UUID',
             'descripcion': 'TEXT',
             'direccion': 'VARCHAR(300)',
             'email': 'VARCHAR(150)',
             'estado': 'VARCHAR(15)',
             'fecha_visita': 'DATE',
             'firma_b64': 'TEXT',
             'firmante_cedula': 'VARCHAR(20)',
             'firmante_nombre': 'VARCHAR(150)',
             'franja': 'VARCHAR(10)',
             'frecuencia': 'VARCHAR(30)',
             'hora_visita': 'TIME',
             'id': 'UUID',
             'identificacion': 'VARCHAR(20)',
             'latitud': 'NUMERIC(10,7)',
             'llegada_at': 'TIMESTAMP WITH TIME ZONE',
             'llegada_lat': 'NUMERIC(10,7)',
             'llegada_lng': 'NUMERIC(10,7)',
             'llegada_precision_m': 'NUMERIC(8,1)',
             'longitud': 'NUMERIC(10,7)',
             'material_usado': 'TEXT',
             'motivo_cancelacion': 'TEXT',
             'nap_id': 'UUID',
             'nombre': 'VARCHAR(150)',
             'numero': 'BIGSERIAL',
             'ont_modelo': 'VARCHAR(100)',
             'ont_serie': 'VARCHAR(100)',
             'potencia_dbm': 'NUMERIC(6,2)',
             'prioridad': 'VARCHAR(10)',
             'puerto_nap': 'VARCHAR(20)',
             'referencia': 'TEXT',
             'reprogramar_desde': 'TIMESTAMPTZ',
             'ruta_fecha': 'DATE',
             'ruta_orden': 'INT',
             'salida_at': 'TIMESTAMP WITH TIME ZONE',
             'sector': 'VARCHAR(100)',
             'senal_dbm': 'NUMERIC(6,2)',
             'solucion': 'TEXT',
             'tecnico_id': 'UUID',
             'tecnologia': 'VARCHAR(10)',
             'telefono': 'VARCHAR(30)',
             'telefono_whatsapp': 'VARCHAR(30)',
             'tipo_incidencia': 'VARCHAR(40)',
             'torre_id': 'UUID',
             'updated_at': 'TIMESTAMP WITH TIME ZONE'},
 'tipos_ont': {'canales': 'TEXT[]',
               'capacidad': 'VARCHAR(20)',
               'catv': 'INT',
               'created_at': 'TIMESTAMP WITH TIME ZONE',
               'id': 'UUID',
               'imagen_url': 'TEXT',
               'marca': 'VARCHAR(50)',
               'modelo': 'VARCHAR(50)',
               'notas': 'TEXT',
               'parametros': 'JSONB',
               'perfil_default_id': 'UUID',
               'perfiles_propios': 'BOOLEAN',
               'pon_tipo': 'VARCHAR(10)',
               'prefijo_eth': 'VARCHAR(30)',
               'prefijo_voip': 'VARCHAR(30)',
               'prefijo_wifi': 'VARCHAR(30)',
               'puertos_ethernet': 'INT',
               'puertos_fxs': 'INT',
               'soporta_tr069': 'BOOLEAN',
               'updated_at': 'TIMESTAMPTZ',
               'vendor_id': 'VARCHAR(20)',
               'version_spec': 'VARCHAR(30)',
               'wifi': 'BOOLEAN',
               'wifi_ssids': 'INT'},
 'traslados': {'baja_at': 'TIMESTAMPTZ',
               'baja_detalle': 'TEXT',
               'cerrado_en': 'TIMESTAMPTZ',
               'cliente_id': 'UUID',
               'creado_en': 'TIMESTAMPTZ',
               'creado_por': 'UUID',
               'direccion_anterior': 'VARCHAR(300)',
               'direccion_nueva': 'VARCHAR(300)',
               'estado': 'VARCHAR(12)',
               'id': 'UUID',
               'instalacion_id': 'UUID',
               'ip_anterior': 'VARCHAR(45)',
               'latitud_anterior': 'NUMERIC(10,7)',
               'latitud_nueva': 'NUMERIC(10,7)',
               'longitud_anterior': 'NUMERIC(10,7)',
               'longitud_nueva': 'NUMERIC(10,7)',
               'motivo': 'TEXT',
               'nap_anterior_id': 'UUID',
               'olt_anterior_id': 'UUID',
               'onu_anterior_id': 'UUID',
               'onu_index_anterior': 'INT',
               'pendiente_baja': 'BOOLEAN',
               'puerto_anterior': 'INT',
               'puerto_nap_anterior': 'VARCHAR(20)',
               'router_anterior_id': 'UUID',
               'slot_anterior': 'INT',
               'sn_anterior': 'VARCHAR(60)',
               'tecnico_id': 'UUID',
               'vlan_anterior': 'INT'},
 'usuario_dispositivos': {'accesos': 'INT',
                          'id': 'UUID',
                          'ip': 'VARCHAR(45)',
                          'primera_vez': 'TIMESTAMPTZ',
                          'ultima_vez': 'TIMESTAMPTZ',
                          'user_agent': 'TEXT',
                          'usuario_id': 'UUID'},
 'usuarios_sistema': {'activo': 'BOOLEAN',
                      'actualizado_en': 'TIMESTAMPTZ',
                      'apellido': 'VARCHAR(60)',
                      'auth_id': 'UUID',
                      'celular': 'VARCHAR(30)',
                      'creado_en': 'TIMESTAMPTZ',
                      'creado_por': 'UUID',
                      'dos_factores': 'BOOLEAN',
                      'email': 'VARCHAR(120)',
                      'id': 'UUID',
                      'nombre': 'VARCHAR(60)',
                      'permisos': 'JSONB',
                      'rol': 'VARCHAR(20)',
                      'tecnico_id': 'UUID',
                      'todas_las_zonas': 'BOOLEAN',
                      'ultimo_acceso': 'TIMESTAMPTZ',
                      'usuario': 'VARCHAR(40)'},
 'vehiculos': {'activo': 'BOOLEAN',
               'creado_en': 'TIMESTAMPTZ',
               'id': 'UUID',
               'nombre': 'VARCHAR(60)',
               'notas': 'TEXT',
               'placa': 'VARCHAR(20)',
               'tecnico_id': 'UUID'},
 'ventanas_whatsapp': {'client_id': 'UUID',
                       'created_at': 'TIMESTAMPTZ',
                       'mensajes': 'INT',
                       'telefono': 'VARCHAR(20)',
                       'ultimo_entrante': 'TIMESTAMPTZ',
                       'ultimo_texto': 'VARCHAR(300)'},
 'verificaciones_cobertura': {'capacidad': 'INT',
                              'creado_en': 'TIMESTAMPTZ',
                              'direccion': 'TEXT',
                              'disponibles': 'INT',
                              'distancia_m': 'INT',
                              'id': 'UUID',
                              'latitud': 'NUMERIC(10, 7)',
                              'longitud': 'NUMERIC(10, 7)',
                              'nap_id': 'UUID',
                              'notas': 'TEXT',
                              'olt_id': 'UUID',
                              'prospecto_id': 'UUID',
                              'puerto_nap': 'VARCHAR(20)',
                              'puerto_pon': 'VARCHAR(20)',
                              'referencia': 'TEXT',
                              'resultado': 'VARCHAR(22)',
                              'sector': 'VARCHAR(100)',
                              'tecnologia': 'VARCHAR(10)',
                              'verificado_por': 'UUID'},
 'visitas_fallidas': {'creado_at': 'TIMESTAMPTZ',
                      'detalle': 'TEXT',
                      'foto': 'TEXT',
                      'id': 'BIGSERIAL',
                      'lat': 'NUMERIC(10,7)',
                      'llegada_at': 'TIMESTAMPTZ',
                      'lng': 'NUMERIC(10,7)',
                      'motivo': 'VARCHAR(20)',
                      'tecnico_id': 'UUID',
                      'ticket_id': 'UUID',
                      'usuario_id': 'UUID'},
 'vlans_olt': {'created_at': 'TIMESTAMPTZ',
               'descripcion': 'TEXT',
               'id': 'UUID',
               'olt_id': 'UUID',
               'updated_at': 'TIMESTAMPTZ',
               'uso': 'VARCHAR(20)',
               'vlan': 'INT'},
 'zonas_cobertura': {'activa': 'BOOLEAN',
                     'centro_lat': 'NUMERIC(10, 7)',
                     'centro_lng': 'NUMERIC(10, 7)',
                     'color': 'VARCHAR(7)',
                     'creado_en': 'TIMESTAMPTZ',
                     'id': 'UUID',
                     'nombre': 'VARCHAR(120)',
                     'notas': 'TEXT',
                     'poligono': 'JSONB',
                     'radio_m': 'INT',
                     'tecnologia': 'VARCHAR(10)',
                     'tipo': 'VARCHAR(10)'}}

ENUMS = {'condicion_abonado': ['ninguna', 'tercera_edad', 'discapacidad', 'ambas'],
 'red_de_acceso': ['par_cobre', 'fibra', 'coaxial', 'inalambrico', 'otros'],
 'tipo_de_cuenta': ['residencial', 'corporativo', 'cibercafe', 'otros']}

DISPARADORES = [('clientes', 'trg_audit_clientes', 'AFTER UPDATE', 'audit_cambios', None),
 ('clientes', 'trg_avisar_bienvenida', 'AFTER INSERT OR UPDATE OF ACTIVADO_EN', 'avisar_bienvenida', None),
 ('clientes', 'trg_clientes_updated_at', 'BEFORE UPDATE', 'tocar_updated_at', None),
 ('clientes', 'trg_estado_desde', 'BEFORE UPDATE OF ESTADO', 'marcar_cambio_de_estado', None),
 ('clientes', 'trg_sellar_activacion', 'BEFORE INSERT OR UPDATE OF ESTADO', 'sellar_activacion', None),
 ('clientes', 'trg_sincronizar_corte', 'BEFORE INSERT OR UPDATE', 'sincronizar_corte_del_abonado', None),
 ('clientes',
  'trg_tarifa_preferencial_cliente',
  'BEFORE INSERT OR UPDATE OF CONDICION_ESPECIAL',
  'sincronizar_tarifa_preferencial',
  None),
 ('comandos_ejecutados', 'trg_audit_comandos', 'AFTER INSERT', 'audit_cambios', None),
 ('comision_bases_plan',
  'trg_auditar_comision_bases',
  'AFTER INSERT OR UPDATE OR DELETE',
  'auditar_cambio_comisiones',
  None),
 ('comision_bonos_calidad',
  'trg_auditar_comision_bonos',
  'AFTER INSERT OR UPDATE OR DELETE',
  'auditar_cambio_comisiones',
  None),
 ('comision_esquemas',
  'trg_auditar_comision_esquemas',
  'AFTER INSERT OR UPDATE OR DELETE',
  'auditar_cambio_comisiones',
  None),
 ('comision_niveles',
  'trg_auditar_comision_niveles',
  'AFTER INSERT OR UPDATE OR DELETE',
  'auditar_cambio_comisiones',
  None),
 ('comision_reglas',
  'trg_auditar_comision_reglas',
  'AFTER INSERT OR UPDATE OR DELETE',
  'auditar_cambio_comisiones',
  None),
 ('comunicaciones', 'trg_audit_comunicaciones', 'AFTER INSERT', 'audit_cambios', None),
 ('contratos', 'trg_contratos_updated_at', 'BEFORE UPDATE', 'tocar_updated_at', None),
 ('documentos',
  'trg_documento_reemplaza',
  'BEFORE INSERT OR UPDATE OF CLIENT_ID',
  'documento_reemplaza_al_anterior',
  None),
 ('electronic_documents', 'trg_docs_updated_at', 'BEFORE UPDATE', 'tocar_updated_at', None),
 ('expedientes', 'trg_notificar_expediente', 'AFTER UPDATE OF ESTADO', 'notificar_expediente_enviado', None),
 ('facturas', 'trg_audit_facturas', 'AFTER INSERT OR UPDATE OR DELETE', 'audit_cambios', None),
 ('facturas', 'trg_facturas_updated_at', 'BEFORE UPDATE', 'tocar_updated_at', None),
 ('firmas_contrato',
  'trg_firma_actualiza_contrato',
  'AFTER INSERT OR UPDATE OF ESTADO',
  'firma_actualiza_contrato',
  None),
 ('firmas_contrato',
  'trg_firma_manual_autorizacion',
  'BEFORE INSERT OR UPDATE',
  'firma_manual_requiere_autorizacion',
  None),
 ('instalaciones',
  'trg_alta_copia_anexo2',
  'AFTER UPDATE',
  'alta_copia_aceptacion_anexo2',
  "NEW.estado = 'hecha'"),
 ('instalaciones', 'trg_aplicar_promo', 'AFTER UPDATE OF CLIENT_ID', 'aplicar_promo_al_cliente', None),
 ('instalaciones',
  'trg_archivar_prospecto',
  'AFTER UPDATE OF ESTADO',
  'archivar_prospecto_de_instalacion',
  None),
 ('instalaciones', 'trg_copiar_numero_orden', 'AFTER UPDATE OF CLIENT_ID', 'copiar_numero_orden', None),
 ('instalaciones',
  'trg_documentos_al_abonado',
  'AFTER INSERT OR UPDATE OF CLIENT_ID',
  'documentos_pasan_al_abonado',
  None),
 ('instalaciones', 'trg_inicio_instalacion', 'BEFORE UPDATE OF ESTADO', 'controlar_inicio_instalacion', None),
 ('instalaciones',
  'trg_instalacion_alta',
  'AFTER INSERT OR UPDATE OF ESTADO, FECHA, TIPO',
  'instalacion_actualiza_cliente',
  None),
 ('instalaciones', 'trg_instalaciones_updated_at', 'BEFORE UPDATE', 'tocar_updated_at', None),
 ('instalaciones', 'trg_notificar_instalacion', 'AFTER UPDATE OF ESTADO', 'notificar_instalacion', None),
 ('instalaciones',
  'trg_tarifa_preferencial_orden',
  'BEFORE INSERT OR UPDATE OF CONDICION_ESPECIAL',
  'sincronizar_tarifa_preferencial',
  None),
 ('instalaciones', 'trg_traslado_cancela', 'AFTER UPDATE OF ESTADO', 'traslado_se_cancela', None),
 ('instalaciones', 'trg_traslado_cierra', 'AFTER INSERT OR UPDATE OF ESTADO', 'traslado_se_cierra', None),
 ('jornadas', 'trg_km_jornada', 'BEFORE INSERT OR UPDATE', 'controlar_km_jornada', None),
 ('motivos_baja',
  'trg_auditar_motivos_baja',
  'AFTER INSERT OR UPDATE OR DELETE',
  'auditar_cambio_comisiones',
  None),
 ('movimientos_inventario', 'trg_aplicar_movimiento', 'AFTER INSERT', 'aplicar_movimiento_inventario', None),
 ('nodos_red', 'trg_nodos_red_updated_at', 'BEFORE UPDATE', 'tocar_updated_at', None),
 ('nodos_red', 'trg_notificar_nodo', 'AFTER UPDATE OF ESTADO', 'notificar_estado_nodo', None),
 ('olts', 'trg_olt_alta', 'AFTER INSERT', 'registrar_alta_olt', None),
 ('olts', 'trg_olt_historial', 'BEFORE UPDATE', 'registrar_cambio_olt', None),
 ('onus',
  'trg_onu_resuelve_modelo',
  'BEFORE INSERT OR UPDATE OF MODELO, TIPO_ONT_ID',
  'onu_resuelve_su_modelo',
  None),
 ('pagos', 'trg_audit_pagos', 'AFTER INSERT OR UPDATE OR DELETE', 'audit_cambios', None),
 ('pagos', 'trg_avisar_pago', 'AFTER INSERT', 'avisar_pago_recibido', None),
 ('pagos', 'trg_cobro_recaudacion', 'BEFORE INSERT', 'validar_cobro_de_recaudacion', None),
 ('pagos',
  'trg_pago_cierra_promesa',
  'AFTER INSERT OR UPDATE OF MONTO, ANULADO, DOCUMENT_ID',
  'pago_cierra_promesa',
  None),
 ('pagos', 'trg_pagos_updated_at', 'BEFORE UPDATE', 'tocar_updated_at', None),
 ('pagos', 'trg_reconectar_al_pagar', 'AFTER INSERT', 'reconectar_al_pagar', None),
 ('pagos',
  'trg_validar_cuenta_pago',
  'BEFORE INSERT OR UPDATE OF FORMA_PAGO, CUENTA_ID',
  'validar_cuenta_del_pago',
  None),
 ('plantillas_mensaje', 'trg_proteger_plantillas', 'BEFORE DELETE', 'proteger_plantillas_del_sistema', None),
 ('promesas_pago', 'trg_audit_promesas', 'AFTER INSERT OR UPDATE OR DELETE', 'audit_cambios', None),
 ('promesas_pago', 'trg_promesas_updated_at', 'BEFORE UPDATE', 'tocar_updated_at', None),
 ('promesas_pago', 'trg_reconectar_al_prometer', 'AFTER INSERT', 'reconectar_al_prometer', None),
 ('prospectos', 'trg_abrir_expediente', 'AFTER UPDATE OF ESTADO', 'abrir_expediente_al_ganar', None),
 ('prospectos', 'trg_sellar_ganado', 'BEFORE INSERT OR UPDATE OF ESTADO', 'sellar_ganado', None),
 ('reparacion_reportes', 'trg_reporte_reparacion', 'BEFORE INSERT', 'controlar_reporte_reparacion', None),
 ('sri_config',
  'trg_prestador_hereda_del_sri',
  'AFTER INSERT OR UPDATE OF RAZON_SOCIAL, NOMBRE_COMERCIAL, RUC, TELEFONO, EMAIL, DIR_MATRIZ, '
  'DIR_ESTABLECIMIENTO',
  'prestador_hereda_del_sri',
  None),
 ('sri_config', 'trg_sri_config_updated_at', 'BEFORE UPDATE', 'tocar_updated_at', None),
 ('subredes', 'trg_subredes_updated_at', 'BEFORE UPDATE', 'tocar_updated_at', None),
 ('tecnicos',
  'trg_almacen_del_tecnico',
  'AFTER INSERT OR UPDATE OF ACTIVO, NOMBRE',
  'crear_almacen_del_tecnico',
  None),
 ('ticket_eventos', 'trg_avisar_respuesta_ticket', 'AFTER INSERT', 'avisar_respuesta_de_ticket', None),
 ('tickets', 'trg_avisar_ticket', 'AFTER INSERT OR UPDATE OF TECNICO_ID', 'avisar_del_ticket', None),
 ('tickets', 'trg_inicio_ticket', 'BEFORE UPDATE OF ESTADO', 'controlar_inicio_ticket', None),
 ('tickets', 'trg_limpiar_reprogramar', 'BEFORE UPDATE OF FECHA_VISITA', 'limpiar_reprogramar', None),
 ('tickets', 'trg_ticket_estado_ins', 'AFTER INSERT', 'ticket_registra_estado', None),
 ('tickets', 'trg_ticket_estado_upd', 'BEFORE UPDATE', 'ticket_registra_estado', None),
 ('tickets', 'trg_ticket_tiempos', 'BEFORE UPDATE', 'ticket_sella_tiempos', None),
 ('usuarios_sistema',
  'trg_ficha_tecnico',
  'BEFORE INSERT OR UPDATE OF ROL, NOMBRE, APELLIDO, EMAIL, CELULAR, ACTIVO, AUTH_ID, TECNICO_ID',
  'sincronizar_ficha_tecnico',
  None)]

DEFAULTS = {'alerta_destinos': {'activo': 'true',
                     'canal': "'whatsapp'",
                     'creado_en': 'NOW()',
                     'id': 'gen_random_uuid()',
                     'tipos': "'{}'",
                     'zonas': "'{}'"},
 'alerta_envios': {'creado_en': 'NOW()', 'estado': "'enviado'", 'id': 'gen_random_uuid()'},
 'alerta_eventos': {'abonados': '1',
                    'creado_en': 'NOW()',
                    'detalle': "'{}'::jsonb",
                    'empezo_en': 'NOW()',
                    'id': 'gen_random_uuid()'},
 'alerta_reglas': {'activa': 'true', 'actualizado_en': 'NOW()', 'espera_min': '10'},
 'almacenes': {'activo': 'TRUE', 'creado_en': 'NOW()', 'id': 'gen_random_uuid()', 'tipo': "'bodega'"},
 'api_llamadas': {'created_at': 'NOW()', 'id': 'SERIAL'},
 'api_llaves': {'activa': 'TRUE',
                'confirma_pagos': 'FALSE',
                'created_at': 'NOW()',
                'id': 'gen_random_uuid()',
                'ips_permitidas': "'{}'",
                'permisos': "'{}'",
                'reactiva_servicio': 'FALSE'},
 'articulos': {'activo': 'TRUE',
               'categoria': "'material'",
               'creado_en': 'NOW()',
               'id': 'gen_random_uuid()',
               'por_serie': 'FALSE',
               'unidad': "'u'"},
 'audit_logs': {'created_at': 'NOW()', 'id': 'gen_random_uuid()'},
 'auditoria_sistema': {'creado_en': 'NOW()', 'id': 'SERIAL'},
 'autorizacion_presets': {'created_at': 'NOW()',
                          'gemport': '1',
                          'id': 'gen_random_uuid()',
                          'predeterminado': 'FALSE',
                          'updated_at': 'NOW()'},
 'avisos_pendientes': {'creado_en': 'NOW()', 'id': 'SERIAL', 'intentos': '0'},
 'campo_llamadas': {'canal': "'llamada'", 'creado_at': 'NOW()', 'id': 'SERIAL'},
 'cargas_combustible': {'creado_en': 'NOW()', 'fecha': 'CURRENT_DATE', 'id': 'gen_random_uuid()'},
 'clausulas_contrato': {'activa': 'TRUE',
                        'actualizado_en': 'NOW()',
                        'creado_en': 'NOW()',
                        'id': 'gen_random_uuid()',
                        'numerales': "'[]'::JSONB",
                        'raya_firma': 'FALSE'},
 'clientes': {'aplicar_corte': 'TRUE',
              'avisos_activos': 'TRUE',
              'avisos_pantalla': 'TRUE',
              'canal_preferido': "'whatsapp'",
              'codigo': 'SERIAL',
              'condicion_especial': "'ninguna'",
              'cortar_tras_meses': '1',
              'created_at': 'NOW()',
              'deuda_equipo': '0',
              'dias_gracia': '0',
              'equipo_modalidad': "'arrendamiento'",
              'estado': "'activo'",
              'estado_desde': 'NOW()',
              'excluir_firewall': 'FALSE',
              'factura_electronica': 'TRUE',
              'id': 'gen_random_uuid()',
              'modalidad_pago': "'prepago'",
              'origen': "'manual'",
              'tipo_conexion': "'ip'",
              'tipo_identificacion': "'05'",
              'tipo_impuesto': "'incluido'",
              'tipo_ip': "'fija'",
              'updated_at': 'NOW()'},
 'cobranza_asignaciones': {'creado_en': 'NOW()', 'estado': "'activa'", 'id': 'gen_random_uuid()'},
 'cobranza_gestiones': {'creado_en': 'NOW()', 'id': 'gen_random_uuid()'},
 'comandos_ejecutados': {'created_at': 'NOW()',
                         'destino_tipo': "'mikrotik'",
                         'exito': 'TRUE',
                         'id': 'gen_random_uuid()',
                         'parametros': "'{}'::JSONB"},
 'comision_bases_plan': {'base': '0', 'comisiona': 'TRUE'},
 'comision_bonos_calidad': {'id': 'gen_random_uuid()', 'monto': '0'},
 'comision_cohortes': {'bono': '0',
                       'calidad': '0',
                       'conservados': '0',
                       'estado': "'abierta'",
                       'evaluables': '0',
                       'evaluado_en': 'NOW()',
                       'excluidos': '0',
                       'id': 'gen_random_uuid()',
                       'perdidos': '0'},
 'comision_esquemas': {'activo': 'TRUE',
                       'actualizado_en': 'NOW()',
                       'creado_en': 'NOW()',
                       'id': 'gen_random_uuid()',
                       'modo': "'retroactivo'",
                       'vigente_desde': 'CURRENT_DATE'},
 'comision_niveles': {'id': 'gen_random_uuid()'},
 'comision_periodos': {'base_total': '0',
                       'bono': '0',
                       'cerrado_en': 'NOW()',
                       'estado': "'cerrado'",
                       'id': 'gen_random_uuid()',
                       'monto': '0',
                       'porcentaje': '0',
                       'ventas_validas': '0'},
 'comision_reglas': {'actualizado_en': 'NOW()',
                     'dia_cierre': '5',
                     'dia_cortesia_desde': '25',
                     'dias_cohorte': '90',
                     'esquema_id': 'gen_random_uuid()',
                     'meses_sin_pago_retiro': '2',
                     'meses_sin_pago_suspension': '1',
                     'min_clientes_cohorte': '10',
                     'pago_ventana_desde': '1',
                     'pago_ventana_hasta': '5',
                     'requiere_activacion': 'TRUE',
                     'requiere_aprobacion': 'FALSE',
                     'requiere_contrato': 'FALSE',
                     'requiere_documentacion': 'FALSE',
                     'requiere_instalacion': 'TRUE',
                     'requiere_primer_pago': 'FALSE'},
 'comision_ventas': {'actualizado_en': 'NOW()',
                     'calidad_estado': "'en_seguimiento'",
                     'creado_en': 'NOW()',
                     'estado': "'proyectada'",
                     'id': 'gen_random_uuid()',
                     'tipo_operacion': "'nueva'"},
 'compra_items': {'costo_unit': '0', 'id': 'gen_random_uuid()'},
 'compras': {'creado_en': 'NOW()',
             'estado': "'borrador'",
             'fecha': 'CURRENT_DATE',
             'id': 'gen_random_uuid()',
             'numero': 'SERIAL',
             'total': '0'},
 'comunicaciones': {'automatico': 'FALSE',
                    'created_at': 'NOW()',
                    'direccion': "'saliente'",
                    'estado': "'pendiente'",
                    'id': 'gen_random_uuid()'},
 'config_avisos_pago': {'activa': 'FALSE',
                        'actualizado_en': 'NOW()',
                        'canal': "'preferido'",
                        'dias_aviso_1': '-3',
                        'dias_aviso_2': '1',
                        'dias_aviso_3': '5',
                        'dias_aviso_4': '10',
                        'id': '1',
                        'limite': '200',
                        'repetir_cada_4': '15'},
 'config_cartera': {'actualizado_en': 'NOW()',
                    'archivar_prospectos': 'TRUE',
                    'comision_porcentaje': '0',
                    'id': '1',
                    'ventana_cobranza_meses': '6'},
 'config_corte': {'activa': 'FALSE',
                  'actualizado_en': 'NOW()',
                  'aviso_despues_de_pagar': "'Envía la foto del comprobante por WhatsApp y reactivamos tu "
                                            "servicio.'",
                  'aviso_pausa_horas': '6',
                  'cuentas_inicializadas': 'FALSE',
                  'id': '1',
                  'mensaje': "'Tu servicio de internet fue suspendido por falta de pago. Apenas registremos "
                             "tu pago se reactiva automáticamente.'",
                  'mostrar_facturas': 'TRUE',
                  'mostrar_saldo': 'TRUE',
                  'titulo': "'Tu servicio está suspendido'"},
 'config_firma': {'actualizado_en': 'NOW()',
                  'api_habilitada': 'FALSE',
                  'id': '1',
                  'roles_autorizan': '\'["super_admin", "admin"]\'::JSONB',
                  'timeout_segundos': '30',
                  'vigencia_horas': '72'},
 'config_general': {'actualizado_en': 'NOW()',
                    'id': '1',
                    'iva_porcentaje': '15',
                    'moneda_codigo': "'USD'",
                    'moneda_simbolo': "'$'",
                    'pais': "'EC'",
                    'zona_horaria': "'America/Guayaquil'"},
 'config_mensajeria': {'actualizado_en': 'NOW()',
                       'avisos_desde': "'08:00'",
                       'avisos_hasta': "'20:00'",
                       'id': '1',
                       'nms_canal': "'telegram'",
                       'whatsapp_crm_header': "'X-API-Key'",
                       'whatsapp_pausa_segundos': '0',
                       'whatsapp_via': "'manual'"},
 'config_tareas': {'actualizado_en': 'NOW()',
                   'alertas_automaticas': 'FALSE',
                   'alertas_cada_minutos': '5',
                   'avisos_pago_automatico': 'FALSE',
                   'avisos_pago_hora': "'09:00'",
                   'cartera_automatico': 'FALSE',
                   'cartera_hora': "'04:00'",
                   'comisiones_automatico': 'FALSE',
                   'comisiones_hora': "'03:30'",
                   'firmas_automatico': 'FALSE',
                   'firmas_cada_minutos': '60',
                   'foto_routers_automatico': 'TRUE',
                   'foto_routers_hora': "'23:30'",
                   'horario_desde': "'07:00'",
                   'horario_hasta': "'18:00'",
                   'id': '1',
                   'mora_automatico': 'FALSE',
                   'mora_barrida_minutos': '15',
                   'mora_hora': "'05:00'",
                   'mora_limite': '50',
                   'mora_reconexion_minutos': '10',
                   'mora_reconexion_segundos': '5',
                   'nms_gracia_minutos': '5',
                   'nms_router_fallas': '3',
                   'pausas_automatico': 'TRUE',
                   'pausas_hora': "'08:00'",
                   'stock_automatico': 'FALSE',
                   'stock_hora': "'07:00'",
                   'subida_automatico': 'TRUE',
                   'subida_cada_minutos': '5'},
 'consumo_contadores': {'bajada_bytes': '0',
                        'client_id': 'gen_random_uuid()',
                        'fuente': "'mikrotik'",
                        'leido_at': 'NOW()',
                        'subida_bytes': '0',
                        'updated_at': 'NOW()'},
 'consumo_diario': {'bajada_bytes': '0',
                    'created_at': 'NOW()',
                    'estado_servicio': "'activo'",
                    'fuente': "'mikrotik'",
                    'id': 'gen_random_uuid()',
                    'subida_bytes': '0',
                    'updated_at': 'NOW()'},
 'contratos': {'created_at': 'NOW()',
               'estado': "'vigente'",
               'fecha_inicio': 'CURRENT_DATE',
               'firma_estado': "'no_enviado'",
               'id': 'gen_random_uuid()',
               'precio_mensual': '0',
               'updated_at': 'NOW()',
               'version': '1'},
 'cotizaciones': {'costo_equipo': '0',
                  'costo_instalacion': '0',
                  'creado_en': 'NOW()',
                  'descuento': '0',
                  'estado': "'borrador'",
                  'id': 'gen_random_uuid()',
                  'numero': 'SERIAL',
                  'precio_mensual': '0',
                  'validez_dias': '15'},
 'cuadrilla_miembros': {'rol': "'tecnico'"},
 'cuadrilla_reemplazos': {'creado_en': 'NOW()'},
 'cuadrillas': {'activo': 'TRUE', 'created_at': 'NOW()', 'id': 'gen_random_uuid()'},
 'cuentas_pago': {'activa': 'TRUE',
                  'created_at': 'NOW()',
                  'id': 'gen_random_uuid()',
                  'mostrar_en_corte': 'TRUE',
                  'tipo': "'banco'"},
 'document_items': {'base_imponible_iva': '0',
                    'cantidad': '1',
                    'codigo_impuesto': "'2'",
                    'codigo_porcentaje': "'4'",
                    'created_at': 'NOW()',
                    'descuento': '0',
                    'id': 'gen_random_uuid()',
                    'orden': '1',
                    'precio_total_sin_impuesto': '0',
                    'precio_unitario': '0',
                    'tarifa_iva': '15.00',
                    'valor_iva': '0'},
 'documentos': {'categoria': "'otro'",
                'created_at': 'NOW()',
                'id': 'gen_random_uuid()',
                'visible_cliente': 'FALSE'},
 'electronic_documents': {'ambiente': "'1'",
                          'created_at': 'NOW()',
                          'enviado_por_email': 'FALSE',
                          'establecimiento': "'001'",
                          'estado': "'BORRADOR'",
                          'fecha_emision': 'CURRENT_DATE',
                          'forma_pago': "'01'",
                          'id': 'gen_random_uuid()',
                          'importe_total': '0',
                          'moneda': "'DOLAR'",
                          'propina': '0',
                          'punto_emision': "'001'",
                          'tipo_emision': "'1'",
                          'tipo_identificacion_comprador': "'05'",
                          'total_descuento': '0',
                          'total_iva': '0',
                          'total_sin_impuestos': '0',
                          'updated_at': 'NOW()'},
 'entrega_items': {'estado_fisico': "'bueno'", 'id': 'gen_random_uuid()'},
 'entregas_inventario': {'creado_en': 'NOW()',
                         'estado': "'pendiente'",
                         'id': 'gen_random_uuid()',
                         'numero': 'SERIAL'},
 'equipos': {'actualizado_en': 'NOW()',
             'creado_en': 'NOW()',
             'estado': "'en_stock'",
             'id': 'gen_random_uuid()'},
 'equipos_cliente': {'created_at': 'NOW()',
                     'entregado_at': 'NOW()',
                     'estado': "'entregado'",
                     'id': 'gen_random_uuid()',
                     'propiedad': "'isp'",
                     'tipo': "'ont'"},
 'existencias': {'cantidad': '0'},
 'expediente_documentos': {'estado': "'cargado'", 'id': 'gen_random_uuid()', 'subido_en': 'NOW()'},
 'expedientes': {'actualizado_en': 'NOW()',
                 'creado_en': 'NOW()',
                 'estado': "'abierto'",
                 'id': 'gen_random_uuid()'},
 'factura_proveedores': {'activo': 'FALSE',
                         'actualizado_en': 'NOW()',
                         'datos': "'{}'::jsonb",
                         'id': 'gen_random_uuid()',
                         'modo_prueba': 'TRUE',
                         'secretos_cifrados': "'{}'::jsonb"},
 'facturas': {'anulada': 'FALSE',
              'concepto': "'Servicio de internet'",
              'created_at': 'NOW()',
              'descuento': '0',
              'fecha_emision': 'CURRENT_DATE',
              'fecha_vencimiento': 'CURRENT_DATE',
              'id': 'gen_random_uuid()',
              'impuesto': '0',
              'numero': 'SERIAL',
              'origen': "'sistema'",
              'subtotal': '0',
              'tipo': "'servicios'",
              'total': '0',
              'updated_at': 'NOW()'},
 'firewall_bloqueos': {'activo': 'TRUE', 'created_at': 'NOW()', 'id': 'gen_random_uuid()'},
 'firmas_contrato': {'actualizado_en': 'NOW()',
                     'creado_en': 'NOW()',
                     'estado': "'pendiente'",
                     'id': 'gen_random_uuid()'},
 'fotos_routers_mensual': {'activos': '0',
                           'cortados': '0',
                           'por_cobrar': '0',
                           'suspendidos': '0',
                           'tomada_en': 'NOW()',
                           'vencido': '0'},
 'incidencia_avisos': {'creado_en': 'NOW()', 'estado': "'pendiente'", 'id': 'SERIAL', 'intentos': '0'},
 'incidencias_masivas': {'avisar_apertura': 'TRUE',
                         'avisar_resolucion': 'TRUE',
                         'clientes_manual': "'{}'",
                         'created_at': 'NOW()',
                         'estado': "'borrador'",
                         'id': 'gen_random_uuid()',
                         'ocurrio_at': 'NOW()',
                         'origen': "'manual'",
                         'programada': 'FALSE',
                         'tipo': "'averia'"},
 'ingresos_grupales': {'creado_en': 'NOW()',
                       'id': 'gen_random_uuid()',
                       'momento': 'NOW()',
                       'presentes': "'{}'"},
 'instalacion_fotos': {'created_at': 'NOW()', 'id': 'gen_random_uuid()', 'tipo': "'foto'"},
 'instalaciones': {'condicion_especial': "'ninguna'",
                   'costo': '0',
                   'created_at': 'NOW()',
                   'equipo_modalidad': "'arrendamiento'",
                   'estado': "'agendada'",
                   'factibilidad': "'pendiente'",
                   'fecha': 'CURRENT_DATE',
                   'id': 'gen_random_uuid()',
                   'numero': 'SERIAL',
                   'paso': '0',
                   'tecnologia': "'ftth'",
                   'tipo': "'nueva'",
                   'tipo_conexion': "'pppoe'",
                   'tipo_identificacion': "'05'",
                   'tipo_ip': "'fija'",
                   'updated_at': 'NOW()'},
 'ip_addresses': {'created_at': 'NOW()',
                  'estado': "'libre'",
                  'id': 'gen_random_uuid()',
                  'netmask': "'255.255.255.0'",
                  'origen': "'manual'"},
 'jornadas': {'creado_en': 'NOW()', 'fecha': 'CURRENT_DATE', 'id': 'gen_random_uuid()'},
 'licencia': {'actualizado_en': 'NOW()', 'creado_en': 'NOW()', 'id': '1', 'instalacion': 'gen_random_uuid()'},
 'line_profiles': {'created_at': 'NOW()', 'gemport_id': '1', 'id': 'gen_random_uuid()'},
 'mantenimiento_tipos': {'activo': 'TRUE', 'creado_en': 'NOW()', 'id': 'gen_random_uuid()', 'orden': '100'},
 'mantenimientos': {'creado_en': 'NOW()', 'fecha': 'CURRENT_DATE', 'id': 'gen_random_uuid()'},
 'mensajes_comerciales': {'canal': "'whatsapp'",
                          'creado_en': 'NOW()',
                          'estado': "'preparado'",
                          'id': 'gen_random_uuid()',
                          'via': "'manual'"},
 'metas_venta': {'creado_en': 'NOW()', 'id': 'gen_random_uuid()', 'meta_altas': '0', 'meta_monto': '0'},
 'motivos_baja': {'activo': 'TRUE',
                  'afecta_calidad': 'TRUE',
                  'creado_en': 'NOW()',
                  'id': 'gen_random_uuid()',
                  'orden': '0'},
 'movimientos_inventario': {'creado_en': 'NOW()', 'id': 'gen_random_uuid()'},
 'nodo_eventos': {'desde': 'NOW()', 'id': 'gen_random_uuid()', 'notificado': 'FALSE'},
 'nodos_red': {'avisar': 'TRUE',
               'created_at': 'NOW()',
               'estado': "'desconocido'",
               'id': 'gen_random_uuid()',
               'latencia_warning_ms': '150',
               'monitorear': 'TRUE',
               'numero': 'SERIAL',
               'perdida_warning_pct': '20',
               'tipo': "'ptmp'",
               'updated_at': 'NOW()'},
 'notificaciones': {'creado_en': 'NOW()', 'id': 'gen_random_uuid()'},
 'olt_backups': {'created_at': 'NOW()', 'id': 'gen_random_uuid()'},
 'olt_escaneos': {'at': 'NOW()',
                  'descartadas': '0',
                  'encontradas': '0',
                  'olt_id': 'gen_random_uuid()',
                  'puertos': '0'},
 'olt_historial': {'accion': "'editar'", 'created_at': 'NOW()', 'id': 'gen_random_uuid()'},
 'olts': {'activo': 'TRUE',
          'created_at': 'NOW()',
          'estado': "'desconocido'",
          'id': 'gen_random_uuid()',
          'iptv': 'FALSE',
          'numero': 'SERIAL',
          'puerto_ssh': '22',
          'snmp_puerto': '161',
          'snmp_trap': 'FALSE',
          'tr069_interfaz': "'mgmt_ip'",
          'updated_at': 'NOW()',
          'via_vpn': 'FALSE'},
 'onts_esperando': {'created_at': 'NOW()', 'id': 'SERIAL', 'visto_at': 'NOW()'},
 'onts_preautorizadas': {'automatica': 'TRUE',
                         'created_at': 'NOW()',
                         'estado': "'esperando'",
                         'gemport': '1',
                         'id': 'gen_random_uuid()',
                         'intentos': '0',
                         'updated_at': 'NOW()'},
 'onu_optica_historial': {'id': 'SERIAL', 'medida_at': 'NOW()'},
 'onus': {'created_at': 'NOW()', 'estado': "'offline'", 'frame': '0', 'id': 'gen_random_uuid()', 'slot': '0'},
 'pagos': {'activo_servicio': 'FALSE',
           'anulado': 'FALSE',
           'comision': '0',
           'created_at': 'NOW()',
           'es_excedente': 'FALSE',
           'es_reparto': 'FALSE',
           'facturar': 'FALSE',
           'fecha_pago': 'CURRENT_DATE',
           'forma_pago': "'efectivo'",
           'id': 'gen_random_uuid()',
           'numero': 'SERIAL',
           'updated_at': 'NOW()'},
 'pagos_reportados': {'created_at': 'NOW()',
                      'estado': "'pendiente'",
                      'fecha_pago': 'CURRENT_DATE',
                      'forma_pago': "'transferencia'",
                      'id': 'gen_random_uuid()'},
 'parametros_tecnicos': {'actualizado_en': 'NOW()',
                         'dias_reincidencia': '30',
                         'id': '1',
                         'optica_limite': '-27',
                         'optica_optimo': '-25',
                         'optica_saturado': '-8',
                         'perdida_maxima_pct': '2',
                         'ping_bueno_ms': '30',
                         'ping_limite_ms': '80',
                         'radio_ccq_minimo': '80',
                         'radio_limite': '-80',
                         'radio_optimo': '-70',
                         'tolerancia_puntualidad_min': '15',
                         'velocidad_minima_pct': '80'},
 'plan_routers': {'created_at': 'NOW()', 'estado': "'pendiente'"},
 'planes_velocidad': {'activo': 'TRUE',
                      'categoria': "'residencial'",
                      'control_pppoe': "'olt'",
                      'created_at': 'NOW()',
                      'id': 'gen_random_uuid()',
                      'iva_porcentaje': '15',
                      'precio': '0',
                      'tipo_impuesto': "'incluido'"},
 'planes_velocidad_historico': {'cambiado_en': 'NOW()', 'id': 'gen_random_uuid()'},
 'plantillas_mensaje': {'activa': 'TRUE',
                        'categoria': "'correo'",
                        'created_at': 'NOW()',
                        'del_sistema': 'FALSE',
                        'formato': "'texto'",
                        'id': 'gen_random_uuid()'},
 'plantillas_whatsapp': {'actualizado_en': 'NOW()',
                         'categoria': "'UTILITY'",
                         'ejemplos': "'{}'",
                         'estado': "'borrador'",
                         'id': 'gen_random_uuid()',
                         'idioma': "'es'",
                         'variables': "'{}'"},
 'portal_codigos': {'creado_en': 'NOW()', 'id': 'gen_random_uuid()', 'intentos': '0'},
 'portal_sesiones': {'creada_en': 'NOW()', 'id': 'gen_random_uuid()'},
 'portal_solicitudes': {'creada_en': 'NOW()',
                        'estado': "'pendiente'",
                        'id': 'gen_random_uuid()',
                        'intentos': '0'},
 'prestadores': {'activo': 'TRUE',
                 'actualizado_en': 'NOW()',
                 'arbitraje_por_defecto': 'TRUE',
                 'creado_en': 'NOW()',
                 'id': 'gen_random_uuid()',
                 'permanencia_meses': '24',
                 'plazo_instalacion': "'24 horas'",
                 'predeterminado': 'FALSE',
                 'valor_instalacion': '0',
                 'vigencia_meses': '24'},
 'promesas_pago': {'activo_servicio': 'FALSE',
                   'created_at': 'NOW()',
                   'estado': "'activa'",
                   'id': 'gen_random_uuid()',
                   'updated_at': 'NOW()'},
 'promociones': {'activa': 'TRUE',
                 'color': "'#d95926'",
                 'creado_en': 'NOW()',
                 'id': 'gen_random_uuid()',
                 'vigente_desde': 'CURRENT_DATE'},
 'prospecto_actividades': {'creado_en': 'NOW()', 'estado': "'completado'", 'id': 'gen_random_uuid()'},
 'prospectos': {'actualizado_en': 'NOW()',
                'cobertura': "'pendiente'",
                'creado_en': 'NOW()',
                'estado': "'nuevo'",
                'id': 'gen_random_uuid()',
                'origen': "'otro'",
                'tipo_operacion': "'nueva'"},
 'proveedores': {'activo': 'TRUE', 'creado_en': 'NOW()', 'id': 'gen_random_uuid()'},
 'puertos_pon': {'created_at': 'NOW()', 'id': 'gen_random_uuid()', 'updated_at': 'NOW()'},
 'puntos_red': {'activo': 'TRUE', 'created_at': 'NOW()', 'id': 'gen_random_uuid()', 'tipo': "'nap'"},
 'reactivaciones': {'creado_en': 'NOW()',
                    'id': 'gen_random_uuid()',
                    'meses_inactivo': '0',
                    'origen': "'automatica'"},
 'reconexiones_pendientes': {'creado_en': 'NOW()', 'id': 'SERIAL', 'intentos': '0'},
 'reemplazos_equipo': {'creado_en': 'NOW()',
                       'destino_anterior': "'averiado'",
                       'id': 'gen_random_uuid()',
                       'pendiente_olt': 'TRUE'},
 'reparacion_reportes': {'creado_at': 'NOW()', 'id': 'SERIAL', 'tipo': "'avance'"},
 'reparaciones_red': {'creada_at': 'NOW()',
                      'estado': "'asignada'",
                      'id': 'gen_random_uuid()',
                      'numero': 'SERIAL',
                      'prioridad': "'alta'",
                      'tipo': "'averia'"},
 'retencion_items': {'base_imponible': '0',
                     'created_at': 'NOW()',
                     'id': 'gen_random_uuid()',
                     'porcentaje_retener': '0',
                     'valor_retenido': '0'},
 'retiro_categorias': {'activa': 'TRUE',
                       'cierra_ficha': 'TRUE',
                       'es_perdida': 'TRUE',
                       'orden': '0',
                       'reclamable': 'FALSE'},
 'retiro_intentos': {'creado_en': 'NOW()', 'id': 'gen_random_uuid()'},
 'retiros_equipo': {'creado_en': 'NOW()',
                    'deuda_aplicada': 'FALSE',
                    'estado': "'pendiente'",
                    'id': 'gen_random_uuid()',
                    'intentos': '0',
                    'valor': '0'},
 'routers_mikrotik': {'activo': 'TRUE',
                      'conexion_estado': "'up'",
                      'conexion_fallas': '0',
                      'created_at': 'NOW()',
                      'id': 'gen_random_uuid()',
                      'ipv6_activo': 'false',
                      'ipv6_lista_morosos': "'CORTE_MOROSOS_V6'",
                      'lista_morosos': "'CORTE_MOROSOS'",
                      'modo_api': "'binaria'",
                      'puerto_api': '8728',
                      'usa_https': 'FALSE'},
 'ruta_cambios': {'creado_at': 'NOW()', 'id': 'SERIAL'},
 'salidas_emergencia': {'creado_en': 'NOW()', 'id': 'gen_random_uuid()', 'inicio_at': 'NOW()'},
 'sesiones_conexion': {'bajada_bytes': '0',
                       'created_at': 'NOW()',
                       'fuente': "'mikrotik'",
                       'id': 'gen_random_uuid()',
                       'subida_bytes': '0'},
 'solicitudes_validacion': {'actualizado_en': 'NOW()',
                            'creado_en': 'NOW()',
                            'estado': "'pendiente'",
                            'id': 'gen_random_uuid()'},
 'sri_config': {'ambiente': "'1'",
                'created_at': 'NOW()',
                'dia_maximo_pago': '5',
                'establecimiento': "'001'",
                'id': 'gen_random_uuid()',
                'meses_desplazado': '0',
                'obligado_contabilidad': 'FALSE',
                'punto_emision': "'001'",
                'regimen_microempresas': 'FALSE',
                'smtp_port': '587',
                'smtp_secure': 'FALSE',
                'tipo_emision': "'1'",
                'updated_at': 'NOW()'},
 'sri_secuenciales_libres': {'created_at': 'NOW()', 'id': 'gen_random_uuid()'},
 'sri_sequences': {'created_at': 'NOW()',
                   'establecimiento': "'001'",
                   'id': 'gen_random_uuid()',
                   'punto_emision': "'001'",
                   'ultimo_numero': '0'},
 'stock_minimos': {'creado_en': 'NOW()'},
 'subredes': {'activo': 'TRUE',
              'created_at': 'NOW()',
              'id': 'gen_random_uuid()',
              'numero': 'SERIAL',
              'proposito': "'abonados'",
              'tipo': "'estatica'",
              'updated_at': 'NOW()'},
 'tecnicos': {'activo': 'TRUE', 'created_at': 'NOW()', 'especialidad': "'ambas'", 'id': 'gen_random_uuid()'},
 'ticket_adjuntos': {'created_at': 'NOW()', 'id': 'gen_random_uuid()', 'tipo': "'foto'"},
 'ticket_eventos': {'created_at': 'NOW()', 'id': 'gen_random_uuid()'},
 'tickets': {'checklist': "'{}'::JSONB",
             'created_at': 'NOW()',
             'estado': "'abierto'",
             'id': 'gen_random_uuid()',
             'numero': 'SERIAL',
             'prioridad': "'media'",
             'tecnologia': "'ftth'",
             'tipo_incidencia': "'sin_internet'",
             'updated_at': 'NOW()'},
 'tipos_ont': {'canales': "ARRAY['GPON']",
               'capacidad': "'bridging_routing'",
               'catv': '0',
               'created_at': 'NOW()',
               'id': 'gen_random_uuid()',
               'perfiles_propios': 'TRUE',
               'pon_tipo': "'GPON'",
               'prefijo_eth': "'eth_0/'",
               'prefijo_voip': "'pots_0/'",
               'prefijo_wifi': "'wifi_0/'",
               'puertos_ethernet': '1',
               'puertos_fxs': '0',
               'updated_at': 'NOW()',
               'wifi': 'FALSE',
               'wifi_ssids': '0'},
 'traslados': {'creado_en': 'NOW()',
               'estado': "'abierto'",
               'id': 'gen_random_uuid()',
               'pendiente_baja': 'TRUE'},
 'usuario_dispositivos': {'accesos': '1',
                          'id': 'gen_random_uuid()',
                          'primera_vez': 'NOW()',
                          'ultima_vez': 'NOW()'},
 'usuarios_sistema': {'activo': 'TRUE',
                      'actualizado_en': 'NOW()',
                      'apellido': "''",
                      'creado_en': 'NOW()',
                      'dos_factores': 'FALSE',
                      'id': 'gen_random_uuid()',
                      'permisos': "'[]'::jsonb",
                      'rol': "'tecnico'",
                      'todas_las_zonas': 'FALSE'},
 'vehiculos': {'activo': 'TRUE', 'creado_en': 'NOW()', 'id': 'gen_random_uuid()'},
 'ventanas_whatsapp': {'created_at': 'NOW()', 'mensajes': '1'},
 'verificaciones_cobertura': {'creado_en': 'NOW()',
                              'id': 'gen_random_uuid()',
                              'resultado': "'requiere_verificacion'",
                              'tecnologia': "'ftth'"},
 'visitas_fallidas': {'creado_at': 'NOW()', 'id': 'SERIAL'},
 'vlans_olt': {'created_at': 'NOW()', 'id': 'gen_random_uuid()', 'updated_at': 'NOW()', 'uso': "'internet'"},
 'zonas_cobertura': {'activa': 'TRUE',
                     'color': "'#0ea5e9'",
                     'creado_en': 'NOW()',
                     'id': 'gen_random_uuid()',
                     'tecnologia': "'ftth'",
                     'tipo': "'circulo'"}}

INDICES_UNICOS = {'idx_alerta_eventos_abierto': ('alerta_eventos', 'regla, entidad, entidad_id', 'resuelto_en IS NULL'),
 'idx_almacenes_tecnico': ('almacenes', 'tecnico_id', 'tecnico_id IS NOT NULL'),
 'idx_articulos_codigo': ('articulos', 'LOWER(codigo)', 'codigo IS NOT NULL'),
 'idx_avisos_sin_repetir': ('avisos_pendientes', 'tipo, referencia_id', 'referencia_id IS NOT NULL'),
 'idx_clausulas_orden_base': ('clausulas_contrato', 'orden', 'prestador_id IS NULL'),
 'idx_clausulas_orden_prestador': ('clausulas_contrato', 'prestador_id, orden', 'prestador_id IS NOT NULL'),
 'idx_clientes_codigo': ('clientes', 'codigo', None),
 'idx_clientes_codigo_externo': ('clientes', 'sistema_origen, codigo_externo', 'codigo_externo IS NOT NULL'),
 'idx_clientes_onu': ('clientes', 'onu_id', 'onu_id IS NOT NULL'),
 'idx_clientes_puerto_nap': ('clientes',
                             'nap_id, puerto_nap',
                             'nap_id IS NOT NULL AND puerto_nap IS NOT NULL'),
 'idx_clientes_router_ip': ('clientes', 'router_id, ip', 'ip IS NOT NULL'),
 'idx_clientes_router_ppp': ('clientes', 'router_id, usuario_ppp', 'usuario_ppp IS NOT NULL'),
 'idx_cobranza_una_activa': ('cobranza_asignaciones', 'cliente_id', "estado = 'activa'"),
 'idx_comision_esquema_activo': ('comision_esquemas', 'activo', 'activo'),
 'idx_comision_ventas_cliente': ('comision_ventas',
                                 'cliente_id',
                                 "cliente_id IS NOT NULL AND estado <> 'anulada'"),
 'idx_comision_ventas_prospecto': ('comision_ventas',
                                   'prospecto_id',
                                   "prospecto_id IS NOT NULL AND estado <> 'anulada'"),
 'idx_consumo_dia': ('consumo_diario', 'client_id, fecha', None),
 'idx_contratos_numero': ('contratos', 'numero', 'numero IS NOT NULL'),
 'idx_contratos_uno_vigente': ('contratos', 'client_id', "estado = 'vigente'"),
 'idx_cuadrilla_un_lider': ('cuadrilla_miembros', 'cuadrilla_id', "rol = 'lider'"),
 'idx_documento_identidad_abonado': ('documentos',
                                     'client_id, categoria',
                                     'client_id IS NOT NULL\n'
                                     '      AND reemplazado_en IS NULL\n'
                                     "      AND categoria IN ('cedula_frontal', 'cedula_reverso', 'ruc', "
                                     "'cedula_representante')"),
 'idx_documento_identidad_orden': ('documentos',
                                   'instalacion_id, categoria',
                                   'instalacion_id IS NOT NULL\n'
                                   '      AND client_id IS NULL\n'
                                   '      AND reemplazado_en IS NULL\n'
                                   "      AND categoria IN ('cedula_frontal', 'cedula_reverso', 'ruc', "
                                   "'cedula_representante')"),
 'idx_emergencia_una_abierta': ('salidas_emergencia', 'tecnico_id', 'fin_at IS NULL'),
 'idx_entregas_numero': ('entregas_inventario', 'numero', None),
 'idx_equipos_serie': ('equipos', 'articulo_id, UPPER(serie)', None),
 'idx_expediente_cedula_unica': ('expediente_documentos',
                                 'expediente_id, tipo',
                                 "tipo IN ('cedula_frontal', 'cedula_posterior') AND estado <> 'rechazado'"),
 'idx_factura_proveedores_un_activo': ('factura_proveedores', 'pais', 'activo'),
 'idx_facturas_numero': ('facturas', 'numero', None),
 'idx_facturas_periodo': ('facturas',
                          'client_id, periodo_desde',
                          "tipo = 'servicios' AND NOT anulada AND periodo_desde IS NOT NULL"),
 'idx_incidencia_aviso_unico': ('incidencia_avisos', 'incidencia_id, client_id, momento', None),
 'idx_incidencia_una_por_nodo': ('incidencias_masivas',
                                 'nodo_id',
                                 "nodo_id IS NOT NULL AND estado IN ('borrador', 'abierta')"),
 'idx_instalacion_fotos_idempotencia': ('instalacion_fotos',
                                        'clave_idempotencia',
                                        'clave_idempotencia IS NOT NULL'),
 'idx_instalaciones_equipo_sn': ('instalaciones',
                                 'equipo_sn',
                                 "equipo_sn IS NOT NULL AND estado <> 'cancelada'"),
 'idx_instalaciones_numero': ('instalaciones', 'numero', 'numero IS NOT NULL'),
 'idx_ip_addresses_subred': ('ip_addresses', 'subred_id, ip_address', 'subred_id IS NOT NULL'),
 'idx_mensajes_comerciales_idempotencia': ('mensajes_comerciales',
                                           'clave_idempotencia',
                                           'clave_idempotencia IS NOT NULL'),
 'idx_metas_venta_unica': ('metas_venta',
                           "COALESCE(vendedor_id, '00000000-0000-0000-0000-000000000000'::UUID), anio, mes",
                           None),
 'idx_movimientos_idempotencia': ('movimientos_inventario',
                                  'clave_idempotencia',
                                  'clave_idempotencia IS NOT NULL'),
 'idx_nodo_evento_abierto': ('nodo_eventos', 'nodo_id', 'hasta IS NULL'),
 'idx_pagos_numero': ('pagos', 'numero', None),
 'idx_pagos_reportados_hash_qr': ('pagos_reportados',
                                  'hash_qr',
                                  "hash_qr IS NOT NULL AND estado <> 'rechazado'"),
 'idx_pagos_reportados_referencia': ('pagos_reportados',
                                     'llave_id, referencia_externa',
                                     'referencia_externa IS NOT NULL'),
 'idx_pagos_reportados_uuid_tx': ('pagos_reportados',
                                  'uuid_transaccion',
                                  "uuid_transaccion IS NOT NULL AND estado <> 'rechazado'"),
 'idx_pagos_transaccion_unica': ('pagos',
                                 'n_transaccion',
                                 "n_transaccion IS NOT NULL AND n_transaccion <> '' AND NOT anulado"),
 'idx_planes_codigo_facturacion': ('planes_velocidad',
                                   'codigo_facturacion',
                                   'codigo_facturacion IS NOT NULL'),
 'idx_plantillas_clave': ('plantillas_mensaje', 'clave', 'clave IS NOT NULL'),
 'idx_plantillas_wa_nombre': ('plantillas_whatsapp', 'nombre_meta, idioma', None),
 'idx_prestador_predeterminado': ('prestadores', '(TRUE)', 'predeterminado'),
 'idx_promesas_una_activa': ('promesas_pago', 'client_id', "estado = 'activa'"),
 'idx_reconexiones_una_por_cliente': ('reconexiones_pendientes', 'cliente_id', 'procesado_en IS NULL'),
 'idx_reparacion_una_por_alerta': ('reparaciones_red',
                                   'alerta_id',
                                   "alerta_id IS NOT NULL AND estado IN ('asignada', 'en_curso')"),
 'idx_reparacion_una_por_incidencia': ('reparaciones_red',
                                       'incidencia_id',
                                       "incidencia_id IS NOT NULL AND estado IN ('asignada', 'en_curso')"),
 'idx_retiros_una_abierta': ('retiros_equipo', 'cliente_id', "estado IN ('pendiente', 'asignado')"),
 'idx_sri_config_unica': ('sri_config', '(TRUE)', None),
 'idx_subredes_cidr': ('subredes', 'network(cidr)', None),
 'idx_ticket_adjuntos_idempotencia': ('ticket_adjuntos',
                                      'clave_idempotencia',
                                      'clave_idempotencia IS NOT NULL'),
 'idx_ticket_eventos_idempotencia': ('ticket_eventos',
                                     'clave_idempotencia',
                                     'clave_idempotencia IS NOT NULL'),
 'idx_tipos_ont_modelo_upper': ('tipos_ont', 'UPPER(marca), UPPER(modelo)', None),
 'idx_usuarios_sistema_email': ('usuarios_sistema', 'LOWER(email)', None),
 'idx_usuarios_sistema_usuario': ('usuarios_sistema', 'LOWER(usuario)', None),
 'olts_numero_key': ('olts', 'numero', None)}

SEMILLAS = [(0,
  'tipos_ont',
  'INSERT INTO tipos_ont (marca, modelo, puertos_ethernet, puertos_fxs, wifi) VALUES\n'
  "    ('Huawei', 'HG8310M', 1, 0, FALSE),\n"
  "    ('Huawei', 'HG8546M', 4, 1, TRUE),\n"
  "    ('V-SOL',  'V2801RH', 1, 0, FALSE),\n"
  "    ('V-SOL',  'V2802RGW', 4, 1, TRUE)\n"
  'ON CONFLICT (marca, modelo) DO NOTHING'),
 (0,
  'planes_velocidad',
  'INSERT INTO planes_velocidad (nombre, bajada_kbps, subida_kbps, burst_limit, precio, traffic_table_index) '
  'VALUES\n'
  "    ('PLAN_30M',  30000, 15000, NULL,        18.00, 30),\n"
  "    ('PLAN_50M',  50000, 25000, '60M/30M',   25.00, 50),\n"
  "    ('PLAN_100M', 102400, 10240, '120M/60M', 35.00, 10)\n"
  'ON CONFLICT (nombre) DO NOTHING'),
 (3,
  'sri_sequences',
  'INSERT INTO sri_sequences (tipo_doc, establecimiento, punto_emision) VALUES\n'
  "    ('01', '001', '001'),   \n"
  "    ('03', '001', '001'),   \n"
  "    ('04', '001', '001'),   \n"
  "    ('05', '001', '001'),   \n"
  "    ('06', '001', '001'),   \n"
  "    ('07', '001', '001')    \n"
  'ON CONFLICT (tipo_doc, establecimiento, punto_emision) DO NOTHING'),
 (8,
  'cuentas_pago',
  'INSERT INTO cuentas_pago (nombre, tipo, titular) VALUES\n'
  "    ('Caja Oficina', 'efectivo', NULL)\n"
  'ON CONFLICT (nombre) DO NOTHING'),
 (28,
  'plantillas_mensaje',
  'INSERT INTO plantillas_mensaje (nombre, canal, asunto, cuerpo, variables)\n'
  'SELECT * FROM (VALUES\n'
  "    ('Aviso de corte', 'cualquiera', 'Su servicio será suspendido',\n"
  "     'Estimado/a {{nombre}}: su servicio de internet registra un saldo pendiente de {{saldo}}. Para "
  "evitar la suspensión, puede cancelar hasta el {{fecha}}. Gracias.',\n"
  "     ARRAY['nombre','saldo','fecha']),\n"
  "    ('Promesa por vencer', 'cualquiera', 'Su compromiso de pago vence mañana',\n"
  "     'Estimado/a {{nombre}}: le recordamos que su compromiso de pago por {{saldo}} vence el {{fecha}}. Si "
  "ya canceló, haga caso omiso de este mensaje.',\n"
  "     ARRAY['nombre','saldo','fecha']),\n"
  "    ('Factura disponible', 'email', 'Su factura de {{periodo}} está lista',\n"
  "     'Estimado/a {{nombre}}: adjuntamos su factura correspondiente a {{periodo}} por {{total}}. Gracias "
  "por su preferencia.',\n"
  "     ARRAY['nombre','periodo','total']),\n"
  "    ('Técnico en camino', 'whatsapp', NULL,\n"
  "     'Hola {{nombre}}, le informamos que nuestro técnico {{tecnico}} está en camino a su domicilio por el "
  "reporte N° {{ticket}}.',\n"
  "     ARRAY['nombre','tecnico','ticket']),\n"
  "    ('Servicio restablecido', 'cualquiera', 'Servicio restablecido',\n"
  "     'Estimado/a {{nombre}}: su servicio fue restablecido. Si continúa con inconvenientes, escríbanos.',\n"
  "     ARRAY['nombre'])\n"
  ') AS v(nombre, canal, asunto, cuerpo, variables)\n'
  'WHERE NOT EXISTS (SELECT 1 FROM plantillas_mensaje)'),
 (60, 'licencia', 'INSERT INTO licencia (id) VALUES (1) ON CONFLICT (id) DO NOTHING'),
 (61, 'config_mensajeria', 'INSERT INTO config_mensajeria (id) VALUES (1) ON CONFLICT (id) DO NOTHING'),
 (62, 'config_tareas', 'INSERT INTO config_tareas (id) VALUES (1) ON CONFLICT (id) DO NOTHING'),
 (63, 'config_general', 'INSERT INTO config_general (id) VALUES (1) ON CONFLICT (id) DO NOTHING'),
 (70, 'config_cartera', 'INSERT INTO config_cartera (id) VALUES (1) ON CONFLICT (id) DO NOTHING'),
 (84, 'parametros_tecnicos', 'INSERT INTO parametros_tecnicos (id) VALUES (1) ON CONFLICT (id) DO NOTHING'),
 (88,
  'instalaciones',
  'INSERT INTO instalaciones (tipo, estado, nombre, tecnologia, rx_power_dbm)\n'
  "    VALUES ('nueva', 'agendada', 'SONDA 88', 'ftth', -21)\n"
  '    RETURNING id INTO v_id'),
 (97,
  'comision_esquemas',
  'DO $bloque$\n'
  'DECLARE\n'
  '    v_esquema UUID;\n'
  'BEGIN\n'
  '    IF EXISTS (SELECT 1 FROM comision_esquemas) THEN\n'
  "        RAISE NOTICE 'Ya existe un esquema de comisiones: no se toca nada.';\n"
  '        RETURN;\n'
  '    END IF;\n'
  '\n'
  '    INSERT INTO comision_esquemas (nombre, modo, vigente_desde, activo, notas)\n'
  '    VALUES (\n'
  "        'Plan de comisiones 2026 — V1',\n"
  "        'retroactivo',\n"
  "        DATE_TRUNC('month', CURRENT_DATE)::DATE,\n"
  '        TRUE,\n'
  "        'Valores iniciales del requerimiento. Arranca exigiendo instalación y activación; '\n"
  "        'contrato, documentación, aprobación y primer pago quedan apagados hasta que esos '\n"
  "        'módulos tengan datos reales.'\n"
  '    )\n'
  '    RETURNING id INTO v_esquema;\n'
  '\n'
  '    -- ── Escalones ──\n'
  '    INSERT INTO comision_niveles (esquema_id, orden, nombre, desde_ventas, hasta_ventas, porcentaje)\n'
  '    VALUES\n'
  "        (v_esquema, 1, 'Inicial',  1, 10,   20),\n"
  "        (v_esquema, 2, 'Bronce',  11, 15,   30),\n"
  "        (v_esquema, 3, 'Plata',   16, 20,   35),\n"
  "        (v_esquema, 4, 'Oro',     21, 25,   40),\n"
  "        (v_esquema, 5, 'Platino', 26, 30,   45),\n"
  "        (v_esquema, 6, 'Élite',   31, NULL, 50);\n"
  '\n'
  '    -- ── Bonos de calidad ──\n'
  '    INSERT INTO comision_bonos_calidad (esquema_id, orden, desde_pct, hasta_pct, monto)\n'
  '    VALUES\n'
  '        (v_esquema, 1,  0,     69.99,  0),\n'
  '        (v_esquema, 2, 70,     79.99, 10),\n'
  '        (v_esquema, 3, 80,     84.99, 20),\n'
  '        (v_esquema, 4, 85,     89.99, 30),\n'
  '        (v_esquema, 5, 90,     94.99, 40),\n'
  '        (v_esquema, 6, 95,    100,    50);\n'
  '\n'
  '    -- ── Reglas ──\n'
  '    INSERT INTO comision_reglas (esquema_id) VALUES (v_esquema);\n'
  '\n'
  '    -- ── Bases por plan ──\n'
  '    --\n'
  '    -- Los valores del requerimiento, emparejados por velocidad con los planes\n'
  '    -- que existen en esta base. Los precios cargados están SIN IVA —$17,39 es\n'
  '    -- $20,00 con IVA— así que la tabla del documento coincide.\n'
  '    --\n'
  '    -- Todo plan que no esté en la lista entra con base 0 y sin comisionar: es\n'
  '    -- mejor que aparezca en la pantalla pidiendo un valor a que comisione un\n'
  '    -- monto inventado.\n'
  '    INSERT INTO comision_bases_plan (esquema_id, plan_id, base, comisiona)\n'
  '    SELECT\n'
  '        v_esquema,\n'
  '        p.id,\n'
  '        CASE\n'
  '            WHEN p.bajada_kbps >= 512000 THEN 20    -- 500 Mbps\n'
  '            WHEN p.bajada_kbps >= 409600 THEN 17    -- 400 Mbps\n'
  '            WHEN p.bajada_kbps >= 307200 THEN 14    -- 300 Mbps\n'
  '            WHEN p.bajada_kbps >= 153600 THEN 12    -- 150 Mbps\n'
  '            WHEN p.bajada_kbps >=  51200 THEN 10    --  50 Mbps\n'
  '            ELSE 0\n'
  '        END,\n'
  '        p.activo AND p.bajada_kbps >= 51200\n'
  '    FROM planes_velocidad p;\n'
  '\n'
  '    -- ── Motivos de baja ──\n'
  '    INSERT INTO motivos_baja (nombre, afecta_calidad, orden) VALUES\n'
  "        ('Problema técnico atribuible a la empresa', FALSE, 1),\n"
  "        ('Mudanza fuera de cobertura',               FALSE, 2),\n"
  "        ('Fuerza mayor',                             FALSE, 3),\n"
  "        ('Error administrativo',                     FALSE, 4),\n"
  "        ('Fallecimiento del titular',                FALSE, 5),\n"
  "        ('Abandono temprano',                        TRUE,  6),\n"
  "        ('Nunca realizó el pago requerido',          TRUE,  7),\n"
  "        ('Documentación irregular',                  TRUE,  8),\n"
  "        ('Incumplimiento de política comercial',     TRUE,  9),\n"
  "        ('Se fue a la competencia',                  TRUE, 10),\n"
  "        ('Sin motivo registrado',                    TRUE, 11)\n"
  '    ON CONFLICT (nombre) DO NOTHING;\n'
  '\n'
  "    RAISE NOTICE 'Esquema de comisiones inicial creado: %', v_esquema;\n"
  'END $bloque$'),
 (112,
  'alerta_reglas',
  'INSERT INTO alerta_reglas (clave, nombre, descripcion, espera_min, umbral, desde_hora, hasta_hora) '
  'VALUES\n'
  "    ('ont_caida', 'ONT sin señal',\n"
  "     'Un abonado se quedó sin señal y el resto de su caja está bien. Es el caso que más interesa: puede "
  "ser una mudanza o un equipo que se está yendo.',\n"
  "     10, NULL, '07:00', '22:00'),\n"
  "    ('corte_grupo', 'Corte agrupado',\n"
  "     'Varias ONTs de la misma caja o del mismo puerto se cayeron juntas. Es la red, no el abonado: se "
  "manda un solo aviso.',\n"
  '     5, 3, NULL, NULL),\n'
  "    ('potencia_critica', 'Potencia crítica',\n"
  "     'La señal cayó por debajo del umbral. El servicio todavía anda pero se va a cortar.',\n"
  "     30, -27, '07:00', '22:00'),\n"
  "    ('degradacion', 'Señal degradándose',\n"
  "     'La potencia viene bajando de a poco. Es lo que permite arreglar una fibra antes de que se corte.',\n"
  "     1440, 3, '08:00', '18:00')\n"
  'ON CONFLICT (clave) DO NOTHING'),
 (115,
  'retiro_categorias',
  'INSERT INTO retiro_categorias (clave, nombre, descripcion, es_perdida, reclamable, cierra_ficha, orden) '
  'VALUES\n'
  "    ('mudanza_sin_aviso', 'Se mudó sin avisar',\n"
  "     'No vive más ahí y no hay forma de contactarlo. La casa está vacía o vive otra gente.', TRUE, FALSE, "
  'TRUE, 1),\n'
  "    ('se_niega', 'Se niega a entregarlo',\n"
  "     'Está localizable y no lo devuelve. Se le puede reclamar.', TRUE, TRUE, TRUE, 2),\n"
  "    ('no_contesta', 'No contesta y no se lo encuentra',\n"
  "     'Se lo llamó y se fue al domicilio varias veces sin dar con él.', TRUE, FALSE, TRUE, 3),\n"
  "    ('equipo_robado', 'Robo o siniestro',\n"
  "     'El abonado dice que se lo robaron o se quemó. Conviene pedir la denuncia.', TRUE, FALSE, TRUE, 4),\n"
  "    ('equipo_dañado', 'El equipo está roto',\n"
  "     'Se recuperó pero no sirve. No es una falla de recuperación: es una baja técnica.', FALSE, FALSE, "
  'TRUE, 5),\n'
  "    ('cliente_fallecio', 'El abonado falleció', NULL, TRUE, FALSE, TRUE, 6),\n"
  "    ('zona_insegura', 'Zona insegura',\n"
  "     'No se puede ir a buscar. Marca la zona, además del equipo.', TRUE, FALSE, TRUE, 7),\n"
  "    ('error_de_registro', 'Error de registro',\n"
  "     'El equipo nunca estuvo en esa casa. No es una pérdida: corrige el inventario.', FALSE, FALSE, "
  'FALSE, 8)\n'
  'ON CONFLICT (clave) DO NOTHING'),
 (117,
  'motivos_baja',
  'INSERT INTO motivos_baja (nombre, afecta_calidad, orden, activo)\n'
  "VALUES ('Se mudó sin avisar y no devolvió el equipo', TRUE, 6, TRUE)\n"
  'ON CONFLICT (nombre) DO UPDATE\n'
  '   SET afecta_calidad = EXCLUDED.afecta_calidad,\n'
  '       activo = TRUE'),
 (124, 'config_corte', 'INSERT INTO config_corte (id) VALUES (1) ON CONFLICT (id) DO NOTHING'),
 (126,
  'plantillas_mensaje',
  'INSERT INTO plantillas_mensaje\n'
  '    (clave, categoria, canal, formato, del_sistema, nombre, descripcion, asunto, cuerpo, variables)\n'
  'VALUES\n'
  '\n'
  '\n'
  "('doc_factura_sri', 'documento', 'documento', 'html', TRUE,\n"
  " 'Factura SRI',\n"
  " 'El comprobante electrónico que se le entrega al abonado. El XML lo define el SRI; esto es lo que se "
  "imprime.',\n"
  ' NULL,\n'
  " E'<h1>FACTURA</h1>\\n<p>{{empresa}} · RUC {{ruc}}</p>\\n<p>Cliente: {{nombre}} · "
  "{{identificacion}}</p>\\n<p>Período: {{periodo}}</p>\\n<p>Total: {{total}}</p>',\n"
  " ARRAY['empresa','ruc','nombre','identificacion','periodo','total','fecha']),\n"
  '\n'
  "('doc_recibo', 'documento', 'documento', 'html', TRUE,\n"
  " 'Recibo',\n"
  " 'El comprobante de un pago cobrado. Se imprime o se manda cuando el abonado paga.',\n"
  ' NULL,\n'
  " E'<h1>RECIBO N° {{numero}}</h1>\\n<p>Recibimos de {{nombre}} la suma de {{monto}}</p>\\n<p>Por concepto "
  "de: {{concepto}}</p>\\n<p>Forma de pago: {{forma_pago}} · {{fecha}}</p>',\n"
  " ARRAY['numero','nombre','monto','concepto','forma_pago','fecha']),\n"
  '\n'
  "('doc_recibo_pos', 'documento', 'documento', 'html', TRUE,\n"
  " 'Recibo POS',\n"
  " 'El mismo recibo en formato tirilla, para la impresora térmica de 58 u 80 mm.',\n"
  ' NULL,\n'
  " E'{{empresa}}\\nRECIBO "
  '{{numero}}\\n{{fecha}}\\n--------------------------\\n{{nombre}}\\n{{concepto}}\\nTOTAL '
  "{{monto}}\\n--------------------------\\nGracias por su pago',\n"
  " ARRAY['empresa','numero','nombre','monto','concepto','fecha']),\n"
  '\n'
  "('doc_hoja_instalacion', 'documento', 'documento', 'html', TRUE,\n"
  " 'Hoja de instalación',\n"
  " 'La que firma el abonado cuando el técnico termina: qué se instaló, con qué serie y en qué estado "
  "quedó.',\n"
  ' NULL,\n'
  " E'<h1>HOJA DE INSTALACIÓN</h1>\\n<p>Orden N° {{orden}} · {{fecha}}</p>\\n<p>Cliente: {{nombre}} · "
  '{{direccion}}</p>\\n<p>Plan: {{plan}} · IP: {{ip}}</p>\\n<p>Equipo: {{equipo}} · Serie: '
  "{{serie}}</p>\\n<p>Técnico: {{tecnico}}</p>',\n"
  " ARRAY['orden','fecha','nombre','direccion','plan','ip','equipo','serie','tecnico']),\n"
  '\n'
  "('doc_ticket', 'documento', 'documento', 'html', TRUE,\n"
  " 'Impresión de ticket',\n"
  " 'El comprobante de un reporte de soporte, para dejarle algo en la mano al abonado.',\n"
  ' NULL,\n'
  " E'<h1>TICKET N° {{ticket}}</h1>\\n<p>{{fecha}}</p>\\n<p>Cliente: {{nombre}}</p>\\n<p>Motivo: "
  "{{motivo}}</p>\\n<p>Atiende: {{tecnico}}</p>',\n"
  " ARRAY['ticket','fecha','nombre','motivo','tecnico']),\n"
  '\n'
  "('doc_contrato', 'documento', 'documento', 'html', TRUE,\n"
  " 'Contrato',\n"
  " 'El contrato de servicio que firma el abonado al darse de alta.',\n"
  ' NULL,\n'
  " E'<h1>CONTRATO DE SERVICIO DE INTERNET</h1>\\n<p>Entre {{empresa}}, RUC {{ruc}}, y {{nombre}}, con "
  'documento {{identificacion}}, domiciliado en {{direccion}}.</p>\\n<p>Plan contratado: {{plan}} por '
  '{{precio}} mensuales.</p>\\n<p>Fecha de instalación: {{fecha_instalacion}}</p>\\n<p>Día de pago: '
  "{{dia_pago}} de cada mes.</p>',\n"
  ' '
  "ARRAY['empresa','ruc','nombre','identificacion','direccion','plan','precio','fecha_instalacion','dia_pago']),\n"
  '\n'
  '\n'
  "('mail_aviso_pago_1', 'correo', 'email', 'html', TRUE,\n"
  " 'Aviso de pago 1',\n"
  " 'El primer recordatorio, antes del vencimiento. Tono amable: todavía no debe nada.',\n"
  " 'Su factura de {{periodo}} está por vencer',\n"
  " E'<p>Estimado/a {{nombre}}:</p>\\n<p>Le recordamos que su factura de {{periodo}} por {{total}} vence el "
  "{{fecha_vencimiento}}.</p>\\n<p>Gracias por su preferencia.</p>',\n"
  " ARRAY['nombre','periodo','total','fecha_vencimiento']),\n"
  '\n'
  "('mail_aviso_pago_2', 'correo', 'email', 'html', TRUE,\n"
  " 'Aviso de pago 2',\n"
  " 'El segundo, ya vencido. Se le dice que hay saldo pendiente y hasta cuándo puede pagar sin corte.',\n"
  " 'Su factura de {{periodo}} está vencida',\n"
  " E'<p>Estimado/a {{nombre}}:</p>\\n<p>Su factura de {{periodo}} por {{total}} venció el "
  '{{fecha_vencimiento}} y figura pendiente.</p>\\n<p>Puede regularizarla hasta el {{fecha_corte}} para '
  "evitar la suspensión del servicio.</p>',\n"
  " ARRAY['nombre','periodo','total','fecha_vencimiento','fecha_corte']),\n"
  '\n'
  "('mail_aviso_pago_3', 'correo', 'email', 'html', TRUE,\n"
  " 'Aviso de pago 3',\n"
  ' \'El último antes del corte. Tiene que decir la fecha exacta: es lo que evita el reclamo de "nunca me '
  'avisaron".\',\n'
  " 'Último aviso antes de la suspensión',\n"
  " E'<p>Estimado/a {{nombre}}:</p>\\n<p>Su servicio será suspendido el {{fecha_corte}} por un saldo "
  "pendiente de {{saldo}}.</p>\\n<p>Si ya realizó el pago, escríbanos para regularizar su cuenta.</p>',\n"
  " ARRAY['nombre','saldo','fecha_corte']),\n"
  '\n'
  "('mail_pago_confirmado', 'correo', 'email', 'html', TRUE,\n"
  " 'Confirmación de pago',\n"
  ' \'Se manda al registrar un pago. Es lo que evita la llamada de "¿les llegó?".\',\n'
  " 'Recibimos su pago',\n"
  " E'<p>Estimado/a {{nombre}}:</p>\\n<p>Registramos su pago de {{monto}} el {{fecha}}. Su saldo pendiente "
  "ahora es {{saldo}}.</p>\\n<p>Gracias.</p>',\n"
  " ARRAY['nombre','monto','fecha','saldo']),\n"
  '\n'
  "('mail_factura_generada', 'correo', 'email', 'html', TRUE,\n"
  " 'Factura generada',\n"
  " 'Se manda cuando se emite la factura del mes, con el comprobante adjunto.',\n"
  " 'Su factura de {{periodo}}',\n"
  " E'<p>Estimado/a {{nombre}}:</p>\\n<p>Adjuntamos su factura de {{periodo}} por {{total}}, con vencimiento "
  "el {{fecha_vencimiento}}.</p>',\n"
  " ARRAY['nombre','periodo','total','fecha_vencimiento']),\n"
  '\n'
  "('mail_bienvenida', 'correo', 'email', 'html', TRUE,\n"
  " 'Bienvenida',\n"
  " 'El primer correo del abonado nuevo, con sus datos de servicio y cómo pedir soporte.',\n"
  " 'Bienvenido a {{empresa}}',\n"
  " E'<p>Estimado/a {{nombre}}:</p>\\n<p>Su servicio ya está activo.</p>\\n<p>Plan: {{plan}}<br>Día de pago: "
  "{{dia_pago}} de cada mes</p>\\n<p>Para soporte escríbanos al {{telefono}}.</p>',\n"
  " ARRAY['nombre','empresa','plan','dia_pago','telefono']),\n"
  '\n'
  "('mail_ticket_abierto', 'correo', 'email', 'html', TRUE,\n"
  " 'Ticket de soporte',\n"
  " 'Confirma que se recibió el reporte y le da al abonado un número para seguirlo.',\n"
  " 'Recibimos su reporte N° {{ticket}}',\n"
  " E'<p>Estimado/a {{nombre}}:</p>\\n<p>Registramos su reporte con el número {{ticket}}: "
  "{{motivo}}.</p>\\n<p>Le avisaremos apenas tengamos novedades.</p>',\n"
  " ARRAY['nombre','ticket','motivo']),\n"
  '\n'
  "('mail_ticket_respuesta', 'correo', 'email', 'html', TRUE,\n"
  " 'Respuesta a ticket de soporte',\n"
  " 'La respuesta al abonado sobre un reporte abierto.',\n"
  " 'Sobre su reporte N° {{ticket}}',\n"
  " E'<p>Estimado/a {{nombre}}:</p>\\n<p>{{respuesta}}</p>\\n<p>Reporte N° {{ticket}}</p>',\n"
  " ARRAY['nombre','ticket','respuesta']),\n"
  '\n'
  "('mail_ticket_asignado', 'correo', 'email', 'html', TRUE,\n"
  " 'Ticket asignado',\n"
  " 'Le avisa al abonado que su reporte ya tiene técnico asignado y cuándo lo visitan.',\n"
  " 'Su reporte N° {{ticket}} fue asignado',\n"
  " E'<p>Estimado/a {{nombre}}:</p>\\n<p>Su reporte fue asignado a {{tecnico}}, que lo visitará el "
  "{{fecha_visita}}.</p>',\n"
  " ARRAY['nombre','ticket','tecnico','fecha_visita']),\n"
  '\n'
  "('mail_router_caido', 'correo', 'email', 'html', TRUE,\n"
  " 'Caída de router',\n"
  " 'Aviso interno al equipo cuando un router deja de responder.',\n"
  " 'Router {{equipo}} sin respuesta',\n"
  " E'<p>El router <b>{{equipo}}</b> ({{ip}}) dejó de responder el {{fecha}}.</p>\\n<p>Abonados afectados: "
  "{{afectados}}</p>',\n"
  " ARRAY['equipo','ip','fecha','afectados']),\n"
  '\n'
  "('mail_router_conectado', 'correo', 'email', 'html', TRUE,\n"
  " 'Router conectado',\n"
  " 'El aviso de que volvió. Cierra el que avisó la caída.',\n"
  " 'Router {{equipo}} restablecido',\n"
  " E'<p>El router <b>{{equipo}}</b> ({{ip}}) volvió a responder el {{fecha}}.</p>\\n<p>Estuvo caído "
  "{{duracion}}.</p>',\n"
  " ARRAY['equipo','ip','fecha','duracion']),\n"
  '\n'
  "('mail_emisor_caido', 'correo', 'email', 'html', TRUE,\n"
  " 'Caída de emisor',\n"
  " 'Aviso interno cuando se cae una antena o caja NAP, con los abonados que cuelgan de ella.',\n"
  " 'Emisor {{equipo}} sin respuesta',\n"
  " E'<p>El emisor <b>{{equipo}}</b> dejó de responder el {{fecha}}.</p>\\n<p>Abonados afectados: "
  "{{afectados}}</p>',\n"
  " ARRAY['equipo','fecha','afectados','zona']),\n"
  '\n'
  "('mail_emisor_conectado', 'correo', 'email', 'html', TRUE,\n"
  " 'Emisor conectado',\n"
  " 'El aviso de que la antena o la caja volvió.',\n"
  " 'Emisor {{equipo}} restablecido',\n"
  " E'<p>El emisor <b>{{equipo}}</b> volvió a responder el {{fecha}}.</p>\\n<p>Estuvo caído "
  "{{duracion}}.</p>',\n"
  " ARRAY['equipo','fecha','duracion','zona']),\n"
  '\n'
  "('mail_personalizado', 'correo', 'email', 'html', FALSE,\n"
  " 'Correo personalizado',\n"
  " 'Para escribirle a un abonado sin plantilla fija. Se edita al momento de mandarlo.',\n"
  " '{{asunto}}',\n"
  " E'<p>Estimado/a {{nombre}}:</p>\\n<p>{{mensaje}}</p>',\n"
  " ARRAY['nombre','asunto','mensaje']),\n"
  '\n'
  '\n'
  '\n'
  '\n'
  "('sms_aviso_pago_1', 'sms', 'sms', 'texto', TRUE,\n"
  " 'Aviso de pago SMS 1',\n"
  " 'Recordatorio antes del vencimiento.',\n"
  ' NULL,\n'
  " '{{empresa}}: su factura de {{periodo}} por {{total}} vence el {{fecha_vencimiento}}.',\n"
  " ARRAY['empresa','periodo','total','fecha_vencimiento']),\n"
  '\n'
  "('sms_aviso_pago_2', 'sms', 'sms', 'texto', TRUE,\n"
  " 'Aviso de pago SMS 2',\n"
  " 'Recordatorio con la factura ya vencida.',\n"
  ' NULL,\n'
  " '{{empresa}}: su factura de {{periodo}} venció. Saldo pendiente {{saldo}}. Puede pagar hasta el "
  "{{fecha_corte}}.',\n"
  " ARRAY['empresa','periodo','saldo','fecha_corte']),\n"
  '\n'
  "('sms_aviso_pago_3', 'sms', 'sms', 'texto', TRUE,\n"
  " 'Aviso de pago SMS 3',\n"
  " 'El último antes del corte, con la fecha exacta.',\n"
  ' NULL,\n'
  " '{{empresa}}: su servicio se suspende el {{fecha_corte}} por {{saldo}} pendiente. Si ya pagó, "
  "avísenos.',\n"
  " ARRAY['empresa','saldo','fecha_corte']),\n"
  '\n'
  "('sms_factura_generada', 'sms', 'sms', 'texto', TRUE,\n"
  " 'Nueva factura generada',\n"
  " 'Avisa que ya se emitió la factura del mes.',\n"
  ' NULL,\n'
  " '{{empresa}}: su factura de {{periodo}} por {{total}} ya está disponible. Vence el "
  "{{fecha_vencimiento}}.',\n"
  " ARRAY['empresa','periodo','total','fecha_vencimiento']),\n"
  '\n'
  "('sms_corte_servicio', 'sms', 'sms', 'texto', TRUE,\n"
  " 'Corte de servicio',\n"
  " 'Se manda en el momento del corte. Tiene que decir cómo reactivar, no solo que se cortó.',\n"
  ' NULL,\n'
  " '{{empresa}}: su servicio fue suspendido por {{saldo}} pendiente. Al registrar su pago se reactiva. "
  "Consultas: {{telefono}}',\n"
  " ARRAY['empresa','saldo','telefono']),\n"
  '\n'
  "('sms_bienvenida', 'sms', 'sms', 'texto', TRUE,\n"
  " 'Bienvenida',\n"
  " 'El primer mensaje del abonado nuevo.',\n"
  ' NULL,\n'
  " 'Bienvenido a {{empresa}}. Su servicio {{plan}} está activo. Paga el {{dia_pago}} de cada mes. Soporte: "
  "{{telefono}}',\n"
  " ARRAY['empresa','plan','dia_pago','telefono']),\n"
  '\n'
  "('sms_pago_confirmado', 'sms', 'sms', 'texto', TRUE,\n"
  " 'Confirmación de pago',\n"
  ' \'Evita la llamada de "¿les llegó mi pago?".\',\n'
  ' NULL,\n'
  " '{{empresa}}: recibimos su pago de {{monto}}. Saldo actual: {{saldo}}. Gracias.',\n"
  " ARRAY['empresa','monto','saldo']),\n"
  '\n'
  "('sms_router_caido', 'sms', 'telegram', 'texto', TRUE,\n"
  " 'Router caído',\n"
  " 'Aviso interno al grupo del equipo.',\n"
  ' NULL,\n'
  " 'ROUTER CAÍDO: {{equipo}} ({{ip}}) no responde desde {{fecha}}. Afectados: {{afectados}}',\n"
  " ARRAY['equipo','ip','fecha','afectados']),\n"
  '\n'
  "('sms_router_conectado', 'sms', 'telegram', 'texto', TRUE,\n"
  " 'Router conectado',\n"
  " 'El cierre del aviso anterior.',\n"
  ' NULL,\n'
  " 'ROUTER OK: {{equipo}} ({{ip}}) volvió. Estuvo caído {{duracion}}.',\n"
  " ARRAY['equipo','ip','duracion']),\n"
  '\n'
  "('sms_emisor_caido', 'sms', 'telegram', 'texto', TRUE,\n"
  " 'Emisor caído',\n"
  " 'Aviso interno de antena o caja NAP caída.',\n"
  ' NULL,\n'
  " 'EMISOR CAÍDO: {{equipo}} en {{zona}} no responde desde {{fecha}}. Afectados: {{afectados}}',\n"
  " ARRAY['equipo','zona','fecha','afectados']),\n"
  '\n'
  "('sms_emisor_conectado', 'sms', 'telegram', 'texto', TRUE,\n"
  " 'Emisor conectado',\n"
  " 'El cierre del aviso anterior.',\n"
  ' NULL,\n'
  " 'EMISOR OK: {{equipo}} en {{zona}} volvió. Estuvo caído {{duracion}}.',\n"
  " ARRAY['equipo','zona','duracion']),\n"
  '\n'
  '\n'
  "('web_aviso_pago', 'web', 'web', 'html', TRUE,\n"
  " 'Aviso de pago',\n"
  " 'La página que ve el abonado que está por vencer, antes del corte. Se muestra desde la lista de aviso "
  "previo del router.',\n"
  " 'Su factura está por vencer',\n"
  " E'<p>Su factura de {{periodo}} por {{total}} vence el {{fecha_vencimiento}}.</p>\\n<p>Puede pagar en las "
  "cuentas que aparecen abajo y enviarnos el comprobante.</p>',\n"
  " ARRAY['nombre','periodo','total','fecha_vencimiento','saldo']),\n"
  '\n'
  "('web_aviso_corte', 'web', 'web', 'html', TRUE,\n"
  " 'Aviso de corte',\n"
  " 'La página que ve el abonado suspendido al abrir el navegador. Es la que reemplaza a la del sistema "
  "anterior.',\n"
  " 'Tu servicio está suspendido',\n"
  " 'Tu servicio de internet fue suspendido por falta de pago. Apenas registremos tu pago se reactiva "
  "automáticamente.',\n"
  " ARRAY['nombre','saldo','plan','codigo'])\n"
  '\n'
  '\n'
  '\n'
  'ON CONFLICT (clave) WHERE clave IS NOT NULL DO NOTHING'),
 (127, 'config_avisos_pago', 'INSERT INTO config_avisos_pago (id) VALUES (1) ON CONFLICT (id) DO NOTHING'),
 (135,
  'plantillas_mensaje',
  'INSERT INTO plantillas_mensaje\n'
  '    (clave, categoria, canal, formato, del_sistema, nombre, descripcion, asunto, cuerpo, variables)\n'
  'VALUES\n'
  "('mail_corte_servicio', 'correo', 'email', 'html', TRUE,\n"
  " 'Corte de servicio',\n"
  " 'Se manda en el momento del corte. Tiene que decir cómo reactivar, no solo que se cortó: es el mensaje "
  "que más llamadas evita.',\n"
  " 'Su servicio fue suspendido',\n"
  " E'<p>Estimado/a {{nombre}}:</p>\\n<p>Su servicio de internet fue suspendido por un saldo pendiente de "
  '{{saldo}}.</p>\\n<p>Apenas registremos su pago, el servicio se reactiva automáticamente en pocos '
  "minutos.</p>\\n<p>Cualquier consulta, escríbanos al {{telefono}}.</p>',\n"
  " ARRAY['nombre','saldo','telefono','plan'])\n"
  'ON CONFLICT (clave) WHERE clave IS NOT NULL DO NOTHING'),
 (137,
  'plantillas_mensaje',
  'INSERT INTO plantillas_mensaje\n'
  '    (clave, categoria, canal, formato, del_sistema, nombre, descripcion, asunto, cuerpo, variables)\n'
  'VALUES\n'
  "('sms_ticket_abierto', 'sms', 'whatsapp', 'texto', TRUE,\n"
  " 'Ticket de soporte',\n"
  " 'Confirma que se recibió el reporte y le da al abonado un número para seguirlo.',\n"
  ' NULL,\n'
  " '{{empresa}}: recibimos su reporte N° {{ticket}}. Le avisamos apenas tengamos novedades.',\n"
  " ARRAY['empresa','ticket','motivo']),\n"
  '\n'
  "('sms_ticket_asignado', 'sms', 'whatsapp', 'texto', TRUE,\n"
  " 'Ticket asignado',\n"
  " 'Le avisa que su reporte ya tiene técnico y cuándo lo visitan.',\n"
  ' NULL,\n'
  " '{{empresa}}: su reporte N° {{ticket}} fue asignado a {{tecnico}}. Visita: {{fecha_visita}}',\n"
  " ARRAY['empresa','ticket','tecnico','fecha_visita']),\n"
  '\n'
  "('sms_ticket_respuesta', 'sms', 'whatsapp', 'texto', TRUE,\n"
  " 'Respuesta a ticket de soporte',\n"
  " 'La respuesta al abonado sobre un reporte abierto.',\n"
  ' NULL,\n'
  " '{{empresa}} · reporte {{ticket}}: {{respuesta}}',\n"
  " ARRAY['empresa','ticket','respuesta'])\n"
  '\n'
  'ON CONFLICT (clave) WHERE clave IS NOT NULL DO NOTHING'),
 (148, 'config_firma', 'INSERT INTO config_firma (id) VALUES (1) ON CONFLICT (id) DO NOTHING'),
 (150,
  'clausulas_contrato',
  'INSERT INTO clausulas_contrato\n'
  '    (prestador_id, orden, numeral, titulo, texto, cierre, cierre2, numerales,\n'
  '     bloque, bloque_final, condicion, etiqueta_condicion, raya_firma,\n'
  '     lista_titulo, lista_campo)\n'
  'SELECT * FROM (VALUES\n'
  "(NULL::UUID, 2, 'CLÁUSULA SEGUNDA', 'Objeto',\n"
  " 'El Prestador del servicio se compromete a proporcionar al Abonado el/los siguiente(s) servicio(s), para "
  'lo cual el Prestador dispone de los correspondientes títulos habilitantes otorgados por la ARCOTEL, de '
  "conformidad con el ordenamiento jurídico vigente:',\n"
  " 'Las Condiciones Técnicas del/los servicio(s) que el Abonado va a contratar se encuentran detalladas en "
  "el Anexo N° 1f, el cual forma parte integrante del presente contrato.',\n"
  " NULL, '[]'::JSONB, 'servicios', NULL, NULL, NULL, FALSE, NULL, NULL),\n"
  '\n'
  "(NULL, 3, 'CLÁUSULA TERCERA', 'Anexos',\n"
  ' \'Es parte integrante del presente CONTRATO el Anexo 1 que contiene las "Condiciones particulares del '
  'Servicio". El Anexo 2 "Aceptación de uso de datos personales". El Anexo 3 "Compra o arrendamiento de '
  'Equipos". Acta de Entrega/Instalación.\',\n'
  " NULL, NULL, '[]'::JSONB, NULL, NULL, NULL, NULL, FALSE, NULL, NULL),\n"
  '\n'
  "(NULL, 4, 'CLÁUSULA CUARTA', 'Vigencia del Contrato',\n"
  " 'El presente contrato tendrá una duración de {{vigencia}} y entrará en vigencia, a partir de la fecha de "
  'instalación y prestación efectiva del servicio. La fecha inicial considerada para facturación para cada '
  'uno de los servicios contratados debe ser la de la activación de servicio. Las partes se comprometen a '
  'respetar el plazo de vigencia pactado. El Abonado acepta la renovación automática sucesiva del contrato '
  'en las mismas condiciones de este contrato, independientemente de su derecho a terminar la relación '
  'contractual conforme la legislación aplicable, o solicitar en cualquier tiempo, con hasta quince (15) '
  "días de antelación a la fecha de renovación, su decisión de no renovación:',\n"
  " 'Cuando un contrato contemple renovación automática como una de sus condiciones, ésta será notificada "
  'por el prestador con quince (15) días de anticipación a su renovación a los medios de contacto '
  'registrados por el usuario. Para la renovación no se podrán exigir requisitos adicionales a los '
  "previamente solicitados al momento de la contratación inicial.',\n"
  " NULL, '[]'::JSONB, NULL, NULL, 'renovacion_automatica', NULL, FALSE, NULL, NULL),\n"
  '\n'
  "(NULL, 5, 'CLÁUSULA QUINTA', 'Permanencia mínima',\n"
  " '¿El Abonado se acoge al periodo de permanencia mínima de {{permanencia_ofrecida}} en la prestación del "
  "servicio contratado?',\n"
  " 'La permanencia mínima se acuerda, sin perjuicio de que el abonado/suscriptor conforme lo determina la "
  'Ley Orgánica de Telecomunicaciones, pueda dar por terminado el contrato en forma unilateral y anticipada, '
  'y en cualquier tiempo previa notificación por medios físicos, telefónicos o electrónicos al prestador, '
  'con por lo menos (15) días calendario de anticipación. El contrato terminará quince (15) días calendario '
  "posteriores a la fecha de presentación de la solicitud.',\n"
  " NULL, '[]'::JSONB, NULL, NULL, 'permanencia', NULL, FALSE,\n"
  " 'Los beneficios de la permanencia mínima son:', 'beneficios'),\n"
  '\n'
  "(NULL, 6, 'CLÁUSULA SEXTA', 'Tarifa y forma de pago',\n"
  " 'Las tarifas o valores mensuales a ser cancelados por cada uno de los servicios contratados por el "
  'Abonado estará determinada en la ficha de cada servicio, que constan en el Anexo 1f y el pago se '
  "realizará, de la siguiente forma:',\n"
  " 'La tarifa correspondiente al servicio contratado y efectivamente prestado estará dentro de los techos "
  'tarifarios señalados por la ARCOTEL y en los títulos habilitantes correspondientes, en caso de que se '
  'establezcan, de conformidad con el ordenamiento jurídico vigente. En caso de que el Abonado desee cambiar '
  'su modalidad de pago a otra de las disponibles, deberá comunicar al Prestador del servicio con quince '
  '(15) días de anticipación. El Prestador del servicio, luego de haber sido comunicado, instrumentará la '
  'nueva forma de pago. Cuando las actividades de recaudación se realicen directamente con el personal, '
  'infraestructura, aplicativos y desarrollos tecnológicos propios de la prestadora, ésta no podrá cobrar '
  'valor alguno al abonado, suscriptor o cliente por comisión de servicios y no aplica en caso de '
  "coactiva.',\n"
  " NULL, '[]'::JSONB, 'formas_pago', NULL, NULL, NULL, FALSE, NULL, NULL),\n"
  '\n'
  "(NULL, 7, 'CLÁUSULA SEPTIMA', 'Instalación', NULL, NULL, NULL,\n"
  ' to_jsonb(ARRAY[\n'
  "   '7.1 Todos los equipos con que se prestan EL SERVICIO son de propiedad de EL Prestador. El Abonado los "
  'tiene en calidad de custodio, por tal motivo es su obligación velar por ellos y cuidar que se conserven '
  "en buen estado. Sin perjuicio de su responsabilidad.',\n"
  "   '7.2 Si en las fechas establecidas de común acuerdo no pudieran llevarse a cabo las actividades "
  'programadas para la instalación y puesta en marcha del SERVICIO por causas atribuibles al Abonado, esta '
  "se reprogramará conforme la disponibilidad de trabajos del Prestador.',\n"
  "   '7.3 Realizada la instalación del SERVICIO, El Prestador levantará un Acta de entrega/instalación del "
  "o de los servicios y le notificará al Abonado.',\n"
  "   '7.4 Si EL Abonado introduce cambios que varíen el diseño físico, mecánico o eléctrico de los equipos, "
  'El Prestador quedará facultado para interrumpir el servicio que involucre a la unidad afectada y retirar '
  'el equipo instalado. EL Abonado deberá responder por las consecuencias y daños que los cambios y/o la '
  'adición y/o modificación hayan ocasionado al Prestador, y el reembolso de todos los gastos que resulte '
  "necesario efectuar.',\n"
  "   '7.5 Las modificaciones en los lugares de instalación o en las obras de infraestructura que se hagan "
  "necesarias para la instalación, serán realizadas por el Abonado conforme descripción del Prestador.'\n"
  ' ]), NULL, NULL, NULL, NULL, FALSE, NULL, NULL),\n'
  '\n'
  "(NULL, 8, 'CLÁUSULA OCTAVA', 'Compra, Arrendamiento de Equipos',\n"
  " 'Adicional al servicio contratado, objeto de este contrato y sin que este sea requisito para la "
  'prestación del servicio, el Prestador entrega en calidad de arrendamiento o venta, equipos accesorios '
  'para ser usados con el servicio, conforme el detalle, especificaciones y precio que se describen en el '
  'ANEXO 3. Para equipos en arriendo, al momento de la entrega de los equipos o terminación del contrato se '
  'considerará el deterioro normal y depreciación de los mismos. En caso de terminación del contrato, cuando '
  "se trate de adquisición de los equipos el Abonado deberá cancelar únicamente las cuotas pendientes.',\n"
  " 'El prestador del servicio no podrá cobrar por el arrendamiento de equipos cuando estos sean parte "
  'fundamental e indispensable en la prestación del servicio. Únicamente lo podrá hacer cuando estos sean '
  'considerados equipos adicionales solicitados por el abonado, suscriptor o cliente. En los casos de '
  'renovación del contrato, el prestador propenderá al cambio del equipo, cuando este haya alcanzado la '
  'obsolescencia tecnológica que impida garantizar la calidad y las condiciones en la prestación del '
  'servicio contratado, sin costo adicional para el caso de los equipos que sean parte fundamental e '
  "indispensable en la prestación del servicio.',\n"
  ' NULL,\n'
  ' to_jsonb(ARRAY[\n'
  "   '8.1 Mantenimiento o Reposición: Equipos de propiedad del Abonado: El servicio de mantenimiento de los "
  'equipos de propiedad del Abonado empleados en la prestación del servicio estará a cargo de su propietario '
  'y por lo tanto EL Prestador no está obligado a realizar mantenimiento o reposición, salvo el caso de '
  "obligaciones de garantía por venta de equipos previamente acordada por las partes.',\n"
  "   '8.2 Mantenimiento o Reposición: Equipos de propiedad del Prestador entregados en calidad de "
  'arrendamiento: El servicio de mantenimiento no tendrá cargo alguno para el Abonado y contemplará toda '
  'reparación, ajuste, cambio de partes, reemplazo o reposición de los equipos cuyas fallas resulten por el '
  'uso normal y apropiado del mismo y de vicios en los equipos, sin perjuicio de las consecuencias previstas '
  'en EL CONTRATO para los casos de incumplimiento de las obligaciones por parte del Abonado, respecto al '
  'buen uso, cuidado de los equipos y cumplimiento de las obligaciones relacionadas al canon de '
  "arrendamiento y devolución al finalizar el período de servicio.',\n"
  "   '8.3 Mantenimiento o Reposición: Equipos de propiedad de EL Prestador entregados en calidad de "
  'préstamos: El servicio de mantenimiento no tendrá cargo alguno para el Abonado y contemplará toda '
  'reparación, ajuste, cambio de partes, reemplazo o reposición de los equipos cuyas fallas resulten por el '
  'uso normal y apropiado del mismo y de vicios en los equipos, sin perjuicio de las consecuencias previstas '
  'en EL CONTRATO, para los casos de incumplimiento de las obligaciones por parte del Abonado, respecto al '
  'buen uso, cuidado de los equipos entregados en custodia y devolución al finalizar el periodo de '
  "servicio.'\n"
  ' ]), NULL, NULL, NULL, NULL, FALSE, NULL, NULL),\n'
  '\n'
  "(NULL, 9, 'CLÁUSULA NOVENA', 'Uso de información personal',\n"
  " 'Los datos personales que los Abonados/Suscriptores proporcionen al Prestador de servicios del régimen "
  'general de telecomunicaciones, no podrán ser usados para la promoción comercial de servicios o productos, '
  'inclusive de la propia operadora; salvo autorización y consentimiento expreso del Abonado, el que '
  'constará como instrumento separado y distinto al presente contrato de prestación de servicios (contrato '
  'de adhesión) a través de medios físicos o electrónicos. En dicho instrumento se deberá dejar constancia '
  'expresa de los datos personales o información que están expresamente autorizados; el plazo de la '
  'autorización y el objetivo que esta utilización persigue, conforme lo dispuesto en el artículo 121 del '
  'Reglamento General a la Ley Orgánica de Telecomunicaciones. La autorización de uso de los datos '
  'personales e información aquí consignada para fines de promoción y comercial de los productos y servicios '
  'que la empresa oferta exclusivamente a sus Abonados/Suscriptores, así como para consultar y referir la '
  "información crediticia del Abonado, consta expresamente en el Anexo 2.',\n"
  ' NULL, NULL,\n'
  ' to_jsonb(ARRAY[\n'
  "   'Privacidad y protección de datos personales.- El uso, tratamiento y protección de los datos "
  'personales debe regirse estrictamente por lo establecido en la Ley Orgánica de Protección de Datos '
  'Personales, su Reglamento General y las directrices emitidas por la Autoridad de Protección de Datos. '
  'Toda la información personal que se recopile, procese o almacene debe manejarse con total transparencia, '
  'seguridad y respeto a los derechos de los titulares de los datos. Se debe garantizar que los datos serán '
  'utilizados únicamente para los fines contractuales para la prestación del servicio y adicionalmente para '
  'los que el usuario ha dado su consentimiento explícito, informado, y siempre en cumplimiento con el marco '
  'legal vigente. Los datos contenidos en las guías telefónicas de telefonía fija se considerarán datos de '
  'fuentes accesibles al público. No obstante, los abonados tendrán derecho a que sus datos personales sean '
  'excluidos gratuitamente de dichas guías, a partir de su solicitud explícita y por cualquier mecanismo de '
  "atención disponible por el prestador.'\n"
  ' ]), NULL, NULL, NULL, NULL, FALSE, NULL, NULL),\n'
  '\n'
  "(NULL, 10, 'CLÁUSULA DECIMA', 'Reclamos y soporte técnico',\n"
  " 'El Abonado podrá requerir soporte técnico o presentar reclamos al Prestador de servicios a través de "
  "los siguientes medios o puntos:',\n"
  " 'En el caso en que su queja, reclamo o solicitud no hayan sido resueltos por el prestador del servicio, "
  'en relación a la calidad del servicio prestado, a errores de facturación de los servicios, facturación de '
  'servicios no contratados, cobros indebidos, o en general por cualquier irregularidad que se hubiere '
  'producido en relación con el servicio contratado, los abonados, clientes o suscriptores podrán presentar '
  "las mismas a través de cualquiera de los siguientes canales de atención:',\n"
  " NULL, '[]'::JSONB, 'reclamos', 'canales_arcotel', NULL, NULL, FALSE, NULL, NULL),\n"
  '\n'
  "(NULL, 11, 'CLÁUSULA DECIMA PRIMERA', 'Normativa Aplicable',\n"
  " 'En la prestación del servicio, se entienden incluidos todos los derechos y obligaciones de los "
  'Abonados/Suscriptores, establecidos en las normas jurídicas aplicables, así como también los derechos y '
  'obligaciones de los Prestadores de servicios de telecomunicaciones y/o servicios de radiodifusión por '
  "suscripción, dispuestos en el marco regulatorio.',\n"
  " NULL, NULL, '[]'::JSONB, NULL, NULL, NULL, NULL, FALSE, NULL, NULL),\n"
  '\n'
  "(NULL, 12, 'CLÁUSULA DECIMA SEGUNDA', 'Causales y Mecanismos de Terminación del contrato',\n"
  " 'Las partes acuerdan recíprocamente que EL CONTRATO se terminará por la ejecución total de las "
  'obligaciones derivadas del mismo; por acuerdo mutuo y que conste por escrito, o cuando ocurra alguna de '
  "las siguientes causales:',\n"
  " 'Los abonados, suscriptores o clientes tienen el derecho de terminar su contrato de manera anticipada y "
  'unilateral en cualquier momento, sin importar el plazo de vigencia establecido. Pueden hacerlo a través '
  'de cualquier medio físico, telefónico o electrónico, simplemente notificando al prestador su decisión con '
  'al menos quince (15) días calendario de anticipación a la finalización del periodo de facturación en '
  'curso. Esta terminación unilateral no generará multas, penalidades, recargos de valores o costos '
  "adicionales de ninguna naturaleza.',\n"
  " 'Los saldos pendientes de pago relacionados con cualquiera de los conceptos como, prestación del "
  'servicio, equipo terminal, condición de permanencia mínima, y la entrega cualquier equipo provisto al '
  'abonado, suscriptor o cliente, no podrán ser impedimento para el libre ejercicio del derecho a la '
  'terminación unilateral del contrato, por parte del abonado, suscriptor o cliente, manteniendo únicamente '
  'la obligación de pago por los servicios efectivamente prestados y condiciones contratadas hasta la '
  'terminación del contrato, los cuales podrán ser recaudados por el prestador a través de los mecanismos y '
  "procedimiento legales correspondientes.',\n"
  " '[]'::JSONB, 'causales', NULL, NULL, NULL, FALSE, NULL, NULL),\n"
  '\n'
  "(NULL, 13, 'CLÁUSULA DÉCIMA TERCERA', 'Controversias',\n"
  " 'Las diferencias que surjan de la ejecución del presente contrato, podrán ser resueltas por mutuo "
  'acuerdo entre las partes, sin perjuicio de que el Abonado acuda con su reclamo, queja o denuncia, ante '
  'las autoridades administrativas que correspondan. De no llegarse a una solución, cualquiera de las partes '
  'podrá acudir ante los jueces competentes. No obstante, lo indicado las partes pueden pactar '
  'adicionalmente, someter sus controversias ante un centro de mediación o arbitraje, si así lo deciden '
  "expresamente, en cuyo caso el Abonado deberá señalarlo en forma expresa.',\n"
  ' NULL, NULL,\n'
  ' to_jsonb(ARRAY[\n'
  "   'El Abonado, en caso de conflicto, acepta someterse a la mediación o arbitraje (puede significar "
  'costos en los que debe incurrir el Abonado – No aplica a Empresas Públicas prestadoras de servicios de '
  "telecomunicaciones)'\n"
  " ]), NULL, NULL, 'arbitraje', 'Firma de aceptación-sujeción a arbitraje:', TRUE, NULL, NULL),\n"
  '\n'
  "(NULL, 14, 'CLAUSULA DECIMA CUARTA', 'Notificaciones y Domicilio',\n"
  " 'Las notificaciones que corresponda, serán entregadas en el domicilio de cada una de las partes señalado "
  'en la cláusula primera del presente contrato. Cualquier cambio de domicilio debe ser comunicado por '
  'escrito a la otra parte en un plazo de 10 días, a partir del día siguiente en que el cambio se '
  "efectúe.',\n"
  " NULL, NULL, '[]'::JSONB, NULL, NULL, NULL, NULL, FALSE, NULL, NULL),\n"
  '\n'
  "(NULL, 15, 'CLAUSULA DECIMA QUINTA', 'Empaquetamiento de servicios',\n"
  " 'La contratación incluye empaquetamiento de servicios:',\n"
  " NULL, NULL, '[]'::JSONB, 'paquetes', NULL, 'empaquetamiento', NULL, FALSE, NULL, NULL)\n"
  ') AS v\n'
  'WHERE NOT EXISTS (SELECT 1 FROM clausulas_contrato WHERE prestador_id IS NULL)'),
 (174,
  'plantillas_mensaje',
  'INSERT INTO plantillas_mensaje\n'
  '    (clave, categoria, canal, formato, del_sistema, nombre, descripcion, asunto, cuerpo, variables)\n'
  'VALUES\n'
  "('sms_incidencia_abierta', 'sms', 'sms', 'texto', TRUE,\n"
  " 'Aviso de avería en la zona',\n"
  " 'Sale a todos los abonados afectados apenas se abre la incidencia. Es el mensaje que evita que el canal "
  "de soporte se tape.',\n"
  ' NULL,\n'
  " '{{empresa}}: estamos con una avería que afecta el servicio en su sector ({{titulo}}). Ya estamos "
  "trabajando. {{estimado}} Disculpe las molestias.',\n"
  " ARRAY['nombre','empresa','titulo','estimado','zona']),\n"
  '\n'
  "('mail_incidencia_abierta', 'correo', 'email', 'html', TRUE,\n"
  " 'Aviso de avería en la zona (correo)',\n"
  " 'La versión larga del aviso de avería, con el detalle y el horario estimado.',\n"
  " 'Estamos trabajando en una avería en su sector',\n"
  " E'<p>Estimado/a {{nombre}}:</p>\\n<p>Le informamos que se registró una avería que afecta el servicio de "
  'internet en su sector: <b>{{titulo}}</b>.</p>\\n<p>{{descripcion}}</p>\\n<p>{{estimado}}</p>\\n<p>No hace '
  'falta que reinicie su equipo ni que nos escriba: le vamos a avisar apenas quede '
  "restablecido.</p>\\n<p>Disculpe las molestias.</p>',\n"
  " ARRAY['nombre','empresa','titulo','descripcion','estimado','zona']),\n"
  '\n'
  "('sms_incidencia_resuelta', 'sms', 'sms', 'texto', TRUE,\n"
  " 'Aviso de avería solucionada',\n"
  " 'Va solo a quien recibió el aviso de la avería. Es lo que hace que el abonado deje de reiniciar el "
  "router.',\n"
  ' NULL,\n'
  " '{{empresa}}: la avería en su sector quedó solucionada y el servicio está restablecido. Si sigue sin "
  "internet, escríbanos.',\n"
  " ARRAY['nombre','empresa','titulo','duracion']),\n"
  '\n'
  "('mail_incidencia_resuelta', 'correo', 'email', 'html', TRUE,\n"
  " 'Aviso de avería solucionada (correo)',\n"
  " 'La versión larga del aviso de restablecimiento.',\n"
  " 'Su servicio quedó restablecido',\n"
  " E'<p>Estimado/a {{nombre}}:</p>\\n<p>La avería que afectaba el servicio en su sector quedó solucionada y "
  'su internet está restablecido.</p>\\n<p>Si después de reiniciar su equipo sigue sin conexión, escríbanos: '
  'en ese caso se trata de algo puntual de su domicilio y lo revisamos aparte.</p>\\n<p>Gracias por la '
  "paciencia.</p>',\n"
  " ARRAY['nombre','empresa','titulo','duracion']),\n"
  '\n'
  "('sms_mantenimiento_programado', 'sms', 'sms', 'texto', TRUE,\n"
  " 'Aviso de mantenimiento programado',\n"
  " 'Se manda ANTES del corte, con la ventana. Un mantenimiento avisado no genera reclamos; el mismo corte "
  "sin avisar, sí.',\n"
  ' NULL,\n'
  " '{{empresa}}: el {{ventana}} haremos un mantenimiento programado que puede interrumpir su servicio "
  "({{titulo}}). Le pedimos disculpas por el inconveniente.',\n"
  " ARRAY['nombre','empresa','titulo','ventana','zona']),\n"
  '\n'
  "('mail_mantenimiento_programado', 'correo', 'email', 'html', TRUE,\n"
  " 'Aviso de mantenimiento programado (correo)',\n"
  " 'La versión larga del aviso previo de mantenimiento.',\n"
  " 'Mantenimiento programado en su sector',\n"
  " E'<p>Estimado/a {{nombre}}:</p>\\n<p>Le informamos que realizaremos un mantenimiento programado que "
  'puede interrumpir su servicio de internet.</p>\\n<p><b>Cuándo:</b> {{ventana}}<br/><b>Motivo:</b> '
  '{{titulo}}</p>\\n<p>{{descripcion}}</p>\\n<p>El trabajo es para mejorar la calidad del servicio en su '
  "sector. Disculpe las molestias.</p>',\n"
  " ARRAY['nombre','empresa','titulo','descripcion','ventana','zona'])\n"
  'ON CONFLICT (clave) WHERE clave IS NOT NULL DO NOTHING'),
 (176,
  'plantillas_whatsapp',
  'INSERT INTO plantillas_whatsapp\n'
  '    (plantilla_id, nombre_meta, idioma, categoria, cuerpo_meta, variables, ejemplos, notas)\n'
  "SELECT p.id, v.nombre_meta, 'es', 'UTILITY', v.cuerpo, v.variables, v.ejemplos, v.notas\n"
  '  FROM (VALUES\n'
  '    \n'
  "    ('sms_factura_generada', 'factura_generada',\n"
  "     'Su factura de {{1}} por {{2}} ya está disponible. Vence el {{3}}. Puede consultarla o pagarla "
  "cuando guste.',\n"
  "     ARRAY['periodo', 'total', 'fecha_vencimiento'],\n"
  "     ARRAY['agosto 2026', '$20.00', '15/08/2026'],\n"
  "     'Se manda al emitirse la factura del mes.'),\n"
  '\n'
  '    \n'
  "    ('sms_aviso_pago_1', 'aviso_pago_recordatorio',\n"
  "     'Le recordamos que su factura de {{1}} por {{2}} vence el {{3}}. Si ya realizó el pago, puede "
  "ignorar este mensaje.',\n"
  "     ARRAY['periodo', 'total', 'fecha_vencimiento'],\n"
  "     ARRAY['agosto 2026', '$20.00', '15/08/2026'],\n"
  "     'Antes del vencimiento. La frase final evita que conteste quien ya pagó.'),\n"
  '\n'
  "    ('sms_aviso_pago_2', 'aviso_pago_vencida',\n"
  "     'Su factura de {{1}} se encuentra vencida. Saldo pendiente: {{2}}. Puede regularizarla hasta el "
  "{{3}} para mantener su servicio activo.',\n"
  "     ARRAY['periodo', 'saldo', 'fecha_corte'],\n"
  "     ARRAY['agosto 2026', '$20.00', '25/08/2026'],\n"
  "     'Ya venció y todavía no se cortó.'),\n"
  '\n'
  "    ('sms_aviso_pago_3', 'aviso_pago_ultimo',\n"
  "     'Su servicio será suspendido el {{1}} por un saldo pendiente de {{2}}. Si ya realizó el pago, por "
  "favor comuníquese con nosotros para regularizarlo.',\n"
  "     ARRAY['fecha_corte', 'saldo'],\n"
  "     ARRAY['25/08/2026', '$20.00'],\n"
  "     'El último antes del corte. Es el que más llamadas evita.'),\n"
  '\n'
  '    \n'
  "    ('sms_corte_servicio', 'servicio_suspendido',\n"
  "     'Su servicio fue suspendido por un saldo pendiente de {{1}}. Al registrarse su pago se reactiva "
  "automáticamente. Para cualquier consulta puede comunicarse al {{2}}, con gusto lo atendemos.',\n"
  "     ARRAY['saldo', 'telefono'],\n"
  "     ARRAY['$20.00', '099 123 4567'],\n"
  "     'En el momento del corte. Dice CÓMO reactivar, no solo que se cortó.'),\n"
  '\n'
  '    \n'
  "    ('sms_pago_confirmado', 'pago_confirmado',\n"
  "     'Recibimos su pago de {{1}}. Su saldo actual es {{2}}. Gracias por su preferencia.',\n"
  "     ARRAY['monto', 'saldo'],\n"
  "     ARRAY['$20.00', '$0.00'],\n"
  '     \'Evita la llamada de "¿les llegó mi pago?" y la de quien paga dos veces.\'),\n'
  '\n'
  '    \n'
  "    ('sms_incidencia_abierta', 'averia_en_su_sector',\n"
  "     'Estamos atendiendo una avería que afecta el servicio en su sector: {{1}}. {{2}} No es necesario que "
  "reinicie su equipo; le avisaremos apenas quede restablecido.',\n"
  "     ARRAY['titulo', 'estimado'],\n"
  "     ARRAY['corte de fibra en la vía principal', 'Estimamos restablecerlo alrededor de las 21:30.'],\n"
  "     'La que descarga el canal de soporte durante un corte masivo.'),\n"
  '\n'
  "    ('sms_incidencia_resuelta', 'averia_solucionada',\n"
  "     'Le informamos que la avería que afectaba el servicio en su sector quedó solucionada y su conexión "
  "está restablecida. Si continúa sin servicio, escríbanos.',\n"
  '     ARRAY[]::TEXT[],\n'
  '     ARRAY[]::TEXT[],\n'
  "     'Sin variables a propósito: menos partes móviles, aprobación más rápida.'),\n"
  '\n'
  "    ('sms_mantenimiento_programado', 'mantenimiento_programado',\n"
  "     'Realizaremos un mantenimiento programado que puede interrumpir su servicio el {{1}}. Motivo: {{2}}. "
  "Disculpe las molestias que esto pueda ocasionar.',\n"
  "     ARRAY['ventana', 'titulo'],\n"
  "     ARRAY['20/08 de 02:00 a 05:00', 'mejora de la red en su sector'],\n"
  "     'Se manda ANTES del corte. Un mantenimiento avisado no genera reclamos.'),\n"
  '\n'
  '    \n'
  "    ('sms_bienvenida', 'bienvenida_abonado',\n"
  "     'Le damos la bienvenida. Su servicio de internet ya se encuentra activo. Ante cualquier consulta "
  "puede escribirnos por este mismo medio.',\n"
  '     ARRAY[]::TEXT[],\n'
  '     ARRAY[]::TEXT[],\n'
  "     'Es además el mensaje que abre la ventana de 24 horas con el abonado nuevo.')\n"
  '  ) AS v(clave, nombre_meta, cuerpo, variables, ejemplos, notas)\n'
  '  JOIN plantillas_mensaje p ON p.clave = v.clave\n'
  'ON CONFLICT (plantilla_id) DO NOTHING'),
 (187,
  'plantillas_mensaje',
  'INSERT INTO plantillas_mensaje\n'
  '    (clave, categoria, canal, formato, del_sistema, nombre, descripcion, asunto, cuerpo, variables)\n'
  'VALUES\n'
  '\n'
  "('mail_aviso_pago_4', 'correo', 'email', 'html', TRUE,\n"
  " 'Aviso de pago 4 — ya cortado',\n"
  " 'Para el que ya está suspendido y sigue sin pagar. Se repite cada tantos días hasta que regularice o se "
  "cierre el caso. Nombra el equipo: es lo que abre la conversación de la devolución.',\n"
  " 'Su servicio sigue suspendido — saldo pendiente {{saldo}}',\n"
  " E'<p>Estimado/a {{nombre}}:</p>\\n<p>Su servicio está suspendido desde el {{fecha_corte}} y figura un "
  'saldo pendiente de {{saldo}} correspondiente a {{periodo}}.</p>\\n<p>Puede reactivarlo regularizando ese '
  'saldo. Si decidió no continuar, necesitamos coordinar el retiro del equipo instalado, que es propiedad de '
  "{{empresa}}.</p>\\n<p>En cualquiera de los dos casos, le pedimos que se comunique con nosotros.</p>',\n"
  " ARRAY['nombre','saldo','fecha_corte','periodo','empresa']),\n"
  '\n'
  "('sms_aviso_pago_4', 'sms', 'sms', 'texto', TRUE,\n"
  " 'Aviso de pago 4 SMS — ya cortado',\n"
  " 'La versión corta del cuarto aviso, para WhatsApp, Telegram y SMS.',\n"
  ' NULL,\n'
  " '{{empresa}}: su servicio sigue suspendido y adeuda {{saldo}}. Para reactivarlo o coordinar el retiro "
  "del equipo, comuníquese con nosotros.',\n"
  " ARRAY['empresa','saldo'])\n"
  '\n'
  'ON CONFLICT (clave) WHERE clave IS NOT NULL DO NOTHING'),
 (191,
  'mantenimiento_tipos',
  'INSERT INTO mantenimiento_tipos (clave, nombre, cada_km, cada_meses, orden)\n'
  'VALUES\n'
  "    ('aceite',   'Cambio de aceite',              5000,  6,  10),\n"
  "    ('filtros',  'Filtros (aire, aceite, combustible)', 10000, 12, 20),\n"
  "    ('revision', 'Revisión técnica / matrícula',  NULL,  12, 30)\n"
  'ON CONFLICT (clave) DO NOTHING'),
 (204,
  'alerta_reglas',
  'INSERT INTO alerta_reglas (clave, nombre, descripcion, espera_min, umbral, desde_hora, hasta_hora)\n'
  'VALUES (\n'
  "    'subida_saturada',\n"
  "    'Subida saturada',\n"
  "    'Un abonado lleva un rato usando casi toda su subida. Se pone lento para todo y suele llamar diciendo "
  "que es el internet: es tráfico que sale de su casa.',\n"
  '    15, 80, NULL, NULL\n'
  ')\n'
  'ON CONFLICT (clave) DO NOTHING')]
