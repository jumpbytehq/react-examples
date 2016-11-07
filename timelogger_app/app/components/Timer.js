var React = require('react');

var StartStopFooter = ({onStart}) => {
	return (
		<div className='ui bottom attached blue basic button' onClick={onStart}>
			Start
        </div>
	);
};

var DeleteFooter = ({onDelete, onCancel}) => {
	return (
		<div className='ui two bottom attached buttons'>
			<button className='ui basic blue button' onClick={onDelete}>
				Delete
			</button>
			<button className='ui basic red button' onClick={onCancel}>
				Cancel
			</button>
		</div>
	);
};

var Timer = React.createClass({
	getInitialState: function(){
		return {
			showDelete: false
		};
	},

	handleEdit: function(e){
		e.preventDefault();
		this.props.onEditToggle();
	},

	toggleDelete: function(e){
		e.preventDefault();
		this.setState({
			showDelete: !this.state.showDelete
		})
	},

	handleStart: function(e){
		
	},

	confirmDelete: function(e){
		this.props.deleteTimer();
	},

	render: function(){		
		const elapsedString = this.props.elapsed + "";

		return (
			<div className='ui centered card'>
		        <div className='content'>
				  	<div className='header'> 
				  		{this.props.title}
		          	</div>
		          	<div className='meta'>
						{this.props.project} 
					</div>
		          	<div className='center aligned description'>
		            	<h2>{elapsedString}</h2> 
		            </div>
		          
		          	<div className='extra content'>
		            	<a href="#" onClick={this.handleEdit}>
		            		<span className='right floated edit icon'>
			              		<i className='edit icon'></i>
			            	</span>
		            	</a>

		            	<a href="#" onClick={this.toggleDelete}>
		            		<span className='right floated trash icon'>
		              			<i className='trash icon'></i>
		            		</span>
		            	</a>
		          	</div>
		        </div>

		        {!this.state.showDelete ? <StartStopFooter onStart={this.handleStart}/> : <DeleteFooter onDelete={this.confirmDelete} onCancel={this.toggleDelete} />}
		      </div>
		);
	}
});

module.exports = Timer;