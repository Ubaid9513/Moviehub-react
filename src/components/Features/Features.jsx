import './Features.css'

const features = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="56" height="38" rx="4" stroke="currentColor" strokeWidth="3" fill="none"/>
        <path d="M20 46h24M26 46v8M38 46v8M22 54h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M27 27l-7-4v8l7-4zM37 27l7-4v8l-7-4z" fill="currentColor"/>
        <rect x="26" y="22" width="12" height="10" rx="1" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
    title: 'Enjoy on your TV',
    description: 'Explore our movie collection and discover trending content.',
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="4" width="36" height="56" rx="5" stroke="currentColor" strokeWidth="3" fill="none"/>
        <path d="M32 20v16M32 36l-6-6M32 36l6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="32" cy="52" r="2.5" fill="currentColor"/>
        <rect x="22" y="8" width="20" height="3" rx="1.5" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
    title: 'Download your shows',
    description: 'Save your favourites easily and always have something to watch offline, anywhere, anytime.',
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="16" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="3" fill="none"/>
        <path d="M14 38v8M22 38v8M10 46h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect x="40" y="24" width="20" height="32" rx="3" stroke="currentColor" strokeWidth="3" fill="none"/>
        <circle cx="50" cy="52" r="2" fill="currentColor"/>
        <path d="M28 22l-5-3v6l5-3z" fill="currentColor"/>
        <path d="M46 36l-4-2.5v5L46 36z" fill="currentColor"/>
      </svg>
    ),
    title: 'Watch everywhere',
    description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="20" r="14" stroke="currentColor" strokeWidth="3" fill="none"/>
        <path d="M16 55c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="32" cy="20" r="6" fill="currentColor" opacity="0.3"/>
        <path d="M44 12l8-4M48 18h6M44 28l8 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Create profiles for kids',
    description: 'Send kids on adventures with their favourite characters in a space made just for them—free with your membership.',
  },
]

function FeatureCard({ feature }) {
  return (
    <div className="feature-card">
      <div className="feature-card__icon">{feature.icon}</div>
      <h3 className="feature-card__title">{feature.title}</h3>
      <p className="feature-card__description">{feature.description}</p>
    </div>
  )
}

function Features() {
  return (
    <section className="features">
      <div className="features__header">
        <h2 className="features__title">More reasons to join</h2>
      </div>
      <div className="features__grid">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  )
}

export default Features
