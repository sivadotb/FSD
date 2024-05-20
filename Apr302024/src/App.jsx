import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [firstPlayer, setFirstPlayer] = useState('')
  const [xIsNext, setXIsNext] = useState(firstPlayer);

  const handleClick = (i) => {

    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const newSquares = squares.slice();
    
    if(firstPlayer == ''){
      status = "Choose Player First !!!"
      return;
    }

    if (xIsNext) {
      newSquares[i] = 'X';
    } else {
      newSquares[i] = 'O';
    }

    if(newSquares[i] == 'X')  
      setXIsNext(!xIsNext);
    else  
      setXIsNext(xIsNext);
  
    setSquares(newSquares);
  }

  useEffect(() => {
    console.log('squares', squares);
  }, [squares]);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    /*
      squares = ['X', 'X', 'X', 'O', 'O', null, null, null, null]

      [a, b, c] = [0, 1, 2]

      squares[a] is not null
      squares[a] is equal to squares[b]
      squares[a] is equal to squares[c]

      return squares[0]
    */
    for (let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];

      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }

  let status;
  let winner = calculateWinner(squares);
   
  if(firstPlayer == ''){
    status = 'Choose the player first';
  }
  else 
  {
    if (winner) {
        status = 'Winner: ' + winner;
      } else if (squares.every(square => square !== null)) {
        status = 'Draw!';
      } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
      }
  }

  return (
    <div>
      <div>
          <h3> Click First Player : </h3> 
          <button value='X' onClick={()=>{setFirstPlayer('X'); setXIsNext(true)}}>X</button> 
          <button value='O' onClick={()=>{setFirstPlayer('O'); setXIsNext(false)}}>O</button>
      </div>
      <h1>{ status }</h1>
      <div>
        <div className='row'>
        <button
          className='square'
            onClick={() => handleClick(0)}
            value={squares[0]}
        >{squares[0]}</button>
        <button
          className='square'
            onClick={() => handleClick(1)}
            value={squares[1]}
        >{squares[1]}</button>
        <button
          className='square'
            onClick={() => handleClick(2)}
            value={squares[2]}
        >{ squares[2] }</button>
      </div>

      <div className='row'>
        <button
          className='square'
            onClick={() => handleClick(3)}
            value={squares[3]}
        >{squares[3]}</button>
        <button
          className='square'
            onClick={() => handleClick(4)}
            value={squares[4]}
        >{squares[4]}</button>
        <button
          className='square'
            onClick={() => handleClick(5)}
            value={squares[5]}
        >{ squares[5] }</button>
      </div>

      <div className='row'>
        <button
          className='square'
            onClick={() => handleClick(6)}
            value={squares[6]}
        >{squares[6]}</button>
        <button
          className='square'
            onClick={() => handleClick(7)}
            value={squares[7]}
        >{squares[7]}</button>
        <button
          className='square'
            onClick={() => handleClick(8)}
            value={squares[8]}
        >{ squares[8]}</button>
      </div>
      </div>
    </div>
  )
}

export default App;