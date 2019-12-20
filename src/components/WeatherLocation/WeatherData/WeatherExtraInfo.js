import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="weatherExtraInfoConts">
        <span className="extraInfoText">{`humeda: ${humidity} % - `}</span>
        <span className="extraInfoText">{`viento: ${wind} `}</span>
    </div>
);

WeatherExtraInfo.propTypes=
{
    humidity:PropTypes.number.isRequired,
    wind:PropTypes.string.isRequired,
}
export default WeatherExtraInfo;