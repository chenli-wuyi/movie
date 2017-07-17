import {
	createStore,
	applyMiddleware
} from 'redux';

import reducer from './reducer.js';
import {
	createLogger
} from 'redux-logger';
import thunk from 'redux-thunk';
var logger = new createLogger();
//定义一些初始状态
var state = {
	title: '卖座电影',
	isshow: false

}
var store = createStore(reducer, state, applyMiddleware(thunk, logger));

export default store;