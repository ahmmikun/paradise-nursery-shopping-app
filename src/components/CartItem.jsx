import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  removeItem,
  selectCartItemCount,
  selectCartItems,
  selectCartTotal,
  updateQuantity,
} from '../CartSlice'
import Navbar from './Navbar'

const formatPrice = (amount) => `$${amount.toFixed(2)}`

function CartItem() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const itemCount = useSelector(selectCartItemCount)
  const cartTotal = useSelector(selectCartTotal)

  const handleCheckout = () => {
    window.alert('Checkout is coming soon! Thanks for shopping with Paradise Nursery. 🌱')
  }

  return (
    <div className="cart-page">
      <Navbar />

      <main className="container cart-main">
        <header className="page-header">
          <p className="eyebrow">Almost there</p>
          <h1>Shopping Cart</h1>
          <p>
            {itemCount === 0
              ? 'Your cart is waiting for its first plant.'
              : `You have ${itemCount} ${itemCount === 1 ? 'plant' : 'plants'} ready to grow with you.`}
          </p>
        </header>

        {cartItems.length === 0 ? (
          <section className="empty-cart">
            <span className="empty-cart-icon" aria-hidden="true">🪴</span>
            <h2>Your cart is feeling a little empty</h2>
            <p>Add a few greens from our collection and come back to check out.</p>
            <Link to="/plants" className="btn btn-primary btn-large">
              Continue Shopping
            </Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items" aria-label="Items in your cart">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img className="cart-thumb" src={item.image} alt={item.name} />

                  <div className="cart-item-details">
                    <h2>{item.name}</h2>
                    <p className="unit-price">Unit price: {formatPrice(item.price)}</p>
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => dispatch(removeItem(item.id))}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      🗑 Remove
                    </button>
                  </div>

                  <div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
                    <button
                      type="button"
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                      disabled={item.quantity <= 1}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      −
                    </button>
                    <span aria-live="polite">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  <div className="line-total">
                    <span>Total</span>
                    <strong>{formatPrice(item.price * item.quantity)}</strong>
                  </div>
                </article>
              ))}
            </section>

            <aside className="order-summary" aria-label="Order summary">
              <h2>Order Summary</h2>
              <dl className="summary-list">
                <div>
                  <dt>Items ({itemCount})</dt>
                  <dd>{formatPrice(cartTotal)}</dd>
                </div>
                <div>
                  <dt>Shipping</dt>
                  <dd className="free-shipping">Free</dd>
                </div>
                <div className="summary-total">
                  <dt>Total amount</dt>
                  <dd>{formatPrice(cartTotal)}</dd>
                </div>
              </dl>
              <button type="button" className="btn btn-primary btn-block" onClick={handleCheckout}>
                Checkout
              </button>
              <Link to="/plants" className="btn btn-secondary btn-block">
                Continue Shopping
              </Link>
              <p className="summary-note">Secure checkout and happy plants guaranteed. 🌿</p>
            </aside>
          </div>
        )}
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Paradise Nursery. Grown with love.</span>
          <Link to="/plants">Back to the collection →</Link>
        </div>
      </footer>
    </div>
  )
}

export default CartItem
