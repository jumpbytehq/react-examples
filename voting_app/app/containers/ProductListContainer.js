var React = require('react');

var ProductList = require('../components/ProductList');
var data = require('../utils/data');

var ProductListContainer = React.createClass({
	getInitialState: function(){
		return {
			products: [],
			sortOrder: 0
		}
	},

	componentDidMount: function(){
		this.updateState();		
	},

	updateState: function(toggleSort){
		var newOrder = 0;
		if(toggleSort === true){
			newOrder = this.state.sortOrder === 0 ? 1 : 0;
		}

		const sortedProducts = data.products.sort((a,b)=>{
			if(newOrder == 0){
				return b.votes - a.votes;
			}else{
				return a.votes - b.votes;
			}			
		});

		this.setState({ 
			products: sortedProducts,
			sortOrder: newOrder
		});
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

	handleToggleSort: function(evt){
		this.updateState(true);
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
			<ProductList products={this.state.products} 
						onUpVote={this.handleUpVote} 
						onDownVote={this.handleDownVote} 
						sortOrder={this.state.sortOrder}
						onToggleSort={this.handleToggleSort}/>
		);
	}
});

module.exports = ProductListContainer;