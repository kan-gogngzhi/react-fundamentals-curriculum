import React from 'react';
import {Link} from 'react-router';
import styles from '../styles/index';
const {fullPage, mainHeader} = styles;
import GetCityContainer from '../containers/GetCityContainer';
//require('../main.css');

const Main = (props)=> {
    return (
        <div className='main-container' style={fullPage}>
            <div className="navbar" style={mainHeader}>
                <Link to="/">kanWeather</Link>
                <GetCityContainer/>
            </div>
            {props.children}
        </div>
    );
};

export default Main;