import React, { useState, useEffect } from 'react'

const PASSWORD = 'tellstory2026' // Change this to your desired password
const STORAGE_KEY = 'srt_authenticated'

function PasswordProtection({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already authenticated
    const authenticated = localStorage.getItem(STORAGE_KEY) === 'true'
    setIsAuthenticated(authenticated)
    setIsLoading(false)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Trim whitespace and compare (case-sensitive)
    const trimmedPassword = password.trim()
    
    if (trimmedPassword === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, 'true')
      setPassword('')
      // Update authentication state
      setIsAuthenticated(true)
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setIsAuthenticated(false)
    setPassword('')
  }

  if (isLoading) {
    return (
      <div className="password-protection-loading">
        <div className="loading-spinner">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="password-protection">
        <div className="password-protection-container">
          <div className="password-protection-header">
            <h1 className="password-protection-title">Protected Content</h1>
            <p className="password-protection-subtitle">Please enter the password to access this site</p>
          </div>
          <form className="password-protection-form" onSubmit={handleSubmit}>
            <div className="password-input-group">
              <input
                type="password"
                className="password-input"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                required
              />
            </div>
            {error && <div className="password-error">{error}</div>}
            <button type="submit" className="password-submit-btn">
              Access Site
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <>
      {children}
      <button className="logout-btn" onClick={handleLogout} title="Logout">
        <span className="material-icons">lock</span>
      </button>
    </>
  )
}

export default PasswordProtection

