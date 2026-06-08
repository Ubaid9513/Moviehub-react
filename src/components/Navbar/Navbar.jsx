import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          <h1 className="navbar__logo-h1">MovieHub</h1>
        </a>

        <div className="navbar__actions">
          <select className="navbar__lang-select">
            <option>English</option>
            <option>اردو</option>
          </select>

          <button className="navbar__signin-btn">
            Explore
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar