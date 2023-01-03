import React from 'react'
import autorenew from '../../assets/autorenew.svg'
import './Header.css'

function Header() {
  return (
    <header>
      <div className='header_divContent'>
        <button className='header_randomButton'>
          random
          <img className='header_autorenewIcon' src={autorenew} alt="" />
        </button>
      </div>
    </header>
  )
}

export default Header