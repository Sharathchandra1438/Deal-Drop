import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaHome, FaMapMarkerAlt, FaVenusMars } from 'react-icons/fa';

const Reg = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    street: '',
    houseNumber: '',
    postcode: '',
    location: '',
    gender: ''
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/api/users/register', formData);
      const userId = response.data.id || response.data._id;
      navigate(`/profile/${userId}`);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: '1rem',
      marginTop:"66px"
    }}>
      <div style={{
        width: '100%',
        maxWidth: '600px',
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        padding: '2.5rem',
        transition: 'transform 0.3s ease',
        ':hover': {
          transform: 'translateY(-5px)'
        }
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#2d3748',
          marginBottom: '2rem',
          fontSize: '1.8rem',
          fontWeight: '600',
          letterSpacing: '-0.5px'
        }}>Create Your Account</h2>

        {error && (
          <div style={{
            backgroundColor: 'rgba(220, 53, 69, 0.1)',
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            color: '#dc3545',
            borderLeft: '4px solid #dc3545',
            display: 'flex',
            alignItems: 'center',
            animation: 'fadeIn 0.3s ease'
          }}>
            <svg style={{ marginRight: '8px', minWidth: '20px' }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="#dc3545"/>
            </svg>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <FaUser style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                color: '#a0aec0',
                fontSize: '1rem'
              }} />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '14px 14px 14px 40px',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  fontSize: '0.95rem',
                  color: '#4a5568',
                  transition: 'all 0.3s ease',
                  ':focus': {
                    outline: 'none',
                    borderColor: '#667eea',
                    boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)'
                  }
                }}
              />
            </div>

            <div style={{ position: 'relative', flex: 1 }}>
              <FaUser style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                color: '#a0aec0',
                fontSize: '1rem'
              }} />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '14px 14px 14px 40px',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  fontSize: '0.95rem',
                  color: '#4a5568',
                  transition: 'all 0.3s ease',
                  ':focus': {
                    outline: 'none',
                    borderColor: '#667eea',
                    boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)'
                  }
                }}
              />
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <FaEnvelope style={{
              position: 'absolute',
              top: '14px',
              left: '14px',
              color: '#a0aec0',
              fontSize: '1rem'
            }} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '14px 14px 14px 40px',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                fontSize: '0.95rem',
                color: '#4a5568',
                transition: 'all 0.3s ease',
                ':focus': {
                  outline: 'none',
                  borderColor: '#667eea',
                  boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)'
                }
              }}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <FaLock style={{
              position: 'absolute',
              top: '14px',
              left: '14px',
              color: '#a0aec0',
              fontSize: '1rem'
            }} />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '14px 40px 14px 40px',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                fontSize: '0.95rem',
                color: '#4a5568',
                transition: 'all 0.3s ease',
                ':focus': {
                  outline: 'none',
                  borderColor: '#667eea',
                  boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)'
                }
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '14px',
                top: '14px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#a0aec0',
                transition: 'color 0.2s ease',
                padding: '0',
                ':hover': {
                  color: '#667eea'
                }
              }}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          <div style={{ position: 'relative' }}>
            <FaPhone style={{
              position: 'absolute',
              top: '14px',
              left: '14px',
              color: '#a0aec0',
              fontSize: '1rem'
            }} />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '14px 14px 14px 40px',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                fontSize: '0.95rem',
                color: '#4a5568',
                transition: 'all 0.3s ease',
                ':focus': {
                  outline: 'none',
                  borderColor: '#667eea',
                  boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)'
                }
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ position: 'relative', flex: 3 }}>
              <FaHome style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                color: '#a0aec0',
                fontSize: '1rem'
              }} />
              <input
                type="text"
                name="street"
                placeholder="Street"
                value={formData.street}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '14px 14px 14px 40px',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  fontSize: '0.95rem',
                  color: '#4a5568',
                  transition: 'all 0.3s ease',
                  ':focus': {
                    outline: 'none',
                    borderColor: '#667eea',
                    boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)'
                  }
                }}
              />
            </div>

            <div style={{ position: 'relative', flex: 1 }}>
              <input
                type="text"
                name="houseNumber"
                placeholder="No."
                value={formData.houseNumber}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '14px 14px',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  fontSize: '0.95rem',
                  color: '#4a5568',
                  transition: 'all 0.3s ease',
                  ':focus': {
                    outline: 'none',
                    borderColor: '#667eea',
                    boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)'
                  }
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <input
                type="text"
                name="postcode"
                placeholder="Postcode"
                value={formData.postcode}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '14px 14px',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  fontSize: '0.95rem',
                  color: '#4a5568',
                  transition: 'all 0.3s ease',
                  ':focus': {
                    outline: 'none',
                    borderColor: '#667eea',
                    boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)'
                  }
                }}
              />
            </div>

            <div style={{ position: 'relative', flex: 2 }}>
              <FaMapMarkerAlt style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                color: '#a0aec0',
                fontSize: '1rem'
              }} />
              <input
                type="text"
                name="location"
                placeholder="City/Town"
                value={formData.location}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '14px 14px 14px 40px',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  fontSize: '0.95rem',
                  color: '#4a5568',
                  transition: 'all 0.3s ease',
                  ':focus': {
                    outline: 'none',
                    borderColor: '#667eea',
                    boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)'
                  }
                }}
              />
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <FaVenusMars style={{
              position: 'absolute',
              top: '14px',
              left: '14px',
              color: '#a0aec0',
              fontSize: '1rem'
            }} />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '14px 14px 14px 40px',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                fontSize: '0.95rem',
                color: '#4a5568',
                appearance: 'none',
                transition: 'all 0.3s ease',
                backgroundColor: 'white',
                ':focus': {
                  outline: 'none',
                  borderColor: '#667eea',
                  boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)'
                }
              }}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              marginTop: '1rem',
              padding: '16px',
              width: '100%',
              backgroundColor: '#4f46e5',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(79, 70, 229, 0.2)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              ':hover': {
                backgroundColor: '#4338ca',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 8px rgba(79, 70, 229, 0.3)'
              },
              ':active': {
                transform: 'translateY(0)'
              },
              ':disabled': {
                opacity: '0.7',
                cursor: 'not-allowed',
                transform: 'none'
              }
            }}
          >
            {isLoading ? (
              <>
                <svg style={{ animation: 'spin 1s linear infinite' }} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Creating Account...
              </>
            ) : 'Register'}
          </button>
        </form>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '1.5rem', 
          fontSize: '0.9rem', 
          color: '#718096' 
        }}>
          Already have an account?{' '}
          <a href="/login" style={{
            color: '#4f46e5',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
            ':hover': {
              color: '#4338ca',
              textDecoration: 'underline'
            }
          }}>Sign in</a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Reg;