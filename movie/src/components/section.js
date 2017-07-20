import React, {
	Component
} from 'react';
import $ from 'jquery';
// connect 方法
import {
	connect
} from 'react-redux';

//引入路由
import {
	NavLink

} from 'react-router-dom';
//引入swiper
import '../css/swiper/swiper-3.4.2.min.css';
import '../css/section.css';
import Swiper from 'swiper';

class Sections extends Component {
	render() {
			return (
				<section>
				{/*轮播*/} 
				<div className="lunbo" ref="scrolltop">
					<div className="swiper-container">
					    <div className="swiper-wrapper">
					  {/*
									<div className="swiper-slide">Slide 1</div>
					        <div className="swiper-slide">Slide 2</div>
					        <div className="swiper-slide">Slide 3</div>
					  */}			        
					   		{				   		
									this.props.list_lunbo ? this.props.list_lunbo.map(function(item,index){
									
										return (
											 <div className="swiper-slide" key={index}>
											 	<img src={item.imageUrl} alt="" />
											 </div>
											)											
									}):""					   		
					   		}
					    </div> 
					</div>
				</div>
				{/*正在上映*/}
				<div className="now_play">
					<ul>
						{
							this.props.list_now ? this.props.list_now.map(function(item,index){
								var id = item.id;
								var src = 'detail/'+id;
								
								return (
									<NavLink to={src}   key={index}>
										<li >
											<div className="pic_cont" >
												{/*上面的图*/}
												<div className="pic_img">
													<img src={item.cover.origin} alt="" />
												</div>
												{/*下面描述*/}
												<div className="pic_msg">
													<div className="pic_msg_left">
														<p>{item.name}</p>
														<div>
															<span>{item.cinemaCount}</span>
															<span>家影院上映 </span>
															<span>{item.watchCount}</span>
															<span>人购票</span>
														</div>
													</div>
													<div className="pic_msg_right">
														<span>{item.grade}</span>
													</div>
												</div>
											</div>
										</li>
									</NavLink>
									
								)
							}):""
						}
					{/*
					<li>
							<div className="pic_cont">
								//上面的图
								<div className="pic_img">
									<img src="https://pic.maizuo.com/usr/movie/2d4be489eefcae3f727c835763fcf183.jpg" alt="" />
								</div>
								//下面描述
								<div className="pic_msg">
									<div className="pic_msg_left">
										<p>悟空传</p>
										<div>
											<span>195</span>
											<span>家影院上映 </span>
											<span>470653</span>
											<span>人购票</span>
										</div>
									</div>
									<div className="pic_msg_right">
										<span>8.3</span>
									</div>
								</div>
							</div>
						</li>
					*/}
						
					</ul>
					<div className="more"><NavLink to="/film-playing">更多热映电影</NavLink></div>
				</div> 
				{/*即将上映*/}
				<div className="future_play">
					<div className="futrue_title">
						<div>即将上映</div>
					</div>
					<div className="future_movie">
						<ul>
							{

							this.props.list_future ? this.props.list_future.map(function(item,index){
										var d = new Date(item.premiereAt);
										var month = d.getMonth() + 1;
										var date = d.getDate();
										var id = item.id;
										var src = 'detail/'+id;
								return (
									<NavLink to={src} key={index}>
									<li key={index}>
										<div className="future_movie_content">
											{/*图片*/}
											<div className="future_movie_pic">
												<img src={item.cover.origin} alt="" />
											</div>
										{/*图片信息*/}
											<div className='future_movie_msg'>
												<div className="future_movie_msg_left">
													<span>{item.name}</span>
												</div>
												<div className="future_movie_right">
													<span>{month}月{date}日上映</span>
												</div>
											</div>
										</div>
									</li>
								</NavLink>
								)
							}):""
						}
						{/*
								<li>
									<div className="future_movie_content">
										//图片
										<div className="future_movie_pic">
											<img src="https://pic.maizuo.com/usr/movie/07398444e312cbdcdc8739bdfff0944f.jpg" alt="" />
										</div>
									//图片信息
										<div className='future_movie_msg'>
											<div className="future_movie_msg_left">
												<span>深夜食堂电影版2</span>
											</div>
											<div className="future_movie_right">
												<span>7月18日上映</span>
											</div>
										</div>
									</div>
								</li>
						*/}
							
						</ul>
					</div>
					<div className="more_future">
						<NavLink to="/come-playing">更多即将上映电影</NavLink>
					</div>
				</div>
			</section>
			)
		}
		//更新完成时
	componentDidUpdate() {
			new Swiper('.swiper-container', {
				autoplay: 3000,
				loop: true,
			});

		}
		// 生命周期的钩子函数
	componentDidMount() {

		//ajax
		var that = this;
		// 轮播
		$.get('http://localhost:8080/lunbo', function(res) {
				var data = JSON.parse(res).data.billboards;
				that.props.getData(data);
			})
			// 正在上映
		$.get('http://localhost:8080/now', function(res) {

				var data = JSON.parse(res).data.films;
				that.props.getNow(data);
			})
			//即将上映
		$.get('http://localhost:8080/future', function(res) {

			var data = JSON.parse(res).data.films;
			that.props.getFuture(data);
		})

	}


}

// 基于UI组件创建出 容器组件
var Section = connect(
	// 指定两个参数
	// 1. ui组件需要的数据
	// 2. ui组件上的方法操作

	function(state, ownProps) {
		return {
			list_lunbo: state.list_lunbo,
			list_now: state.list_now,
			list_future: state.list_future,
		}
	},

	{
		//轮播数据
		getData: function(data) {
			// 只需要return 一个 action
			return {
				type: 'LIST_LUNBO',
				list_lunbo: data
			}
		},
		// 正在上映数据
		getNow: function(data) {
			return {
				type: 'LIST_NOW',
				list_now: data
			}
		},
		//即将上映
		getFuture: function(data) {
			return {
				type: 'LIST_FUTURE',
				list_future: data
			}
		},

	}


)(Sections);
export default Section;