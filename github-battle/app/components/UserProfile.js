var React = require('react');

var UserProfile = function({user, highlight}){
	var panelClasses = "panel panel-default";
	if(highlight){
		panelClasses += " panel-primary";
	}

	return (
		<div className={panelClasses}>
		  <div className="panel-heading">
		  	<a href={user.html_url} target='_blank' style={{color: highlight ? 'white' : ''}}>{user.name}</a>		  	
		  </div>
		  <div className="panel-body">
		    <img src={user.avatar_url} height='150' width='150'/>
		  </div>
		  <ul className="list-group">
		    <li className="list-group-item"><a href={user.organizations_url} target='_blank'>{user.company}</a></li>
			{ /*<li className="list-group-item">{user.bio || 'NA'}</li> */}
		    <li className="list-group-item">
		    	Followers: {user.followers},
		    	Following: {user.following}
		    </li>
		    <li className="list-group-item">Public Repos: {user.public_repos}</li>		    
		  </ul>
		</div>		
	);
};

module.exports = UserProfile;