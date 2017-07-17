import React, {
	Component
} from 'react';
//因入reset.css
import './css/reset.css';
// ui组件一定要关联一个 容器组件
// connect 方法
import {
	connect
} from 'react-redux';
//因入nav
import Nav from './components/nav.js';
//引入aside
import Aside from './components/aside.js';
//引入section
import Section from './components/section.js';
//引入top
import Top from './components/top.js';
// UI组件
class Apps extends Component {
	render() {
		return (
			<div id="app">
				<Nav />
				{
					this.props.isshow ? <Aside  /> : ''
				}
				<Section />
				<Top />
				{/*
			{this.props.biaoti}
				<button onClick={this.props.change}>{this.props.btnname}</button>
				*/}

			</div>
		);
	}
}

// 基于UI组件创建出 容器组件
var App = connect(
	// 指定两个参数
	// 1. ui组件需要的数据
	// 2. ui组件上的方法操作

	function(state, ownProps) {
		return {
			isshow: state.isshow
		}
	},

	{
		change: function() {
			// 只需要return 一个 action
			return {
				type: 'CHANGE_TITLE',
				title: '详情页'
			}
		}
	}


)(Apps);


// 暴露容器组件
export default App;