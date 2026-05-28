import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { CartItem } from './CartItem'
import { CartSummary } from './CartSummary'
import { Button } from '../ui/Button'

export function SidebarCart({ open, setOpen, items, summary, increase, decrease, remove, goCheckout }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div className="fixed inset-0 z-40 bg-slate-950/40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
          <motion.aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white p-5 shadow-2xl dark:bg-slate-950" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 220 }}>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">Tu carrito</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Revisa tu pedido antes de pagar.</p>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800"><X className="dark:text-white" /></button>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto pr-1">
              {items.length === 0 ? (
                <div className="grid h-full place-items-center text-center">
                  <div><p className="text-7xl">🛒</p><h3 className="mt-4 text-xl font-black dark:text-white">Tu carrito está vacío</h3><p className="text-slate-500 dark:text-slate-400">Agrega algo rico para continuar.</p></div>
                </div>
              ) : items.map((item) => <CartItem key={item.id} item={item} increase={increase} decrease={decrease} remove={remove} />)}
            </div>
            <div className="mt-4 space-y-3">
              <CartSummary summary={summary} />
              <Button className="w-full" disabled={items.length === 0} onClick={() => { setOpen(false); goCheckout() }}>Ir a checkout</Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
