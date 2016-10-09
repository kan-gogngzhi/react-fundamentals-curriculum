const api = {
    apiEndPoint: 'http://api.openweathermap.org/data/2.5/',
    apiCurrentWeather: 'weather',
    apiFiveDayForecast: 'forecast/daily',
    apiCityQuery: '?q=',
    apiTypeAndIDParam: '&type=accurate&APPID=8c9c681818129fac19d28b2e086d3f16',
};
export default {

    getCurrentCityWeatherAPI(city){
        return `${api.apiEndPoint}${api.apiCurrentWeather}${api.apiCityQuery}${city}${api.apiTypeAndIDParam}`;
    },
    getNDaysForecastAPI(city){
        return `${api.apiEndPoint}${api.apiFiveDayForecast}${api.apiCityQuery}${city}${api.apiTypeAndIDParam}`;
    }
}