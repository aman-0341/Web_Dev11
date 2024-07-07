import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate.js'

function App() {
  return (
    <div>
      <Item name="Nirma"></Item>
      <ItemDate date="20" month ="June" year ="1998" ></ItemDate>

      <Item name="SurfExcel"></Item>
      <ItemDate date="22" month="July" year="2000"></ItemDate>
      <Item name="555"></Item>
      <ItemDate date="24" month="September" year="2010"></ItemDate>
      Hello Jee

    </div>
    
  );
}

export default App;
