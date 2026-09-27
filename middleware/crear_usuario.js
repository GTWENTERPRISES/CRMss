const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function createAdmin() {
  const { data, error } = await supabase.auth.admin.createUser({
    email: 'admin@taller.local',
    password: 'password123',
    email_confirm: true
  });
  
  if (error) {
    if (error.message.includes('already exists')) {
      console.log('El usuario ya existe. Actualizando contraseña a password123...');
      const { data: usersData } = await supabase.auth.admin.listUsers();
      const user = usersData.users.find(u => u.email === 'admin@taller.local');
      if (user) {
        await supabase.auth.admin.updateUserById(user.id, { password: 'password123' });
        console.log('Contraseña actualizada exitosamente.');
      }
    } else {
      console.error('Error:', error);
    }
  } else {
    console.log('Usuario creado exitosamente:', data.user.email);
  }
}

createAdmin();
