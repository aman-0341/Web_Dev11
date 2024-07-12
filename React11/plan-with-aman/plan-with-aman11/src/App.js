import React,{useState} from "react";
import Tours from './Components/Tours.js';
import data from './data.js'

const App = () => {
  const[tours,setTours]=useState(data);
  function removeTour(id)
  {
    const newTours=tours.filter(tour=>tour.id!=id)
    setTours(newTours);
  }
  if(tours.length===0)
  {

    return (<div>
      <h2>No Tours Left</h2>
      <button className="btn-red" onClick={()=>setTours(data)}>
        Refresh
      </button>
    </div>)
  }
  return(
    <div>
      {/* <h1>Plan With Aman</h1> */}
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
