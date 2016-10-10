import React from 'react';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import ForecastContainer from '../containers/ForecastContainer';
import DetailsContainer from '../containers/DetailsContainer';
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="forecast/:city" component={ForecastContainer}/>
            <Route path="details/:city" component={DetailsContainer}/>
        </Route>
        <Route path="*" component={Home}/>
    </Router>
);

export default routes;