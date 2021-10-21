import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Ad from './components/Ad/index.jsx';


function App() {

  const [nombre, setNombre] = useState('Hristo')
  const [contador, setContador] = useState(0)

  const handleCount = () =>{
    setContador(contador=contador+1)
  }

  return (
    <div className="App">
      <h1>Hola {nombre}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={handleCount}>Contar</button>
        <h1> Contando hasta {contador}</h1>
        <Ad/>
        <Ad/>
        <Ad/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
