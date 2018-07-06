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
}

const reducer = (state = initialState, action) => {
	return state;
};

export default reducer;