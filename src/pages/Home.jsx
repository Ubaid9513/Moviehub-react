import Navbar from '../components/Navbar/Navbar.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Trending from '../components/Trending/Trending.jsx'
import Features from '../components/Features/Features.jsx'
import FAQ from '../components/FAQ/FAQ.jsx'
import CTA from '../components/CTA/CTA.jsx'
import Footer from '../components/Footer/Footer.jsx'

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <Trending />
      <div className="section-divider" />
      <Features />
      <div className="section-divider" />
      <FAQ />
      <div className="section-divider" />
      <CTA />
      <Footer />
    </main>
  )
}

export default Home
