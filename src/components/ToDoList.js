import React from 'react';
import ToDoItem from './ToDoItem';
import {Alert} from 'reactstrap'

function ToDoList(props) {

	function checkItemCallback(index) {
		props.checkItemCallback(index);
	}

	const items = props.items.map((item,index) => 
			<ToDoItem text={item.text} key={index} index={index} checked={item.checked}/>
		);

    return (
    	<div>
	    	{props.items.length>0 ? (

				<ul className="todo-list">
					{items}
				</ul>

	    	) : (
				<Alert color="light">
					You currently have no items in your list.
				</Alert>
	    	)}
    	</div>

    )
}



export default ToDoList;