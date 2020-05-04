'use strict';
require('dotenv').config({ silent: true });

// dependencies
const express = require('express');
const botTelegram = require('node-telegram-bot-api');
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const app = express();

/**
 * Session id is returned from the createSession call, and used
 * to send a message to the corresponding session
 */
let sessionId = {}

/**
 * Insert your Credentials accordingly
 * the project will work if you set your ENV variables correctly,
 * you must edit the file .env.example to .env and switch your credentials (README.MD)
 */
const wAssistant = new AssistantV2({
	authenticator: new IamAuthenticator({
    apikey: process.env.SERVICE_API_KEY,
  }),
	version: process.env.WATSON_ASSISTANT_VERSION,
	url: process.env.WATSON_URL,
	disableSslVerification: true, // disable SSL
});

wAssistant.createSession({
  assistantId: process.env.ASSISTANT_ID
})
  .then(res => sessionId = res.result.session_id)
  .catch(err => {
    console.log(err);
  });

/**
 * Initializing bot using your generated token on Telegram /botfather (README.MD)
 */
const telegram = new botTelegram(process.env.TOKEN_TELEGRAM, { polling: true });

telegram.on('message', (msg) => {
	const chatId = msg.chat.id;

	wAssistant.message({
		sessionId: sessionId,
		assistantId: process.env.ASSISTANT_ID,
		input: {
			message_type: 'text',
			text: msg.text
		},
	},(err, response) => {
		if (err)
			console.log('error:', err);
		else {
			const messageResponse = response.result.output.generic[0].text;
			telegram.sendMessage(chatId, messageResponse);
		}
	});
});

module.exports = app;
