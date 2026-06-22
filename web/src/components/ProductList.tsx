import { useEffect, useState } from 'react'
import { fetchProducts } from '../api/productsApi'
import type { Product } from '../types/product'

function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(price)
}

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function loadProducts() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchProducts()
        if (!cancelled) {
          setProducts(data)
        }
      } catch {
        if (!cancelled) {
          setError('Не удалось загрузить список продуктов')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    loadProducts()

    return () => {
      cancelled = true
    }
  }, [])

  if (loading) {
    return <p className="status">Загрузка продуктов…</p>
  }

  if (error) {
    return <p className="status status--error">{error}</p>
  }

  if (products.length === 0) {
    return <p className="status">Продукты не найдены</p>
  }

  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id} className="product-card">
          <div className="product-card__header">
            <h2>{product.name}</h2>
            <span className="product-card__price">{formatPrice(product.price)}</span>
          </div>
          <p className="product-card__category">{product.category}</p>
          <span className={`product-card__badge ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
            {product.inStock ? 'В наличии' : 'Нет в наличии'}
          </span>
        </li>
      ))}
    </ul>
  )
}
