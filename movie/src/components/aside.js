import React, {
	Component
} from 'react';
//引入css
import '../css/aside.css';
import '../css/iconfont/iconfont.css';
// connect 方法
import {
	connect
} from 'react-redux';

class Aside extends Component {
	render() {
		return (
			<aside>
				<div className="aside_content">
					<nav>
						<ul>
							<li>
								<a href="javascript:;">
									<span>首页</span>
									<i className="iconfont ">&#xe678;</i>
								</a>
								</li>
							<li>
								<a href="javascript:;">
									<span>影片</span>
									<i className="iconfont ">&#xe678;</i>
								</a></li>
							<li>
								<a href="javascript:;">
									<span>影院</span>
									<i className="iconfont ">&#xe678;</i>
								</a></li>
							<li>
								<a href="javascript:;">
									<span>商城</span>
									<i className="iconfont ">&#xe678;</i>
								</a></li>
							<li>
								<a href="javascript:;">
									<span>演出</span>
									<i className="iconfont ">&#xe678;</i>
								</a></li>
							<li>
								<a href="javascript:;">
									<span>我的</span>
									<i className="iconfont ">&#xe678;</i>
								</a></li>
							<li>
								<a href="javascript:;">
									<span>卖座卡</span>
									<i className="iconfont ">&#xe678;</i>
								</a></li>
							
						</ul>
					</nav>
				</div>
			</aside>
		)
	}

}

// 基于UI组件创建出 容器组件
// var App = connect(
// 	// 指定两个参数
// 	// 1. ui组件需要的数据
// 	// 2. ui组件上的方法操作

// 	function(state, ownProps) {
// 		return {
// 			title: state.title,

// 		}
// 	},
// 	{
// 		change: function() {
// 			// 只需要return 一个 action
// 			return {
// 				type: 'CHANGE_TITLE',
// 				title: '详情页'
// 			}
// 		}
// 	}


// )(Apps);

export default Aside;