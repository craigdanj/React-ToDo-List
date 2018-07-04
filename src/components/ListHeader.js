import React, {Component} from 'react';

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
		this.props.addCallback(this.state.text)
		this.setState({
			text: ""
		})
	}

    render() {
	    return (
			<div>
				<input type="text" value={this.state.text} onChange={this.updateText}/>
				<button onClick={this.addItem}>Add</button>
			</div>
	    );
    }
}

export default ListHeader;