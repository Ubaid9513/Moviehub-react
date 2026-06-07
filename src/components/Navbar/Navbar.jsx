import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from "./logo.png"
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Moviehub Logo SVG */}
        <a href="#" className="navbar__logo">
          <img src={logo} alt="MovieHub Logo" className="navbar__logo-img" />
        </a>

        <div className="navbar__actions">
          <select className="navbar__lang-select" aria-label="Language">
            <option value="en">English</option>
            <option value="ur">اردو</option>
          </select>
          <a href="#" className="navbar__signin-btn">
            Explore
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
