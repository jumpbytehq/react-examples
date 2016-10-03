
var FilterableProductTable = React.createClass({
	getInitialState: function(){
		return {filterText: '', inStockOnly: false};
	},

	onUserInput: function(filterText, inStockOnly){
		this.setState({filterText: filterText, inStockOnly: inStockOnly});
	},

	render: function(){
		return (
			<div className="filtertableTable">
				<SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onUserInput={this.onUserInput}/>
				<ProductTable 
					products={this.props.products} 
					filterText={this.state.filterText} 
					inStockOnly={this.state.inStockOnly} />
			</div>
		);
	}
});

var SearchBar = React.createClass({
	handleChange: function(){
		this.props.onUserInput(this.refs.filterTextInput.value, this.refs.inStockOnlyInput.checked);
	},

	render: function(){
		return (
			<form className="searchBar">				
				<input type="text" value={this.props.filterText} placeholder="Search..." onChange={this.handleChange} ref="filterTextInput"/>
				<p>
					<input type="checkbox" defaultChecked={this.props.inStockOnly} onChange={this.handleChange} ref="inStockOnlyInput"/>
					{' '}
					Only show products in stock
				</p>
			</form>
		);
	}
});

var ProductTable = React.createClass({
	render: function(){

		var rows = [];
		var lastCategory = null;

		this.props.products.forEach(function(product){
			if(product.category != lastCategory){
				lastCategory = product.category;
				rows.push(
					<ProductCategoryRow key={product.category} category={product.category}/>
				);
			}

			if(this.props.filterText != ''){
				if(product.name.indexOf( this.props.filterText) < 0){
					return;
				}
			}

			if(this.props.inStockOnly){
				if(product.stocked){					
					rows.push(
						<ProductRow product={product} key={product.name}/>
					);	
				}
			}else{
				rows.push(
					<ProductRow product={product} key={product.name}/>
				);
			}			
		}.bind(this) );

		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
});

var ProductCategoryRow = React.createClass({
  render: function() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
});

var ProductRow = React.createClass({
	render: function(){
		return (
			<tr key={this.props.product.name}>
				<td>{this.props.product.name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		);
	}
});


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
	<FilterableProductTable products={PRODUCTS} />,
	document.getElementById('content')
);