var React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main'),
    Home = require('../components/Home'),
    PromptContainer = require('../containers/PromptContainer'),
    ResultsContainer = require('../containers/ResultsContainer'),
    ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');


var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}> //'Main' component will be active for this and all child routes
           <IndexRoute component={Home} /> 
           <Route path='PlayerOne' header='Player One' component={PromptContainer} />
           <Route path='PlayerTwo/:playerOne' header='Player Two' component={PromptContainer} />
           <Route path='Battle' component={ConfirmBattleContainer} />
           <Route path='Results' component={ResultsContainer} />
        </Route>
    </Router>
);


module.exports = routes;
