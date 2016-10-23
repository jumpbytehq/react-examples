var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	},

	module: {
		loaders: [
			{ test: /\.js?$/, loader: 'babel', exclude: /node_modules/ },
			{ test: /\.css$/, loader: "style-loader!css-loader" },
		]		
	},

	plugins: [HtmlWebpackPluginConfig]
}