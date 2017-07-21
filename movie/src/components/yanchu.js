import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import $ from 'jquery';
import '../css/yanchu.css';
class Yanchus extends Component {
	render() {
		return (
			<div className="yanchu">
				<section>
					<div className="cont">
						<ul>
						{
							this.props.yanchu_list ? this.props.yanchu_list.map(function(item,index){
								return (
									<li key={index}>
								<div className="pic">
									<img src={item.skuList[0].image} alt="" />
								</div>
								<p>{item.masterName}</p>
								<div className="count">
									<div>
										¥ 20
										<span>适用于280票面</span>
									</div>
									<div>
										¥ 20
										<span>适用于480票面</span>
									</div>
									<div>
										¥ 20
										<span>适用于680票面</span>
									</div>
									<svg width="20" height="4">
										<g>
											<circle cx="2" cy="2" r="2"></circle>
											<circle cx="10" cy="2" r="2"></circle>
											<circle cx="18" cy="2" r="2"></circle>
										</g>
									</svg>
								</div>
							</li>	
								)
							}):""
						}
							<li>
								<div className="pic">
									<img src="http://mall.s.maizuo.com/7b38dae44b047f5e1dda3b0400124974.jpg" alt="" />
								</div>
								<p>【深圳】2017王心凌Cyndi Wants!世界巡回演唱会</p>
								<div className="count">
									<div>
										¥ 20
										<span>适用于280票面</span>
									</div>
									<div>
										¥ 20
										<span>适用于480票面</span>
									</div>
									<div>
										¥ 20
										<span>适用于680票面</span>
									</div>
									<svg width="20" height="4">
										<g>
											<circle cx="2" cy="2" r="2"></circle>
											<circle cx="10" cy="2" r="2"></circle>
											<circle cx="18" cy="2" r="2"></circle>
										</g>
									</svg>
								</div>
							</li>
						</ul>
						<p>已经到底了</p>
					</div>
				</section>
			</div>
		)
	}
	componentDidMount() {
		//ajax
		var that = this;
		$.get('http://localhost:8080/yanchu', function(res) {
			var data = JSON.parse(res).data.list;
			that.props.getYanchu(data);
		})
	}
}
var Yanchu = connect(
	function(state, ownprops) {
		return {
			yanchu_list: state.yanchu_list,
		}
	}, {
		getYanchu: function(data) {
			return {
				type: 'YANCHU',
				yanchu_list: data
			}
		}
	}
)(Yanchus);

export default Yanchu;