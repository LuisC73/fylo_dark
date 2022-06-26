import { useState } from 'react'
import logo from '../../assets/logo.svg'

function Nav(){
    return(
        <header className="header">
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navbar__ul">
        <li className="navbar__li"><a href="#" className="navbar__link">Features</a></li>
        <li className="navbar__li"><a href="#" className="navbar__link">Team</a></li>
        <li className="navbar__li"><a href="#" className="navbar__link">Sign In</a></li>
      </ul>
    </nav>
  </header>
    )
}

export default Nav;