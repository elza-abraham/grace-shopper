import axios from 'axios'

const initialState = {
  products: [],
  selectedProduct: {},
  cart: []
}

const GET_PRODUCTS = 'GET_PRODUCTS'
const SELECT_PRODUCT = 'SELECTED_PRODUCT'
const ADDED_REVIEW = 'ADDED_REVIEW'
const GET_CART = 'GET_CART'

const getCartAction = cart => ({
  type: GET_CART,
  cart
})

const getProductsAction = products => ({
  type: GET_PRODUCTS,
  products
})

const setProductAction = product => ({
  type: SELECT_PRODUCT,
  product
})

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/products')
    const products = res.data
    dispatch(getProductsAction(products.products))
    dispatch(getCartAction(products.cart))
  } catch (error) { console.log(error) } // redirect to error page instead of just console logging.
}

export const setProduct = (product) => (dispatch) => {
  dispatch(setProductAction(product))
}

const addedReview = (review) => {
  return ({
    type: ADDED_REVIEW,
    review
  })
}

export const addReview = (review, selectedProduct) => {
  return async (dispatch) => {
    const response = await axios.post('api/reviews/', {review, selectedProduct} )
    dispatch(addedReview(response.data))
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_PRODUCTS:
    return {...state, products: action.products}
  case SELECT_PRODUCT:
    return {...state, selectedProduct: action.product}
  case ADDED_REVIEW:
    return {...state, selectedProduct: {...state.selectedProduct, reviews: [...state.selectedProduct.reviews, action.review]}}
  case GET_CART:
    return {...state, cart: action.cart}
  default:
    return state
  }
}
