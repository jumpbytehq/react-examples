var React = require('react');

var ProductList = require('../components/ProductList');
var data = require('../utils/data');

var ProductListContainer = React.createClass({
	getInitialState: function(){
		return {
			products: []
		}
	},

	componentDidMount: function(){
		this.updateState();		
	},

	updateState: function(){
		const sortedProducts = data.products.sort((a,b)=>{
			return b.votes - a.votes;
		});
		this.setState({ products: sortedProducts });
	},

	handleUpVote: function(id){
		data.products.map(p => {
			if(p.id === id){
				p.votes++;
				return;
			}
		});
		this.updateState();
	},

	handleDownVote: function(id){
		data.products.map(p => {
			if(p.id === id){
				p.votes--;
				return;
			}
		});
		this.updateState();
	},

	render: function(){
		return (
			<ProductList products={this.state.products} onUpVote={this.handleUpVote} onDownVote={this.handleDownVote}/>
		);
	}
});

module.exports = ProductListContainer;