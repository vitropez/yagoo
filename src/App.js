import logo from './logo.svg';
import './App.css';
import Componente from "./components/Componente";
import { Component } from 'react/cjs/react.production.min';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React   
        </a>
      </header>
      <section>
        <Componente msg="hola soy un Componente Funcional desde una arrow function"/>
      

      </section>
    </div>
  );
}

export default App;
