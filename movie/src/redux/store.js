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
	isshow: false,
	list_lunbo: [],
	list_now: [],
	list_future: [],
	now_play: [],
	come_play: [],
	get_detail: null,
	xingqi: ['日', '一', '二', '三', '四', '五', '六'],
	aside_list: [{
		name: '首页',
		path: '/',
	}, {
		name: '影片',
		path: '/film-playing'
	}, {
		name: '影院',
		path: '/cinema'
	}, {
		name: '商城',
		path: '/shopping'
	}, {
		name: '演出',
		path: '/yanchu'
	}, {
		name: '我的',
		path: '/wode'
	}, {
		name: '卖座卡',
		path: '/maizuoka'
	}],

}
var store = createStore(reducer, state, applyMiddleware(thunk, logger));

export default store;