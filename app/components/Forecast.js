import React from 'react';

const DayItem = (props) => {
    const {data} = props;
    return (<div onClick={()=>props.onSelectDay(data)}>{data.weather[0].description}</div>);
};

const Forecast = (props)=> {
    return props.isLoading ? (<div>Loading...</div>) : (<div>
        {props.data.data.list.map((dayData, i)=> {
            return (<DayItem key={i} onSelectDay={props.onSelectDay} data={dayData}/>);
        })}
    </div>);
};

export default Forecast;