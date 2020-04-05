const createStore = require('redux').createStore;

// Initial State
const initialState = { counter: 0 };

// Reducer
const rootReducer = (state = initialState, action) => {
	return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());
console.log(store);

// Action

// Subscription
