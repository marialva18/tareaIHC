import { motion } from 'framer-motion'
import { ArrowRight, Clock, ShieldCheck, Sparkles } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'

export function Home({ setPage, user }) {
  const firstName = user?.name?.split(' ')[0] || 'estudiante'

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
      <div className="space-y-6">
        <Badge>Pedido universitario sin colas</Badge>
        <h1 className="text-5xl font-black tracking-tight text-slate-950 dark:text-white md:text-7xl">Hola, {firstName}. Tu comida lista entre clases.</h1>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">CampusFood simula una app de delivery para cafetería universitaria con catálogo, carrito interactivo, validaciones, login simulado, chatbot y seguimiento visual del pedido.</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button onClick={() => setPage('menu')}>Ver menú <ArrowRight size={18} /></Button>
          <Button variant="secondary" onClick={() => setPage('tracking')}>Ver seguimiento demo</Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            [Clock, 'Pedido rápido', 'Productos con tiempo estimado.'],
            [ShieldCheck, 'Menos errores', 'Validaciones antes de confirmar.'],
            [Sparkles, 'Interactividad', 'Login, animaciones, chatbot y estados.'],
          ].map(([Icon, title, text]) => (
            <div key={title} className="rounded-3xl bg-white p-5 shadow-sm dark:bg-slate-900">
              <Icon className="text-orange-500" />
              <h3 className="mt-3 font-black text-slate-900 dark:text-white">{title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-orange-400 via-amber-300 to-orange-100 p-8 shadow-2xl shadow-orange-500/20 dark:from-orange-600 dark:via-orange-500 dark:to-slate-800">
          <div className="rounded-[2rem] bg-white/90 p-6 dark:bg-slate-950/80">
            <p className="text-sm font-bold text-orange-600">Promo del día para {firstName}</p>
            <div className="my-8 text-center text-9xl">🎒</div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Combo Universitario</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-300">Sándwich + papas + bebida. Listo en 12 minutos.</p>
            <div className="mt-5 flex items-center justify-between rounded-3xl bg-orange-50 p-4 dark:bg-slate-800">
              <span className="font-black text-slate-900 dark:text-white">S/ 12.90</span>
              <Button onClick={() => setPage('menu')}>Pedir ahora</Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
