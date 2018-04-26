'use strict';

require('dotenv').config({ silent: true });

const port = 8080;

//libraries
const express = require('express');
const dotenv = require('dotenv');
var AssistantV1 = require('watson-developer-cloud/assistant/v1');
const tbot = require('node-telegram-bot-api');

var app = express();

//if u want to use some front-end webpage, save in the folder public
app.use(express.static(__dirname + '/public'));

//Assistant, formely conversation
var watsonAssistant = new AssistantV1({
    username: 'conversation_username', //from service credentials
    password: 'conversation_password', 
    version: '2018-02-16',
    url: 'https://gateway.watsonplatform.net/conversation/api'
});

//context object for assistant continue the same conversation
var context = {};

//TELEGRAM  and send message
var telegram = new tbot(process.env.TOKEN_TELEGRAM, { polling: true });

telegram.on('message', function(msg) {
	var chatId = msg.chat.id;	
	
	watsonAssistant.message({
		workspace_id: process.env.WORKSPACE_ID,
		input: {'text': msg.text},
		context: context
	},  function(err, response) {
		if (err)
			console.log('error:', err);
		else {
			context = response.context; /* save the context from the first message, and send again in the next message above */
			telegram.sendMessage(chatId, response.output.text[0]);
		}
	});	
});

app.listen(port, function(req, res) {
  console.log("server starting on port " + port);
});