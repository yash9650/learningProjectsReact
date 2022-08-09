// import './App.css';
import react,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import Nav from './components/UI/Nav';
import NewExpense from './components/NewExpense/NewExpense';
const data = [
  {
    id: 'e1',
    title: "Car Insurence",
    date: new Date(Date.UTC(2022,0,26)),
    amount: 1222.00
  },
  {
    id: 'e2',
    title: "Healt Insurence",
    date: new Date(Date.UTC(2021,5,16)),
    amount: 152.00
  },
  {
    id: 'e3',
    title: "Clothes",
    date: new Date(Date.UTC(2022,0,10)),
    amount: 22.00
  },
  {
    id: 'e4',
    title: "Furnitures",
    date: new Date(Date.UTC(2022,0,1)),
    amount: 2592.00
  },  
];

function App() {

  const[existedData,setExistedData] = useState(data)

  function recievedData(nData){
    setExistedData(prev => 
      {
        return [nData,...prev]
      });
  }

  return (
    <>
    <Nav></Nav>
    <NewExpense onRecievedData={recievedData}/>
    <Expenses expenses={existedData}/>
    </>  
    );
}

export default App;