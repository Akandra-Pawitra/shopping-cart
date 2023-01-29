import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <div id='navbar'>
      <a id='nav-home'>
        <Link to={'/'}>HOME</Link>
      </a>
      <a id='nav-store'>
        <Link to={'/store'}>STORE</Link>
      </a>
    </div>
  )
}

export default Navbar
