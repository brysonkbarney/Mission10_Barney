import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import BowlerList from './bowler/BowlerList';

function App() {
  return (
    <div className="App">
      <Header title="Welcome to Bowlers from Hell" />
      <BowlerList />
    </div>
  );
}

export default App;
