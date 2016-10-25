var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

var SENTRY_KEY = '';
var SENTRY_APP = '';
var SENTRY_URL = 'http://' + SENTRY_KEY + '@sentry.io/' + SENTRY_APP;

// Raven.config(SENTRY_URL).install();

ReactDOM.render(
	routes,
	document.getElementById('app')
);