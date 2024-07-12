
import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const[text,setText]=useState('');
  const[name,setName]=useState('Aman');
  // useEffect (()=>{
  //     console.log("UI Rendering");
  //   }
  // );
//   useEffect (()=>{
//     console.log("UI Rendering");
//   },[]
// );
// useEffect (()=>{
//   console.log("UI Rendering");
//  },[name]
// );
useEffect (()=>{
  console.log("Listener Added");
  return()=>console.log("Listener Removed");
},[text]
);
  function onChangeHandler(event)
  {

    setText(event.target.value);
    console.log(text);
  }
  return (
    <div>
      
      <input type="text" onChange={onChangeHandler}></input>
      
          </div>
  
  );
}

export default App;
