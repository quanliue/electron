// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import middlewares from './middlewares';

export default function configureStore() {
    const store = createStore(
        reducers, 
        {} , 
        applyMiddleware(...middlewares)
    );

    return store;
}