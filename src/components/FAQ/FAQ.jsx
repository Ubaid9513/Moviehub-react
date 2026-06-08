import { useState } from 'react'
import { faqData } from '../../data/faqData.js'
import './FAQ.css'

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button
        className="faq-item__question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <span className="faq-item__icon" aria-hidden="true">
          {isOpen ? (
            <svg fill="currentColor">
              <path d="M19 13H5v-2h14v2z"/>
            </svg>
          ) : (
            <svg  fill="currentColor">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
          )}
        </span>
      </button>
      <div
        className="faq-item__answer"
        style={{ maxHeight: isOpen ? '400px' : '0' }}
      >
        <div className="faq-item__answer-inner">
          {item.answer}
        </div>
      </div>
    </div>
  )
}

function FAQ() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="faq">
      <h2 className="faq__title">Frequently Asked Questions</h2>
      <div className="faq__list">
        {faqData.map((item) => (
          <FAQItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => toggle(item.id)}
          />
        ))}
      </div>
      <div className="faq__cta">
        <p>Explore our movie collection and discover trending content.</p>
        <a href="#cta" className="faq__cta-link">Get Started &rarr;</a>
      </div>
    </section>
  )
}

export default FAQ
