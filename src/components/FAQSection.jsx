import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaCheck } from 'react-icons/fa';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can I participate?",
      answer: "Register with your address to join your local DEAL DROP community. It's free and takes less than 2 minutes."
    },
    {
      question: "Which of my information do my neighbors see?",
      answer: "Only your first name and neighborhood are visible to others by default. You control what information you share."
    },
    {
      question: "How does DEAL DROP protect my data?",
      answer: "We use bank-level encryption and never sell your data. Your privacy is our top priority."
    },
    {
      question: "How does DEAL DROP finance itself?",
      answer: "Through optional business profiles and local advertising. Basic features remain free for all users."
    },
    {
      question: "What content can I share?",
      answer: "List items for sale, post about local events, ask for recommendations, or offer services - anything relevant to your community."
    },
    {
      question: "Why register with my real name?",
      answer: "This builds trust in your neighborhood. Verified users get 3x more responses to their listings."
    },
    {
      question: "How do neighbors interact on DEAL DROP?",
      answer: "Through our secure messaging system, community boards, and by responding to listings. All interactions are monitored for safety."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#eff6ff' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>FAQ</h2>
          <p style={{ fontSize: '1.25rem', color: '#4b5563' }}>Any questions about DEAL DROP?</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              style={{
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onClick={() => toggleFAQ(index)}
            >
              <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FaCheck style={{ color: '#22c55e', marginRight: '1rem' }} />
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>{faq.question}</h3>
                </div>
                {activeIndex === index ? (
                  <FaChevronUp style={{ color: '#9ca3af' }} />
                ) : (
                  <FaChevronDown style={{ color: '#9ca3af' }} />
                )}
              </div>

              {activeIndex === index && (
                <div style={{
                  padding: '1rem 1.5rem 1.5rem',
                  color: '#6b7280',
                  borderTop: '1px solid #f3f4f6'
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              fontWeight: '500',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              border: 'none',
            }}
            onMouseEnter={e => e.target.style.backgroundColor = '#1d4ed8'}
            onMouseLeave={e => e.target.style.backgroundColor = '#2563eb'}
          >
            Still have questions? Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
