import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import Store from '../components/store'
import Cart from '../components/cart'
import './storepage.css'

class Product {
  constructor (name, price) {
    this.name = name
    this.price = price
  }
}

function StorePage () {
  const [productList, setProductList] = useState([])
  const [cartList, setCartList] = useState([])
  useEffect(() => {
    const products = []
    for (let i = 1; i < 9; i++) {
      products.push(new Product(`Product ${i}`, i * 10))
    }
    setProductList(products)
  }, [])

  const handleAddCart = (product, amount) => {
    const item = { name: product, total: amount }
    const list = [...cartList, item]
    setCartList(list)
  }

  return (
    <div id='storepage'>
      <Navbar />
      <Store productList={productList} handleAddCart={handleAddCart}/>
      <Cart cartList={cartList}/>
    </div>
  )
}

export default StorePage
