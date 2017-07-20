import React, {
	Component
} from 'react';
//引入nav.css
import '../css/nav.css';
import '../css/iconfont/iconfont.css';
// connect 方法
import {
	connect
} from 'react-redux';
//引入store
import store from '../redux/store.js';
class Navs extends Component {
	render() {
		return (
			<nav>
				<h1 onClick={this.props.change}>
					<a href="javascript:;">
						 <div className="icon">
						 	<i className="iconfont ">&#xe66c;</i>
						 </div>
						<div className="movename">{this.props.title[0]}</div>
					</a>
				</h1>
				<div className="nav_right">
					<a className="city" href="javascript:;">
						<span>深圳</span>
						<i className="iconfont ">&#xe74a;</i>
					</a>
					<a className="user" href="javascript:;">
						<i className="iconfont ">&#xe66e;</i>
					</a>
				</div>
			</nav>
		)
	}
}

// 基于UI组件创建出 容器组件
var Nav = connect(
	// 指定两个参数
	// 1. ui组件需要的数据
	// 2. ui组件上的方法操作

	function(state, ownProps) {
		return {
			title: state.title
		}
	},

	{
		change: function() {
			// 只需要return 一个 action
			return {
				type: 'IS_SHOW',
				isshow: store.getState().isshow
			}
		}
	}


)(Navs);


export default Nav;