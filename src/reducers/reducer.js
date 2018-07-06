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
	switch(action.type) {
		case "ADD_TODO": 
			console.log(action);
			const newState = {...state};
			newState.items.push({text: action.payload.text, checked: false});
			console.log(newState);

			return newState;

		default: return state

	}
};

export default reducer;