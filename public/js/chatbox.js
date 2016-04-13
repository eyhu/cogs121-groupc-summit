(function($) {
    "use strict";
    /* TODO: Start your Javascript code here */
    var socket = io();
    $('#send_message').submit(function( event ){
        
        //send a message from client side to serverside.

        socket.emit('newsfeed', $('#user_input').val());

        //clear the variable
        $('#user_input').val('');
    

        return false;        
    });

    socket.on("newsfeed", function(data) {
        console.log( data );
        var parsedData = data;
        console.dir ( data.user+ " says " + parsedData["message"] + " at " + parsedData["posted"]);
        // grab and parse data and assign it to the parsedData variable.

        // other possible solution(s) here.
        $('#messages').prepend($('<li>').html(messageTemplate(parsedData)));

        
        // You may use this for updating new message
        function messageTemplate(template) {
            var result = '<div class="user">' +
                '<div class="user-image">' +
                '<img src="' + template.photo + '" alt="">' +
                '</div>' +
                '<div class="user-info">' +
                '<span class="username">' + template.user + '</span><br/>' +
                '<span class="posted">' + template.posted + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="message-content">' +
                template.message +
                '</div>';
            return result;
        }
        /*
        function messageTemplate(parsedData) {
          // generate HTML text based on some data to be prepended into the list
        }*/
    });


})($);
