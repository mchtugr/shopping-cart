import { Row, Col } from 'react-bootstrap'

import ProductCard from './ProductCard'

const ProductShowroom = ({ data }) => {
  return (
    <Row className='m-3'>
      {data &&
        data.map((item) => (
          <Col sm={6} md={4} lg={3} key={item.id} className='text-center'>
            <ProductCard item={item} />
          </Col>
        ))}
    </Row>
  )
}

export default ProductShowroom
