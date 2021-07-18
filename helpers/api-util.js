export const getAllProducts = async () => {
  const response = await fetch(
    'https://shopping-cart-669b8-default-rtdb.europe-west1.firebasedatabase.app/products.json'
  )
  const data = await response.json()
  return data
}

export const getFilteredProducts = async (category) => {
  const data = await getAllProducts()
  return data.filter((product) => product.category === category)
}
