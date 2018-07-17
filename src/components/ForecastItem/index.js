import React from 'react';
import propTypes from 'prop-types';
import WeatherData from '../WeatherLocation/WeatherData';

// const data={
// 	temperature:10,
// 	humidity: 10,
// 	wearherState: "normal",
// 	wind: "normal",
// };

const ForecastItem=({weekDay,hour,data})=>{
	return(
		<div>
			<h2>
			{weekDay} - {hour} hs
			</h2>
			<WeatherData data={data}/>
		</div>
		)
};

ForecastItem.propTypes={
	weekDay: propTypes.string.isRequired,
	hour: propTypes.number.isRequired,
	data: propTypes.shape({
		temperature: propTypes.number.isRequired,
		weatherState: propTypes.string.isRequired,
		humidity: propTypes.number.isRequired,
		wind: propTypes.string.isRequired,
	}),
}

export default ForecastItem;