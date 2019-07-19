import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

//import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from './middleware/promise_middleware';

//import {reducer as weatherReducer} from './weather_redux/weather/';
import {reducer as todosReducer} from './todo_animated/todos/';
import {reducer as filterReducer} from './todo_animated/filter/';

import Perf from 'react-addons-perf';
const win = window;
win.Perf = Perf;

const reducer = combineReducers({
   // weather: weatherReducer,
    todos:todosReducer,
    filter:filterReducer
})

const middlewares = [promiseMiddleware];
if(process.env.NODE_ENV !== 'production'){
    middlewares.push(require('redux-immutable-state-invariant')());
}
const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() :(f)=>f,
);

export default createStore(reducer, {}, storeEnhancers);