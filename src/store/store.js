import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { loginReducer } from '../reducers/LoginReducer'
import { paymentReducer } from '../reducers/paymentReducer';

const reducers = combineReducers({
    login: loginReducer,
    payment: paymentReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)