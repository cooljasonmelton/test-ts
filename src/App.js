import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [toDos, setToDos] = useState([])
  const [input, setInput] = useState("")

  const handleAdd = () => {
    setToDos([...toDos, input])
    setInput("")
  }
  const handleDelete = dtd => setToDos(toDos.filter(td => td !== dtd))
  const handleEnter = key =>  key === "Enter" ? handleAdd() : null

  return (
    <div className="App">
      <div>
        <h4>new to do</h4>
        <input type="text" onChange={e=>setInput(e.target.value)} onKeyDown={e => handleEnter(e.key)} value={input}/>
        <button onClick={handleAdd}>add</button>
      </div>

      <h1>to do list</h1>
      <ul>
        {toDos.map(td => <li>
            {td + "  "}
            <button onClick={() => handleDelete(td)}>X</button>
          </li>)} 
      </ul>
    </div>
  );
}

export default App;
