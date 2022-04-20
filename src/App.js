import logo from './logo.svg';
import './App.css';
import Compo from "./Compo"

function App() {
  return (
    <div className="App">
      <div className=" font-bold underline text-6xl text-red-300 hover:bg-blue-200 first-div:text-green-500 first-size-2">
        <div>11111</div>
        <Compo>fefwef</Compo>
        <div>22222</div>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
