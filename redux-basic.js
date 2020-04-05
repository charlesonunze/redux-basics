const createStore = require('redux').createStore;

// Initial State
const initialState = { counter: 0 };

// Reducer
const rootReducer = (state = initialState, action) => {
	if (action.type === 'INCREMENT_COUNTER') {
		return {
			...state,
			counter: state.counter + 1,
		};
	}

	if (action.type === 'ADD_TO_COUNTER') {
		return {
			...state,
			counter: state.counter + action.value,
		};
	}

	return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
	console.log('[Subscription]', store.getState());
});

// Action
store.dispatch({ type: 'INCREMENT_COUNTER' });
console.log(store.getState());

store.dispatch({ type: 'ADD_TO_COUNTER', value: 5 });
console.log(store.getState());
