var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

var SENTRY_KEY = 'c1925e69e93d47b2a00ebfceae178ddd';
var SENTRY_APP = '106179';
var SENTRY_URL = 'http://' + SENTRY_KEY + '@sentry.io/' + SENTRY_APP;

// Raven.config(SENTRY_URL).install();

ReactDOM.render(
	routes,
	document.getElementById('app')
);