import './App.css';
import { useState } from 'react';
function Square({value, nextSquareClick}) {
  return <button className="square" onClick={handleClick}>{value}</button>
}

function App() {
  const [square, setSquare] = useState(Array(9).fill(null))

  function handleClick() {
    const nextSquares = square.slice()
    nextSquares[0] = 'X'
    setSquare(nextSquares) 
  }

  return (
    <div className="App">
      <div className="board-row">
        <Square value={square[0]}/>
        <Square value={square[1]}/>
        <Square value={square[2]}/>

      </div>
      <div className="board-row">
        <Square value={square[3]}/>
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default App;
