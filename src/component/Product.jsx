import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <h3>Products</h3>
      <ol>
      <li><Link to = "list">List</Link></li>
      <li><Link to = "details">Details</Link></li>
      </ol>
      <Outlet/>
    </div>
  )
}

export default Product
