import React from 'react';
import propTypes from 'prop-types';
import './style.css'

const WeatherExtraInfo=({humidity, wind})=>{
	return(
		<div className='weatherExtraCont'>
			<spam className='extraInfoText'>{`Humedad ${humidity}% `}</spam>
			<spam className='extraInfoText'>{`Vientos ${wind}`}</spam>
	</div>
	)
}

WeatherExtraInfo.propTypes={
	humidity: propTypes.number.isRequired,
	wind: propTypes.string.isRequired,
};
export default WeatherExtraInfo;