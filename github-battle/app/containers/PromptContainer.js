var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function(){
		return {
			username: ''
		};
	},

	handleUpdateUser: function(e){
		this.setState({ username: e.target.value });
	},

	handleSubmitUser: function(e){
		e.preventDefault();
		var username = this.state.username;

		if(this.props.routeParams.playerOne){
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username
				}
			})
		}else{
			this.context.router.push('/playerTwo/' + this.state.username);

		}
	},

	render: function(){
		return (
			<Prompt 
				username={this.state.username} 
				onSubmitUser={this.handleSubmitUser}
				onUpdateUser={this.handleUpdateUser}
				header={this.props.route.header}
			/>
		);
	}
});

module.exports = PromptContainer;