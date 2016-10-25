const React = require('react');
const transparentBg = require('../styles').transparentBg;
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const ProductListContainer = require('../containers/ProductListContainer');

const Home = React.createClass({
	render: function(){
		return (
			<div style={transparentBg}>
				<h1 className="ui center aligned icon header">Popular Products</h1>
				<hr/>
				<ProductListContainer />
			</div>
		);
	}
});

module.exports = Home;