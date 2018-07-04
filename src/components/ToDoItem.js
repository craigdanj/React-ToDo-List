import React, {Component} from 'react';

class ToDoItem extends Component {

	constructor(props) {
		super(props);

		this.removeItem = this.removeItem.bind(this);
		this.checkItem = this.checkItem.bind(this);
	}

	removeItem() {
		this.props.removeItem(this.props.index)
	}

	checkItem() {
		this.props.checkItem(this.props.index)
	}

	render() {
	    return (
			<li>
				<input type="checkbox" checked={this.props.checked} onChange={this.checkItem.bind(this)}/>
				
				&nbsp;
				

				{this.props.checked?
					<span className="checked">{this.props.text}</span>	
					:
					<span>{this.props.text}</span>	

				}
								
				&nbsp;
				
				<button onClick={this.removeItem}>x</button>
			</li>
	    );
	}
}

export default ToDoItem;