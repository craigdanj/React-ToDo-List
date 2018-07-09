import React, {Component} from 'react';
import {connect} from 'react-redux';

class ToDoItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
	    return (
			<li>
				<input type="checkbox" checked={this.props.checked} onChange={() => this.props.checkItem(this.props.index)}/>

				&nbsp;

				{this.props.checked?
					<span className="checked">{this.props.text}</span>	
					:
					<span>{this.props.text}</span>
				}
								
				&nbsp;
				
				<button onClick={() => this.props.removeItem(this.props.index)}>x</button>
			</li>
	    );
	}
}

const mapDispatchToProps = dispatch => {
	return {
		removeItem: value => dispatch({type: "REMOVE_TODO", payload: {index: value}}),
		checkItem: value => dispatch({type: "TOGGLE_TODO", payload: {index: value}})
	}
}

export default connect(null, mapDispatchToProps)(ToDoItem);