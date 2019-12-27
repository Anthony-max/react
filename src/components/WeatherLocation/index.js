import React, {Component} from 'react';
import Location from './Location';
import transformWeather from './../../services/transformWeather';
import {api_weather} from './../../constants/api_url';
import WeatherData from './WeatherData/';
import "./styles.css"
import {
    SUN,
} from "./../../constants/weather";



const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind:'10 m/s',

}

/*const data2 = {
    temperature: 5,
    weatherState: WINDY,
    humidity: 10,
    wind:'10 m/s', 
}
*/
class WeatherLocation extends Component {

    constructor()
    {
        super();
        this.state = {
            city: "buenos Aires",
            data: data,
        };
    }
    

    handleUpdateClick = () => 
    {
        fetch(api_weather).then(resolve => {
            
            return resolve.json();
        }).then(data=> {

            const newWeather = transformWeather(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data: newWeather
            });

        });

        
        
       /* this.setState({
            city: "Buenos Aires!!",
            data:data2
            // usar setState para modificar 
        });*/
    }
    render()
    {
        const {city, data} = this.state;
        return(
        <div className="weatherLocationCont">
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClick}> Actualizar </button>
        </div>
        );
    }
    
}
    


export default WeatherLocation;