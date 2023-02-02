import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Cart ({ cartList }) {
  const [quantity, setQuantity] = useState(0)
  const [checked, setChecked] = useState([])
  useEffect(() => {
    if (quantity === 0) {
      if (cartList.length !== 0) {
        let total = 0
        for (let i = 0; i < cartList.length; i++) {
          total += cartList[i].total
        }
        if (total > 99) setQuantity('99+')
        else setQuantity(total)
      }
    } else {
      if (quantity !== '99+') {
        let total = quantity
        const item = cartList[cartList.length - 1]
        if (!checked.includes(item)) {
          const arr = checked
          arr.push(item)
          setChecked(arr)
          total += item.total
        }
        if (total > 99) setQuantity('99+')
        else setQuantity(total)
      }
    }
  }, [cartList])

  return (
    <div id="cart">
      <div id="cart-count" className={quantity ? '' : 'hide'}>{quantity}</div>
      <Link to={'/checkout'}>
        <img src="./cart.svg" id="cart-icon" />
      </Link>
  </div>
  )
}

Cart.propTypes = {
  cartList: PropTypes.array
}

export default Cart
