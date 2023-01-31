import React from 'react'
import PropTypes from 'prop-types'

function Store ({ productList }) {
  const products = productList.map(product => {
    const name = product.name + ' image'
    return (
      <div className="prod-grid" key={product.name}>
        <div className="prod-img"><img src="" alt={name} /></div>
        <div className="prod-cell">
          <p className="prod-name">{product.name}</p>
          <p className="prod-price">${product.price} NZD</p>
          <p className="prod-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
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
