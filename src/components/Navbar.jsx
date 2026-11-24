import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItemCount } from '../CartSlice'

function Navbar() {
  const cartCount = useSelector(selectCartItemCount)

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link to="/" className="brand">
          <span className="brand-mark" aria-hidden="true">🌱</span>
          <span>Paradise Nursery</span>
        </Link>

        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/plants">Plants</NavLink>
          <NavLink to="/cart" className="cart-link">
            <span aria-hidden="true">🛒</span>
            <span>Cart</span>
            <span
              className="cart-badge"
              aria-label={`${cartCount} ${cartCount === 1 ? 'item' : 'items'} in cart`}
              aria-live="polite"
            >
              {cartCount}
            </span>
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
