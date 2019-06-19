import React from 'react';
import { connect } from 'react-redux';

// Action creators
import { deleteTodo, toggleTodo } from '../actions';

const Todo = props => {
	return (
		<div style={{ display: 'flex' }}>
			<p
				onClick={() => props.toggleTodo(props.id)}
				/* props.completed && 'completed' || '' */
				className={props.completed ? 'completed' : ''}
			>
				{props.todo}
			</p>
			<button
				style={{ margin: '10px' }}
				onClick={() => props.deleteTodo(props.id)}
			>
				X
			</button>
		</div>
	);
};

export default connect(
	null,
	{ deleteTodo, toggleTodo }
)(Todo);

// Connect takes two arugments
// 1: mapStateToProps || null
// 2: action creator || {}
