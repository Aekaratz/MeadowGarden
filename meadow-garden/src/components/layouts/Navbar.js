import React from 'react'
import './Layout.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <span className='nav-logo'>Aekarat</span>

      <div className='nav-items'>
          <a href='/home'>Home</a>
          <a href='/contact'>Contact</a>
          <a href='/about'>About</a>
      </div>
    </nav>
  )
}
