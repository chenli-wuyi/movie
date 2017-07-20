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
//引入路由
import {
	HashRouter as Router,
	Route

} from 'react-router-dom';
//因入nav
import Nav from './components/nav.js';
//引入aside
import Aside from './components/aside.js';
//引入section
import Section from './components/section.js';
//引入Film
import NowPlay from './components/nowplay.js';
import ComePlay from './components/comeplay.js';
//因入影院
import Cinema from './components/cinema.js';
// 引入详情页
import Detail from './components/detail.js';
import Aaa from './components/aaa.js';
//引入top返回顶部
import Top from './components/top.js';
// UI组件
class Apps extends Component {
	render() {
		return (
			<Router>
				<div id="app">
					<Nav />
					{
						this.props.isshow ? <Aside  /> : ''
					}
					{/*<Section />*/}
					 <Route exact  path="/" component={Section} />
					 <Route  path="/film-playing" component={NowPlay} />
					 <Route  path="/come-playing" component={ComePlay} />
					  <Route  path="/detail/:id" component={Detail} />
					  <Route  path="/cinema/" component={Cinema} />
					  <Route  path="/aaa/" component={Aaa} />
					<Top />
					{/*
				{this.props.biaoti}
					<button onClick={this.props.change}>{this.props.btnname}</button>
					*/}

				</div>
			</Router>
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