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
			var newState = {...state};
			newState.items = [...newState.items, {text: action.payload.text, checked: false}];

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