import { categories } from '../../data/categories'

export function CategoryFilter({ category, setCategory }) {
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto py-2">
      {categories.map((item) => (
        <button key={item.id} onClick={() => setCategory(item.id)} className={`whitespace-nowrap rounded-2xl px-4 py-2 text-sm font-bold transition ${category === item.id ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'bg-white text-slate-600 ring-1 ring-orange-100 hover:bg-orange-50 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700'}`}>
          <span className="mr-2">{item.icon}</span>{item.label}
        </button>
      ))}
    </div>
  )
}
