import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <>
    <header className="header">
        <div className="container">
            <div className="nav">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link></Link>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header