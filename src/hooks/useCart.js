import { useMemo, useState } from 'react'
import toast from 'react-hot-toast'

const DELIVERY_FEE = 2.5

export function useCart() {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  function addToCart(product) {
    if (product.status === 'soldout') {
      toast.error('Este producto está agotado por ahora.')
      return
    }
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...current, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
    toast.success(`${product.name} agregado al carrito`)
  }

  function increase(id) {
    setItems((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
  }

  function decrease(id) {
    setItems((current) => current
      .map((item) => item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item))
  }

  function remove(id) {
    setItems((current) => current.filter((item) => item.id !== id))
    toast('Producto eliminado', { icon: '🗑️' })
  }

  function clearCart() { setItems([]) }

  const summary = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const delivery = subtotal > 0 ? DELIVERY_FEE : 0
    const total = subtotal + delivery
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    return { subtotal, delivery, total, count }
  }, [items])

  return { items, isCartOpen, setIsCartOpen, addToCart, increase, decrease, remove, clearCart, summary }
}
