import React, {Component} from 'react';
import Location from './Location';
import transformWeather from './../../services/transformWeather';
import {api_weather} from './../../constants/api_url';
import WeatherData from './WeatherData/';
import "./styles.css"

class WeatherLocation extends Component {

    constructor()
    {
        super();
        this.state = {
            city: "buenos Aires",
            data: null,
        };
    }
    
    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
        
    }
    componentDidUpdate(prevProps, prevState) {
        
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

    }
    render()
    {
        const {city, data} = this.state;
        return(
        <div className="weatherLocationCont">
            <Location city={city}></Location>
            {data ? <WeatherData data={data}></WeatherData>: "cargando"}
            
        </div>
        );
    }
    
}
    


export default WeatherLocation;