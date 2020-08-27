import React from 'react';
import Board from './Board';
import Message from './Message';
import './TicTacToe.css';

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const hasWon = (grid) => {
  let hasWon = false;
  winningCombinations.forEach(([a, b, c]) => {
    const isCombinationMatched =
      grid[a] && grid[a] === grid[b] && grid[a] === grid[c];
    hasWon = hasWon || isCombinationMatched;
  });
  return hasWon;
};

const isGameDraw = (grid) => {
  const filledTiles = grid.reduce((acc, cur) => (cur ? acc + 1 : acc), 0);
  return filledTiles === 9 ? true : false;
};

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: ['', '', '', '', '', '', '', '', ''],
      currentPlayer: { name: 'Abc', symbol: 'x' },
      nextPlayer: { name: 'Xyx', symbol: 'o' },
      isGameDrawn: false,
      winner: undefined,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tileId) {
    const { currentPlayer, grid } = this.state;
    if (grid[tileId]) return;
    const updatedGrid = grid.slice();
    updatedGrid[tileId] = currentPlayer.symbol;
    const winner = hasWon(updatedGrid) ? currentPlayer : undefined;
    const isGameDrawn = isGameDraw(updatedGrid);
    this.setState(({ currentPlayer, nextPlayer, movesCont }) => ({
      grid: updatedGrid,
      currentPlayer: nextPlayer,
      nextPlayer: currentPlayer,
      movesCont: movesCont + 1,
      isGameDrawn,
      winner,
    }));
  }

  render() {
    if (this.state.winner) {
      return <Message message={`${this.state.winner.name} won the game`} />;
    }
    if (this.state.isGameDrawn) {
      return <Message message='Game is draw!' />;
    }
    return (
      <div className='sub-container'>
        <Message message={`${this.state.currentPlayer.name}'s turn`} />
        <Board grid={this.state.grid} onClick={this.handleClick} />
      </div>
    );
  }
}

export default TicTacToe;
