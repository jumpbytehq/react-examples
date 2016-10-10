
const ACTION_ADD_TODO = 'ADD_TODO';
const ACTION_REMOVE_TODO = 'REMOVE_TODO';
const ACTION_TOGGLE_TODO = 'TOGGLE_TODO';
const ACTION_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

const todo = (state, action) => {
	switch(action.type){
		case ACTION_ADD_TODO:
			return {
				id: action.id,
				text: action.text,
				completed: false
			};
		case ACTION_TOGGLE_TODO:
			if(state.id !== action.id){
				return state;
			}
			
			return {
				...state,
				completed: !state.completed
			};
		default:
			return state;
	}
};

const todos = (state = [], action) => {
	switch(action.type){
		case ACTION_ADD_TODO:
			return [
				...state,
				todo(undefined, action)
			];
		case ACTION_REMOVE_TODO:
			return [
				...state.slice(0, action.id),
				...state.slice(action.id+1, state.length)
			]
		case ACTION_TOGGLE_TODO:
			return state.map(t => 
				todo(t, action)
			);
		default:
			return state;
	}
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch(action.type){
		case ACTION_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
};

const { combineReducers } = Redux;
const todoApp = combineReducers({
	todos,
	visibilityFilter
});

const { createStore } = Redux;
const store = createStore( todoApp );

// View Code
const { Component } = React;

var nextTodoId = 0;

let FilterLink = ({
	filter, 
	children, 
	currentFilter,
	onFilterClick
}) => {
	if(filter === currentFilter){
		return <ReactBootstrap.Button active={true}>{children}</ReactBootstrap.Button>;
	}
	return <ReactBootstrap.Button href="#" onClick={ (e) => {
		e.preventDefault();
		store.dispatch({
			type: ACTION_VISIBILITY_FILTER,
			filter
		})
	}}> {children} </ReactBootstrap.Button>
};

let FilterLinks = ({visibilityFilter}) => {
	return <ReactBootstrap.ButtonGroup>
		<FilterLink filter='SHOW_ALL' currentFilter={visibilityFilter}>All</FilterLink>
		<FilterLink filter='SHOW_ACTIVE' currentFilter={visibilityFilter}>Active</FilterLink>
		<FilterLink filter='SHOW_COMPLETED' currentFilter={visibilityFilter}>Completed</FilterLink>						
	</ReactBootstrap.ButtonGroup>;
};

let getVisibleTodos = (todos, filter) => {
	switch(filter){
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed);
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed);
	}
}

let Todo = ({
	id,
	text,
	completed,
	visibilityFilter,
	toggleTodo,
	removeTodo
}) => {
	return <ReactBootstrap.ListGroupItem key={id}  >
		<span onClick={ () =>{
			toggleTodo( id )	
		}} style={{'textDecoration': completed ? 'line-through': 'none', color: completed ? 'blue': 'black'}}>{ text }</span> 

		<a href="#" className="pull-right" onClick={() => {removeTodo(id)} }><ReactBootstrap.Glyphicon glyph="remove" /></a>
	</ReactBootstrap.ListGroupItem>
};

var TodoList = ({todos, visibilityFilter, toggleTodo, removeTodo}) => {
	var todosEl = todos.map( (t,i) => {
		return <Todo key={i} {...t} visibilityFilter={visibilityFilter} toggleTodo={toggleTodo} removeTodo={removeTodo} />
	});

	return (<ReactBootstrap.ListGroup>{ todosEl }</ReactBootstrap.ListGroup>);
};

var AddTodo = ({onAddClick}) => {
	let input;
	let value;

	return (<ReactBootstrap.Form inline><ReactBootstrap.FormGroup>
		<input ref={ node => {
			input = node;
		}} type="text" placeholder="Enter todo..." className="form-control"/>

		<ReactBootstrap.Button  onClick={ () => {
			onAddClick(input.value);
			input.value = '';
		}}>Add Todo</ReactBootstrap.Button>
	</ReactBootstrap.FormGroup></ReactBootstrap.Form>);	
}

let TodoApp = ({todos, visibilityFilter}) => {
	let addTodo = function(text){
		if(!text || text.trim() === '') return;

		store.dispatch({
			type: ACTION_ADD_TODO,
			id: nextTodoId++,
			text: text
		})
	}

	let toggleTodo = function(id){
		store.dispatch({
			type: ACTION_TOGGLE_TODO,
			id: id
		})
	}

	let removeTodo = function(id){
		store.dispatch({
			type: ACTION_REMOVE_TODO,
			id: id
		})
	}

	let filteredTodos = getVisibleTodos( todos, visibilityFilter );			
	return (			
		<div>	
			<AddTodo onAddClick={ addTodo } />
			<hr/>
			<TodoList todos={ filteredTodos } visibilityFilter={visibilityFilter} removeTodo={ removeTodo} toggleTodo={ toggleTodo}/>
			<FilterLinks visibilityFilter={visibilityFilter} />
		</div>
	);	
}

const render = () => {	
	// var todoComponents = [];
	// for(let i=0;i<100;i++){
	// 	todoComponents.push(<TodoApp key={i} {...store.getState()}/>);
	// }

	ReactDOM.render(
		<ReactBootstrap.Panel>
			{/*<TodoApp {...store.getState()} /> */}
			<TodoApp {...store.getState()} />
		</ReactBootstrap.Panel>
	, document.getElementById('content'));
};
store.subscribe(render);
render();

//store.dispatch({type: ACTION_ADD_TODO, id: nextTodoId++, text: 'Text'});

// Testing Todo functions here

// const addTodo = (id, text) => {
// 	return {
// 		type: ACTION_ADD_TODO,
// 		id: id,
// 		text: text		
// 	}
// };

// const testTodos = () => {
// 	const stateBefore = [];
// 	const action1 = addTodo(0, 'Learn Redux');
// 	const action2 = addTodo(1, 'Another todo');

// 	const stateAfter = [
// 		{
// 			id: 0,
// 			text: 'Learn Redux',
// 			completed: false
// 		},
// 		{
// 			id: 1,
// 			text: 'Another todo',
// 			completed: false
// 		}
// 	];
	
// 	var state1 = todos({}, action1);
// 	console.log('1st State', state1);

// 	var state2 = todos(state1, action2);
// 	console.log('2nd State', state2);

// 	expect(store.getState()).toEqual(stateAfter);

// 	console.log('Final state', store.getState() );
// }
// testTodos();
// console.log('All tests passed');
