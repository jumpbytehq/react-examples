var React = require('react');
var Product = require('./Product');

var AscSort = function({onToggleSort}){
	return (		
		<a href="#" onClick={onToggleSort}>
        	<i className='large caret up icon'></i>
        </a>
	);
};

var DescSort = function({onToggleSort}){
	return (		
		<a href="#" onClick={onToggleSort}>
        	<i className='large caret down icon'></i>
        </a>
	);
};

var ProductList = function({products, onUpVote, onDownVote, sortOrder, onToggleSort}){
	return (
		<div>
			<div className='ui items'>
				<div>
					Sort: { sortOrder === 0 ? <AscSort onToggleSort={onToggleSort}/> : <DescSort onToggleSort={onToggleSort}/> }
				</div>
				{
					products.map(function(product){
					return (<Product product={product} key={product.id} onUpVote={onUpVote} onDownVote={onDownVote} />);
					})
				}
			</div>
		</div>
	);
};

module.exports = ProductList;