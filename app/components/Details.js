import React from 'react';

const Details = (props)=> {
    const {data} = props;
    return (<div>{data.weather[0].description}</div>);
};

export default Details;