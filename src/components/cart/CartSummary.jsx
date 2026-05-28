import { formatCurrency } from '../../utils/formatCurrency'

export function CartSummary({ summary }) {
  return (
    <div className="space-y-2 rounded-3xl bg-slate-50 p-4 text-sm dark:bg-slate-800">
      <div className="flex justify-between text-slate-500 dark:text-slate-300"><span>Subtotal</span><b>{formatCurrency(summary.subtotal)}</b></div>
      <div className="flex justify-between text-slate-500 dark:text-slate-300"><span>Delivery campus</span><b>{formatCurrency(summary.delivery)}</b></div>
      <div className="border-t border-slate-200 pt-2 dark:border-slate-700">
        <div className="flex justify-between text-lg font-black text-slate-900 dark:text-white"><span>Total</span><span>{formatCurrency(summary.total)}</span></div>
      </div>
    </div>
  )
}
