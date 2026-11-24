import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem, selectCartItems } from '../CartSlice'
import { categories } from '../data/plants'
import Navbar from './Navbar'

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const addedIds = new Set(cartItems.map((item) => item.id))

  return (
    <div className="catalog-page">
      <Navbar />

      <main className="container catalog-main">
        <header className="page-header">
          <p className="eyebrow">Our collection</p>
          <h1>Find your next favorite plant</h1>
          <p>
            Browse {categories.length} categories of healthy, hand-picked houseplants.
            Add a plant to your cart and watch your paradise grow.
          </p>
        </header>

        <nav className="category-jump" aria-label="Jump to a plant category">
          {categories.map((category) => (
            <a key={category.id} href={`#${category.id}`}>
              <span aria-hidden="true">{category.icon}</span> {category.name}
            </a>
          ))}
        </nav>

        {categories.map((category) => (
          <section className="category-section" id={category.id} key={category.id}>
            <div className="category-heading">
              <span className="category-icon" aria-hidden="true">{category.icon}</span>
              <div className="category-title">
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>
              <span className="count-pill">{category.plants.length} plants</span>
            </div>

            <div className="product-grid">
              {category.plants.map((plant) => {
                const isAdded = addedIds.has(plant.id)

                return (
                  <article className="product-card" key={plant.id}>
                    <div className="product-image-wrap">
                      <img src={plant.image} alt={plant.name} loading="lazy" />
                    </div>
                    <div className="product-body">
                      <h3>{plant.name}</h3>
                      <p className="product-price">${plant.price.toFixed(2)}</p>
                      <button
                        type="button"
                        className={`btn add-btn${isAdded ? ' is-added' : ''}`}
                        disabled={isAdded}
                        onClick={() => dispatch(addItem(plant))}
                      >
                        {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        ))}
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Paradise Nursery. Grown with love.</span>
          <Link to="/cart">View your cart →</Link>
        </div>
      </footer>
    </div>
  )
}

export default ProductList
