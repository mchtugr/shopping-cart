import { useSelector } from 'react-redux'
import { Row } from 'react-bootstrap'
import Link from 'next/link'

const CartSummary = () => {
  const cart = useSelector((state) => state.cart)
  const { cartItems, shipping } = cart

  return (
    <div className='text-center p-3 mb-3 bg-light rounded'>
      <h3 className='text-center'>Summary</h3>

      <Row className='cart-summary-container'>
        <div className='text-left'>Total Items:</div>
        <div>{cartItems.reduce((acc, c) => acc + c.qty, 0)} </div>
      </Row>
      <Row className='cart-summary-container'>
        <div className='text-left'>Shipping:</div>
        <div>
          {shipping.price ? (
            shipping.price
          ) : (
            <span className='text-danger'>Select Shipping!</span>
          )}
        </div>
      </Row>
      <Row className='cart-summary-container'>
        <div className='text-left'>SubTotal:</div>
        <div>
          {cartItems.reduce((acc, c) => acc + c.qty * c.price, 0) +
            shipping.price}{' '}
          TL
        </div>
      </Row>
      <Link href='/info'>
        <a>
          <button
            className='btn btn-warning rounded p-2'
            disabled={shipping.price === null}
            onClick={() => 'Checkout Screen Page'}
          >
            Proceed to Checkout
          </button>
        </a>
      </Link>
    </div>
  )
}

export default CartSummary
