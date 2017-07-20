var express = require('express');
var router = express.Router();
var http = require('http');



router.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});

// 轮播的接口

// localhost:3000/lunbo
router.get('/lunbo', function(req, res) {

		var page = req.query.page;
		var count = req.query.count;
		// 要去请求  卖座网的接口

		// http://m.maizuo.com/v4/api/billboard/home?__t=1500253189212
		var time = new Date().getTime();

		http.get('http://m.maizuo.com/v4/api/billboard/home?__t=' + time, function(response) {

			var data = '';
			response.on('data', function(chunk) {
				data += chunk;
			})

			response.on('end', function() {
				res.send(data);
			})

		})

	})
	// 正在上映的首页接口
router.get('/now', function(req, res) {

		var page = req.query.page;
		var count = req.query.count;
		// 要去请求  卖座网的接口

		// http://m.maizuo.com/v4/api/billboard/home?__t=1500253189212
		var time = new Date().getTime();

		http.get('http://m.maizuo.com/v4/api/film/now-playing?__t=' + time + '&page=1&count=5', function(response) {

			var data = '';
			response.on('data', function(chunk) {
				data += chunk;
			})

			response.on('end', function() {
				res.send(data);
			})

		})

	})
	// 即将上映的首页接口
router.get('/future', function(req, res) {

	var page = req.query.page;
	var count = req.query.count;
	// 要去请求  卖座网的接口

	// http://m.maizuo.com/v4/api/billboard/home?__t=1500253189212
	var time = new Date().getTime();

	http.get('http://m.maizuo.com/v4/api/film/coming-soon?__t=' + time + '&page=1&count=3', function(response) {

		var data = '';
		response.on('data', function(chunk) {
			data += chunk;
		})

		response.on('end', function() {
			res.send(data);
		})

	})

})

// 正在上映的影片接口
router.get('/now_playing', function(req, res) {

	var page = req.query.page;
	console.log(page)
		// 要去请求  卖座网的接口

	// http://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
	var time = new Date().getTime();

	http.get('http://m.maizuo.com/v4/api/film/now-playing?page=' + page + '&count=7', function(response) {

		var data = '';
		response.on('data', function(chunk) {
			data += chunk;
		})

		response.on('end', function() {
			res.send(data);
		})

	})

})

// 即将上映影片的接口
router.get('/come_play', function(req, res) {

	var page = req.query.page;
	var count = req.query.count;
	// 要去请求  卖座网的接口

	// http://m.maizuo.com/v4/api/billboard/home?__t=1500253189212
	var time = new Date().getTime();

	http.get('http://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7', function(response) {

		var data = '';
		response.on('data', function(chunk) {
			data += chunk;
		})

		response.on('end', function() {
			res.send(data);
		})

	})

})

//详情页
router.get('/detail', function(req, res) {

	var id = req.query.id;
	console.log(id)
		// 要去请求  卖座网的接口
		// http://m.maizuo.com/v4/api/film/3071?__t=1500376765963
	var time = new Date().getTime();

	http.get('http://m.maizuo.com/v4/api/film/' + id + '?__t=' + time, function(response) {

		var data = '';
		response.on('data', function(chunk) {
			data += chunk;
		})

		response.on('end', function() {
			res.send(data);
		})

	})

})

// 影院的接口
router.get('/cinema', function(req, res) {

	var page = req.query.page;
	var count = req.query.count;
	// 要去请求  卖座网的接口

	// http://m.maizuo.com/v4/api/cinema?__t=1500435535266
	var time = new Date().getTime();

	http.get('http://m.maizuo.com/v4/api/cinema?__t=' + time, function(response) {

		var data = '';
		response.on('data', function(chunk) {
			data += chunk;
		})

		response.on('end', function() {
			res.send(data);
		})

	})

})


module.exports = router;