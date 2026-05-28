import { useState } from 'react'
import toast from 'react-hot-toast'
import { DeliveryForm } from '../components/checkout/DeliveryForm'
import { PaymentSelector } from '../components/checkout/PaymentSelector'
import { OrderSummary } from '../components/checkout/OrderSummary'
import { Button } from '../components/ui/Button'
import { validateCheckout } from '../utils/validations'
import { createOrderId } from '../utils/orderHelpers'

export function Checkout({ items, summary, setPage, clearCart, setCurrentOrder }) {
  const [form, setForm] = useState({
    name: 'María Alva', phone: '', deliveryType: '', campusPoint: '', reference: '', paymentMethod: '',
  })
  const [errors, setErrors] = useState({})

  function confirmOrder() {
    const nextErrors = validateCheckout(form, summary.count)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      toast.error('Revisa los campos marcados antes de confirmar.')
      return
    }
    const order = { id: createOrderId(), form, items, total: summary.total, createdAt: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' }) }
    setCurrentOrder(order)
    clearCart()
    toast.success('Pedido confirmado correctamente 🎉')
    setPage('tracking')
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">Checkout</p>
        <h1 className="text-4xl font-black text-slate-950 dark:text-white">Revisa y confirma tu pedido</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">El sistema valida los datos para prevenir errores antes de confirmar.</p>
      </div>
      {errors.cart && <div className="mb-4 rounded-3xl bg-red-50 p-4 font-bold text-red-600 dark:bg-red-500/10">{errors.cart}</div>}
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="space-y-5">
          <DeliveryForm form={form} setForm={setForm} errors={errors} />
          <PaymentSelector value={form.paymentMethod} onChange={(value) => setForm((current) => ({ ...current, paymentMethod: value }))} error={errors.paymentMethod} />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="secondary" onClick={() => setPage('menu')}>Volver al menú</Button>
            <Button onClick={confirmOrder}>Confirmar pedido</Button>
          </div>
        </div>
        <OrderSummary items={items} summary={summary} />
      </div>
    </section>
  )
}
