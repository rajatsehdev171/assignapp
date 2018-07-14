//this is our store createStore will create our store 
//applyMiddleware will apply any middleware like thunk
//compose will get our app use redux dev tools in chrome

import{createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware =[thunk];
const initialState ={};

const store =createStore(rootReducer,initialState,compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;