import { Search } from 'lucide-react'

export function SearchBar({ query, setQuery }) {
  return (
    <label className="flex flex-1 items-center gap-3 rounded-3xl border border-orange-100 bg-white px-4 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <Search size={20} className="text-slate-400" />
      <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar productos, promos o bebidas..." className="w-full bg-transparent text-slate-800 outline-none placeholder:text-slate-400 dark:text-white" />
    </label>
  )
}
