import { paymentMethods } from '../../data/paymentMethods'

export function PaymentSelector({ value, onChange, error }) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm dark:bg-slate-900">
      <h3 className="text-xl font-black text-slate-900 dark:text-white">Método de pago simulado</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {paymentMethods.map((method) => (
          <button key={method.id} onClick={() => onChange(method.id)} className={`rounded-2xl border p-4 text-left transition ${value === method.id ? 'border-orange-500 bg-orange-50 dark:bg-orange-500/20' : 'border-orange-100 hover:bg-orange-50 dark:border-slate-700 dark:hover:bg-slate-800'}`}>
            <div className="text-2xl">{method.icon}</div>
            <p className="font-black text-slate-900 dark:text-white">{method.name}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{method.note}</p>
          </button>
        ))}
      </div>
      {error && <p className="mt-2 text-sm font-semibold text-red-500">{error}</p>}
    </div>
  )
}
