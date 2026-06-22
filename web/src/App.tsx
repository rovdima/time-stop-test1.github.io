import { ProductList } from './components/ProductList'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Stop.PromoTe</h1>
        <p>Каталог продуктов</p>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  )
}

export default App
