import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <div id='navbar'>
      <Link to={'/'}>HOME</Link>
      <Link to={'/store'}>STORE</Link>
    </div>
  )
}

export default Navbar
