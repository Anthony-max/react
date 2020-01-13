import React from 'react';
import LocationList from './components/LocationList'
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'washington,us',
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe',
];

function App() {
  return (
    <div className="App">
      Weather App (aplicacion del clima)
      <LocationList cities={cities}/>
    </div>
  );
}

export default App;
