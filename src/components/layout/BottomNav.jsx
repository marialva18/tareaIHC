import { Home, Menu as MenuIcon, ClipboardList, User, Clock } from 'lucide-react'

const items = [
  ['home', 'Inicio', Home], ['menu', 'Menú', MenuIcon], ['checkout', 'Pagar', ClipboardList], ['tracking', 'Estado', Clock], ['profile', 'Perfil', User],
]

export function BottomNav({ page, setPage }) {
  return (
    <nav className="fixed bottom-3 left-1/2 z-30 flex w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 justify-around rounded-3xl border border-orange-100 bg-white/90 p-2 shadow-2xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/90 lg:hidden">
      {items.map(([id, label, Icon]) => (
        <button key={id} onClick={() => setPage(id)} className={`flex flex-col items-center rounded-2xl px-3 py-2 text-xs font-bold ${page === id ? 'bg-orange-500 text-white' : 'text-slate-500 dark:text-slate-300'}`}>
          <Icon size={18} />
          {label}
        </button>
      ))}
    </nav>
  )
}
