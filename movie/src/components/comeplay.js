import React, {
	Component
} from 'react';

// connect 方法
import {
	connect
} from 'react-redux';
import $ from 'jquery';
//引入路由
import {
	NavLink

} from 'react-router-dom';
//引入store
import store from '../redux/store.js';
//引入css
import '../css/nowplay.css';
var page = 1; //请求时候的页数
var flag = true; //页面的高度和当前滚动的高度
class ComePlays extends Component {

	render() {
		return (
			<div className="film">
				<section>
					<div className= "film_content">
						<div className="film_table">
							<NavLink to="/film-playing" activeClassName="active">
								<div >正在热映</div>
							</NavLink>
							<NavLink  to="/come-playing" activeClassName="active">
								<div >即将上映</div>
							</NavLink>
						</div>
						<div className="film_list">
							<ul>
								{
									
									this.props.come_play ? this.props.come_play.map(function(item,index){
										var d = new Date(item.premiereAt);
										var month = d.getMonth() + 1;
										var date = d.getDate();
										var day = d.getDay();
										var xingqi = ['日', '一', '二', '三', '四', '五', '六'];
										day = xingqi[day];
										var id = item.id;
										var src = 'detail/'+id;
										return (
											<NavLink to={src} key={index}>
										<li>
											<div className="list_mes">
												<div className="list_left">
													<img src={item.poster.origin} alt="" />
												</div>
												<div className="list_right">
													<div className="icon">
														<i className="iconfont">&#xe678;</i>
													</div>
													<div className="score">{item.grade}</div>
													<div className="name">{item.name}</div>
													<div className="message">{item.intro}</div>
														<div className=" shijian">
													<span className="num">{month}月{date}日</span>
													<span>上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
													
													<span>星期{day}</span>
												</div>
												</div>
											</div>
										</li>
									</NavLink>
										)
									}):""
								
								}
								{/*
									<NavLink to="#">
									<li>
										<div className="list_mes">
											<div className="list_left">
												<img src="https://pic.maizuo.com/usr/movie/647badfd281a945637e8d669f1c2b138.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300" alt="" />
											</div>
											<div className="list_right">
												<div className="icon">
													<i className="iconfont">&#xe678;</i>
												</div>
												<div className="name">绣春刀II：修罗战场</div>
												<div className="message">追查陷阴谋 现任遭了秧</div>
												<div className=" shijian">
													<span className="num">7月19日</span>
													<span>上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
													
													<span>星期三</span>
												</div>
											</div>
										</div>
									</li>
								</NavLink>
								*/}
								
							</ul>
						</div>
					</div>
				</section>
			</div>

		)
	}
	componentDidMount() {
			window.addEventListener('scroll', this.handleScroll);
			// var page = this.props.page
			var that = this;

			$.get('http://localhost:8080/come_play?page=' + page + '&count=7', function(res) {
				if (res) {
					var data = JSON.parse(res).data.films;

					that.props.getComeplay(data);
					page++;

				}

			})

		}
		//获取滚动数据
	handleScroll = () => {
			console.log(page);
			var list = this.props.come_play; //获取state的数据
			var filmes = []; //用来接收新的数据
			var that = this; //改变一下this指向
			var top = document.documentElement.scrollTop || document.body.scrollTop; //页面的滚动
			var height = document.documentElement.clientHeight;
			console.log(height)
			if (top > 100 * page && flag) {
				$.get('http://localhost:8080/come_play?page=' + page + '&count=7', function(res) {
					if (res) {
						var data = JSON.parse(res).data.films;
						var filme = list.concat(data);
						var set = new Set(filme);
						filmes = new Array(...set); //数组去重
						that.props.getComeplay(filmes);
						page++; //页数+1
						flag = true;
					} else {
						flag = false;
					}
				})

			} else {
				flag = false;
			}
		}
		//销毁时
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

}

var ComePlay = connect(
	function(state, ownProps) {
		return {
			come_play: state.come_play,
			xingqi: state.xingqi,
			page: state.page,
		}
	}, {
		getComeplay: function(data) {
			// 只需要return 一个 action
			return {
				type: 'COME_PLAY',
				come_play: data
			}
		}
	}
)(ComePlays)


export default ComePlay;