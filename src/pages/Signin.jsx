import React, { useState } from 'react';
import './Signin.css';
import Logo from '../assets/grey-lo.png';

function SignInPage() {
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [currentDoing, setCurrentDoing] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit sign-in details to backend
    console.log('Username:', username);
    console.log('Number:', number);
    console.log('Email:', email);
    console.log('Age:', age);
    console.log('Current Doing:', currentDoing);
  };

  return (
    <div className="container">
      <div className="left-side">
        <div className="paper-image">
          {/* Paper image */}
        </div>
        <div className="text">
          <h2>Join Us Today</h2>
          <p>Be a part of the Paper Box community.</p>
          <div className="dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
      <div className="right-side">
        <img src={Logo} alt="Logo" className="logo" />
        <h1>Create Your Account</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="number">Phone Number</label>
            <input
              type="text"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="currentDoing">Current Doing</label>
            <input
              type="text"
              id="currentDoing"
              value={currentDoing}
              onChange={(e) => setCurrentDoing(e.target.value)}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
