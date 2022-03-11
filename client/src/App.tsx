import * as React from 'react';
import './App.css';
import HomePage from './components/Home';

function App(): JSX.Element {
  return (
    <div className='container'>
    <h1>Colors react and deno</h1>
    <HomePage/>
    </div>

  );
}

export default App;
