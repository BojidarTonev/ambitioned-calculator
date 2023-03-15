import React from 'react';
import {Calculator} from "./components/calculator/calculator";
import {CalculationsHistory} from "./components/calculations-history/calculations-history";
import './App.scss';

function App() {
  const [resultHistory, setResultHistory] = React.useState([]);

  const onReceivedResult = (result) => setResultHistory([...resultHistory, result]);
  const clearHistory = () => setResultHistory([]);

  return (
    <div className="App">
        <h1>AMBITIONED CALCULATOR</h1>
        <div className="main-wrapper">
            <Calculator onResult={onReceivedResult} />
            <CalculationsHistory results={resultHistory} clearHistory={clearHistory} />
        </div>
    </div>
  );
}

export default App;
