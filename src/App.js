import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function Header() {
  return (
    <header className="App-header">
      <h1>Welcome to Solohub</h1>
      <p>
        The AI-powered marketplace for African talents and intellectual capabilities.
      </p>
      <div className="App-cta">
        <a href="http://localhost:8080/onboarding" target="_blank" className="App-link">Sign Up</a>
        <button
          className="App-link"
          onClick={() => window.open("https://techhub.cloudflareaccess.com/cdn-cgi/access/login/techhub.cloudflareaccess.com?redirect_url=%2F&kid=5aebecaae64377eb630fd5924d72119c2f6e7cec28755f0e41325d6519c47546", "_blank")}
        >
          Sign In
        </button>
      </div>
      <Link to="/feedback" className="App-link">Feedback</Link>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
}

export default App;