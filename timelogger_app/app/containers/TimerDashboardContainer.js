var React = require('react');
var EditableTimerListContainer= require('./EditableTimerListContainer');
var ToggleableTimerForm = require('./ToggleableTimerForm');

var data = require('../utils/data');

var TimerDashboardContainer = React.createClass({
	getInitialState: function(){
		return {
			timers: [...data.timers],
			isOpen: false
		}
	},

	handleNewTimer: function(title, project){
		const newTimer = {id: this.state.timers.length+1, title, project, elapsed: 0};

		this.setState({
			timers: [...this.state.timers, newTimer]
		});
	},

	onDelete: function(id){
		this.setState({
			timers: this.state.timers.filter(t => {
				return t.id == id ? false : true;
			})
		})
	},

	render: function(){
		return (
			<div className='ui three '>
				<div className='column '>
					<EditableTimerListContainer timers={this.state.timers} onDelete={this.onDelete}/>
					<ToggleableTimerForm newTimer={this.handleNewTimer} isOpen={this.state.isOpen}/>
				</div>
			</div>
		);
	}
});

module.exports = TimerDashboardContainer;