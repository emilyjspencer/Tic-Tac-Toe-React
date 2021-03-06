import React from 'react';
import Square from './Square';

const styling = {
  border: '10px',
  borderRadius: '12px',
  width: '350px',
  height: '500px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'

}

const Board = ({ squares, onClick }) => 
     (
        <div style={styling}>
            <Square value = "1" onClick={() => onClick("test") } />
            <Square value = "2" onClick={() => onClick("test") } />
            <Square value = "3" onClick={() => onClick("test") } />
            <Square value = "4" onClick={() => onClick("test") } />
            <Square value = "5" onClick={() => onClick("test") } />
            <Square value = "6" onClick={() => onClick("test") } />
            <Square value = "7" onClick={() => onClick("test") } />
            <Square value = "8" onClick={() => onClick("test") } />
            <Square value = "9" onClick={() => onClick("test") } /> 
        </div>
    )


export default Board;