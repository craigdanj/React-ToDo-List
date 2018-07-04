import React, {Component} from 'react';
import ListHeader from './ListHeader';
import ToDoList from './ToDoList';

class ListWrapper extends Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [
					{
						text: "one",
						checked: false
					},{
						text: "two",
						checked: true
					},{
						text: "three",
						checked: false
					}
				]
		}

		this.removeItem = this.removeItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.checkItem = this.checkItem.bind(this);
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
	    return (
			<div className="list-wrapper">
				<ListHeader addCallback={this.addItem}/>
				<ToDoList items={this.state.items} removeItemCallback={this.removeItem} checkItemCallback={this.checkItem}/>
			</div>
	    );
	}
}

export default ListWrapper;