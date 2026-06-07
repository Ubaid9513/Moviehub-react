import { useRef } from 'react'
import { trendingMovies } from '../../data/movies.js'
import './Trending.css'

function MovieCard({ movie, rank }) {
  return (
    <div className="movie-card">
      <div className="movie-card__rank">{rank}</div>
      <div className="movie-card__img-wrap">
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="movie-card__img"
          loading="lazy"
        />
        <div className="movie-card__hover-overlay">
          <button className="movie-card__play-btn" aria-label={`Play ${movie.title}`}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
          <div className="movie-card__meta">
            <span className="movie-card__rating">{movie.rating}</span>
            <span className="movie-card__year">{movie.year}</span>
          </div>
          <p className="movie-card__genre">{movie.genre}</p>
        </div>
      </div>
      <h3 className="movie-card__title">{movie.title}</h3>
    </div>
  )
}

function Trending() {
  const rowRef = useRef(null)

  const scroll = (dir) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' })
    }
  }

  return (
    <section className="trending">
      <div className="trending__header">
        <h2 className="trending__title">
          <span className="trending__title-accent">🔥</span> Trending Now
        </h2>
        <div className="trending__scroll-btns">
          <button
            className="trending__scroll-btn trending__scroll-btn--prev"
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <button
            className="trending__scroll-btn trending__scroll-btn--next"
            onClick={() => scroll(1)}
            aria-label="Scroll right"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="trending__row-wrap">
        <div className="trending__row" ref={rowRef}>
          {trendingMovies.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trending
