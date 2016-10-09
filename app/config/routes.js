import React from 'react';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import ForecastContainer from '../containers/ForecastContainer';
//import ConfirmBattleContainer from '../containers/ConfirmBattleContainer';
//import ResultsContainer from '../containers/ResultsContainer';
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="forecast/:city" component={ForecastContainer}/>
        </Route>
        <Route path="*" component={Home}/>
    </Router>
);

export default routes;