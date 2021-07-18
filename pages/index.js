import { useSelector } from 'react-redux'

import Header from '../components/Header'
import ProductShowroom from '../components/ProductShowroom'
import ShoppingCart from '../components/ShoppingCart'
import { getAllProducts } from '../helpers/api-util'
// import data from '../data'

const HomePage = ({ data }) => {
  // const data = useSelector((state) => state.products.list)

  return (
    <div>
      <Header>
        <ShoppingCart />
      </Header>
      <ProductShowroom data={data} />
    </div>
  )
}

export async function getStaticProps() {
  const data = await getAllProducts()
  return {
    props: {
      data,
    },
    revalidate: 1800,
  }
}

export default HomePage
