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
//引入下拉加载
import ReactPullLoad, {
	STATS
} from 'react-pullload';
//引入css
import '../css/nowplay.css';
import '../css/iconfont/iconfont.css';
const cData = [
	"http://img1.gtimg.com/15/1580/158031/15803178_1200x1000_0.jpg",
	"http://img1.gtimg.com/15/1580/158031/15803179_1200x1000_0.jpg",
	"http://img1.gtimg.com/15/1580/158031/15803181_1200x1000_0.jpg",
	"http://img1.gtimg.com/15/1580/158031/15803182_1200x1000_0.jpg",
	"http://img1.gtimg.com/15/1580/158031/15803183_1200x1000_0.jpg",


];
var page = 0;
const loadMoreLimitNum = Math.floor(cData.length);
class NowPlays extends Component {
	constructor() {
		super();
		this.state = {
			hasMore: true,
			data: cData,
			page: 0,
			action: STATS.init,
			index: loadMoreLimitNum //loading more test time limit
		}
	}

	handleAction = (action) => {
		console.info(action, this.state.action, action === this.state.action);
		//new action must do not equel to old action
		if (action === this.state.action) {
			return false
		}

		if (action === STATS.refreshing) { //刷新
			this.handRefreshing();
		} else if (action === STATS.loading) { //加载更多
			this.handLoadMore();
		} else {
			//DO NOT modify below code
			this.setState({
				action: action
			})
		}
	}

	handRefreshing = () => {
		if (STATS.refreshing === this.state.action) {
			return false
		}

		setTimeout(() => {
			//refreshing complete
			this.setState({
				data: cData,
				hasMore: true,
				action: STATS.refreshed,
				index: loadMoreLimitNum,
				page: page,
			});
		}, 3000)

		this.setState({
			action: STATS.refreshing
		})
	}

	handLoadMore = () => {

		if (STATS.loading === this.state.action) {
			return false
		}

		setTimeout(() => {
			if (this.state.index === 0) {
				this.setState({
					action: STATS.reset,
					hasMore: false
				});
			} else {
				this.setState({
					data: [...this.state.data, cData[0], cData[1]],
					action: STATS.reset,
					index: this.state.index - 1,
					page: page++,
				});
			}
		}, 3000)

		this.setState({
			action: STATS.loading
		})

	}
	render() {
		const {
			data,
			hasMore
		} = this.state

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
							<ReactPullLoad 
					          downEnough={150}
					          action={this.state.action}
					          handleAction={this.handleAction}
					          hasMore={hasMore}
					         
					          distanceBottom={1000}>
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
								{
					              data.map( (str, index )=>{
					                return <li key={index}><img src={str} alt=""/></li>
					              })
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
					 		</ReactPullLoad>
						</div>
					</div> 
				</section>
			</div >


		)
	}
	componentDidUpdate() {



	}
	componentDidMount() {
		var that = this;
		console.log(page)
		$.get('http://localhost:8080/now_playing?', {
			page: page
		}, function(res) {
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