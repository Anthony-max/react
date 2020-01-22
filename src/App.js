import LocationList from './components/LocationList'
import './App.css';
import React,{ Component } from 'react';


const cities = [
  'Buenos Aires,ar',
  'washington,us',
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe',
];

class App extends Component{
  handleSelectedLocation = city =>{
    console.log(`handleSelectedLocation ${city}`);
  }

  render(){
    return(
    
      <div className="App">
        Weather App (aplicacion del clima)
        <LocationList 
        cities={cities}
        onSelectedLocation={this.handleSelectedLocation}/>
      </div>
   
    );
  }
}

export default App;
