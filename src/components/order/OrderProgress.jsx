import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

export function OrderProgress({ steps, stepIndex }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
      <h3 className="text-xl font-black text-slate-900 dark:text-white">Seguimiento del pedido</h3>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {steps.map((step, index) => {
          const active = index <= stepIndex
          return (
            <div key={step} className="relative rounded-3xl bg-orange-50 p-4 text-center dark:bg-slate-800">
              <motion.div animate={{ scale: active ? 1 : 0.92 }} className={`mx-auto grid h-12 w-12 place-items-center rounded-full ${active ? 'bg-green-500 text-white' : 'bg-white text-slate-400 dark:bg-slate-900'}`}>
                {active ? <Check size={20} /> : index + 1}
              </motion.div>
              <p className={`mt-3 text-sm font-black ${active ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>{step}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
