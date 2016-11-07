var React = require('react');
var EditableTimerList = require('../components/EditableTimerList');

var data = require('../utils/data');

var EditableTimerListContainer = React.createClass({
	getInitialState: function(){
		return {
			timers: data.timers
		}
	},

	render: function(){
		return (
			<EditableTimerList timers={this.state.timers}/>
		);
	}
});

module.exports = EditableTimerListContainer;