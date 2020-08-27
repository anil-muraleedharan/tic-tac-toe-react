import React from 'react';
import './App.css';
import TicTacToe from './tic-tac-toe/TicTacToe';

const App = () => (
  <div className='main-container'>
    <h1 className='header'>Tic Tac Toe</h1>
    <TicTacToe />
  </div>
);

export default App;
