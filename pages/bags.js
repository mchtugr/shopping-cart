import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../components/Header'
import ProductShowroom from '../components/ProductShowroom'
import ShoppingCart from '../components/ShoppingCart'
import { filterProducts } from '../actions'
import { getFilteredProducts } from '../helpers/api-util'

const BagsPage = ({ data }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(filterProducts('bags'))
    return () => {
      dispatch(filterProducts(''))
    }
  }, [])
  // const data = useSelector((state) => state.products.filteredList)

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
  const data = await getFilteredProducts('bags')
  return {
    props: {
      data,
    },
    revalidate: 1800,
  }
}

export default BagsPage
