import React from 'react';
import styles from '../styles/index';
const {weatherLocationInput} = styles;

const Button = (props)=> {
    return (
        <button type='button' className='btn btn-lg btn-success' onClick={props.onSubmitLocation}>Get weather</button>
    )
};

const InputField = (props)=> {
    return (
        <input style={weatherLocationInput}
               value={props.location}
               onChange={props.onUpdateLocation}
        />
    )
};

const GetCity = (props)=> {
    return (
        <div>
            <InputField style={weatherLocationInput}
                        location={props.location}
                        onUpdateLocation={props.onUpdateLocation}
            />
            <Button onSubmitLocation={props.onSubmitLocation}/>
        </div>
    )
};

export default GetCity;