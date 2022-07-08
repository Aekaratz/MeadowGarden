import React from 'react'
import './Layout.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='navbar'>
      <span className='nav-logo'>Aekarat</span>

      <div className='nav-items'>
          <a href='/home'>Home</a>
          <a href='/contact'>Contact</a>
          <a href='/about'>About</a>
      </div>
      <div className='login'>
        <input type="text" id='username' placeholder='username'/>
        <input type="password" id='password'placeholder='password'/>
        <button type='submit'className='btn-login'>Login</button>

      </div>
    </nav>
  )
}
