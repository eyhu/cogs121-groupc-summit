exports.view = function(req, res){

	//TODO: please include username to be displayed in home.html

	console.log ("data passed from search pages are following: %j", req.query );

 	res.render('home',
 			{
				//"user": req.query.user,
 				"level": req.query.level,
 				"resort": req.query.resort
 			});
}
