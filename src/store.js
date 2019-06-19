import { createStore } from 'redux';
import { rootReducer } from './reducers';

const store = createStore(rootReducer);

export default store;

// const configureStore = () => {
// 	return createStore(rootReducer);
// };

// export default configureStore;
