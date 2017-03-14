var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(callback){
	console.log("connect successful");
})
module.exports = db;

 