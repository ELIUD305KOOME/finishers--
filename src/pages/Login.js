import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('authToken', data.access_token);
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledWrapper>
      <div className="container">
        <h2 className="heading">Sign In</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="forgot-password">
            <a href="#">Forgot Password?</a>
          </span>
          {error && <p className="error-message">{error}</p>}
          <button className="login-button" type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="social-account-container">
          <span className="title">Or Sign in with</span>
          <div className="social-accounts">
            <button className="social-button google" aria-label="Sign in with Google">
              <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                <path d="M488 261.8C488 403.3..."></path>
              </svg>
            </button>
            <button className="social-button apple" aria-label="Sign in with Apple">
              <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M318.7 268.7c..."></path>
              </svg>
            </button>
            <button className="social-button twitter" aria-label="Sign in with Twitter">
              <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M389.2 48h..."></path>
              </svg>
            </button>
          </div>
        </div>

        <span className="agreement">
          <a href="#">Learn user license agreement</a>
        </span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #e0f7fa;

  .container {
    max-width: 400px;
    background: linear-gradient(0deg, #fff 0%, #f4f7fb 100%);
    
    padding: 30px;
    box-shadow: rgba(133, 189, 215, 0.88) 0px 20px 30px -10px;
  }

  .heading {
    text-align: center;
    font-weight: bold;
    font-size: 28px;
    color: #1089d3;
    margin-bottom: 20px;
  }

  .form .input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 12px;
    border: 1px solid #ccc;
    margin-top: 12px;
    font-size: 14px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }

  .form .input:focus {
    outline: none;
    border-color: #12b1d1;
    box-shadow: 0 0 5px rgba(18, 177, 209, 0.5);
  }

  .forgot-password {
    display: block;
    margin-top: 10px;
    font-size: 12px;
    text-align: right;
  }

  .forgot-password a {
    color: #0099ff;
    text-decoration: none;
  }

  .error-message {
    color: red;
    font-size: 12px;
    margin-top: 10px;
    text-align: center;
  }

  .login-button {
    width: 100%;
    background: linear-gradient(45deg, #1089d3, #12b1d1);
    color: white;
    padding: 12px;
    border: none;
    border-radius: 12px;
    margin-top: 20px;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .login-button:hover {
    transform: scale(1.03);
    box-shadow: rgba(133, 189, 215, 0.8) 0px 10px 20px -10px;
  }

  .login-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .social-account-container {
    margin-top: 25px;
    text-align: center;
  }

  .title {
    font-size: 12px;
    color: #aaa;
  }

  .social-accounts {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
  }

  .social-button {
    background: linear-gradient(45deg, #000, #707070);
    border: 4px solid #fff;
    padding: 8px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    transition: transform 0.2s ease;
  }

  .social-button:hover {
    transform: scale(1.15);
  }

  .svg {
    fill: white;
    width: 20px;
    height: 20px;
  }

  .agreement {
    display: block;
    margin-top: 20px;
    text-align: center;
    font-size: 11px;
  }

  .agreement a {
    color: #0099ff;
    text-decoration: none;
  }
`;

export default Login;
