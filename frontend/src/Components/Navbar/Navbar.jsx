import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>ACME</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("machines")}}><Link style={{ textDecoration: 'none' }} to='/machines'>Machines</Link>{menu==="machines"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("equipment")}}><Link style={{ textDecoration: 'none' }} to='/equipment'>Equipment</Link>{menu==="equipment"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("tools")}}><Link style={{ textDecoration: 'none' }} to='/tools'>Tools</Link>{menu==="tools"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <button><Link style={{ textDecoration: 'none' }} to='/login'>Login</Link></button>
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
