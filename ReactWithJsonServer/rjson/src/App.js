import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data,setData] = useState([]);
  
  const url = 'http://localhost:5000/';

  useEffect(()=>{
    fetch(url + 'posts').then(res => res.json().then(
      result => setData(result)
    ))
  },[])

  
  const item = data.map((element)=>{
      return <div key={element.id}>
        <h2 >{element.title}</h2>
      </div>
    })

  return (
    <div className="App">
    <h1>Json Server</h1>
    {
      item
    }
    </div>
  );
}

export default App;
