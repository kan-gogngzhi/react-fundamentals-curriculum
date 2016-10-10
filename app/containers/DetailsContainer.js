import React from 'react';
import Details from '../components/Details';
const {PropTypes} = React;

const DetailsContainer = React.createClass({
    contextTypes: {
        router: PropTypes.object.isRequired
    },
    render(){
        return (
            <Details data={this.props.location.state.data}/>
        );
    }
});

export default DetailsContainer;