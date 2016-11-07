var React = require('react');
var TimerForm = require('./TimerForm');
var Timer = require('./Timer');

var EditableTimer = React.createClass({
	getInitialState: function(){
		return {
			timer: this.props.timer,
			editFormOpen: this.props.editFormOpen || false,
			deleteFormOpen: this.props.deleteFormOpen || false
		}
	},

	onEditToggle: function(){
		this.setState({
			editFormOpen: !this.state.editFormOpen
		})
	},

	onDeleteToggle: function(){
		this.setState({
			deleteFormOpen: !this.state.deleteFormOpen
		})
	},

	handleTimerUpdate: function(title, project){
		this.setState({
			timer: Object.assign({}, this.state.timer, {title, project}),
			editFormOpen: false
		});
	},

	render: function(){
		var { timer, editFormOpen } = this.state;

		if (editFormOpen) { 
			return (
				<TimerForm title={timer.title} project={timer.project} onEditToggle={this.onEditToggle} updateTimer={this.handleTimerUpdate}/>
			);
		} else {
			return ( 
				<Timer id={timer.id} title={timer.title} project={timer.project} elapsed={timer.elapsed} runningSince={timer.runningSince} onEditToggle={this.onEditToggle} deleteTimer={this.props.deleteTimer}/>
			); 
		}
	}
});

module.exports = EditableTimer;