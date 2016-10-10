// Reducer Function with default state value
// Reducer should be a Pure Function
var counter = function(state = 0, action){
	switch(action.type){
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default: 
			return state;
	}
};

// Create Store for Redux with Reducer function
const { createStore } = Redux;
const store = createStore(counter);

// React Component
var Counter = ({value, onIncrement, onDecrement}) => (	
	<div>
		<h1>Simple Counter with React + Redux</h1>
		<h1>
			{value}
		</h1>
		<button onClick={ onIncrement } style={{'fontSize': '20px'}}>+</button>
		<button onClick={ onDecrement } style={{'fontSize': '20px'}}>-</button>
	</div>
);

// Update UI with state value
const render = () => {
	ReactDOM.render(
		<Counter 
			value={ store.getState() } 
			onIncrement={ () => 
				store.dispatch({type: 'INCREMENT'})
			}
			onDecrement={ () =>
				store.dispatch({type: 'DECREMENT'})
			}
		/>,
		document.getElementById('content')
	);
};

// Listen to state changes
store.subscribe(render);
render();

// Update state on body click
document.onclick = function(){
	//store.dispatch({type: 'INCREMENT'});
}