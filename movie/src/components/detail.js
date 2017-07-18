import React, {
	Component
} from 'react';
import $ from 'jquery';
// connect 方法
import {
	connect
} from 'react-redux';
// css
import '../css/detail.css';
class Details extends Component {
	render() {
		return (
			<div className="detail">
			{
					this.props.get_detail ? (
					
							<section>

								<div className="detail_pic">
									<img src={this.props.get_detail.cover.origin} alt="" />
								</div>
								<div className="jianjie">
									<div className="yingpianjianjie">影片简介</div>
									<div className="txt">
										<span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
										<span>{this.props.get_detail.director}</span>
									</div>
									<div className="txt">
										<span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
										<span>
											{

												this.props.get_detail.actors?this.props.get_detail.actors.map(function(item,index){
													var length = this.props.get_detail.actors.length
													return (
														index === length-1 ? item.name  : item.name + '|'
													)
												}.bind(this) ):"" 
											}
										</span>
									</div>
									<div className="txt">
										<span>地区语言：</span>
										<span>{this.props.get_detail.nation}</span>
										<span>(</span>
										<span>{this.props.get_detail.language}</span>
										<span>)</span>
									</div>
									<div className="txt">
										<span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:</span>
										<span>&nbsp;&nbsp;</span>
										<span>{this.props.get_detail.category}</span>
									</div>
									<div className="txt">
										<span>上映日期：</span>
										<span>
											{
												this.props.get_detail.premiereAt?(

														new Date(this.props.get_detail.premiereAt).getMonth() + 1 + '月' + new Date(this.props.get_detail.premiereAt).getDate() + '日'										
													):""
											}
										</span>
									</div>
									<div className="miaoshu">
										 {this.props.get_detail.synopsis}
									</div>
								</div>
								<div className="goupiao">
									<button>立即购票</button>
								</div>
							</section>
						)
					: ""
				}
			{/*
					<section>

					<div className="detail_pic">
						<img src="https://pic.maizuo.com/usr/movie/2d4be489eefcae3f727c835763fcf183.jpg" alt="" />
					</div>
					<div className="jianjie">
						<div className="yingpianjianjie">影片简介</div>
						<div className="txt">
							<span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
							<span>郭子健</span>
						</div>
						<div className="txt">
							<span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
							<span>彭于晏 | 倪妮 | 余文乐 | 欧豪 | 郑爽 | 俞飞鸿 | 乔杉</span>
						</div>
						<div className="txt">
							<span>地区语言：</span>
							<span>中国大陆</span>
							<span>(</span>
							<span>普通话</span>
							<span>)</span>
						</div>
						<div className="txt">
							<span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:</span>
							<span>&nbsp;&nbsp;</span>
							<span>剧情|奇幻|古装</span>
						</div>
						<div className="txt">
							<span>上映日期：</span>
							<span>7月13日上映</span>
						</div>
						<div className="miaoshu">
							 五百年前，魔王战诸神而败，转世重生。历史与宿命，孤独与抗争，都在此刻拉开序幕。天庭学生分为三六九等，而出身低贱的悟空，却狂傲不羁，藐视神权，他大破各处规章戒律，无视满天神佛星仙，闹得天庭鸡犬不宁。结界桥一战，悟空等人不慎落入凡间，虽历尽浩劫，却找回自我，亦收获了爱情与友情。然而，所有人的命运早已注定，从不知天高地厚的热血轻狂，到无奈宿命难改的压抑绝望，迷茫与挫败，理想与自由不断碰撞，这是一段属于青春的不朽抗争。
						</div>
					</div>
					<div className="goupiao">
						<button>立即购票</button>
					</div>
				</section>
			*/}
				
			</div>
		)

	}
	componentDidMount() {
		//ajax
		var that = this;
		var id = this.props.match.params.id;
		console.log(id)
			// 轮播
		$.get('http://localhost:8080/detail?', {
			id: id
		}, function(res) {

			var data = JSON.parse(res).data.film;

			that.props.getDetail(data);
		})
	}
}


var Detail = connect(
	function(state, ownProps) {
		return {
			get_detail: state.get_detail,
		}
	}, {
		getDetail: function(data) {
			return {
				type: 'DETAIL',
				get_detail: data
			}
		}
	}
)(Details);
export default Detail;