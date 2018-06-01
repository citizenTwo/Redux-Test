import {createStore, applyMiddleware} from 'redux';
import { composeWithdevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleWare = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleWare)
);

export default store;