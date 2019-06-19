import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
	todos: [
		{
			id: 1,
			todo: 'Eat more pizza',
			completed: false
		},
		{
			id: 2,
			todo: 'Walk the dog',
			completed: false
		}
	]
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			const newTodo = {
				id: state.todos[state.todos.length - 1].id + 1,
				todo: action.payload,
				completed: false
			};
			return {
				...state,
				todos: [...state.todos, newTodo]
			};
		case DELETE_TODO:
			/*

		1. Filter todo state

		2. Check if `todo.id !== payload`, if so return a new array without the todo that matches the payload value

		3. Set the new array to the todos state

		End Goal: Return an array with all of the ids that don't match the payload id
		*/
			return {
				...state,
				todos: state.todos.filter(
					todo => todo.id !== action.payload
				)
			};
		case TOGGLE_TODO:
			/*

			1. Map over the array
			2. Check if todo id is equal to the payload
			3. Flip the completed property on the todo object
			4. Return the new array and assign it to todos

			End Goal: Swap the completed property
			*/
			return {
				...state,
				todos: state.todos.map(todo => {
					if (action.payload === todo.id) {
						/*
							...todo

							is the same as

							id: 2,
							todo: 'Walk the dog',
							completed: false,
						*/
						return {
							...todo,
							completed: !todo.completed
						};
					}
					return todo;
				})
			};
		default:
			return state;
	}
};
