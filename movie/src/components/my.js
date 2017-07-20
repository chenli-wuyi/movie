import React, {
	Component
} from 'react';

import {
	connect
} from 'react-redux';
import '../css/my.css';
import '../css/iconfont/iconfont.css';
class Mys extends Component {
	render() {
		return (
			<div className="my">
				<section className="conent">
					<div className="top">
						<header>
							<img src="https://pic.maizuo.com/usr/default/maizuomoren66.jpg" alt="" />
							<div>
								<p>手机用户6666</p>
								<p>ID:217322575</p>
								<p className="tuichu">退出</p>
							</div>
						</header>
					</div>
					<section className="foot">
						<div className="wrapper">
							<div className="msg">
								<i  className="iconfont yanse total">&#xe670;</i>
								<span className="name">影票订单</span>
								<div className="shuliang">
									<span>
										<span className="yan">0</span>
										<span>张</span>
									</span>
									<i className="iconfont">&#xe678;</i>
								</div>
							</div>
						</div>
						<div className="wrapper">
							<div className="msg">
								<i  className="iconfont yanse total">&#xe670;</i>
								<span className="name">影票待定订单</span>
								<div className="shuliang">
									<span>
										<span className="yan">0</span>
										<span>张</span>
									</span>
									<i className="iconfont">&#xe678;</i>
								</div>
							</div>
						</div>
						<div className="wrapper">
							<div className="msg">
								<i  className="iconfont yanse total">&#xe670;</i>
								<span className="name">商城订单</span>
								<div className="shuliang">
									
									<i className="iconfont">&#xe678;</i>
								</div>
							</div>
						</div>
						<div className="wrapper">
							<div className="msg">
								<i  className="iconfont yanse total">&#xe670;</i>
								<span className="name">演出订单</span>
								<div className="shuliang">
									
									<i className="iconfont">&#xe678;</i>
								</div>
							</div>
						</div>
						<div className="wrapper nobom">
							<div className="msg borbom">
								<i  className="iconfont yanse total">&#xe670;</i>
								<span className="name">我的现金券</span>
								<div className="shuliang">
									<span>
										<span className="yan">0</span>
										<span>张</span>
									</span>
									<i className="iconfont">&#xe678;</i>
								</div>
							</div>
						</div>
						<div className="wrapper nobom">
							<div className="msg borbom">
								<i  className="iconfont yanse total">&#xe670;</i>
								<span className="name">账户余额</span>
								<div className="shuliang">
									<span>
										<span className="yan">0</span>
										<span>元</span>
									</span>
									<i className="iconfont">&#xe678;</i>
								</div>
							</div>
						</div>
						<div className="wrapper nobom">
							<div className="msg ">
								<i  className="iconfont yanse total">&#xe670;</i>
								<span className="name">我的卖座卡</span>
								<div className="shuliang">
									<span>
										<span className="yan">0</span>
										<span>张</span>
									</span>
									<i className="iconfont">&#xe678;</i>
								</div>
							</div>
						</div>
						<div className="wrapper">
							<div className="msg">
								<i  className="iconfont yanse total">&#xe670;</i>
								<span className="name">设置</span>
								<div className="shuliang">
									
									<i className="iconfont">&#xe678;</i>
								</div>
							</div>
						</div>
					</section>
				</section>
			</div>
		)
	}
}
var My = connect(
	function(state, ownprops) {
		return {
			title: state.title,
		}
	}, {
		change: function() {
			return {
				type: 'DFSDA',
				title: '三十四'
			}
		}
	}
)(Mys);

export default My;