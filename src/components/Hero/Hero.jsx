import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      {/* Background */}
      <div className="hero__bg">
        <div className="hero__overlay" />
      </div>

      {/* Content */}
      <div className="hero__content">
        <p className=" hero__title">Unlimited movies, TV shows, and more</p>
        <h1 className="hero__eyebrow">Starts at ₨850. Cancel anytime.</h1>
        <p className="hero__subtitle">
          Explore our movie collection and discover trending content.
        </p>

        <div className="hero__cta-group">
          <div className="hero__input-wraps">
            <input
              type="text"
              placeholder="Search movies..."
              className="hero__email-input"
            />
          </div>
          <button className="hero__cta-btn">
            Explore Now
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="hero__cta-icon">
              <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom gradient for smooth transition */}
      <div className="hero__bottom-fade"></div>
    </section>
  )
}

export default Hero
