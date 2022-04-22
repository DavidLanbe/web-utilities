import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() 
{
  const [msg, setMsg] = useState('')

  const handleClick = async () => 
  {
    const data = await fetch('/api/youtube')
    // transform data into json
    const json = await data.json()
    console.log(json)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>
          Say Hi
        </button>
        <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;
