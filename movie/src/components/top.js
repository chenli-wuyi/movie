import React, {
	Component
} from 'react';



//引入css
import '../css/iconfont/iconfont.css';
import '../css/top.css';
class Top extends Component {
	constructor(props) {
		super(props);
		this.state = {
			linkStyle: {
				display: 'none'
			}
		};
	}

	render() {

		return (

			<div style={this.state.linkStyle} ref='backtop' onClick ={this.show} className="back_top">
				<div className="back_content">
					<i className="iconfont">&#xe671;</i>
				</div>
			</div>
		)
	}
	componentWillMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	//获取滚动数据
	handleScroll = () => {
		var top = document.documentElement.scrollTop || document.body.scrollTop;

		this.setState({
			linkStyle: {
				display: top > 160 ? 'block' : 'none'
			}
		});
		// return {
		// 	type: 'SCROLL_TOP',
		// 	scrolltop: top,
		// 	linkStyle: {
		// 		display: top > 100 ? 'block' : 'none'
		// 	}
		// }
	}
	show = () => {
		const scrollTo = (element, to, duration) => {
			if (duration <= 0) return;
			const _element = element;
			const difference = to - _element.scrollTop;
			const perTick = (difference / duration) * 10;

			setTimeout(() => {
				_element.scrollTop += perTick;
				if (_element.scrollTop === to) return;
				scrollTo(_element, to, duration - 10);
			}, 10);
		};
		scrollTo(document.body, 0, 100);
	}

}
// var Top = connect(
// 	function(state, ownprops) {
// 		return {
// 			scrolltop: state.scrolltop,
// 			linkStyle: state.linkStyle,
// 		}
// 	},

// 	{

// 		show() {


// 		}

// 	}

// )(Tops)
export default Top;