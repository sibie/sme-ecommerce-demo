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
            <p></p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("tapes")}}><Link style={{ textDecoration: 'none' }} to='/tapes'>Tapes</Link>{menu==="tapes"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("adhesives")}}><Link style={{ textDecoration: 'none' }} to='/adhesives'>Adhesives</Link>{menu==="adhesives"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("pigments")}}><Link style={{ textDecoration: 'none' }} to='/pigments'>Pigments</Link>{menu==="pigments"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <button><Link style={{ textDecoration: 'none' }} to='/login'>Login</Link></button>
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
