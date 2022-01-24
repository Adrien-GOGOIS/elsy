import React from 'react';
import Steps from './components/Steps.js'
import "bootstrap/dist/css/bootstrap.min.css";
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

        <div class='row'>
        <Steps />
        <p>Heart : {heartMin}</p>
        <p>Temperature : {tempMin}</p>
        <p>Steps : {stepMin}</p>
        </div>
      </div>
    )
  }
}

export default App;
