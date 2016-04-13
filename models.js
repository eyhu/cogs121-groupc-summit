var Mongoose = require('mongoose');

var twitterIDSchema = new Mongoose.Schema({
    "twitterID": String,
    "token": String,
    "username": String,
    "displayName": String,
    "photo": String
});

var messageSchema = new Mongoose.Schema({
    "user": String,
    "photo": String,
    "message": String,
    "posted": Date
});

exports.message = Mongoose.model("message", messageSchema);
exports.User = Mongoose.model('User', twitterIDSchema);