import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Hi, I'm learning.";

  const appClassName = 'App';

  return (
    <div className={appClassName}>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{greeting}</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
