var React = require('react');
var {transparentBg, noBottomPadding} = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var UserProfile = require('./UserProfile');

var ConfirmBattle = function({isLoading, playerInfo, playerOne, playerTwo, startBattle}){
	var header = (
		<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={Object.assign(transparentBg, noBottomPadding)}>
			<h1>Confirm Players!!!</h1>				
			<hr/>
		</div>
	);
	
	var profileInfo = (
		<div className="col-sm-10 col-sm-offset-2 text-center">
			<div className="col-sm-12">
				<div className="row">
					<div className="col col-sm-5">
						<UserProfile user={playerOne} />
					</div>
					<div className="col col-sm-5">
						<UserProfile user={playerTwo} />
					</div>							
				</div>
				<div className='row'>
					<div className='col col-sm-10 text-center'>
						<button onClick={startBattle} className='btn btn-primary btn-lg'>Confirm</button>
						<span> </span>
						<Link to="/">
							<button className='btn btn-danger btn-lg'>Start Again</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);

	if(isLoading){
		return (
			<div>
				{header}
				<div className="col-sm-10 col-sm-offset-2 text-center">
				<div className="col-sm-10">					
					<h2>Loading...</h2>
					</div>
				</div>
			</div>
		);
	}else{
		return (
			<div>
				{header}
				{profileInfo}			
			</div>
		);
	}	
};

module.exports = ConfirmBattle;