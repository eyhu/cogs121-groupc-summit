exports.view = function(req, res){

	console.log ("data passed from search pages are following: %j", req.query );

 	res.render('home', 
 			{ 
 				"level": req.query.level, 
 				"resort": req.query.resort
 			});
}
