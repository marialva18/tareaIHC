import { formatCurrency } from '../../utils/formatCurrency'
import { CartSummary } from '../cart/CartSummary'

export function OrderSummary({ items, summary }) {
  return (
    <aside className="rounded-3xl bg-white p-5 shadow-sm dark:bg-slate-900">
      <h3 className="text-xl font-black text-slate-900 dark:text-white">Resumen</h3>
      <div className="mt-4 space-y-3">
        {items.length === 0 ? <p className="text-slate-500 dark:text-slate-400">No hay productos todavía.</p> : items.map((item) => (
          <div key={item.id} className="flex justify-between gap-3 text-sm">
            <span className="text-slate-600 dark:text-slate-300">{item.quantity} × {item.name}</span>
            <b className="text-slate-900 dark:text-white">{formatCurrency(item.price * item.quantity)}</b>
          </div>
        ))}
      </div>
      <div className="mt-4"><CartSummary summary={summary} /></div>
    </aside>
  )
}
