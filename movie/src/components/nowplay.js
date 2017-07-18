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
//引入css
import '../css/nowplay.css';
import '../css/iconfont/iconfont.css';
class NowPlays extends Component {
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
								this.props.now_play ? this.props.now_play.map(function(item,index){
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
												<div className="shuliang">
													<span className="num">{item.cinemaCount}</span>
													<span>家影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
													<span className="num">{item.watchCount}</span>
													<span>人购票</span>
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
												<div className="score">8.0</div>
												<div className="name">绣春刀II：修罗战场</div>
												<div className="message">追查陷阴谋 现任遭了秧</div>
												<div className="shuliang">
													<span className="num">161</span>
													<span>家影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
													<span className="num">10300</span>
													<span>人购票</span>
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
			</div >


		)
	}
	componentDidMount() {
		var that = this;
		$.get('http://localhost:8080/now_playing', function(res) {
			var data = JSON.parse(res).data.films;

			that.props.getNowplay(data);
		})
	}
}

var NowPlay = connect(
	function(state, ownProps) {
		return {
			now_play: state.now_play,
		}
	}, {
		getNowplay: function(data) {
			// 只需要return 一个 action
			return {
				type: 'NOW_PLAY',
				now_play: data
			}
		}
	}
)(NowPlays)


export default NowPlay;