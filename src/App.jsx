import './App.css';
import {useState} from 'react';

function App() {
const [todo, setTodo] = useState("");
const [lista,setLista] = useState([])
function adaa(){
  setLista([...lista,todo]);
}
  return (
    <div>
      <input 
      value={todo}
      onChange={(val)=>setTodo(val.target.value)}
      placeholder='watodo'/>
      <button onClick={adaa}>add</button>

      <ol>
        {
        lista.map((eleent) => {
          return (
            <li>{eleent}</li>
          )
        })
      }
      </ol>
    </div>
  );
}

export default App;
