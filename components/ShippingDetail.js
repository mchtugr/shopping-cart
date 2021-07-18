import Image from 'next/image'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { selectShippingCompany } from '../actions'

const ShippingDetail = () => {
  const shipping = useSelector((state) => state.cart.shipping)
  const dispatch = useDispatch()
  return (
    <div className='bg-light rounded p-3 mb-3 mt-1'>
      <h3 className='text-center'>Shipping</h3>
      <form>
        <Row className='form-check my-3 shipping-detail-container'>
          <Col onClick={() => dispatch(selectShippingCompany('aras', 13.49))}>
            <label className='form-check-label'>
              <input
                type='radio'
                className='form-check-input'
                name='shipping'
                id='aras'
                value='aras'
                defaultChecked={shipping.company === 'aras'}
              />
              Aras
            </label>
          </Col>
          <Col>
            <Image src='/img/aras.png' alt='aras-logo' width={80} height={20} />
          </Col>
          <Col>
            <div className=''>13.49 TL</div>
          </Col>
        </Row>
        <Row className='form-check my-3 shipping-detail-container'>
          <Col
            onClick={() => dispatch(selectShippingCompany('yurtici', 12.99))}
          >
            <label className='form-check-label'>
              <input
                type='radio'
                className='form-check-input'
                name='shipping'
                id='yurtici'
                value='yurtici'
                defaultChecked={shipping.company === 'yurtici'}
              />
              Yurtici
            </label>
          </Col>
          <Col>
            <Image
              src='/img/yurtici.png'
              alt='yurtici-logo'
              width={80}
              height={20}
            />
          </Col>
          <Col>
            <div className=''>12.99 TL</div>
          </Col>
        </Row>

        <Row className='form-check my-3 shipping-detail-container'>
          <Col onClick={() => dispatch(selectShippingCompany('mng', 13.99))}>
            <label className='form-check-label'>
              <input
                type='radio'
                className='form-check-input'
                name='shipping'
                id='mng'
                value='mng'
                defaultChecked={shipping.company === 'mng'}
              />
              MNG
            </label>
          </Col>
          <Col>
            <Image src='/img/mng.png' alt='mng-logo' width={80} height={20} />
          </Col>
          <Col>
            <div className=''>13.99 TL</div>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default ShippingDetail
