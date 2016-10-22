var React = require('react');
var {transparentBg, noBottomPadding} = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var UserProfile = require('./UserProfile');

var Results = function({playerOne, playerTwo, playerOneResult, playerTwoResult}){
	var winner = playerOneResult > playerTwoResult ? playerOne : playerTwo;
	var winnerEl = (
		<span style={{color: 'blue'}}>{winner.name}</span>
	);
	return (
		<div>
			<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={Object.assign(transparentBg, noBottomPadding)}>
				<h1>Results</h1>
				<h3>Winner is {winnerEl}</h3>
				<hr/>
			</div>
			<div className="col-sm-10 col-sm-offset-2 text-center">
				<div className="col-sm-12">
					<div className="row">
						<div className="col col-sm-5">
							<h2>{playerOneResult}</h2>
							<UserProfile user={playerOne} highlight={winner.email === playerOne.email}/>							
						</div>
						<div className="col col-sm-5">
							<h2>{playerTwoResult}</h2>
							<UserProfile user={playerTwo} highlight={winner.email === playerTwo.email}/>
						</div>							
					</div>
					<div className='row'>
						<div className='col col-sm-10 text-center'>
							<Link to="/">
								<button className='btn btn-danger btn-lg'>Start Again</button>
							</Link>
						</div>
					</div>
				</div>
			</div>			
		</div>
	);
};

module.exports = Results;