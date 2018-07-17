import moment from 'moment';
import 'moment/locale/es';
import transformWheater from './transformWeather';

const transformForecasct=(data)=>{
	return( data.list.filter(item=>{
		//Debido a que esta expresando en UNIX
			return (
				moment.unix(item.dt).utc().hour()===6 ||
				moment.unix(item.dt).utc().hour()===12 ||
				moment.unix(item.dt).utc().hour()===18
				)
	}).map(item=>{
		return ({
			weekDay: moment.unix(item.dt).format('ddd'),
			hour: moment.unix(item.dt).utc().hour(),
			data: transformWheater(item),
		})
	}
	))
};


export default transformForecasct;