// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




import React from 'react';
import './App.css';
import {useSelector,useDispatch} from "react-redux";
import {incNumber,decNumber,mulNumber,divNumber} from './actions/index';






const App=()=>{
  // const myState=useSelector((state)=state.changeTheNumber);
    const myState = useSelector((state) => state.changeTheNumber);
    const myOtherState = useSelector((state) => state.changeTheNumber2);
  const dispatch=useDispatch();
  return(
    <>   
     <div>
     <h1>Increment-Decrement Counter</h1>
     <h4>Using react and redux</h4>

     <div className="quantity">
      <a className="quantity_minus" title="Decrement" onClick={()=>dispatch(decNumber())}><span> - </span>

      </a>
      <input name="quantity" type="text" className="quantity_input" value={myState}/>
      
      <a className="quantity_ plus" title="Increment" onClick={()=>dispatch(incNumber(5))}><span> + </span>

      </a>
     </div>
     </div>
     <div>
     <h1>MultiplicationP-Division Counter</h1>
     <h4>Using react and redux</h4>

     <div className="quantity">
      <a className="quantity_minus" title="Multiplication" onClick={()=>dispatch(mulNumber(5))}><span> * </span>

      </a>
      <input name="quantity" type="text" className="quantity_input" value={myOtherState}/>
      
      <a className="quantity_ plus" title="Division" onClick={()=>dispatch(divNumber(5))}><span> / </span>

      </a>
     </div>
     </div>
    </>
  )

 
}
export default App;






// import React from 'react';
// import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { incNumber, decNumber } from './actions/index';

// const App = () => {
//   // Accessing state from the Redux store
//   const myState = useSelector((state) => state.changeTheNumber);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <div>
//         <h1>Increment-Decrement Counter</h1>
//         <h4>Using React and Redux</h4>

//         <div className="quantity">
//           {/* Use button elements instead of anchor tags for actions */}
//           <button
//             className="quantity_minus"
//             title="Decrement"
//             onClick={() => dispatch(decNumber())}
//           >
//             <span> - </span>
//           </button>

//           <input
//             name="quantity" // Fixed spelling
//             type="text"
//             className="quantity_input"
//             value={myState}
//             readOnly // Make input read-only if it's meant to display state only
//           />

//           <button
//             className="quantity_plus"
//             title="Increment"
//             onClick={() => dispatch(incNumber())}
//           >
//             <span> + </span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;