import React,{Component} from 'react';
import WeatherLocation from './WeatherLocation'
import propTypes from 'prop-types'
import './style.css'

class LocationList extends Component{

	 constructor (props) {
    	super(props)
    	// this.onSelectedLocation = this.onSelectedLocation.bind(this);
  		}

	handleWeatherLocationClick=(city)=>{
		const {onSelectedLocation}=this.props;
		console.log("handleWeatherLocationClick");
		onSelectedLocation(city);//Disparamos el evento hacia el padre
	}
	strToCompenent=(cities)=>{
		// const {handleWeatherLocationClick}=this.props;
		const mapCities=cities.map((city)=>{
					return(
						<WeatherLocation
							key={city}
							city={city}
							onWeatherLocationClick={()=> this.handleWeatherLocationClick(city)}/>//Disparo de evento hacia arriba
							)
				})
		return mapCities;
	};
	render(){
		return(
			<div className="locationList">
				{this.strToCompenent(this.props.cities)}
			</div>
		)
	}

}
LocationList.propTypes={
	cities: propTypes.array.isRequired,
	onSelectedLocation: propTypes.func,
}
export default LocationList;