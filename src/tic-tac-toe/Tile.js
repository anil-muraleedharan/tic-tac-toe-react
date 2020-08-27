import React from 'react';

const Tile = ({ id, tileContent, onClick }) => {
  return (
    <div className='tile' id={id} onClick={() => onClick(id)}>
      {tileContent}
    </div>
  );
};

export default Tile;
