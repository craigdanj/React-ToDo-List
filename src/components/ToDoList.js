import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList(props) {

	function checkItemCallback(index) {
		props.checkItemCallback(index);
	}

	const items = props.items.map((item,index) => 
			<ToDoItem text={item.text} key={index} index={index} checkItem={checkItemCallback} checked={item.checked}/>
		);

    return (
    	<div>
	    	{props.items.length>0 ? (

				<ul className="todo-list">
					{items}
				</ul>
	    
	    	) : (
	    		<p>You currently have no items in your list.</p>
	    	)}
    	</div>

    )
}



export default ToDoList;