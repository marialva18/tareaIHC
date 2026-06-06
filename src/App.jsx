import { useState } from 'react'
import { Navbar } from './components/layout/Navbar'
import { BottomNav } from './components/layout/BottomNav'
import { SidebarCart } from './components/cart/SidebarCart'
import { FloatingCartButton } from './components/cart/FloatingCartButton'
import { FoodBot } from './components/chatbot/FoodBot'
import { Auth } from './pages/Auth'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Checkout } from './pages/Checkout'
import { Tracking } from './pages/Tracking'
import { History } from './pages/History'
import { Profile } from './pages/Profile'
import { useTheme } from './hooks/useTheme'
import { useCart } from './hooks/useCart'
import { useProducts } from './hooks/useProducts'
import { useAuth } from './hooks/useAuth'

export default function App() {
  const [page, setPage] = useState('home')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [currentOrder, setCurrentOrder] = useState(null)
  const { dark, toggleTheme } = useTheme()
  const { user, loading, login, register, logout } = useAuth()
  const cart = useCart()
  const productsState = useProducts()

  function handleLogout() {
    logout()
    cart.clearCart()
    setCurrentOrder(null)
    setSelectedProduct(null)
    setPage('home')
  }

  function renderPage() {
    if (page === 'home') return <Home setPage={setPage} user={user} />
    if (page === 'menu') return <Menu productsState={productsState} addToCart={cart.addToCart} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
    if (page === 'checkout') return <Checkout items={cart.items} summary={cart.summary} setPage={setPage} clearCart={cart.clearCart} setCurrentOrder={setCurrentOrder} user={user} />
    if (page === 'tracking') return <Tracking currentOrder={currentOrder} setPage={setPage} />
    if (page === 'history') return <History />
    if (page === 'profile') return <Profile user={user} onLogout={handleLogout} />
    return <Home setPage={setPage} user={user} />
  }

  if (loading) {
    return <div className="grid min-h-screen place-items-center bg-orange-50 text-slate-900 dark:bg-slate-950 dark:text-white">Cargando CampusFood...</div>
  }

  if (!user) {
    return <Auth onLogin={login} onRegister={register} />
  }

  return (
    <div className="min-h-screen bg-orange-50 text-slate-900 transition dark:bg-slate-950">
      <Navbar page={page} setPage={setPage} cartCount={cart.summary.count} dark={dark} toggleTheme={toggleTheme} openCart={() => cart.setIsCartOpen(true)} user={user} onLogout={handleLogout} />
      <main className="pb-32 lg:pb-12">{renderPage()}</main>
      <SidebarCart open={cart.isCartOpen} setOpen={cart.setIsCartOpen} items={cart.items} summary={cart.summary} increase={cart.increase} decrease={cart.decrease} remove={cart.remove} goCheckout={() => setPage('checkout')} />
      <FloatingCartButton summary={cart.summary} openCart={() => cart.setIsCartOpen(true)} />
      <FoodBot user={user} />
      <BottomNav page={page} setPage={setPage} />
    </div>
  )
}
