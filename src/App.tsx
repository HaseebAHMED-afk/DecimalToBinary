import './App.css';
import { Button } from '@material-ui/core';
import TextField  from '@material-ui/core/TextField';
import { useState } from 'react';
import ConverterFunction from './Utils/ConverterFunction'

function App() {

  let [num , setNum] = useState<Number>(0)
  let [result , setResult] = useState('')


  const handleChange = (e: any) =>{
    let x = Number(e.target.value)
    setNum(x)
  }

  const handleClick = () =>{
    console.log(ConverterFunction(num));
  }

  return (
    <div className="App">

    <div className="input-section">
      <TextField variant='filled' style={{width:'100%'}} value={num} onChange={handleChange}  color='secondary' label='Enter a number' className='input' />
      <Button variant='contained' color='secondary' className='input' onClick={handleClick}  >Convert</Button>
    </div>
    <div className="result">
      <h1>1000000000000000000000000000000000000000000</h1>
    </div>
   </div>
  );
}

export default App;
