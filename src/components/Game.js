import React from 'react';
import Board from './Board';



const Game = () => {
   
    const handleClick = () => {

    }



    return (
      
      <div>
        <h1 align="center">Let's play Tic Tac Toe</h1>
        <Board onClick={handleClick}/>
      </div>
    )
}


export default Game;