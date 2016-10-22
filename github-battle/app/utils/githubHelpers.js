var axios = require('axios');

var getPlayerInfo = function(username){
	return axios.get('https://api.github.com/users/' + username);
};

var helpers = {
	getPlayersInfo: function(players){
		return axios.all( players.map( function(username) {
			return getPlayerInfo(username);
		})).then(function(info){
			return info.map( function(userData){
				return userData.data;
			})
		});
	}
};

module.exports = helpers;