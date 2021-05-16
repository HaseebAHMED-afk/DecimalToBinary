import './App.css';
import { Button } from '@material-ui/core';
import TextField  from '@material-ui/core/TextField';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
    <div className="input-section">
      <TextField variant='filled'   color='secondary' label='Enter a number' className='input' />
      <Button variant='contained' color='secondary' className='input'  >Convert</Button>
    </div>
    <div className="result">
      <h1>1000000000000000000000000000000000000000000</h1>
    </div>
   </div>
  );
}

export default App;
