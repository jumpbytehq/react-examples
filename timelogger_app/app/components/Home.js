var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var TimerDashboardContainer = require('../containers/TimerDashboardContainer');

var Home = React.createClass({
	render: function(){
		return (
			<div style={transparentBg} className="ui text">
				<h1 className="ui center aligned icon header">Timers</h1>
				<hr/>		
				<TimerDashboardContainer />
			</div>
		);
	}
});

module.exports = Home;