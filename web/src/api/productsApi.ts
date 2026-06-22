import type { Product } from '../types/product'

const mockProducts: Product[] = [
  { id: 1, name: 'Кофе «Арабика»', price: 450, category: 'Напитки', inStock: true },
  { id: 2, name: 'Чай «Зелёный лист»', price: 320, category: 'Напитки', inStock: true },
  { id: 3, name: 'Круассан с миндалём', price: 180, category: 'Выпечка', inStock: false },
  { id: 4, name: 'Сэндвич с индейкой', price: 290, category: 'Закуски', inStock: true },
  { id: 5, name: 'Лимонад домашний', price: 150, category: 'Напитки', inStock: true },
]

const MOCK_DELAY_MS = 600

export async function fetchProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS))
  return [...mockProducts]
}
