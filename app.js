var express = require("express");
var app = express();
var rout = require("./models/router.js");
app.set("view engine", "ejs");

//列出所有图书；
app.get("/", rout.showAllBooks);
//添加图书页面；
app.get("/addbooks", rout.addBooks);
//添加图书业务；
app.get("/dobooks", rout.doBooks);
//修改图书页面； 
app.get("/updatebooks", rout.updateBooks);
//修改图书业务；
app.get("/doupdatebooks/:sid", rout.doUpdateBooks);
//删除图书业务； 
app.get("/delbooks/:sid", rout.doDelBooks);
app.listen(3000);
console.log("Running at http://127.0.0.1:3000");