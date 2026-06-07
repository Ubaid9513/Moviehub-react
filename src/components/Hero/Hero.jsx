import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      {/* Background */}
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1920&h=1080&fit=crop&auto=format"
          alt="Featured show background"
          className="hero__bg-img"
        />
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
          <div className="hero__input-wrap">
            <input
              type="text"
              placeholder="Search movies..."
              className="hero__email-input"
            />
          </div>
          <button className="hero__cta-btn">
            Explore Now
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hero__cta-icon">
              <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom gradient for smooth transition */}
      <div className="hero__bottom-fade" />
    </section>
  )
}

export default Hero
