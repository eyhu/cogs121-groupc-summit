var models = require("../models");
/*
const express    = require("express");
const app        = express();
const http       = require("http").createServer(app);
const io         = require("socket.io")(http);
*/
exports.view = function(req, res){

	//TODO: please include username to be displayed in home.html
	/*var user;
	io.on("connection", function(socket){
		user = socket.request.session.passport.user.displayName;
	});
	console.log(user);*/
	//console.log ("data passed from search pages are following: %j", req.query );

	models.message.find({"level": req.query.level,
		                   "resort": req.query.resort})
	               .sort('-posted').exec(displayMessages);

    function displayMessages( err, messages )
    {
    	res.render("home", {
    		"level": req.query.level,
	 			"resort": req.query.resort,
    		"newsfeed": messages
    	}); 
    };
}
