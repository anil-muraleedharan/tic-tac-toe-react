import React from 'react';
import Tile from './Tile';

const Board = ({ onClick, grid }) => {
  const tiles = grid.map((content, index) => (
    <Tile id={index} key={index} tileContent={content} onClick={onClick} />
  ));
  return <div className='board'>{tiles}</div>;
};

export default Board;
