import { Clock, Flame, Star } from 'lucide-react'
import { formatCurrency } from '../../utils/formatCurrency'
import { Button } from '../ui/Button'
import { Modal } from '../ui/Modal'
import { Badge } from '../ui/Badge'

export function ProductModal({ product, onClose, onAdd }) {
  return (
    <Modal open={Boolean(product)} onClose={onClose}>
      {product && (
        <div className="space-y-5 pt-6">
          <div className="rounded-3xl bg-gradient-to-br from-orange-50 to-amber-100 p-8 text-center text-8xl dark:from-slate-800 dark:to-slate-700">{product.emoji}</div>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">{product.name}</h2>
              <p className="mt-2 text-slate-500 dark:text-slate-300">{product.description}</p>
            </div>
            <Badge tone={product.status === 'soldout' ? 'red' : 'orange'}>{product.tag}</Badge>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-orange-50 p-3 text-center dark:bg-slate-800"><Clock className="mx-auto text-orange-500" /><p className="mt-1 text-sm font-bold dark:text-white">{product.estimatedMinutes} min</p></div>
            <div className="rounded-2xl bg-orange-50 p-3 text-center dark:bg-slate-800"><Star className="mx-auto fill-orange-400 text-orange-400" /><p className="mt-1 text-sm font-bold dark:text-white">{product.rating}</p></div>
            <div className="rounded-2xl bg-orange-50 p-3 text-center dark:bg-slate-800"><Flame className="mx-auto text-orange-500" /><p className="mt-1 text-sm font-bold dark:text-white">{product.calories} kcal</p></div>
          </div>
          <div className="flex items-center justify-between rounded-3xl bg-slate-50 p-4 dark:bg-slate-800">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-300">Precio</span>
            <span className="text-3xl font-black text-orange-500">{formatCurrency(product.price)}</span>
          </div>
          <Button className="w-full" disabled={product.status === 'soldout'} onClick={() => { onAdd(product); onClose() }}>
            {product.status === 'soldout' ? 'Producto agotado' : 'Agregar al carrito'}
          </Button>
        </div>
      )}
    </Modal>
  )
}
