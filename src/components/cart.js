import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function Cart ({ cartList }) {
  const [quantity, setQuantity] = useState(0)
  useEffect(() => {
    if (cartList.length > 0 && quantity !== '99+') {
      let total = quantity
      total += parseInt(cartList[cartList.length - 1].total)
      if (total > 99) setQuantity('99+')
      else setQuantity(total)
    }
  }, [cartList])

  return (
    <div id="cart">
      <div id="cart-count" className={quantity ? '' : 'hide'}>{quantity}</div>
      <img src="./cart.svg" id="cart-icon" />
  </div>
  )
}

Cart.propTypes = {
  cartList: PropTypes.array
}

export default Cart
