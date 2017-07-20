var express = require('express');
var router = express.Router();
var async = require('async');

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = "mongodb://127.0.0.1:27017/movie";

router.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

//登陆注册的接口
router.get('/login', function(req, res) {

	MongoClient.connect(DB_CONN_STR, function(err, db) {
		if (err) {
			res.send('网络异常');
		} else {
			var conn = db.collection('users');

			async.series([
				// 先做查询
				function(cb) {
					conn.find({
						name: req.query.name
					}).count(function(err, num) {
						if (err) {
							cb('err', '查询失败');
						} else {

							if (num > 0) {
								// 不能注册  用户名名已存在
								// 判断一下密码是否一样
								conn.find({
									pwd: req.query.pwd
								}).count(function(err, num) {
									if (err) {
										cb('err', '用户名或密码错误');
									} else {
										if (num > 0) {
											res.send({
												msg: 0
											})
										} else {
											res.send({
												msg: -1
											})
										}
									}
								})


							} else {
								// 可以注册
								cb(null);
							}
						}
					})
				},
				// 根据上一个查询 cb方法，看cb方法第一个参数 如果传的是  null, 就可以走到下面这一个异步操作。如果不是传的 null, 下面这个方法是不执行的。
				function(cb) {
					// 新增的操作
					conn.save(req.query, function(err, info) {

						if (err) {
							cb('err', '新增失败');
						} else {
							cb(null, '新增成功');
						}

					})
				}
			], function(err, result) {
				if (err) {
					res.send(result);
				} else {
					// 注册成功之后的处理
					// 重定向到 登录页面
					// res.redirect('');
					res.send({
						msg: 1
					})
				}
			})


		}
	})

})

module.exports = router;