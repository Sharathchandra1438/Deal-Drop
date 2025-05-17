import React from 'react';
import { Link } from 'react-router-dom';
import neighborhoodImage from '../assets/hero-bg.jpg'; 

const HeroSection = () => {
  return (
    <section 
      style={{
        position: 'relative',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundImage: `url(${neighborhoodImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      }}></div>
      
      <div style={{
        maxWidth: '96rem',
        margin: '0 auto',
        padding: '0 1rem',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '40rem',
          margin: '0 auto',
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem',
            textShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
          }}>
            Deal drop<br />The Online Reselling Website!
          </h1>

          <p style={{
            fontSize: '1.125rem',
            color: '#e5e7eb',
            marginBottom: '2rem',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
          }}>
            Join a family of community members in love with great deals.<br />
            Discover exciting offers from local businesses.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Link 
              to="/register" 
              style={{
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                fontWeight: '500',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                textDecoration: 'none',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={e => e.target.style.backgroundColor = '#1d4ed8'}
              onMouseLeave={e => e.target.style.backgroundColor = '#2563eb'}
            >
              Register Now
            </Link>

            <Link 
              to="/" 
              style={{
                backgroundColor: 'rgba(255,255,255,0.9)',
                color: '#2563eb',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                fontWeight: '500',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                textDecoration: 'none',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={e => e.target.style.backgroundColor = '#ffffff'}
              onMouseLeave={e => e.target.style.backgroundColor = 'rgba(255,255,255,0.9)'}
            >
              Explore Deals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
