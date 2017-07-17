import React, {
	Component
} from 'react';

import $ from 'jquery';
// connect 方法
import {
	connect
} from 'react-redux';
//引入css
import '../css/iconfont/iconfont.css';
import '../css/top.css';
class Tops extends Component {
	render() {
		return (
			<div className="back_top">
				<div className="back_content">
					<i className="iconfont">&#xe671;</i>
				</div>
			</div>
		)
	}
}
var Top = connect(
	function(state, ownprops) {
		return {

		}
	}
)(Tops)
export default Top;