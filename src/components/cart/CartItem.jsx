import { Minus, Plus, Trash2 } from 'lucide-react'
import { formatCurrency } from '../../utils/formatCurrency'

export function CartItem({ item, increase, decrease, remove }) {
  return (
    <div className="flex gap-3 rounded-3xl bg-orange-50 p-3 dark:bg-slate-800">
      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-3xl dark:bg-slate-900">{item.emoji}</div>
      <div className="min-w-0 flex-1">
        <div className="flex justify-between gap-2">
          <p className="font-black text-slate-900 dark:text-white">{item.name}</p>
          <button onClick={() => remove(item.id)} className="text-red-500 hover:text-red-600"><Trash2 size={18} /></button>
        </div>
        <p className="text-sm font-bold text-orange-600">{formatCurrency(item.price)}</p>
        <div className="mt-2 flex items-center gap-2">
          <button onClick={() => decrease(item.id)} className="grid h-8 w-8 place-items-center rounded-full bg-white text-slate-700 shadow-sm dark:bg-slate-900 dark:text-white"><Minus size={16} /></button>
          <span className="w-6 text-center font-black dark:text-white">{item.quantity}</span>
          <button onClick={() => increase(item.id)} className="grid h-8 w-8 place-items-center rounded-full bg-white text-slate-700 shadow-sm dark:bg-slate-900 dark:text-white"><Plus size={16} /></button>
        </div>
      </div>
    </div>
  )
}
