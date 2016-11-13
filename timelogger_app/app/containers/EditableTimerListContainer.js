var React = require('react');
var EditableTimerList = require('../components/EditableTimerList');

var EditableTimerListContainer = ({timers, onDelete}) => {
	return (
		<EditableTimerList timers={timers} deleteTimer={onDelete}/>
	);
}

module.exports = EditableTimerListContainer;