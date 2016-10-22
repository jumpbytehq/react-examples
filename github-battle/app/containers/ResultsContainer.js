var React = require('react');
var Result = require('../components/Results');

var ResultsContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function(){
		var playersInfo = this.props.location.state.playersInfo;

		var playerOne = playersInfo[0];
		var playerOneResult = ( playerOne.followers + playerOne.following + playerOne.public_gists + playerOne.public_repos ) * 100;

		var playerTwo = playersInfo[1]
		var playerTwoResult = ( playerTwo.followers + playerTwo.following + playerTwo.public_gists + playerTwo.public_repos ) * 100;

		return {
			results: [playerOneResult, playerTwoResult],
			players: playersInfo
		};
	},

	render: function(){
		var {playerOne, playerTwo} = this.state;		
		return (
			<Result 
				playerOneResult={this.state.results[0]} 
				playerTwoResult={this.state.results[1]} 
				playerOne={this.state.players[0]} 
				playerTwo={this.state.players[1]} />
		);		
	}
});

module.exports = ResultsContainer;