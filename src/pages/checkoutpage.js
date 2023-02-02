import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/navbar'
import './checkoutpage.css'

function CheckoutPage ({ cartList }) {
  let totalPrice = 0
  const cartProduct = cartList.map(product => {
    const itemPrice = product.price * product.total
    totalPrice += itemPrice
    const key = cartList.indexOf(product)
    return (
      <div key={key} className='check-cart-item'>
        <img src='' alt='img'/>
        <div>
          <span>{`${product.name} (${product.total}x)`}</span>
          <span>{`$${product.price} NZD`}</span>
        </div>
        <span className='check-cart-item-total'>{`$${itemPrice} NZD`}</span>
      </div>
    )
  })

  return (
    <div id='checkout'>
      <Navbar />
      <div id='check-invoice'>
        <div id='check-prod'>{cartProduct}</div>
        <div id='check-total'>
          <p>{`$${totalPrice} NZD`}</p>
        </div>
      </div>
    </div>
  )
}

CheckoutPage.propTypes = {
  cartList: PropTypes.array
}

export default CheckoutPage
