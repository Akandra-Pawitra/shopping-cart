import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Store ({ productList, handleAddCart }) {
  const products = productList.map(product => {
    const [hidden, setHidden] = useState(true)
    const [value, setValue] = useState(1)
    const handleChange = (event) => {
      if (event.target.value < 1 || event.target.value === '') setValue(1)
      else if (event.target.value > 99) {
        if (event.target.value[1] === '0' && event.target.value[2] === '0') setValue(1)
        else setValue(event.target.value[1] + event.target.value[2])
      } else (setValue(event.target.value))
    }
    const red = () => {
      if (value > 1) setValue(+(value) - 1)
    }
    const add = () => {
      if (value < 99) setValue(+(value) + 1)
    }
    return (
      <div className='prod-grid' key={(product.name).split(' ').join('')}>
        <img className='prod-img' src="" alt={product.name + ' image'} onClick={() => setHidden(false)} />
        <div className='prod-info' onClick={() => setHidden(false)}>
          <p className='prod-name'>{product.name}</p>
          <p className='prod-price'>${product.price} NZD</p>
          <p className='prod-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={
          hidden ? 'prod-total hide' : 'prod-total'
        }>
          <button onClick={red} className='prod-bred'>-</button>
          <input
            onChange={handleChange}
            value={value}
            className='prod-input'
            type='number'
            min={0}
            max={99}
          />
          <button onClick={add} className='prod-badd'>+</button>
          <button onClick={() => {
            handleAddCart(product.name, value)
          }} className='prod-bsub'>Add to Cart</button>
        </div>
        <button onClick={() => {
          setValue(1)
          setHidden(true)
        }}
          className={
          hidden ? 'prod-bclose hide' : 'prod-bclose'
        }>X</button>
      </div>
    )
  })
  return (
    <div id='store'>{products}</div>
  )
}

Store.propTypes = {
  productList: PropTypes.array,
  handleAddCart: PropTypes.func
}

export default Store
