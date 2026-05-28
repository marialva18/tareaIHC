export function SortDropdown({ sort, setSort, onlyAvailable, setOnlyAvailable }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-2xl border border-orange-100 bg-white px-4 py-3 font-semibold text-slate-700 outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white">
        <option value="popular">Más populares</option>
        <option value="time">Más rápidos</option>
        <option value="low">Menor precio</option>
        <option value="high">Mayor precio</option>
      </select>
      <label className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-600 ring-1 ring-orange-100 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700">
        <input type="checkbox" checked={onlyAvailable} onChange={(event) => setOnlyAvailable(event.target.checked)} className="h-4 w-4 accent-orange-500" />
        Solo disponibles
      </label>
    </div>
  )
}
