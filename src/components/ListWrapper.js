import React, {Component} from 'react';
import ListHeader from './ListHeader';
import ToDoList from './ToDoList';
import axios from 'axios';
import {connect} from 'react-redux';


class ListWrapper extends Component {

	constructor(props) {
		super(props);

		// this.state = {
		// 	items: []
		// }

		this.removeItem = this.removeItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.checkItem = this.checkItem.bind(this);

		console.log(this)
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

	setItems(items) {
		// this.setState({
		// 	items: items
		// })
	}

	addItem(text) {

		this.setState( prevState => ({
			items: [...prevState.items, {
				text: text,
				checked: false
			}]
		}))

	}

	removeItem(index) {
		this.setState( prevState => ({
			items: prevState.items.filter((val, i) => i !== index)
		}))
	}

	checkItem(index) {
		this.setState( prevState => {
			const newItems = [...prevState.items];
			newItems[index].checked = newItems[index].checked? false: true;
			return {items: newItems}
		})
	}

	render() {

		console.log("Render of ListWrapper",this.props.items);

	    return (
			<div className="list-wrapper">
				<ListHeader addCallback={this.addItem}/>
				<ToDoList items={this.props.items} removeItemCallback={this.removeItem} checkItemCallback={this.checkItem}/>
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
