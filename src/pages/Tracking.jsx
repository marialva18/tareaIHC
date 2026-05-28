import { useOrderSimulation } from '../hooks/useOrderSimulation'
import { OrderProgress } from '../components/order/OrderProgress'
import { Button } from '../components/ui/Button'
import { formatCurrency } from '../utils/formatCurrency'

export function Tracking({ currentOrder, setPage }) {
  const { stepIndex, steps } = useOrderSimulation(true)
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">Estado del sistema</p>
        <h1 className="text-4xl font-black text-slate-950 dark:text-white">Seguimiento del pedido</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">La barra avanza automáticamente para simular el flujo del pedido.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <OrderProgress steps={steps} stepIndex={stepIndex} />
        <aside className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
          <p className="text-6xl">✅</p>
          <h3 className="mt-4 text-2xl font-black text-slate-900 dark:text-white">{currentOrder ? `Pedido ${currentOrder.id}` : 'Pedido demo'}</h3>
          <p className="mt-2 text-slate-500 dark:text-slate-400">Estado actual: <b>{steps[stepIndex]}</b></p>
          {currentOrder && <p className="mt-3 text-lg font-black text-orange-500">Total: {formatCurrency(currentOrder.total)}</p>}
          <Button className="mt-5 w-full" onClick={() => setPage('menu')}>Hacer otro pedido</Button>
        </aside>
      </div>
    </section>
  )
}
