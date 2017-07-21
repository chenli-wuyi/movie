import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';

import $ from 'jquery';

import '../css/wode.css';
// var flag = false;
class Wodes extends Component {
	render() {
		return (
			<div className="wode">
				<section>
					<div className="conent">
						<div className="tijiao">
							<div className="tel">
								<input ref='tel' type="text" placeholder="输入手机号/邮箱" />
								<span onClick={this.send.bind(this)}>发送验证码</span>
								<i ref="flag" style={{display:'none'}}></i>
								<div></div>
							</div>
							<div className="pwd">
								<input ref='pwd' type="password" placeholder="输入密码/长度至少6位" />
								<div></div>
							</div>
							<div className="yanzhengma">
								<input ref="yanzhengma" type="text" placeholder="输入验证码" />
								<span ref="txt"  onClick={this.changevue.bind(this)}></span>
								<div></div>
							</div>
							
							<button onClick={this.login.bind(this)}>登陆</button>
						</div>
					</div>
				</section>
			</div>
		)
	}
	send = function() {
		// var flag = this.refs.flag.innerHTML;
		var tel = this.refs.tel.value;
		var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		var str = parseInt(Math.random() * 10) + '' + parseInt(Math.random() * 10) + '' + parseInt(Math.random() * 10) + '' + parseInt(Math.random() * 10);
		if (reg.test(tel)) {
			this.refs.txt.innerHTML = str;
			this.refs.flag.innerHTML = 'aaa';
		} else {
			alert('请输入合法手机号');
			this.refs.flag.innerHTML = '';
		}

	}
	changevue = function() {
		// var txt = this.refs.txt.innerHTML;
		//随机验证码
		var str = parseInt(Math.random() * 10) + '' + parseInt(Math.random() * 10) + '' + parseInt(Math.random() * 10) + '' + parseInt(Math.random() * 10);
		this.refs.txt.innerHTML = str

	}
	login = function() {
		var flag = this.refs.flag.innerHTML;

		var tel = this.refs.tel.value; //手机号
		var pwd = this.refs.pwd.value; //密码
		var yanzhengma = this.refs.yanzhengma.value; //验证码
		var txt = this.refs.txt.innerHTML; //随机验证码

		if (txt === yanzhengma && pwd.length >= 6 && flag) {
			//ajax请求
			$.get('http://localhost:8080/users/login?name=' + tel + "&pwd=" + pwd, function(res) {
				if (res.msg === 0 || res.msg === 1) {
					window.location.href = "mine";
					return {
						message: tel
					}
				} else {
					alert('密码错误,请从新输入')
				}
			})

		} else {
			alert('请正确输入')
		}
	}
}
var Wode = connect(
	function(state, ownprops) {
		return {
			title: state.title,
		}
	}, {
		change: function() {
			return {
				type: 'CHAHFDSF',
				title: '222'
			}
		}
	}

)(Wodes)

export default Wode;