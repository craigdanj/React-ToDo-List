import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Input } from 'reactstrap';

class ListHeader extends Component {

	constructor(props) {
		super(props);

		this.state = {
			text: ""
		}

		this.updateText = this.updateText.bind(this);
		this.addItem = this.addItem.bind(this);
		//Alternattively you can use arrow functions

	}

	updateText(event) {
		this.setState({
			text: event.target.value
		})
	}

	addItem() {
		this.props.addItem(this.state.text)
		this.setState({
			text: ""
		})
	}

    render() {
	    return (
			<div className="row">
				<div className="col">
					<Input type="text" value={this.state.text} onChange={this.updateText}/>
				</div>
				<div className="col">
					<Button onClick={() => this.addItem()} color="success">Add</Button>
				</div>
			</div>
	    );
    }
}


const mapDispatchToProps = dispatch => {
	return {
		addItem: text => dispatch({type: "ADD_TODO", payload: { text: text}})
	}
}

export default connect(null, mapDispatchToProps)(ListHeader);