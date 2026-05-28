import { ProductCard } from '../components/products/ProductCard'
import { ProductModal } from '../components/products/ProductModal'
import { CategoryFilter } from '../components/products/CategoryFilter'
import { SearchBar } from '../components/products/SearchBar'
import { SortDropdown } from '../components/products/SortDropdown'

export function Menu({ productsState, addToCart, selectedProduct, setSelectedProduct }) {
  const { query, setQuery, category, setCategory, sort, setSort, onlyAvailable, setOnlyAvailable, filteredProducts } = productsState
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">Menú interactivo</p>
          <h1 className="text-4xl font-black text-slate-950 dark:text-white">¿Qué se te antoja hoy?</h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">Busca, filtra, revisa detalles y agrega productos al carrito.</p>
        </div>
        <SortDropdown sort={sort} setSort={setSort} onlyAvailable={onlyAvailable} setOnlyAvailable={setOnlyAvailable} />
      </div>
      <div className="mb-4"><SearchBar query={query} setQuery={setQuery} /></div>
      <CategoryFilter category={category} setCategory={setCategory} />
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={addToCart} onView={setSelectedProduct} />)}
      </div>
      {filteredProducts.length === 0 && <div className="mt-16 text-center"><p className="text-7xl">🔎</p><h3 className="mt-4 text-2xl font-black dark:text-white">No encontramos productos</h3><p className="text-slate-500 dark:text-slate-400">Prueba con otra búsqueda o categoría.</p></div>}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAdd={addToCart} />
    </section>
  )
}
