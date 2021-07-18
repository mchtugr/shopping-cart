import Header from '../components/Header'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'

import CartProducts from '../components/CartProducts'
import ShippingDetail from '../components/ShippingDetail'
import CartSummary from '../components/CartSummary'

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart)
  return (
    <div>
      <Header />
      <div className='mt-4 text-center d-flex justify-content-center'>
        {cartItems.length === 0 && (
          <Col>
            <div className='text-danger m-4'>Your cart is empty!</div>
            <Link href='/'>
              <a>
                <button className='btn btn-warning rounded'>
                  Continue Shopping
                </button>
              </a>
            </Link>
          </Col>
        )}
      </div>
      <div>
        {cartItems.length > 0 && (
          <Row className='m-0'>
            <Col sm={8} className='mb-2'>
              <CartProducts />
            </Col>
            <Col sm={4}>
              <ShippingDetail />
              <CartSummary />
            </Col>
          </Row>
        )}
      </div>
    </div>
  )
}

export default CartPage
