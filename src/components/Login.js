import React, { useState } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const loginHandel = (e) => {
    e.preventDefault();
    if (user.length < 3 || password.length < 3) {
      alert('Please provide valid credentials.');
    } else {
      alert('Login successful!');
    }
  };
  

  const userHandler = (e) => {
    const item = e.target.value;
    setUserErr(item.length < 3);
    setUser(item);
  };

  const passwordHandler = (e) => {
    const item = e.target.value;
    setPassErr(item.length < 3);
    setPassword(item);
  };

  return (
    <>
    <div className="login">
      <form className="wrapper" onSubmit={loginHandel}>
        <div className="login_box">
          <div className="login-header">
            <span>Login</span>
          </div>
          <div className="input_box">
            <input
              type="text"
              id="user"
              value={user}
              onChange={userHandler}
              className="input-field"
              required
            />
            <label htmlFor="user" className="label">
              Username
            </label>
            <i className="bx bx-user icon" />
            {userErr && <span className="error">Username must be at least 3 characters</span>}
          </div>
          <div className="input_box">
            <input
              type="password"
              id="pass"
              value={password}
              onChange={passwordHandler}
              className="input-field"
              required
            />
            <label htmlFor="pass" className="label">
              Password
            </label>
            <i className="bx bx-lock-alt icon" />
            {passErr && <span className="error">Password must be at least 3 characters</span>}
          </div>
          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className="forgot">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <div className="input_box">
            <input type="submit" className="input-submit" value="Login" />
          </div>
          <div className="register">
            <span>
              Don't have an account? <NavLink to="/SignIn">SignUp</NavLink>
            </span>
          </div>
        </div>
      </form>
      </div>
      
      <Footer></Footer>
  </>
  );
};

export default Login;
