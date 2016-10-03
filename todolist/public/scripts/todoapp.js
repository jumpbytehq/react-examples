var todos = [];

var TodoApp = React.createClass({
	getInitialState: function(){
		return {todos: todos};
	},

	addTodo: function(todo){
		todos.push({id: todos.length + 1, text: todo, completed: false});
		this.setState({todos: todos});
	},

	statusChanged: function(id, status){
		todos[ id - 1 ].completed = status;
		todos[id - 1].text = todos[id - 1].text;
		this.setState({todos: todos});
	},

	render: function(){		
		var listEl = <h4>No ToDos Found.</h4>;
		if(todos.length > 0){
			listEl = <TodoList items={this.state.todos} statusChanged={this.statusChanged}/>
		}
		return (
			<div className="todoApp">
				<h1>ToDo App in React</h1>
				{listEl}
				<TodoForm addTodo={this.addTodo}></TodoForm>
				<p>
					<small><strong>Note: The App is not connected with any backend server and all the data is in-memory representation only.</strong></small>
				</p>
			</div>
		);
	}
});

var TodoList = React.createClass({
	statusChanged: function(id, status){
		this.props.statusChanged(id, status);
	},

	render: function(){
		var completed = 0;
		var entries = this.props.items.map(function(todo){
			if(todo.completed) completed++;
			return <TodoItem item={todo} key={todo.id} statusChanged={this.statusChanged}/>
		}.bind(this));

		return (
			<div>				
				<table>
					<thead>
						<tr>
							<th>Completed?</th>
							<th>Text</th>
						</tr>
					</thead>					
					<tbody>
						{entries}
					</tbody>
				</table>
				<hr/>
				<h4>				
					{completed} Completed
				</h4>
			</div>
		);
	}
});

// This is replaced with pure stateless component below
// var TodoItem = React.createClass({	
// 	statusChanged: function(e){		
// 		this.props.statusChanged( this.props.item.id, e.target.checked );
// 	},
// 	render: function(){
//		
// 	}
// });

var TodoItem = (props) => {
	var statusChanged = function(e){		
		props.statusChanged( props.item.id, e.target.checked );
	};

	const {completed, text} = props;
	return (
		<tr>
			<td><input type="checkbox" defaultChecked={completed} onChange={statusChanged}/></td>
			<td className={completed?'completed':''}>{text}</td>
		</tr>
	)
}

var TodoForm = React.createClass({
	getInitialState: function(){
		return {text: ''};
	},

	addTodo: function(e){
		e.preventDefault();
		console.log('todo item', this.refs.todoTextInput.value);
		this.props.addTodo( this.refs.todoTextInput.value );

		this.refs.todoTextInput.value = '';
		this.refs.todoTextInput.focus();
	},

	render: function(){
		return (
			<form onSubmit={this.addTodo}>
				<h4>Add New Todo</h4>
				<input type="text" placeholder="Enter todo..." ref="todoTextInput"/>
				<input type="submit" value="Add ToDo" />
			</form>
		);
	}
});

ReactDOM.render(
	<TodoApp todos={todos} />,
	document.getElementById('content')
);