import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ToDoItem extends Component {

	constructor(props) {
		super(props);

		this.state = {
			modal: false
		}

		this.toggleModal = this.toggleModal.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}

	toggleModal() {
		this.setState({
			modal: !this.state.modal
		});
	}

	removeItem() {
		this.props.removeItem(this.props.index);
		this.toggleModal()
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

				<Button onClick={this.toggleModal} color="danger">x</Button>

				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					
					<ModalHeader toggle={this.toggleModal}>
						Are you sure you want to delete this item?
					</ModalHeader>
					
					<ModalBody>
						If you confirm, this action cannot be undone.
					</ModalBody>
					
					<ModalFooter>
						<Button color="danger" onClick={this.removeItem}>Remove</Button> {' '}
						<Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
					</ModalFooter>
				</Modal>
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