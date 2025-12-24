import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="top-navbar" data-node-id="17:4883">
      <div className="logo-container" data-node-id="I17:4883;17:3420">
        <div className="srt-logo">
          <div className="logo-icon" data-node-id="17:3364">
            <img src="https://www.figma.com/api/mcp/asset/7048b34a-e206-4db4-a8ff-bf77344fe7f8" alt="SRT Logo" />
          </div>
          <div className="logo-text">
            <p className="logo-title" data-node-id="17:3347">SRT Storytelling Project</p>
            <p className="logo-subtitle" data-node-id="17:3348">Proof of Concept</p>
          </div>
        </div>
      </div>
      <div className="nav-menu" data-node-id="I17:4883;17:3422">
        <div className="menu-item" data-node-id="I17:4883;17:3422;117:330">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <p>Home</p>
          </Link>
        </div>
        <div className="menu-item" data-node-id="I17:4883;17:3422;117:331">
          <p>About</p>
        </div>
        <div className="menu-item" data-node-id="I17:4883;17:3422;117:332">
          <p>Contact</p>
        </div>
        <div className="menu-item" data-node-id="I17:4883;17:3422;122:1439">
          <span className="material-icons">account_circle</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

