import { campusPoints } from '../../data/campusPoints'

export function DeliveryForm({ form, setForm, errors }) {
  const update = (field, value) => setForm((current) => ({ ...current, [field]: value }))
  const inputClass = 'w-full rounded-2xl border bg-white px-4 py-3 outline-none transition focus:border-orange-500 dark:bg-slate-900 dark:text-white'
  const errorClass = 'border-red-300 dark:border-red-500'
  const okClass = 'border-orange-100 dark:border-slate-700'

  return (
    <div className="space-y-4 rounded-3xl bg-white p-5 shadow-sm dark:bg-slate-900">
      <h3 className="text-xl font-black text-slate-900 dark:text-white">Datos de entrega</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <input className={`${inputClass} ${errors.name ? errorClass : okClass}`} value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Nombre del estudiante" />
          {errors.name && <p className="mt-1 text-sm font-semibold text-red-500">{errors.name}</p>}
        </div>
        <div>
          <input className={`${inputClass} ${errors.phone ? errorClass : okClass}`} value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="Celular de 9 dígitos" maxLength={9} />
          {errors.phone && <p className="mt-1 text-sm font-semibold text-red-500">{errors.phone}</p>}
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {['Recojo en cafetería', 'Entrega dentro del campus'].map((type) => (
          <button key={type} onClick={() => update('deliveryType', type)} className={`rounded-2xl border p-4 text-left font-bold transition ${form.deliveryType === type ? 'border-orange-500 bg-orange-50 text-orange-700 dark:bg-orange-500/20 dark:text-orange-200' : 'border-orange-100 text-slate-600 dark:border-slate-700 dark:text-slate-300'}`}>
            {type}
          </button>
        ))}
      </div>
      {errors.deliveryType && <p className="text-sm font-semibold text-red-500">{errors.deliveryType}</p>}
      <div>
        <select className={`${inputClass} ${errors.campusPoint ? errorClass : okClass}`} value={form.campusPoint} onChange={(e) => update('campusPoint', e.target.value)}>
          <option value="">Selecciona punto de recojo o entrega</option>
          {campusPoints.map((point) => <option key={point} value={point}>{point}</option>)}
        </select>
        {errors.campusPoint && <p className="mt-1 text-sm font-semibold text-red-500">{errors.campusPoint}</p>}
      </div>
      <textarea className={`${inputClass} ${okClass}`} value={form.reference} onChange={(e) => update('reference', e.target.value)} placeholder="Referencia opcional: estoy cerca al laboratorio, aula 203, etc." rows="3" />
    </div>
  )
}
