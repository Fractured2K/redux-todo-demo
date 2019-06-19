import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = props => {
	return (
		<div>
			{props.todos.map(todo => (
				<Todo key={todo.id} {...todo} />
			))}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

export default connect(
	mapStateToProps,
	{
		/* action creators that you want mapped to props go here*/
	}
)(TodoList);
