var React = require('react');
var transparentBg = require('../styles').transparentBg;
var PropTypes = React.PropTypes;

var Prompt = function({header, onSubmitUser, onUpdateUser, username}){
	return (
		<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
			<h1>{header}</h1>
			<div className="col-sm-12">
				<form onSubmit={onSubmitUser}>
					<div className="form-group">
						<input className="form-control" placeholder="Github Username" type="text" onChange={onUpdateUser} value={username}/>
					</div>
					<div className="form-group col-sm-4 col-sm-offset-4">
						<button className="btn btn-block btn-success" type="submit" >
							Continue
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

Prompt.propTypes = {
	header: PropTypes.string.isRequired,
	onSubmitUser: PropTypes.func.isRequired,
	onUpdateUser: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired
};

module.exports = Prompt;
