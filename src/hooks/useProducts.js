import { useMemo, useState } from 'react'
import { products } from '../data/products'

export function useProducts() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('popular')
  const [onlyAvailable, setOnlyAvailable] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory = category === 'all' || product.category === category
      const matchesSearch = product.name.toLowerCase().includes(query.toLowerCase()) || product.description.toLowerCase().includes(query.toLowerCase())
      const matchesAvailability = !onlyAvailable || product.status === 'available'
      return matchesCategory && matchesSearch && matchesAvailability
    })

    if (sort === 'low') result = [...result].sort((a, b) => a.price - b.price)
    if (sort === 'high') result = [...result].sort((a, b) => b.price - a.price)
    if (sort === 'time') result = [...result].sort((a, b) => a.estimatedMinutes - b.estimatedMinutes)
    if (sort === 'popular') result = [...result].sort((a, b) => b.rating - a.rating)
    return result
  }, [query, category, sort, onlyAvailable])

  return { query, setQuery, category, setCategory, sort, setSort, onlyAvailable, setOnlyAvailable, filteredProducts }
}
