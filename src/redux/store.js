import {createStore} from 'redux';
import buttonReducer from './ButtonReducer';
// import {composeWithDevTools} from 'redux-devtools-extension'
import {composeWithDevTools} from 'redux-devtools-extension';
import rootreducer from './rootreducer';

const store =createStore(rootreducer,composeWithDevTools());

export default store;




