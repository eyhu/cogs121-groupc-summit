var models = require("../models");

exports.view = function(req, res) {
    /* TODO */
    models.message.find().exec(displayMessages);

    function displayMessages( err, messages )
    {
    	console.log ( messages );
    	res.render("chat", {"newsfeed": messages}); 
    };
    
    //res.render("chat");
};
