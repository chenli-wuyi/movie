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
	page: 1,
	title: '卖座电影',
	isshow: false,
	list_lunbo: [],
	list_now: [],
	list_future: [],
	now_play: [],
	come_play: [],
	get_detail: null,
	list_cinemas: [],
	yanchu_list: [],
	list_cinemas_name: [{
		name: '福田区',
		arr: []
	}, {
		name: '龙岗区',
		arr: []
	}, {
		name: '宝安区',
		arr: []
	}, {
		name: '坪山新区',
		arr: []
	}, {
		name: '南山区',
		arr: []
	}, {
		name: '光明新区',
		arr: []
	}, {
		name: '龙华新区',
		arr: []
	}, {
		name: '罗湖区',
		arr: []
	}, {
		name: '盐田区',
		arr: []
	}, ],
	xingqi: ['日', '一', '二', '三', '四', '五', '六'],
	aside_list: [{
		name: '首页',
		path: '/',
		title: '卖座电影',
	}, {
		name: '影片',
		path: '/film-playing',
		title: '卖座电影',
	}, {
		name: '影院',
		path: '/cinema',
		title: '全部影院',
	}, {
		name: '商城',
		path: '/shopping',
		title: '卖座商城',
	}, {
		name: '演出',
		path: '/yanchu',
		title: '卖座.HOPPA演出',
	}, {
		name: '我的',
		path: '/login',
		title: '我的',
	}, {
		name: '卖座卡',
		path: '/maizuoka',
		title: '查询/绑定/激活卖座卡',
	}],

}
var store = createStore(reducer, state, applyMiddleware(thunk, logger));

export default store;