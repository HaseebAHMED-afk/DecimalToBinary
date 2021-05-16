import './App.css';
import { Button } from '@material-ui/core';
import TextField  from '@material-ui/core/TextField';
import { useState } from 'react';
import ConverterFunction from './Utils/ConverterFunction'

function App() {

  let [num , setNum] = useState<Number>(0)
  let [result , setResult] = useState<any>(null)


  const handleChange = (e: any) =>{
    let x = Number(e.target.value)
    setNum(x)
  }

  const handleClick = () =>{
    setResult(ConverterFunction(num));
  }

  return (
    <div className="App">
      <div className="input-section">
        <TextField
          variant="filled"
          style={{ width: "100%" }}
          value={num}
          onChange={handleChange}
          color="secondary"
          label="Enter a number"
          className="input"
        />
        <Button
          variant="contained"
          color="secondary"
          className="input"
          onClick={handleClick}
        >
          Convert
        </Button>
      </div>
      {result ? (
        <div className="result">
          <h1>{result}</h1>
        </div>
      ) : null}
    </div>
  );
}

export default App;
