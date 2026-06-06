import { LogOut, ShoppingBag, UserRound } from 'lucide-react'
import { Button } from '../ui/Button'
import { ThemeToggle } from '../ui/ThemeToggle'

const links = [
  ['home', 'Inicio'], ['menu', 'Menú'], ['checkout', 'Checkout'], ['tracking', 'Seguimiento'], ['history', 'Historial'], ['profile', 'Perfil'],
]

export function Navbar({ page, setPage, cartCount, dark, toggleTheme, openCart, user, onLogout }) {
  return (
    <header className="sticky top-0 z-30 border-b border-orange-100/60 bg-white/85 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <button onClick={() => setPage('home')} className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-500 text-xl text-white shadow-lg shadow-orange-500/25">🍔</div>
          <div className="text-left">
            <p className="text-lg font-black text-slate-900 dark:text-white">CampusFood</p>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Hola, {user?.name?.split(' ')[0] || 'estudiante'} 👋</p>
          </div>
        </button>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(([id, label]) => (
            <button key={id} onClick={() => setPage(id)} className={`rounded-2xl px-4 py-2 text-sm font-bold transition ${page === id ? 'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-200' : 'text-slate-600 hover:bg-orange-50 dark:text-slate-300 dark:hover:bg-slate-800'}`}>
              {label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => setPage('profile')} className="hidden items-center gap-2 rounded-2xl bg-orange-50 px-3 py-2 text-sm font-black text-orange-700 transition hover:bg-orange-100 dark:bg-slate-800 dark:text-orange-200 md:flex">
            <UserRound size={17} /> {user?.name?.split(' ')[0] || 'Perfil'}
          </button>
          <ThemeToggle dark={dark} toggleTheme={toggleTheme} />
          <Button variant="primary" onClick={openCart} className="relative">
            <ShoppingBag size={18} />
            Carrito
            {cartCount > 0 && <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-green-500 text-xs text-white">{cartCount}</span>}
          </Button>
          <button onClick={onLogout} title="Cerrar sesión" className="hidden rounded-2xl p-3 text-slate-500 transition hover:bg-red-50 hover:text-red-600 dark:text-slate-300 dark:hover:bg-red-500/10 dark:hover:text-red-300 md:block">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
