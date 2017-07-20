import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import $ from 'jquery';
//引入antd
import {
	Accordion,
	List
} from 'antd-mobile';
import '../css/cinema.css';
import '../css/iconfont/iconfont.css';

class Cinemas extends Component {
	render() {
		return (
			<div className="cinema">
				<section>
				
					{
						this.props.list_cinemas_name ? this.props.list_cinemas_name.map(function(item,index){
								return (
									<div key={index} className="content">
						
										<Accordion className="antd_cont">
										
									          <Accordion.Panel className="name" header={item.name}>
									            <List >
									            	{
									            		item.arr ? item.arr.map(function(items,indexs){
								            				return(
								            				<List.Item key={indexs}>
												              	<div className="left">
												              		<div className="mingzi">
												              			<span>{items.name}</span>
												              			<i>座</i>
												              			<i className="lanse">通</i>
												              		</div>
												              		{/*<span className="youhui">
												              			<i>可乐爆米花</i>
												              			<i className="imax">imax</i>
												              			<i className="huodong">优惠活动</i>
												              		</span>*/}
												              			{
												              				items.labels ? items.labels.map(function(item,index){
												              					
												              					if(item.type === "SUNDRY" && item.type === "SUNDRY"){
												              						return (
												              							<span className="youhui" key={index}>
																	              			<i>可乐爆米花</i>
																	              			<i className="imax">imax</i>
																	              			<i className="huodong">优惠活动</i>
																	              		</span>
												              						)
												              					}
												              					return ""
												              					
												              				}) : ""
												              			}
												              			
												              		
												              		<span className="weizhi">
												              			<span> {items.address}</span>
												              		</span>
												              		<div className="juli">
												              			<span>距离</span>
												              			<span>未知</span>
												              		</div>
												              	</div>
												              	<span className="right"><i className="iconfont">&#xe678;</i></span>
												            </List.Item>)
									            		}) : ""
									            	}
									             
									               
									              
									            </List>
									        </Accordion.Panel>
								        </Accordion>

																	
									</div>
								)
						}) : ""
					}

					{/*<div className="content">
						
						<Accordion className="antd_cont">
						
					          <Accordion.Panel className="name" header="福田区">
					            <List >
					              <List.Item>
					              	<div className="left">
					              		<div className="mingzi">
					              			<span>深圳中影ul城市影院万荟城店</span>
					              			<i>座</i>
					              			<i className="lanse">通</i>
					              		</div>
					              		<span className="youhui">
					              			<i>可乐爆米花</i>
					              			<i className="huodong">优惠活动</i>
					              		</span>
					              		<span className="weizhi">
					              			<span> 深圳市宝安区西乡街道宝田一路中熙香槟山九栋商业广场四楼</span>
					              		</span>
					              		<div className="juli">
					              			<span>距离</span>
					              			<span>未知</span>
					              		</div>
					              	</div>
					              	<span className="right"><i className="iconfont">&#xe678;</i></span>
					              </List.Item>
					               <List.Item>
					              	<div className="left">
					              		<div className="mingzi">
					              			<span>深圳中影ul城市影院万荟城店</span>
					              			<i>座</i>
					              			<i className="lanse">通</i>
					              		</div>
					              		<span className="youhui">
					              			<i>可乐爆米花</i>
					              			<i className="huodong">优惠活动</i>
					              		</span>
					              		<span className="weizhi">
					              			<span> 深圳市宝安区西乡街道宝田一路中熙香槟山九栋商业广场四楼</span>
					              		</span>
					              		<div className="juli">
					              			<span>距离</span>
					              			<span>未知</span>
					              		</div>
					              	</div>
					              	<span className="right"><i className="iconfont">&#xe678;</i></span>
					              </List.Item>
					              
					            </List>
					          </Accordion.Panel>
				          </Accordion>

													
					</div>
					<div className="content">
						
						<Accordion className="antd_cont">
						
					          <Accordion.Panel className="name" header="福田区">
					            <List >
					              <List.Item>
					              	<div className="left">
					              		<div className="mingzi">
					              			<span>深圳中影ul城市影院万荟城店</span>
					              			<i>座</i>
					              			<i className="lanse">通</i>
					              		</div>
					              		<span className="youhui">
					              			<i>可乐爆米花</i>
					              			<i className="huodong">优惠活动</i>
					              		</span>
					              		<span className="weizhi">
					              			<span> 深圳市宝安区西乡街道宝田一路中熙香槟山九栋商业广场四楼</span>
					              		</span>
					              		<div className="juli">
					              			<span>距离</span>
					              			<span>未知</span>
					              		</div>
					              	</div>
					              	<span className="right"><i className="iconfont">&#xe678;</i></span>
					              </List.Item>
					               <List.Item>
					              	<div className="left">
					              		<div className="mingzi">
					              			<span>深圳中影ul城市影院万荟城店</span>
					              			<i>座</i>
					              			<i className="lanse">通</i>
					              		</div>
					              		<span className="youhui">
					              			<i>可乐爆米花</i>
					              			<i className="huodong">优惠活动</i>
					              		</span>
					              		<span className="weizhi">
					              			<span> 深圳市宝安区西乡街道宝田一路中熙香槟山九栋商业广场四楼</span>
					              		</span>
					              		<div className="juli">
					              			<span>距离</span>
					              			<span>未知</span>
					              		</div>
					              	</div>
					              	<span className="right"><i className="iconfont">&#xe678;</i></span>
					              </List.Item>
					              
					            </List>
					          </Accordion.Panel>
				          </Accordion>

													
					</div>
					*/}
				</section>
			</div>
		)
	}
	componentDidMount() {
		var that = this;
		//ajax请求数据
		$.get('http://localhost:8080/cinema', function(res) {

			var data = JSON.parse(res).data.cinemas;
			that.props.getCinemas(data);
		})
	}
}

var Cinema = connect(
	function(state, ownProps) {
		var addriss = state.list_cinemas_name;
		var list = state.list_cinemas;
		if (list) {
			for (var i = 0, len = list.length; i < len; i++) {
				for (var j = 0, leng = addriss.length; j < leng; j++) {
					if (addriss[j].name === list[i].district.name) {
						addriss[j].arr.push(list[i])
					}
				}
			}
		}

		return {
			title: state.title,
			list_cinemas: state.list_cinemas,
			list_cinemas_name: state.list_cinemas_name
		}
	}, {
		getCinemas: function(data) {
			return {
				type: 'GET_CINEMAS',
				list_cinemas: data

			}

		}
	}
)(Cinemas);

export default Cinema;