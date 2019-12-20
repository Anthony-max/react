import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData/';
import "./styles.css"
import {
    SNOW,
    WINDY,
} from "./../../constants/weather";

const location = "Buenos Aires,ar"
const api_key = "c275a5ef128d1326a8d877d961686ba7";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
const data = {
    temperature: 5,
    weatherState: SNOW,
    humidity: 10,
    wind:'10 m/s',
}

const data2 = {
    temperature: 5,
    weatherState: WINDY,
    humidity: 10,
    wind:'10 m/s',
}
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
        fetch(api_weather);

        console.log("actualizado");
        
        this.setState({
            city: "Buenos Aires!!",
            data:data2
            //usar setState para modificar
        });
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