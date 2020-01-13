import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    DRIZZLE,
    SUN,
    RAIN,
    THUNDER,
    SNOW,
} from "./../../../constants/weather"

const icons = 
{
    [CLOUD]:"cloud",
    [DRIZZLE]:"day-showers",
    [SUN]:"day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [THUNDER]:"day-thunderstore",
};

const getWeatherIcon = weatherState=> {
    const icon = icons[weatherState];

    const sizeIcon = "4x"
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />
    
    else
        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureConts">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`C°`}</span>
    </div>
);

WeatherTemperature.propTypes =
{
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};
export default WeatherTemperature;