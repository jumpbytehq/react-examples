var React = require('react');
var Product = require('./Product');

var ProductList = function({products, onUpVote, onDownVote}){
	var productsEl = products.map(function(product){
		return (<Product product={product} key={product.id} onUpVote={onUpVote} onDownVote={onDownVote} />);
	});

	return (
		<div className='ui items'>
			{productsEl}
		</div>
	);
};

module.exports = ProductList;