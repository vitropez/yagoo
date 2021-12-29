import logo from './logo.svg';
import './App.css';
import Componente from "./components/Componente";
import { Component } from 'react/cjs/react.production.min';
import Estado from './components/estado';
import RenderecizadoCondicional from './components/RenderecizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
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
        <Estado/>
        <hr></hr>
        <RenderecizadoCondicional/>
        <RenderizadoElementos/>
        
      </section>
      
    </div>
  );
}

export default App;
