import Image from 'next/image'
import { useDispatch } from 'react-redux'

import { addToCart } from '../actions'

const ProductCard = ({ item }) => {
  const dispatch = useDispatch()

  const handleClickEffect = (id) => {
    clearTimeout(demo)
    const btn = document.getElementById(id)
    btn.innerText = 'added'
    btn.classList.add('bg-warning')
    let demo = setTimeout(() => {
      btn.innerText = 'add to cart'
      btn.classList.remove('bg-warning')
    }, 1000)
  }

  return (
    <div className='product-card m-2'>
      <Image
        src={'/img' + item.img[0]}
        alt={item.title}
        width={200}
        height={200}
      />
      <div className='btn-container center m-0 p-0'>
        <button
          id={`product-${item.id}`}
          className='card-btn btn btn-light rounded p-2'
          onClick={(e) => {
            dispatch(addToCart(item))
            handleClickEffect(e.target.id)
          }}
          // disabled={item.stockNum}
        >
          Add to Cart
        </button>
      </div>
      <div className='product-title-home'>{item.title}</div>
      <div>${item.price}</div>
    </div>
  )
}

export default ProductCard
