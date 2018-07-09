import React, {Component} from 'react';
import ListHeader from './ListHeader';
import ToDoList from './ToDoList';
import axios from 'axios';
import {connect} from 'react-redux';


class ListWrapper extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getTodos();
	}

	render() {

	    return (
			<div className="list-wrapper">
				<ListHeader addCallback={this.addItem}/>
				<ToDoList items={this.props.items}/>
			</div>
	    );
	}
}

const getTodoActionCreator = () => {
	
	//fetch the current list of todos from the server
	return function(dispatch) {
		axios.get("https://jsonplaceholder.typicode.com/todos")
		.then(response => {
			// handle success
			console.log(response.data);
			var responseItems = response.data.slice(0,3)
			console.log(responseItems);

			

			for (var i = responseItems.length - 1; i >= 0; i--) {
				responseItems[i].checked = false;
				responseItems[i].text = responseItems[i].title;
			}

			dispatch({type: "INITIAL_TODO_LIST", payload: {
				items: responseItems
			}});

		})
		.catch(error => {
			// handle error
			console.log(error);
		})
	}

	return {type: "INITIAL_TODO_LIST", payload: {}}
}

const mapStateToProps = (state) => {
	return {
		items: state.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getTodos: () => dispatch(getTodoActionCreator())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListWrapper);
