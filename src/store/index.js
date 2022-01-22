import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers';

const configureStore = (initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

export default configureStore;