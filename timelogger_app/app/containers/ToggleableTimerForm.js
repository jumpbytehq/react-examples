var React = require('react');
var TimerForm = require('../components/TimerForm');

var ToggleableTimerForm = React.createClass({
	getInitialState: function(){
		return {
			isOpen: this.props.isOpen
		}
	},

	handleAdd: function(){
		this.setState({
			isOpen: true
		})
	},

	onEditToggle: function(){
		this.setState({
			isOpen: !this.state.isOpen
		})
	},

	addNewTimer: function(title, project){
		this.setState({
			isOpen: false
		});

		this.props.newTimer(title, project);
	},

	render: function(){
		if (this.state.isOpen) { 
			return (
	        	<TimerForm onEditToggle={this.onEditToggle} updateTimer={this.addNewTimer}/>
	      	);
		} else { 
			return (
		        <div className='ui basic content center aligned segment'>
		          <button className='ui basic button icon' onClick={this.handleAdd}>
		            <i className='plus icon'></i>
		          </button>
				</div> 
			);
		}
	}
});

module.exports = ToggleableTimerForm;