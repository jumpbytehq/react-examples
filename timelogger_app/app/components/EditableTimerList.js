var React = require('react');
var EditableTimer = require('./EditableTimer');

var EditableTimerList = React.createClass({	
	render: function(){
		return (
			<div>
				{
					this.props.timers.map( (t) => {
						return <EditableTimer timer={t} key={t.id} editFormOpen={false} deleteTimer={this.props.deleteTimer}/>
					})
				}
			</div>
		);
	}
});

module.exports = EditableTimerList;