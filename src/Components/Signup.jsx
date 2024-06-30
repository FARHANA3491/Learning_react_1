import React, { useState } from 'react';
import './Signup.css'

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      // Handle signup logic here

      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    return (
      <div className="signup-container">
        <h1>Signup Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  required  />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)}  required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input  type="password"  value={password} onChange={(e) => setPassword(e.target.value)} required  />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
  )
}

export default Signup
