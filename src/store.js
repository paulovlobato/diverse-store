import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ShopApp from './reducers/index'
const store = createStore(
    ShopApp, // Reducer
    compose( // Enhancers
        applyMiddleware(thunkMiddleware), // Thunk Middleware
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f // Enable devtools for debug
    ));
export default store;