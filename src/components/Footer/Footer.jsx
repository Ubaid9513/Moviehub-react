import './Footer.css'

const footerLinks = [
  {
    heading: 'Support',
    links: ['FAQ', 'Help Center', 'Account', 'Media Center'],
  },
  {
    heading: 'Legal',
    links: ['Privacy', 'Cookie Preferences', 'Corporate Info', 'Legal Notices'],
  },
  {
    heading: 'Company',
    links: ['Jobs', 'Investor Relations', 'Buy Gift Cards', 'Redeem Gift Cards'],
  },
  {
    heading: 'Connect',
    links: ['Contact Us', 'Speed Test', 'Accessibility', 'Press Room'],
  },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="tel:+1-800-585-7265" className="footer__phone">
          Questions? Call 5-7344-643-3245
        </a>

        <div className="footer__grid">
          {footerLinks.map((col) => (
            <div key={col.heading} className="footer__col">
              <h4 className="footer__col-heading">{col.heading}</h4>
              <ul className="footer__col-list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__lang-select-wrap">
          <select className="footer__lang-select" aria-label="Language">
            <option value="en">English</option>
            <option value="ur">اردو</option>
          </select>
        </div>

        <p className="footer__copy">Moviehub Pakistan</p>
      </div>
    </footer>
  )
}

export default Footer
