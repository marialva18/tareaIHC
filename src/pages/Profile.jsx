import { LogOut } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

export function Profile({ user, onLogout }) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">Perfil simulado</p>
      <h1 className="text-4xl font-black text-slate-950 dark:text-white">Estudiante</h1>
      <p className="mt-2 text-slate-500 dark:text-slate-400">Estos datos se guardan en el navegador con localStorage para simular una sesión.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-[280px_1fr]">
        <div className="rounded-3xl bg-white p-6 text-center shadow-sm dark:bg-slate-900">
          <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-orange-100 text-6xl dark:bg-orange-500/20">👩‍💻</div>
          <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white">{user?.name || 'Estudiante'}</h2>
          <p className="text-slate-500 dark:text-slate-400">{user?.faculty || 'Facultad no registrada'}</p>
          <div className="mt-4"><Badge tone="green">Cliente frecuente</Badge></div>
          <Button variant="secondary" onClick={onLogout} className="mt-5 w-full justify-center">
            <LogOut size={18} /> Cerrar sesión
          </Button>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
          <h3 className="text-xl font-black text-slate-900 dark:text-white">Preferencias</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              ['Correo', user?.email || 'No registrado'],
              ['Celular', user?.phone || 'No registrado'],
              ['Código', user?.code || 'No registrado'],
              ['Punto frecuente', user?.campusPoint || 'Biblioteca Central'],
              ['Método favorito', user?.payment || 'Yape'],
              ['Último pedido', 'Combo Universitario'],
            ].map(([label, value]) => <div key={label} className="rounded-2xl bg-orange-50 p-4 dark:bg-slate-800"><p className="text-sm text-slate-500 dark:text-slate-400">{label}</p><p className="font-black text-slate-900 dark:text-white">{value}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  )
}
