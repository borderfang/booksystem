var db = require("./db.js");
var Books = require("./Books.js");
module.exports = {
	addBooks: function(req, res, next) {
		res.render("addbooks");
	},
	doBooks: function(req, res, next) {
		Books.create(req.query, function(err){
			if (err) console.log(err);
			//res.send("保存数据成功！");
			res.redirect("/")
		})
		
	},
	showAllBooks: function(req, res, next) {
		Books.findAllBook( function(err, result){
			if(err) console.log(err);
			res.render("index", {
				"bookcount": result
			});
		})
		
	},
	updateBooks: function(req, res, next) {	
		// Books.findOneBook(req.query.sid, function(err, result){
		// 	res.render("update", result[0]);
		// })	
		Books.findOne({"sid": req.query.sid}, function(err, result) {
			res.render("update", result);			
		})
		
	},
	doUpdateBooks: function(req, res, next) {	
		var sid = parseInt(req.params["sid"]);
		Books.update({"sid": sid}, req.query, function(err, result) {
			if ( err || !sid ){
				console.log("出现错误");
			}
			res.redirect("/");
		})
	},
	doDelBooks: function(req, res, next) {
		var sid = parseInt(req.params["sid"]);
		Books.remove({"sid": sid}, function() {
			console.log("删除成功！");
			res.redirect("/");
		})
	}	
}






