import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate.js'
import Card from './components/Card.js'

function App() {
  const response=
  [
    {
      ItemName:"Nirma",
      ItemDate1:"20",
      ItemMonth:"June",
      ItemYear:"1998"


    },
    {
      ItemName:"Nirma2",
      ItemDate1:"22",
      ItemMonth:"July",
      ItemYear:"2000"


    },
    {
      ItemName:"Nirma3",
      ItemDate1:"24",
      ItemMonth:"September",
      ItemYear:"2010"


    }


  ]
  return (
    <div>
      <Card>
      <Item name={response[0].ItemName}>
        Hello Ji,How are you?
      </Item>
      <ItemDate date={response[0].ItemDate1} month ={response[0].ItemMonth} year ={response[0].ItemYear}></ItemDate>

      <Item name={response[1].ItemName}></Item>
      <ItemDate date={response[1].ItemDate1} month={response[1].ItemMonth} year={response[1].ItemYear}></ItemDate>
      <Item name={response[2].ItemName}></Item>
      <ItemDate date={response[2].ItemDate1} month={response[2].ItemMonth} year={response[2].ItemYear}></ItemDate>
      </Card>
      Hello Jee
      

    </div>
    
  );
}

export default App;
