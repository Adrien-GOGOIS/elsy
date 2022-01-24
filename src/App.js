import React from 'react';
import Box from './components/Box.js'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import styles from './styles/global.css';

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
        {/* Water */}
        <Box icon='local_drink' color='#3A85FF' value={1.5} unit='L'/>
        {/* Steps */}
        <Box icon='directions_walk' color='black' value={3000} unit='steps'/>
        {/* Heart */}
        <Box icon='favorite' color='red' value={120} unit='bpm'/>
        {/* Temperature */}
        <Box icon='wb-sunny' color='yellow' value={-10} unit='°C'/>

        <p>Heart : {heartMin}</p>
        <p>Temperature : {tempMin}</p>
        <p>Steps : {stepMin}</p>
        </div>
      </div>
    )
  }
}

export default App;
