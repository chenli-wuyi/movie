import React, {
	Component
} from 'react';
import $ from 'jquery';
//引入swiper
import '../css/swiper/swiper-3.4.2.min.css';
import '../css/section.css';
import Swiper from 'swiper';
class Section extends Component {
	render() {
			return (
				<section>
				{/*轮播*/} 
				<div className="lunbo">
					<div className="swiper-container">
					    <div className="swiper-wrapper">
					        <div className="swiper-slide">Slide 1</div>
					        <div className="swiper-slide">Slide 2</div>
					        <div className="swiper-slide">Slide 3</div>
					        
					    </div>
					    
					</div>
				</div>
			</section>
			)
		}
		// 生命周期的钩子函数
	componentDidMount() {
		var mySwiper = new Swiper('.swiper-container', {
			autoplay: 3000,
			loop: true,
		});
		//做ajax
		$.get('http://localhost:8080/lunbo', function(res) {
			return res;
		})
	}
}
export default Section;