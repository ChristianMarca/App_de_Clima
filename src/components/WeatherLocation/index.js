import React,{Component} from 'react';
import propTypes from 'prop-types';
import WeatherData from './WeatherData';
import Location from './Location'
import './style.css'
import CircularProgress from 'material-ui/CircularProgress'
import transformWeather from './../../services/transformWeather'

const apiKey="28767094d20a5f932ed45a244a5c03b3";
const url='http://api.openweathermap.org/data/2.5/weather';

class WeatherLocation extends Component{
	constructor({city}){//Viebe una propiedad
		super();
		this.state={
			data: null,
			city,
		};
	}


// 	handleUpdateClick=(event)=>{
// 		(async function fetchData(){
//             const response=await fetch(weatherApi);
//             const weather_data=await response.json()
//             return weather_data;
//             })().then(weather_data=>{const data=transformWeather(weather_data);
//                 this.setState({data})
//                 return data});
// 		//this.setState({data: fetchData()});//Por que son los mismos nombre spodemos colocar asi
// 		// fetch(weatherApi).then(data=>{
// 		// 	return data.json();
// 		// }).then(weather_data=>{
// 		// 	const data=this.getData(weather_data);
// 		// 	this.setState({data});
// 		// })

// // 		const getData = async function() {
// //   try {
// //     const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
// //         const response = await fetch(url);
// //         return response.json();
// //     }));
// //     console.log('users', users);
// //     console.log('posta', posts);
// //     console.log('albums', albums);
// //   } catch (err) {
// //     console.log('ooooooops', err);
// //   }
// // }
// 			//.then(users=>{this.setState({robots:users})});
// 		// this.setState(
// 		//  	{data: data2,}
// 		// 		);
// 	}
	componentWillMount(){
		// this.handleUpdateClick();
		const {city}=this.state;
		const weatherApi=`${url}?q=${city}&appid=${apiKey}`;
		(async function fetchData(){
            const response=await fetch(weatherApi);
            const weather_data=await response.json()
            return weather_data;
            })().then(weather_data=>{const data=transformWeather(weather_data);
                this.setState({data})
                return data});
	}
	render(){
		const {onWeatherLocationClick}=this.props;
		const {city,data}=this.state;
		return(
			<div className='WeatherLocationCont' onClick={onWeatherLocationClick}>
				<Location city={city}/>
				{data? <WeatherData data={data}/>: <CircularProgress  size={50} thickness={7} />}
			</div>
		)
	}
}

WeatherLocation.propTypes={
	city: propTypes.string,
	onWeatherLocationClick: propTypes.func,
};
export default WeatherLocation;