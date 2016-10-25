var React = require('react');

var Product = function({product, onUpVote, onDownVote}){
	var handleUpVote = function(evt){
		evt.preventDefault();
		onUpVote(product.id);
	};

	var handleDownVote = function(evt){
		evt.preventDefault();
		onDownVote(product.id);
	};

	return (
		<div className='item'>
		        <div className='image'>
		          <img src={product.product_image_url} />
		        </div>
		        <div className='middle aligned content'>
		          <div className='header'>
		            <a href="#" onClick={handleUpVote}>
		              <i className='large caret up icon'></i>
		            </a>
		            {product.votes}
		            <a href="#" onClick={handleDownVote}>
		            	<i className='large caret down icon'></i>
		            </a>
		          </div>
		          <div className='description'>
		            <a href={product.url}>{product.title}</a>
		            <p>{product.description}</p>
		          </div>
		          <div className='extra'>
		            <span>Submitted by:</span>
		            <img
		              className='ui avatar image'
		              src={product.submitter_avatar_url}
		            />
		          </div>
		        </div>
		</div>		
	);
};

module.exports = Product;