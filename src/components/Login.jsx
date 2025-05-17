import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUser, FaLock, FaEye, FaEyeSlash,
  FaGoogle, FaFacebook, FaTwitter
} from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const loginUser = async () => {
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Invalid email or password");

      localStorage.setItem("user", JSON.stringify(data));
      navigate(`/profile/${data.id || data._id}`);
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{
        maxWidth: '450px',
        width: '90%',
        padding: '2.5rem',
        borderRadius: '16px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        ':hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)'
        }
      }}>
        <h2 style={{
          textAlign: 'center',
          fontWeight: '600',
          color: '#2d3748',
          marginBottom: '2rem',
          fontSize: '1.8rem',
          letterSpacing: '0.5px'
        }}>Welcome Back</h2>

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
            transition: 'opacity 0.3s ease',
            animation: 'fadeIn 0.3s ease'
          }}>
            <svg style={{ marginRight: '8px', minWidth: '20px' }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="#dc3545"/>
            </svg>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ 
            position: 'relative', 
            marginBottom: '1.5rem',
            transition: 'all 0.3s ease'
          }}>
            <FaUser style={{ 
              position: 'absolute', 
              top: '14px', 
              left: '14px', 
              color: '#a0aec0',
              fontSize: '1rem'
            }} />
            <input
              type="email"
              value={email}
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '14px 14px 14px 40px',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                fontSize: '0.95rem',
                color: '#4a5568',
                transition: 'all 0.3s ease',
                boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.03)',
                ':focus': {
                  outline: 'none',
                  borderColor: '#667eea',
                  boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)'
                }
              }}
            />
          </div>

          <div style={{ 
            position: 'relative', 
            marginBottom: '2rem',
            transition: 'all 0.3s ease'
          }}>
            <FaLock style={{ 
              position: 'absolute', 
              top: '14px', 
              left: '14px', 
              color: '#a0aec0',
              fontSize: '1rem'
            }} />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '14px 40px 14px 40px',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                fontSize: '0.95rem',
                color: '#4a5568',
                transition: 'all 0.3s ease',
                boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.03)',
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
                display: 'flex',
                alignItems: 'center',
                ':hover': {
                  color: '#667eea'
                }
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#4f46e5',
              color: '#fff',
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
                <svg style={{ marginRight: '8px', animation: 'spin 1s linear infinite' }} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Logging in...
              </>
            ) : 'Login'}
          </button>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            margin: '1.5rem 0',
            color: '#a0aec0'
          }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
            <div style={{ padding: '0 12px', fontSize: '0.85rem' }}>OR</div>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <button type="button" style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '1px solid #e2e8f0',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#f8fafc',
                transform: 'translateY(-2px)'
              }
            }}>
              <FaGoogle style={{ color: '#DB4437', fontSize: '1.2rem' }} />
            </button>
            <button type="button" style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '1px solid #e2e8f0',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#f8fafc',
                transform: 'translateY(-2px)'
              }
            }}>
              <FaFacebook style={{ color: '#4267B2', fontSize: '1.2rem' }} />
            </button>
            <button type="button" style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '1px solid #e2e8f0',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#f8fafc',
                transform: 'translateY(-2px)'
              }
            }}>
              <FaTwitter style={{ color: '#1DA1F2', fontSize: '1.2rem' }} />
            </button>
          </div>

          <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#718096' }}>
            Don't have an account?{' '}
            <a href="/register" style={{
              color: '#4f46e5',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              ':hover': {
                color: '#4338ca',
                textDecoration: 'underline'
              }
            }}>Sign up</a>
          </div>
        </form>
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

export default Login;