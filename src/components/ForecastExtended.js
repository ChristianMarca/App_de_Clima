import React,{Component} from 'react';
import propTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from '../services/transformForecast';
import './style.css'

const apiKey="28767094d20a5f932ed45a244a5c03b3";
const url='http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtends extends Component{
	constructor(){
			super();
			this.state={forecastData: null,}
		}

	renderForecastItemDays=(forecastData)=>{
		return(
			forecastData.map((forecast,index)=>{
				return <ForecastItem
					key={`${forecast.weekDay}${forecast.hour}`}
					weekDay={forecast.weekDay}
					hour={forecast.hour}
					data={forecast.data}>
					</ForecastItem>
			})
			//<ForecastItem weekDay='Lunes'></ForecastItem>
		)
	};
	renderProgress=()=>{
		return <h3>Cargando Pronóstico Extendido...</h3>;
	};
	componentDidMount(){
			this.updateCity(this.props.city);
	}
	//Ciclo de vida para hacer actulizaciones, se ejecuta cada vez que hay una actualizacion de las propiedades
	componentWillReceiveProps(nextProps){
		if (nextProps.city !== this.props.city){
			this.setState({forecastData:null});
			this.updateCity(nextProps.city);
		}
	}
	updateCity=(city)=>{
		//fetch or axios
			const ur_forescat=`${url}?q=${city}&appid=${apiKey}`;
			(async function fetchData(){
            const response=await fetch(ur_forescat);
            const weather_data=await response.json()
            return weather_data;
            })().then(weather_data=>{
            	console.log(weather_data);
            	const data=transformForecast(weather_data);
            	console.log('Hi')
            	console.log(data);
               this.setState({forecastData: data})
                // return data
             });
	}
	render(){
		const {city}=this.props;
		const {forecastData}=this.state;
		return (<div>
						<h1 className='forecast-title'>Pronóstico Extendido {city}</h1>
						{forecastData?
							this.renderForecastItemDays(forecastData):
							this.renderProgress()}
				</div>);
		}
	}

ForecastExtends.propTypes={
	city: propTypes.string.isRequered,
}

export default ForecastExtends;