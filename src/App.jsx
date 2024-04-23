import { useState } from "react";

const App = () => {

  const [counter, setCounter] = useState(0);
  const [minusCounter, setMinusCounter] = useState(0);
  const [resetCounter, setResetCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    dispResults();
    
  }
  const handleMinusClick = () => {
    setMinusCounter(minusCounter+1);
    dispResults();
  }

  const handleResetClick = () => {
    setResetCounter(resetCounter+1);
    dispResults();
  }

  const dispResults = () => {
    console.log("Plus : " + counter+1);
    console.log("Minus : " + minusCounter+1);
    console.log("Reset : " + resetCounter+1);

  }
  return (
    
    <div>
      <p>Plus Counter: { counter }</p>
      <p>Minus Counter: { minusCounter }</p>
      <p>Reset Counter: { resetCounter }</p>
      <button onClick={handleClick}>plus</button>
      <button onClick={handleMinusClick}>minus</button>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  )
}

export default App;