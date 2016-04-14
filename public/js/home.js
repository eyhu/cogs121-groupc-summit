'use strict';

$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	$("#switchForm").hide();
	$("#switchGo").hide();
	$("#switchNo").hide();
	$("#switchBtn").show();
	$("#shareBtn").show();

	$("#switchBtn").click(showSwitch);
	$("#switchNo").click(hideSwitch);

	var socket = io();
	$("#shareBtn").click(function() {
		var sendData = {
			"message": $("#user_input").val(),
			"level": $("#class-level").text(),
			"resort": $("#location-name").text()
		};

		socket.emit('newsfeed', sendData);
		$("#user_input").val('');
		return false;
	});

	socket.on("newsfeed", function(data){
		var parsedData = data;
		$('#messages').prepend($('<li>').html(messageTemplate(parsedData)));
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
     $('#messages').prepend($('<hr class="line2"/>'));
	});

	$("#switchForm").submit( function ( event ){
			if ( ( $("#sel1").val() == null ) && ( $("#sel2").val() == null ))
			{
				alert("You must select valid skill level and ski resort");
				return false;
			}
			else if (  $("#sel1").val() == null )
			{
				alert("You must select valid skill level");
				return false;
			}
			else if ( $("#sel2").val() == null  )
			{
				alert("You must select valid ski resort");
				return false;
			}

		});

}

function showSwitch() {
	$("#switchForm").show();
	$("#switchGo").show();
	$("#switchNo").show();

	$("#switchBtn").hide();
	$("#send-message").hide();
	$("#shareBtn").hide();
	$("#chatMessages").hide();
}

function hideSwitch() {
	$("#switchForm").hide();
	$("#switchGo").hide();
	$("#switchNo").hide();

	$("#switchBtn").show();
	$("#send-message").show();
	$("#shareBtn").show();
	$("#chatMessages").show();
}