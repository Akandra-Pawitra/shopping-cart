import React, { useState } from 'react'
import PropTypes from 'prop-types'

function noop () {
  console.log('test')
}

function Store ({ productList }) {
  const products = productList.map(product => {
    const [hidden, setHidden] = useState(true)
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
          <button onClick={noop} className='prod-bred'>-</button>
          <input onChange={noop} className='prod-input' type='text' min={0} max={99} value='1'></input>
          <button onClick={noop} className='prod-badd'>+</button>
          <button onClick={noop} className='prod-bsub'>Add to Cart</button>
        </div>
        <button onClick={() => setHidden(true)} className={
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
  productList: PropTypes.array
}

export default Store
