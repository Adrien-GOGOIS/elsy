import React from 'react';
import './App.css';

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepMin = 0;
const stepMax = 50000;

class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <h1 className='text-primary'>Hello !</h1>
        <div class='row'>
        <p>Heart : {heartMin}</p>
        <p>Temperature : {tempMin}</p>
        <p>Steps : {stepMin}</p>

        </div>
      </div>
    )
  }
}

export default App;
