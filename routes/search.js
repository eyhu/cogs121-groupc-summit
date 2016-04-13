var models = require("../models");

exports.view = function(req, res) {
    /* TODO */
//    models.message.find().exec(displayMessages);

 /*   function displayMessages( err, messages )
    {
    	console.log ( messages );
    	res.render("chat", {"newsfeed": messages}); 
    };
*/    
    res.render("search");
};

exports.send = function(req, res) {
	//create today's date
	/*
    var date = new Date();

    //create new models
    var newMessage = new models.Message({
    	"email": req.body.email,
    	"content": req.body.content,
    	"created": date
    });

	console.log ( newMessage );
    //save the message
    newMessage.save(afterSaving);

	function afterSaving(err) { // this is a callback
	  if(err) {console.log(err); res.send(500); }
	  res.redirect('/');
	}
	*/
    //
    // your solution here
    res.redirect("/home");
};