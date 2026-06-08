import './CTA.css'

function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="cta__inner">
        <h2 className="cta__title">
          Unlimited entertainment. One low price.
        </h2>

        <p className="cta__subtitle">
          Explore our movie collection and discover trending content.
        </p>

        <form className="cta__form">
          <div className="cta__form-row">
            <div className="cta__input-wrap">
              <input
                type="email"
                placeholder="Email address"
                className="cta__email_input"
              />
            </div>

            <button type="button" className="cta__btn">
              Get Started
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="cta__btn-icon"
              >
                <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
              </svg>
            </button>
          </div>
        </form>

        <div className="cta__badges">
          <span className="cta__badge">✓ No ads</span>
          <span className="cta__badge">✓ Cancel anytime</span>
          <span className="cta__badge">✓ 4K Ultra HD</span>
        </div>
      </div>
    </section>
  )
}

export default CTA