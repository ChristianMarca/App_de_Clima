import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';//Importante
import {Grid,Row,Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import ForecastExtended from './components/ForecastExtended'

// import logo from './logo.svg';
import './App.css';
import WeatherLocation from './components/WeatherLocation';
import LocationList from './components/LocationList';

const cities=['Gualaceo,ec','Cali,co','Región Metropolitana de Santiago,cl','Washington County,us'];

class App extends Component {
	constructor(){
		super();
		this.state={
			city: null,
		}
	}
	handleSelectedLocation=city=>{
		this.setState({city});
		console.log(`handleSelectedLocation ${city}`);
		// console.log(`handleSelectedLocation`);
	}
	render() {
		const {city}=this.state;
    return (
    	<MuiThemeProvider>
	      <Grid>
	      	<Row>
	      		<Col xs={12}>
	      			<AppBar title="Weather App" />
	      		</Col>
	      	</Row>
	      	<Row>
		      	<Col xs={12} md={6}>
		      		<LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
		      	</Col>
		      	<Col xs={12} md={6}>
		      		<Paper zDepth={4}>
			      		<div className="detail">
			      			{city && <ForecastExtended city={city} /> }
			      		</div>
			      	</Paper>
		      	</Col>
	      	</Row>
	      </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
