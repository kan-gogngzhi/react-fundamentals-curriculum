import React from 'react';
import jsonGetCurrentWeather from '../json/getCurrentWeather';
import jsonGetNDaysForecast from '../json/getNDaysForecast';
import GetCity from '../components/GetCity';
const {PropTypes} = React;
const forecastDays = 5;

const GetCityContainer = React.createClass({
    contextTypes: {
        router: PropTypes.object.isRequired
    },
    getInitialState(){// todo es2015 will be in constructor
        return {
            location: ''
        }
    },
    render(){
        return (
            <GetCity onUpdateLocation={this.handleUpdateLocation} onSubmitLocation={this.handleSubmitLocation}/>
        );
    },
    handleSubmitLocation(){
        const that = this;
        //jsonGetCurrentWeather(that.state.location).then(that.getWeatherSuccess).catch(that.getWeatherError);
        jsonGetNDaysForecast(that.state.location, forecastDays).then(that.getWeatherSuccess).catch(that.getWeatherError);
    },
    handleUpdateLocation(e){
        this.setState({
            location: e.target.value
        });
    },
    getWeatherSuccess(data){
        console.log('data: ', data);
    },
    getWeatherError(error){
        console.log('error: ', error);
    }
});

export default GetCityContainer;