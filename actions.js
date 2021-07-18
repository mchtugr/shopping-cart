import {
  ADD_TO_CART,
  FILTER_PRODUCTS,
  HANDLE_DECREMENT,
  HANDLE_INCREMENT,
  REMOVE_FROM_CART,
  SELECT_SHIPPING_COMPANY,
} from './types'

export const filterProducts = (category) => {
  return {
    type: FILTER_PRODUCTS,
    payload: category,
  }
}

export const addToCart = (product) => (dispatch, getState) => {
  dispatch({ type: ADD_TO_CART, payload: product })

  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
  }
}

export const removeFromCart = (product) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART, payload: product })
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
  }
}

export const handleIncrement = (product) => (dispatch, getState) => {
  dispatch({ type: HANDLE_INCREMENT, payload: product })
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
  }
}

export const handleDecrement = (product) => (dispatch, getState) => {
  dispatch({ type: HANDLE_DECREMENT, payload: product })
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
  }
}

export const selectShippingCompany = (company, price) => {
  return { type: SELECT_SHIPPING_COMPANY, payload: { company, price } }
}
