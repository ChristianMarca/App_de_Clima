import React from 'react';
import WeatherIcons from 'react-weathericons'
import propTypes from 'prop-types';
import './style.css'
import {CLOUD,
		CLOUDY,
		SUN,
		RAIN,
		SNOW,
		WINDY,
		THUNDER,
		DRIZZLE,} from '../../../constants/weather';

const stateToIconName=(weatherState)=>{
	switch (weatherState) {
		case CLOUD:
			return "cloud";
		case CLOUDY:
			return "cloudy";
		case SUN:
			return "day-sunny";
		case RAIN:
			return "rain";
		case SNOW:
			return "snow";
		case WINDY:
			return "windy";
		case THUNDER:
			return "day-thunderstorm";
		case DRIZZLE:
			return "day-showers";
		default:
			return "day-sunny";
	}
}
const getWeatherOverIcon=(weatherState)=>{
	return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="3x" />);
}

const WeatherTemperature=({temperature,weatherState})=>{
	return(
		<div className='weatherTemperatureCont'>
			{getWeatherOverIcon(weatherState)}
			<spam className='temperature'>{temperature}</spam>
			<spam className='temperatureType'>ºC</spam>
		</div>
	)
}

//Para al validacion de datos
WeatherTemperature.propTypes={
	temperature: propTypes.number.isRequired,
	weatherState: propTypes.string,
};
export default WeatherTemperature;