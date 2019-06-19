import React, { Component } from 'react';
import { connect } from 'react-redux';

// Action creators
import { addTodo } from '../actions';

class TodoForm extends Component {
	state = {
		newTodo: ''
	};

	handleChanges = e => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});
	};

	onSubmit = e => {
		e.preventDefault();

		this.props.addTodo(this.state.newTodo);

		this.setState({
			newTodo: ''
		});
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input
					name="newTodo"
					value={this.state.newTodo}
					onChange={this.handleChanges}
				/>
				<button>Add todo</button>
			</form>
		);
	}
}

export default connect(
	null,
	{ addTodo }
)(TodoForm);
