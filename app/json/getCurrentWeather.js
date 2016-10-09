import axios from 'axios';
import Constants from '../constans';
const {getCurrentCityWeatherAPI} = Constants;

const jsonGetCurrentWeather = (city) => {
    return axios.get(getCurrentCityWeatherAPI(city));
};

export default jsonGetCurrentWeather;