import React from 'react'
import PropTypes from 'prop-types'

function noop () {
  return null
}

function Store ({ productList }) {
  const products = productList.map(product => {
    const name = product.name + ' image'
    return (
      <div className="prod-grid" key={product.name}>
        <img className="prod-img" src="" alt={name} />
        <div className="prod-info">
          <p className="prod-name">{product.name}</p>
          <p className="prod-price">${product.price} NZD</p>
          <p className="prod-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='prod-total'>
          <button onClick={noop} className='prod-bred'>-</button>
          <input onChange={noop} className='prod-input' type='text' min={0} max={99} value='1'></input>
          <button onClick={noop} className='prod-badd'>+</button>
          <button onClick={noop} className='prod-bsub'>Add to Cart</button>
        </div>
        <button onClick={noop} className='prod-bclose'>X</button>
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
