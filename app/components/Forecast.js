import React from 'react';

const Forecast = (props)=> {
    console.log('props; ', props);
    return props.isLoading ? (<div>Loading...</div>) : (<div>
        {props.data.data.list.map((dayData, i)=>{
            return (<div key={i} onClick={()=>props.onSelectDay(dayData)}>{dayData.weather[0].description}</div>);
        })}
    </div>);
};

export default Forecast;