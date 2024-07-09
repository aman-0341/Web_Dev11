import React,{useState} from 'react';
import './App.css';

function App() {
  const[count,setCount]=useState(0);
  function decreaseHandler()
  {
    setCount(count-1)

  }
  function increaseHandler()
  {
    setCount(count+1)

  }
  function resetHandler()
  {
    setCount(0)

  }
  

  return (
    <div>
      <div>
     
        Increment & Decrement
      </div>
      <div>
        <button onClick={decreaseHandler}>-</button>
     
      </div>
      <div>
        {count}
       
      </div>
      <div >
        <button onClick={increaseHandler}>+</button>
       
      </div>
      <div >
        <button onClick={resetHandler}>Reset</button>
       
      </div>

    </div>
  );
}

export default App;
