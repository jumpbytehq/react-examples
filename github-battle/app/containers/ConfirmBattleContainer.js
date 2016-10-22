var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	startBattle: function(e){
		this.context.router.push({
			pathname: '/results',
			state: {
				playersInfo: [this.state.playerOne, this.state.playerTwo]
			}
		});
	},

	getInitialState: function(){
		return {
			isLoading: true			
		}
	},

	componentDidMount: function(){
		var { playerOne, playerTwo } = this.props.location.query;		
		this.setState({ isLoading: true });

		githubHelpers.getPlayersInfo([playerOne, playerTwo]).then(function(info){
			console.log('INFO', info);

			this.setState({
				isLoading: false,
				playerOne: info[0],
				playerTwo: info[1]
			});
		}.bind(this));		
	},

	render: function(){
		return (
			<ConfirmBattle 
				isLoading={this.state.isLoading}				
				playerOne={this.state.playerOne}
				playerTwo={this.state.playerTwo}
				startBattle={this.startBattle}
			/>
		);
	}
});

module.exports = ConfirmBattleContainer;