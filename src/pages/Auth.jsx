import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Lock, Mail, Phone, Sparkles, UserRound } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { campusPoints } from '../data/campusPoints'
import { paymentMethods } from '../data/paymentMethods'

const faculties = [
  'Ingeniería de Sistemas',
  'Ingeniería Industrial',
  'Ciencias Administrativas',
  'Letras y Ciencias Humanas',
  'Medicina',
  'Derecho y Ciencia Política',
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  code: '',
  faculty: 'Ingeniería de Sistemas',
  campusPoint: 'Biblioteca Central',
  payment: 'Yape',
  acceptTerms: false,
}

function validateForm(form, mode) {
  const errors = {}
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!form.name.trim()) errors.name = 'Ingresa tu nombre para personalizar CampusFood.'
  if (form.name.trim() && form.name.trim().length < 3) errors.name = 'El nombre debe tener al menos 3 caracteres.'
  if (!form.email.trim()) errors.email = 'Ingresa tu correo institucional o personal.'
  if (form.email.trim() && !emailRegex.test(form.email)) errors.email = 'El correo no tiene un formato válido.'
  if (!form.phone.trim()) errors.phone = 'Ingresa tu celular para avisarte sobre el pedido.'
  if (form.phone.trim() && !/^\d{9}$/.test(form.phone.trim())) errors.phone = 'El celular debe tener exactamente 9 dígitos.'
  if (!form.password) errors.password = 'Crea o ingresa una contraseña simulada.'
  if (form.password && form.password.length < 6) errors.password = 'La contraseña debe tener al menos 6 caracteres.'

  if (mode === 'register') {
    if (!form.code.trim()) errors.code = 'Ingresa tu código universitario.'
    if (form.code.trim() && !/^\d{6,10}$/.test(form.code.trim())) errors.code = 'El código debe tener entre 6 y 10 números.'
    if (form.confirmPassword !== form.password) errors.confirmPassword = 'Las contraseñas no coinciden.'
    if (!form.acceptTerms) errors.acceptTerms = 'Acepta el uso simulado de tus datos para continuar.'
  }

  return errors
}

export function Auth({ onLogin, onRegister }) {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  const title = mode === 'login' ? 'Inicia sesión' : 'Crea tu cuenta'
  const subtitle = mode === 'login'
    ? 'Ingresa tus datos y CampusFood recordará tu nombre en esta computadora.'
    : 'Regístrate de forma simulada para personalizar tu experiencia universitaria.'

  const passwordStrength = useMemo(() => {
    if (!form.password) return { label: 'Sin contraseña', width: '0%', className: 'bg-slate-300' }
    if (form.password.length < 6) return { label: 'Débil', width: '35%', className: 'bg-red-400' }
    if (/[A-Z]/.test(form.password) && /\d/.test(form.password)) return { label: 'Fuerte', width: '100%', className: 'bg-green-500' }
    return { label: 'Media', width: '68%', className: 'bg-amber-400' }
  }, [form.password])

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  function submit(event) {
    event.preventDefault()
    const validationErrors = validateForm(form, mode)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    const sessionData = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      code: form.code,
      faculty: form.faculty,
      campusPoint: form.campusPoint,
      payment: form.payment,
    }

    if (mode === 'login') onLogin(sessionData)
    else onRegister(sessionData)
  }

  function switchMode(nextMode) {
    setMode(nextMode)
    setErrors({})
  }

  return (
    <main className="min-h-screen bg-orange-50 px-4 py-8 text-slate-900 transition dark:bg-slate-950">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="hidden overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-orange-500 via-amber-300 to-orange-100 p-8 shadow-2xl shadow-orange-500/20 dark:from-orange-600 dark:via-orange-500 dark:to-slate-800 lg:block">
          <div className="rounded-[2rem] bg-white/90 p-8 dark:bg-slate-950/80">
            <Badge>Acceso simulado</Badge>
            <h1 className="mt-5 text-5xl font-black leading-tight text-slate-950 dark:text-white">CampusFood recuerda tu nombre.</h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">Este login no usa backend, pero guarda tu sesión en el navegador para que el prototipo se sienta más real.</p>
            <div className="my-8 grid place-items-center text-9xl">🍟</div>
            <div className="grid gap-3">
              {[
                ['Validaciones', 'Campos obligatorios, correo, celular y contraseña.'],
                ['Personalización', 'El sistema saluda al estudiante por su nombre.'],
                ['IHC', 'Prevención de errores y retroalimentación inmediata.'],
              ].map(([label, text]) => (
                <div key={label} className="rounded-3xl bg-orange-50 p-4 dark:bg-slate-800">
                  <p className="font-black text-slate-900 dark:text-white">{label}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] bg-white p-5 shadow-xl shadow-orange-500/10 dark:bg-slate-900 sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-500 text-2xl text-white shadow-lg shadow-orange-500/25">🍔</div>
            <div>
              <p className="text-2xl font-black text-slate-950 dark:text-white">CampusFood</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Cafetería universitaria</p>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-2 rounded-2xl bg-orange-50 p-1 dark:bg-slate-800">
            <button onClick={() => switchMode('login')} className={`rounded-xl px-4 py-3 text-sm font-black transition ${mode === 'login' ? 'bg-white text-orange-600 shadow-sm dark:bg-slate-950' : 'text-slate-500 dark:text-slate-400'}`}>Iniciar sesión</button>
            <button onClick={() => switchMode('register')} className={`rounded-xl px-4 py-3 text-sm font-black transition ${mode === 'register' ? 'bg-white text-orange-600 shadow-sm dark:bg-slate-950' : 'text-slate-500 dark:text-slate-400'}`}>Registrarme</button>
          </div>

          <h2 className="text-3xl font-black text-slate-950 dark:text-white">{title}</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>

          <form onSubmit={submit} className="mt-6 grid gap-4">
            <label className="block">
              <span className="mb-1 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><UserRound size={16} /> Nombre</span>
              <input value={form.name} onChange={(event) => updateField('name', event.target.value)} className={`w-full rounded-2xl border bg-white px-4 py-3 outline-none transition dark:bg-slate-950 dark:text-white ${errors.name ? 'border-red-400 ring-2 ring-red-100 dark:ring-red-500/20' : 'border-orange-100 focus:border-orange-400 dark:border-slate-700'}`} placeholder="Ej. María Alva" />
              {errors.name && <p className="mt-1 text-xs font-bold text-red-500">{errors.name}</p>}
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><Mail size={16} /> Correo</span>
                <input value={form.email} onChange={(event) => updateField('email', event.target.value)} className={`w-full rounded-2xl border bg-white px-4 py-3 outline-none transition dark:bg-slate-950 dark:text-white ${errors.email ? 'border-red-400 ring-2 ring-red-100 dark:ring-red-500/20' : 'border-orange-100 focus:border-orange-400 dark:border-slate-700'}`} placeholder="tu.correo@universidad.edu.pe" />
                {errors.email && <p className="mt-1 text-xs font-bold text-red-500">{errors.email}</p>}
              </label>

              <label className="block">
                <span className="mb-1 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><Phone size={16} /> Celular</span>
                <input value={form.phone} onChange={(event) => updateField('phone', event.target.value.replace(/\D/g, '').slice(0, 9))} className={`w-full rounded-2xl border bg-white px-4 py-3 outline-none transition dark:bg-slate-950 dark:text-white ${errors.phone ? 'border-red-400 ring-2 ring-red-100 dark:ring-red-500/20' : 'border-orange-100 focus:border-orange-400 dark:border-slate-700'}`} placeholder="987654321" />
                {errors.phone && <p className="mt-1 text-xs font-bold text-red-500">{errors.phone}</p>}
              </label>
            </div>

            <label className="block">
              <span className="mb-1 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><Lock size={16} /> Contraseña simulada</span>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} value={form.password} onChange={(event) => updateField('password', event.target.value)} className={`w-full rounded-2xl border bg-white px-4 py-3 pr-12 outline-none transition dark:bg-slate-950 dark:text-white ${errors.password ? 'border-red-400 ring-2 ring-red-100 dark:ring-red-500/20' : 'border-orange-100 focus:border-orange-400 dark:border-slate-700'}`} placeholder="Mínimo 6 caracteres" />
                <button type="button" onClick={() => setShowPassword((current) => !current)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className={`h-full rounded-full transition-all ${passwordStrength.className}`} style={{ width: passwordStrength.width }} /></div>
                <span className="text-xs font-black text-slate-500 dark:text-slate-400">{passwordStrength.label}</span>
              </div>
              {errors.password && <p className="mt-1 text-xs font-bold text-red-500">{errors.password}</p>}
            </label>

            {mode === 'register' && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1 text-sm font-bold text-slate-700 dark:text-slate-200">Código universitario</span>
                    <input value={form.code} onChange={(event) => updateField('code', event.target.value.replace(/\D/g, '').slice(0, 10))} className={`w-full rounded-2xl border bg-white px-4 py-3 outline-none transition dark:bg-slate-950 dark:text-white ${errors.code ? 'border-red-400 ring-2 ring-red-100 dark:ring-red-500/20' : 'border-orange-100 focus:border-orange-400 dark:border-slate-700'}`} placeholder="Ej. 23200123" />
                    {errors.code && <p className="mt-1 text-xs font-bold text-red-500">{errors.code}</p>}
                  </label>
                  <label className="block">
                    <span className="mb-1 text-sm font-bold text-slate-700 dark:text-slate-200">Confirmar contraseña</span>
                    <input type={showPassword ? 'text' : 'password'} value={form.confirmPassword} onChange={(event) => updateField('confirmPassword', event.target.value)} className={`w-full rounded-2xl border bg-white px-4 py-3 outline-none transition dark:bg-slate-950 dark:text-white ${errors.confirmPassword ? 'border-red-400 ring-2 ring-red-100 dark:ring-red-500/20' : 'border-orange-100 focus:border-orange-400 dark:border-slate-700'}`} placeholder="Repite tu contraseña" />
                    {errors.confirmPassword && <p className="mt-1 text-xs font-bold text-red-500">{errors.confirmPassword}</p>}
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1 text-sm font-bold text-slate-700 dark:text-slate-200">Facultad</span>
                    <select value={form.faculty} onChange={(event) => updateField('faculty', event.target.value)} className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 outline-none focus:border-orange-400 dark:border-slate-700 dark:bg-slate-950 dark:text-white">
                      {faculties.map((faculty) => <option key={faculty}>{faculty}</option>)}
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-1 text-sm font-bold text-slate-700 dark:text-slate-200">Punto frecuente</span>
                    <select value={form.campusPoint} onChange={(event) => updateField('campusPoint', event.target.value)} className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 outline-none focus:border-orange-400 dark:border-slate-700 dark:bg-slate-950 dark:text-white">
                      {campusPoints.map((point) => <option key={point}>{point}</option>)}
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1 text-sm font-bold text-slate-700 dark:text-slate-200">Método favorito</span>
                  <select value={form.payment} onChange={(event) => updateField('payment', event.target.value)} className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 outline-none focus:border-orange-400 dark:border-slate-700 dark:bg-slate-950 dark:text-white">
                    {paymentMethods.map((method) => <option key={method.id}>{method.name}</option>)}
                  </select>
                </label>

                <label className="flex gap-3 rounded-2xl bg-orange-50 p-4 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  <input type="checkbox" checked={form.acceptTerms} onChange={(event) => updateField('acceptTerms', event.target.checked)} className="mt-1 h-4 w-4 accent-orange-500" />
                  <span>Acepto que este prototipo guarde mis datos de forma simulada en este navegador.</span>
                </label>
                {errors.acceptTerms && <p className="-mt-3 text-xs font-bold text-red-500">{errors.acceptTerms}</p>}
              </motion.div>
            )}

            <Button type="submit" className="mt-2 w-full justify-center py-4 text-base">
              <Sparkles size={18} /> {mode === 'login' ? 'Entrar a CampusFood' : 'Crear cuenta simulada'}
            </Button>
          </form>
        </motion.div>
      </section>
    </main>
  )
}
