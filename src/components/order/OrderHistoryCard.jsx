import { formatCurrency } from '../../utils/formatCurrency'
import { Badge } from '../ui/Badge'

export function OrderHistoryCard({ order }) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm dark:bg-slate-900">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-black text-slate-900 dark:text-white">Pedido {order.id}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{order.date}</p>
        </div>
        <Badge tone="green">{order.status}</Badge>
      </div>
      <p className="mt-3 text-slate-600 dark:text-slate-300">{order.items}</p>
      <p className="mt-3 text-lg font-black text-orange-500">{formatCurrency(order.total)}</p>
    </div>
  )
}
