var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
	render: function(){
		return (
			<div className="jumbotron col-sm-12 text-center" style={transparentBg}>
				<h1>This is home</h1>				
			</div>
		);
	}
});

module.exports = Home;