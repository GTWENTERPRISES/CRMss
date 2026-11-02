import { useMemo, useState } from 'react'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/shadcn/chart'
import { ToggleGroup, ToggleGroupItem } from '@/components/shadcn/toggle-group'
import { dineroCero } from '@/lib/formato'

const RANGOS = [
  { valor: '90', label: 'Últimos 3 meses' },
  { valor: '30', label: 'Últimos 30 días' },
  { valor: '7', label: 'Últimos 7 días' },
]

const config = { monto: { label: 'Cobrado', color: 'var(--chart-1)' } }

const corta = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es-EC', { day: 'numeric', month: 'short', timeZone: 'America/Guayaquil' })

/**
 * Lo cobrado día por día, con selector de período: el "gráfico de área
 * interactivo" del dashboard de shadcn/ui.
 *
 * @param dias [{ fecha: 'YYYY-MM-DD', monto }] de los últimos 90 días, del más viejo al de hoy.
 */
export default function GraficoCobros({ dias }) {
  const [rango, setRango] = useState('30')
  const datos = useMemo(() => dias.slice(-Number(rango)), [dias, rango])
  const total = datos.reduce((s, d) => s + d.monto, 0)

  return (
    <section className="flex flex-col rounded-xl border bg-card text-card-foreground shadow-xs">
      <header className="flex flex-wrap items-start justify-between gap-3 px-4 pt-5 sm:px-6">
        <div>
          <h2 className="text-sm leading-none font-semibold">Cobros por día</h2>
          <p className="mt-1.5 text-xs text-muted-foreground">
            {dineroCero(total)} en {RANGOS.find((r) => r.valor === rango)?.label.toLowerCase()}
          </p>
        </div>
        <ToggleGroup
          type="single"
          value={rango}
          onValueChange={(v) => v && setRango(v)}
          variant="outline"
          size="sm"
          aria-label="Período"
        >
          {RANGOS.map((r) => (
            <ToggleGroupItem key={r.valor} value={r.valor} className="px-3 text-xs">
              {r.valor === '90' ? '3 meses' : `${r.valor} días`}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </header>
      <div className="px-2 pt-4 pb-4 sm:px-6">
        <ChartContainer config={config} className="aspect-auto h-[220px] w-full">
          <AreaChart data={datos} margin={{ left: 4, right: 4 }}>
            <defs>
              <linearGradient id="relleno-cobros" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-monto)" stopOpacity={0.5} />
                <stop offset="95%" stopColor="var(--color-monto)" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="fecha"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={corta}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  labelFormatter={(v) => corta(v)}
                  formatter={(valor) => (
                    <span className="flex w-full justify-between gap-4">
                      <span className="text-muted-foreground">Cobrado</span>
                      <span className="font-mono font-medium tabular-nums">{dineroCero(valor)}</span>
                    </span>
                  )}
                />
              }
            />
            <Area dataKey="monto" type="monotone" fill="url(#relleno-cobros)" stroke="var(--color-monto)" strokeWidth={2} />
          </AreaChart>
        </ChartContainer>
      </div>
    </section>
  )
}
