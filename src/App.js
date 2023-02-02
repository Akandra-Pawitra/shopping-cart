import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import HomePage from './pages/homepage'
import StorePage from './pages/storepage'
import './App.css'
import CheckoutPage from './pages/checkoutpage'

class Product {
  constructor (name, price) {
    this.name = name
    this.price = price
  }
}

function App () {
  const [productList, setProductList] = useState([])
  const [cartList, setCartList] = useState([])
  useEffect(() => {
    const products = []
    for (let i = 1; i < 9; i++) {
      products.push(new Product(`Product ${i}`, i * 10))
    }
    setProductList(products)
  }, [])

  const handleAddCart = (product, amount, price) => {
    const item = { name: product, total: amount, price }
    const list = [...cartList, item]
    setCartList(list)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={
          <StorePage productList={productList} handleAddCart={handleAddCart} cartList={cartList} />
        } />
        <Route path="/checkout" element={<CheckoutPage cartList={cartList} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
