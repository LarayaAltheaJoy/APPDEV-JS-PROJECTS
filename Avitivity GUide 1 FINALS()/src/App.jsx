import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Reviews from './Reviews';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user, password) => {
    if (user === 'SampleUser' && password === "SampleP@$$w0rd") {
      setUsername(user);
      setLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            {!isLoggedIn && <li><Login handleLogin={handleLogin} /></li>}
          </ul>
        </nav>
      </header>
      {isLoggedIn && <Reviews />}
      {isLoggedIn && (
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
