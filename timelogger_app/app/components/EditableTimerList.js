var React = require('react');
var EditableTimer = require('./EditableTimer');

var EditableTimerList = React.createClass({
	getInitialState: function(){
		return {
			timers: this.props.timers
		}
	},

	render: function(){
		return (
			<div>
				{
					this.state.timers.map( (t) => {
						return <EditableTimer timer={t} key={t.id} editFormOpen={false} deleteTimer={() => {
							this.setState({
								timers: this.state.timers.filter(t1 => {
									if(t1.id == t.id) return false;
									return true;
								})
							})
						}}/>
					})
				}
			</div>
		);
	}
});

module.exports = EditableTimerList;