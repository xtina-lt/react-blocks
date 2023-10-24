import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
        <img src={logo} id="logo" alt="logo"/>
        <h1>
            Hello Halloween
        </h1>
    </header>
  )
}

export default Header