//Initial state
const initialState = {
	items: [
	]
};


const reducer = (state = initialState, action) => {

	console.log("Old State: ",state);
	console.log("Action: ",action);

	switch(action.type) {
		case "INITIAL_TODO_LIST" :
			var newState = {...state, items:action.payload.items};

			return newState;
		case "ADD_TODO":
			var newState = {...state};
			newState.items = [...newState.items, {text: action.payload.text, checked: false}];

			return newState;

		case "TOGGLE_TODO":

			var newState = {...state};
			
			newState.items = [
				...state.items.slice(0, action.payload.index),
				...state.items.slice(action.payload.index, action.payload.index+1),
				...state.items.slice(action.payload.index+1)
			]

			newState.items[action.payload.index].checked = !newState.items[action.payload.index].checked;

			console.log(newState);
			return newState;

		case "REMOVE_TODO":

			var newState = {...state};
			newState.items = [
				...state.items.slice(0, action.payload.index),
				...state.items.slice(action.payload.index+1)
			]

			return newState;

		default: return state
	}
};

export default reducer;