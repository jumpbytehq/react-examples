var React = require('react');
var EditableTimerListContainer= require('./EditableTimerListContainer');
var ToggleableTimerForm = require('./ToggleableTimerForm');

var TimerDashboardContainer = React.createClass({
	render: function(){
		return (
			<div className='ui three '>
				<div className='column '>
					<EditableTimerListContainer />
					<ToggleableTimerForm />
				</div>
			</div>
		);
	}
});

module.exports = TimerDashboardContainer;