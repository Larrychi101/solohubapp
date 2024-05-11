import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="App-header">
      <h1>Welcome to Solohub</h1>
      <p>
        An AI-powered marketplace for African talents and intellectual capabilities.
      </p>
      <a
        className="App-link"
        href="https://www.sologid.com" // replace with actual link
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Started
      </a>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
