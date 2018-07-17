import React from 'react';
import propTypes from 'prop-types';
import './style.css'

const Location=({city})=>{
// const Location=(props)=>{
	// const {city} =props;//Destructuring
	return (<div className='LocationCont'>
		<h1>{city}</h1>
	</div>)
}

Location.propTypes={
	city: propTypes.string.isRequired,
};
export default Location;