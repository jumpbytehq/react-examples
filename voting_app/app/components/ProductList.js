var React = require('react');
var Product = require('./Product');

var AscSort = function({toggleSort}){
	return (		
		<a href="#" onClick={toggleSort}>
        	<i className='large caret up icon'></i>
        </a>
	);
};

var DescSort = function({toggleSort}){
	return (		
		<a href="#" onClick={toggleSort}>
        	<i className='large caret down icon'></i>
        </a>
	);
};

var ProductList = function({products, onUpVote, onDownVote, sortOrder, onToggleSort}){
	var productsEl = products.map(function(product){
		return (<Product product={product} key={product.id} onUpVote={onUpVote} onDownVote={onDownVote} />);
	});

	var sortEl = sortOrder === 0 ? <AscSort toggleSort={onToggleSort}/> : <DescSort toggleSort={onToggleSort}/>

	return (
		<div className='ui items'>
			<div>
				Sort: {sortEl}
			</div>
			{productsEl}
		</div>
	);
};

module.exports = ProductList;