import React from 'react';
import GetCity from '../components/GetCity';
const {PropTypes} = React;

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
        console.log('location;', this.state.location);
    },
    handleUpdateLocation(e){
        this.setState({
            location: e.target.value
        });
    }
});

export default GetCityContainer;