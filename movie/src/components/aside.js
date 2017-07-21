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
//引入路由
import {

	NavLink
} from 'react-router-dom';
//引入store
import store from '../redux/store.js';
class Asides extends Component {
	render() {
			var that = this;


			return (

				<aside>
					<div className="aside_content">
						<nav>
							<ul onClick = {this.props.change}>
							{
								this.props.aside_list.map(function(item,index){
									
									return(
										
										<li  key={index} onClick={that.props.changTitle.bind(that,index)}>
											<NavLink  to={item.path} exact>
												<span>{item.name}</span>
												<i className="iconfont ">&#xe678;</i>
											</NavLink>
										</li>

									)
								})
							}
						{/*
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

						*/}	
							</ul>
						</nav>
						<div onClick={this.props.change}></div>
					</div>
				</aside>

			)
		}
		// changTitle(index) {
		// 	this.props.aside_list[index].title
		// }


}

// 基于UI组件创建出 容器组件
var Aside = connect(
	// 指定两个参数
	// 1. ui组件需要的数据
	// 2. ui组件上的方法操作

	function(state, ownProps) {
		return {
			aside_list: state.aside_list,
		}
	}, {
		change: function() {
			// 只需要return 一个 action
			return {
				type: 'IS_SHOW',
				isshow: store.getState().isshow
			}
		},
		changTitle: function(index) {
			return {
				type: 'CHANGE_TITLE',
				title: store.getState().aside_list[index].title,
			}
		}
	}


)(Asides);

export default Aside;