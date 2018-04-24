import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getProducts, setProduct } from '../store/product'


export const Products = (props) => {

  const  {products, setProduct, avgReviews} = props

  return (
    <div id='ProductsContainer'>
      {
        products.map(product => {
          return (
            <div key={product.id} onClick={() => setProduct(product)}>
              <div className='ImgContainer'>
                <img src={product.imgUrl} />
              </div>
              <div className='ProductContainer'>
                <ul>
                  <li>Name: {product.name}</li>
                  <li>Description: {product.description}</li>
                  <li>Price: ${product.price}</li>
                  <li>Quantity in stock: {product.inventoryQuantity}</li>
                  <li>Average Rating: {
                    avgReviews.filter((avgReview) => {
                      return avgReview.id === product.id})[0].avgRating
                    ?
                     (Math.ceil(avgReviews.filter((avgReview) => {
                      return avgReview.id === product.id})[0].avgRating * Math.pow(10, 2)) / Math.pow(10, 2))
                    :
                      'Not yet rated'
                  }</li>
                </ul>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

const mapState = state => {
  return {
    products: state.product.products,
    avgReviews: state.product.avgReviews
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    getProducts: dispatch(getProducts()),
    setProduct: (product) => {
      event.preventDefault()
      dispatch(setProduct(product))
      ownProps.history.push('/single-product')
    }
  }
}

export default connect(mapState, mapDispatch)(Products)
