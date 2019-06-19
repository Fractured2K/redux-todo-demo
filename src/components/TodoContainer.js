import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoContainer = () => {
	return (
		<div>
			<TodoList />
			<TodoForm />
		</div>
	);
};

export default TodoContainer;
