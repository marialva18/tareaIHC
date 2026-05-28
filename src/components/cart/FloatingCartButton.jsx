import { ShoppingCart } from 'lucide-react'
import { motion } from 'framer-motion'
import { formatCurrency } from '../../utils/formatCurrency'

export function FloatingCartButton({ summary, openCart }) {
  if (summary.count === 0) return null
  return (
    <motion.button initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} onClick={openCart} className="fixed bottom-24 right-4 z-30 flex items-center gap-3 rounded-3xl bg-orange-500 px-5 py-4 font-black text-white shadow-2xl shadow-orange-500/30 lg:bottom-6">
      <ShoppingCart size={20} /> {summary.count} productos · {formatCurrency(summary.total)}
    </motion.button>
  )
}
