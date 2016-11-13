var utils = {
	millisecondsToTime: function(milli){
	      var seconds = Math.floor((milli / 1000) % 60);
	      var minutes = Math.floor((milli / (60 * 1000)) % 60);
	      var hours = Math.floor((milli / (60 * 60 * 1000)) % 60);
	      return `${hours}:${minutes}:${seconds}`;
	}
}

module.exports = utils;