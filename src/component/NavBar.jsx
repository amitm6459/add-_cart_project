import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const NavBar = () => {

  const items= useSelector((state)=>state.cart)
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}} >
      <span className='logo' style={{display:"flex",justifyContent:"center"}}>Redux Store</span>
      <div style={{display:"flex",justifyContent:"center"}}>
        <Link  className="navLink"  to='/'>Home</Link>
        <Link  className="navLink"  to='/cart'>cart</Link>
        <span className='cartCount'>Cart items: {items.length}</span>
      </div>
    </div>
  )
}

export default NavBar
