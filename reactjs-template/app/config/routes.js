var React = require('react');
var ReactRouter = require('react-router');
var { Router, Route, IndexRoute } = ReactRouter;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />			
		</Route>
	</Router>
);

module.exports = routes;