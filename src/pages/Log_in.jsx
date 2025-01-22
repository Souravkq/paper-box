import React, { useState } from 'react';
import './LoginPage.css';
import Logo from '../assets/grey-lo.png'


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit login credentials to backend
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="container">
      <div className="left-side">
        <div className="paper-image">
          {/* paper image */}
        </div>
        <div className="text">
          <h2>Find what you want</h2>
    
          <div className="dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
      <div className="right-side">
      <img src={ Logo } alt="Logo" className="logo" />
      <h1>Welcome to Paper Box</h1>
       
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Users name or Email</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" >Log in</button>
          <br/>
          <p>Forgot password?</p>
        </form>
        <div className="or">or</div>
        <button className="google-button">
           Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default App;