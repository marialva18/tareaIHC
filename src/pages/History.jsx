import { orderHistory } from '../data/orderHistory'
import { OrderHistoryCard } from '../components/order/OrderHistoryCard'

export function History() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">Historial simulado</p>
      <h1 className="text-4xl font-black text-slate-950 dark:text-white">Mis pedidos</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {orderHistory.map((order) => <OrderHistoryCard key={order.id} order={order} />)}
      </div>
    </section>
  )
}
