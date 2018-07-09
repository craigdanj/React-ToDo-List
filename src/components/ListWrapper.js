import React, {Component} from 'react';
import ListHeader from './ListHeader';
import ToDoList from './ToDoList';
import axios from 'axios';
import {connect} from 'react-redux';


class ListWrapper extends Component {

	constructor(props) {
		super(props);
	}


	componentWillMount() {

		// var responseItems = [];

		// //fetch the current list of todos from the server
		// axios.get("https://jsonplaceholder.typicode.com/todos")
		// .then(response => {
		// 	// handle success
		// 	console.log(response.data);
		// 	responseItems = response.data.slice(0,3)
		// 	console.log(responseItems);

		// 	for (var i = responseItems.length - 1; i >= 0; i--) {
		// 		responseItems[i].checked = false;
		// 		responseItems[i].text = responseItems[i].title;
		// 	}

		// 	this.setItems(responseItems);
			
		// })
		// .catch(error => {
		// 	// handle error
		// 	console.log(error);
		// })

	}

	render() {

		console.log("Render of ListWrapper",this.props.items);

	    return (
			<div className="list-wrapper">
				<ListHeader addCallback={this.addItem}/>
				<ToDoList items={this.props.items}/>
			</div>
	    );
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.items
	}
}

export default connect(mapStateToProps)(ListWrapper);
