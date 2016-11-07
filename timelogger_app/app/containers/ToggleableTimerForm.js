var React = require('react');
var TimerForm = require('../components/TimerForm');

var ToggleableTimerForm = React.createClass({
	render: function(){
		if (this.props.isOpen) { 
			return (
	        	<TimerForm />
	      	);
		} else { 
			return (
		        <div className='ui basic content center aligned segment'>
		          <button className='ui basic button icon'>
		            <i className='plus icon'></i>
		          </button>
				</div> 
			);
		}
	}
});

module.exports = ToggleableTimerForm;