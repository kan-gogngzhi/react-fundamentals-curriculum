import React from 'react';
import jsonGetCurrentWeather from '../json/getCurrentWeather';
import jsonGetNDaysForecast from '../json/getNDaysForecast';
import Forecast from '../components/Forecast';
const {PropTypes} = React;
const forecastDays = 5;

const ForecastContainer = React.createClass({
    contextTypes: {
        router: PropTypes.object.isRequired
    },
    getInitialState(){// todo es2015 will be in constructor
        return {
            loading: true,
            data: []
        }
    },
    render(){
        return (
            <Forecast onSelectDay={this.handleSelectDay} isLoading={this.state.loading} data={this.state.data}/>
        );
    },
    componentDidMount(){
        const that = this;
        this.startLoading();
        jsonGetNDaysForecast(that.props.routeParams.city, forecastDays).then(that.getWeatherSuccess).catch(that.getWeatherError);
    },
    componentWillReceiveProps(nextProps){
        const that = this;
        this.startLoading();
        jsonGetNDaysForecast(nextProps.routeParams.city, forecastDays).then(that.getWeatherSuccess).catch(that.getWeatherError);
    },
    handleSelectDay(dayData){
        console.log('clicked: ', dayData);
        //const that = this;
        //jsonGetCurrentWeather(that.state.location).then(that.getWeatherSuccess).catch(that.getWeatherError);
        //jsonGetNDaysForecast(that.state.location, forecastDays).then(that.getWeatherSuccess).catch(that.getWeatherError);
    },
    getWeatherSuccess(data){
        this.setState({
            data: data
        });
        this.stopLoading();
    },
    getWeatherError(error){
        console.log('error: ', error);
        this.stopLoading();
    },
    startLoading(){
        this.setState({
            loading: true
        });
    },
    stopLoading(){
        this.setState({
            loading: false
        });
    }
});

export default ForecastContainer;