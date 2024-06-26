// Login.js
import React, { useState } from 'react';
import './index.css';
const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (submit) => {
    submit.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div class = "login">
      <h2> Please Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
