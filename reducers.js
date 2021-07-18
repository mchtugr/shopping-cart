import { combineReducers } from 'redux'
import * as types from './types'
import data from './data'

const productReducerInitialState = {
  list: data,
  category: '',
  filteredList: data,
}
// PRODUCT REDUCER
const productReducer = (state = productReducerInitialState, action) => {
  switch (action.type) {
    case types.FILTER_PRODUCTS:
      let filteredProducts = state.list.filter(
        (item) => item.category === action.payload
      )
      let category = action.payload
      if (state.category === action.payload) {
        filteredProducts = state.list
        category = ''
      }
      return {
        ...state,
        category,
        filteredList: filteredProducts,
      }
    default:
      return state
  }
}

let cartItemsFromLocalStorage = []
if (typeof window !== 'undefined') {
  cartItemsFromLocalStorage = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : []
}

const cartReducerInitialState = {
  cartItems: cartItemsFromLocalStorage,
  shipping: { company: '', price: null },
}

const cartReducer = (state = cartReducerInitialState, action) => {
  const currentProduct = action.payload
  switch (action.type) {
    case types.ADD_TO_CART:
      const existItem = state.cartItems.find(
        (item) => item.id === currentProduct.id
      )
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) => {
            return item.id === currentProduct.id
              ? { ...currentProduct, qty: item.qty + 1 }
              : item
          }),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...currentProduct, qty: 1 }],
        }
      }
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== currentProduct.id
        ),
      }
    case types.HANDLE_INCREMENT:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          return item.id === currentProduct.id
            ? { ...currentProduct, qty: item.qty + 1 }
            : item
        }),
      }
    case types.HANDLE_DECREMENT:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          return item.id === currentProduct.id
            ? { ...currentProduct, qty: item.qty - 1 }
            : item
        }),
      }
    case types.SELECT_SHIPPING_COMPANY:
      return {
        ...state,
        shipping: action.payload,
      }
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  products: productReducer,
  cart: cartReducer,
}

export default combineReducers(reducers)
