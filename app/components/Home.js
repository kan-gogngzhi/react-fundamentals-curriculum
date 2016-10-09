import React from 'react';
import { Link } from 'react-router';
import styles from '../styles/index';
const {homeBg} = styles;
import GetCityContainer from '../containers/GetCityContainer';

const Home = ()=> {
    return (
        <div className="col-sm-12 text-center" style={homeBg}>
            <h1>Enter a city and state</h1>
            <GetCityContainer/>
        </div>
    )
};

export default Home;