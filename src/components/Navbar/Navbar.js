import React from 'react'
import logo from '../../logo.svg'
import './navbar.css'
export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" />
            <ul className="nav-links">
                <li className="nav-link"><a href="/">Home</a></li>
                <li className="nav-link"><a href="/">About</a></li>
                <li className="nav-link"><a href="/" className="active">Tours</a></li>
            </ul>
        </nav>
    )
}
