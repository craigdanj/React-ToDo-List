//Initial state
const initialState = {
	items: [
		{
			text: "todo1",
			checked: false
		},{
			text: "todo2",
			checked: false
		},{
			text: "todo3",
			checked: false
		},{
			text: "todo4",
			checked: false
		},{
			text: "todo5",
			checked: false
		}
	]
};


const reducer = (state = initialState, action) => {

	console.log("Old State: ",state);

	switch(action.type) {

		case "ADD_TODO": 
			console.log(action);
			var newState = {...state};
			newState.items = [...newState.items, {text: action.payload.text, checked: false}];
			console.log(newState);

			return newState;

		case "REMOVE_TODO":

			console.log(action.payload.index);

			var newState = {...state};
			// var newState = Object.assign({}, state);
			// newState.items.splice(action.payload.index, 1);
			newState.items = [
				...state.items.slice(0, action.payload.index),
				...state.items.slice(action.payload.index+1)
			]

			console.log(newState);

			return newState;

		default: return state
	}
};

export default reducer;