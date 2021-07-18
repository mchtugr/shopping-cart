import { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Image from 'next/image'

import DeleteIcon from './icons/DeleteIcon'
import { handleIncrement, handleDecrement, removeFromCart } from '../actions'

const CartProducts = () => {
  const data = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch()

  return (
    <div className='m-1'>
      {data.length === 0 && (
        <div className='text-danger m-4'>Your cart is empty!</div>
      )}{' '}
      {data.map((item) => (
        <Fragment key={item.id}>
          <Row key={item.id} className='mx-0 my-1 center bg-light p-0 rounded'>
            <Col
              xs={1}
              onClick={() => dispatch(removeFromCart(item))}
              style={{ padding: '0', margin: '0' }}
              className='center p-0'
            >
              <div className='delete-btn-container btn btn-danger rounded'>
                <DeleteIcon />
              </div>
            </Col>
            <Col xs={3} className='p-0'>
              <Image
                src={'/img' + item.img[0]}
                alt={item.title}
                width={80}
                height={80}
              />
            </Col>
            <Col xs={2} className='product-title p-0'>
              {item.title}
            </Col>
            <Col xs={4} className='p-0 text-center'>
              <div>
                <button
                  className='btn custom-btn px-2 py-0 rounded'
                  onClick={() => dispatch(handleDecrement(item))}
                  disabled={item.qty === 1}
                >
                  -
                </button>{' '}
                <span>({item.qty})</span>{' '}
                <button
                  className='btn custom-btn px-2 py-0 rounded'
                  onClick={() => dispatch(handleIncrement(item))}
                  disabled={item.qty == item.stockNum}
                >
                  +
                </button>
              </div>
            </Col>
            <Col xs={1} className='p-0'>
              {item.price * item.qty} TL
            </Col>
          </Row>
        </Fragment>
      ))}
    </div>
  )
}

export default CartProducts
