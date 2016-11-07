var React = require('react');

var TimerForm = React.createClass({

	handleUpdate: function(e){
		e.preventDefault();
		//console.log('update timer values', this.titleInput.value, this.projectInput.value);
		const title = this.titleInput.value;
		const project = this.projectInput.value;

		this.props.updateTimer(title, project);
	},

	render: function(){
		const submitText = this.props.title ? 'Update' : 'Create';

		return (
			<div className='ui centered card'>
		        <div className='content'>
		          	<div className='ui form'>
			            <div className='field'>
			              <label>Title</label>
						  <input type='text' defaultValue={this.props.title} ref={e => this.titleInput = e}/> 
						</div>

		            	<div className='field'>
		              		<label>Project</label>
					  		<input type='text' defaultValue={this.props.project} ref={e => this.projectInput = e}/> 
					  	</div>
						
						<div className='ui two bottom attached buttons'>
							<button className='ui basic blue button' onClick={this.handleUpdate}>
								{submitText}
							</button>
							<button className='ui basic red button' onClick={this.props.onEditToggle}>
								Cancel
							</button>
						</div>
			        </div>
			    </div>
			</div>
		);
	}
});

module.exports = TimerForm;