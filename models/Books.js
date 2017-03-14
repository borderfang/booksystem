var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
	sid		 : {type: Number},
	bookname : {type: String},
	author   : {type: String},
	price	 : {type: Number},
	category : {type: String}
});

//查询操作；
//列出所有书的目录；
bookSchema.statics.findAllBook = function(callback) {
	this.model("Books").find({}, callback);
}
//修改之前的数据查询；
bookSchema.statics.findOneBook = function(sid, callback) {
	this.model("Books").find({"sid": sid}, callback);
}


var bookModel = mongoose.model("Books", bookSchema);
module.exports = bookModel;