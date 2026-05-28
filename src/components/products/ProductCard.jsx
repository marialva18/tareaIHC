import { motion } from 'framer-motion'
import { Clock, Star } from 'lucide-react'
import { formatCurrency } from '../../utils/formatCurrency'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'

export function ProductCard({ product, onAdd, onView }) {
  const soldout = product.status === 'soldout'
  return (
    <motion.article layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -6 }} className="group overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm transition hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <button onClick={() => onView(product)} className="w-full bg-gradient-to-br from-orange-50 to-amber-100 p-8 text-center text-7xl transition group-hover:scale-105 dark:from-slate-800 dark:to-slate-700">
        {product.emoji}
      </button>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white">{product.name}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">{product.description}</p>
          </div>
          <Badge tone={soldout ? 'red' : product.tag === 'Saludable' ? 'green' : 'orange'}>{soldout ? 'Agotado' : product.tag}</Badge>
        </div>
        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1"><Clock size={16} /> {product.estimatedMinutes} min</span>
          <span className="flex items-center gap-1"><Star size={16} className="fill-orange-400 text-orange-400" /> {product.rating}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <p className="text-2xl font-black text-slate-900 dark:text-white">{formatCurrency(product.price)}</p>
          <Button disabled={soldout} onClick={() => onAdd(product)}>{soldout ? 'No disponible' : 'Agregar'}</Button>
        </div>
      </div>
    </motion.article>
  )
}
