import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="top-navbar" data-node-id="17:4883">
      <div className="logo-container" data-node-id="I17:4883;17:3420">
        <div className="srt-logo">
          <div className="logo-icon" data-node-id="17:3364">
            <img src="/assets/images/chatbubble-ellipses-outline.png" alt="SRT Logo" />
          </div>
          <div className="logo-text">
            <p className="logo-title" data-node-id="17:3347">SRT Storytelling Project</p>
            <p className="logo-subtitle" data-node-id="17:3348">Proof of Concept</p>
          </div>
        </div>
      </div>
      <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>
      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`} data-node-id="I17:4883;17:3422">
        <div className="menu-item" data-node-id="I17:4883;17:3422;117:330">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMenu}>
            <p>Home</p>
          </Link>
        </div>
        <div className="menu-item" data-node-id="I17:4883;17:3422;117:331">
          <p>About</p>
        </div>
        <div className="menu-item" data-node-id="I17:4883;17:3422;117:332">
          <p>Contact</p>
        </div>
        <div className="menu-item" data-node-id="I17:4883;17:3422;117:333">
          <Link to="/my-stories" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMenu}>
            <p>My Stories</p>
          </Link>
        </div>
        <div className="menu-item" data-node-id="I17:4883;17:3422;122:1439">
          <span className="material-icons">account_circle</span>
        </div>
      </div>
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  )
}

export default Navbar

