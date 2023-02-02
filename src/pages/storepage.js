import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/navbar'
import Store from '../components/store'
import Cart from '../components/cart'
import './storepage.css'

function StorePage ({ productList, handleAddCart, cartList }) {
  return (
    <div id='storepage'>
      <Navbar />
      <Store productList={productList} handleAddCart={handleAddCart}/>
      <Cart cartList={cartList}/>
    </div>
  )
}

StorePage.propTypes = {
  productList: PropTypes.array,
  handleAddCart: PropTypes.func,
  cartList: PropTypes.array
}

export default StorePage
