import axios from 'axios';
import Constants from '../constans';
const {getNDaysForecastAPI} = Constants;

const jsonGetFiveDaysForecast = (city, numOfDays) => {
    return axios.get(`${getNDaysForecastAPI(city)}&cnt=${numOfDays}`);
};

export default jsonGetFiveDaysForecast;