import { useState } from 'react'
import './CTA.css'

function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section className="cta" id="cta">
      <div className="cta__inner">
        {submitted ? (
          <div className="cta__success">
            <div className="cta__success-icon">✓</div>
            <h2 className="cta__success-title">You're on the list!</h2>
            <p className="cta__success-sub">We'll send a confirmation to <strong>{email}</strong>. Get ready to stream.</p>
          </div>
        ) : (
          <>
            <h2 className="cta__title">Unlimited entertainment. One low price.</h2>
            <p className="cta__subtitle">
              Explore our movie collection and discover trending content.
            </p>

            <form className="cta__form" onSubmit={handleSubmit} noValidate>
              <div className="cta__form-row">
                <div className="cta__input-wrap">
                  <input
                    type="text"
                    placeholder="Email address"
                    className={`cta__email-input ${error ? 'cta__email-input--error' : ''}`}
                  />
                  {error && <span className="cta__error">{error}</span>}
                </div>
                <button type="submit" className="cta__btn">
                  Get Started
                  <svg viewBox="0 0 24 24" fill="currentColor" className="cta__btn-icon">
                    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
                  </svg>
                </button>
              </div>
            </form>

            <div className="cta__badges">
              <span className="cta__badge">✓ No ads</span>
              <span className="cta__badge">✓ Cancel anytime</span>
              <span className="cta__badge">✓ 4K Ultra HD</span>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default CTA
