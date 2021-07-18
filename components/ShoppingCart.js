import { Nav } from 'react-bootstrap'
import Link from 'next/link'
import { useSelector } from 'react-redux'

import CartProducts from './CartProducts'
import ShoppingCartIcon from './icons/ShoppingCartIcon'

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart.cartItems)
  const totalCartItems = cart.reduce((acc, c) => acc + c.qty, 0)

  return (
    <Nav.Link className='cart p-1'>
      <Link href='/cart'>
        <a>
          <ShoppingCartIcon itemNum={totalCartItems} />
        </a>
      </Link>
      <div className='sliding-cart'>
        <CartProducts />
        {totalCartItems > 0 && (
          <Link href='/cart'>
            <a>
              <button className='btn btn-warning p-1 rounded mb-1'>
                Go to Cart
              </button>
            </a>
          </Link>
        )}
      </div>
    </Nav.Link>
  )
}

export default ShoppingCart
