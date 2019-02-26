# conversation-telegram
Watson assistant (formely Conversation) integrated with Telegram

1. First, search on your Telegram app for @BotFather, following the pass ONE in this [site](https://developer.ibm.com/recipes/tutorials/how-to-create-a-watson-chatbot-on-nodered/)

2. Save the TOKEN and add in the .env file or on the [#30](https://github.com/sayurimizuguchi/conversation-telegram/blob/master/app.js#L30)

3. Install the packages: dotenv, express, watson-developer-cloud, node-telegram-bot-api.

4. Rename the file .env.example with just: .env.

Obs.: The 4 part is important, if not edited, the project won't work because the app isn't finding your credentials inside the file).



### Obs.: This code is based on [Renato Leal](https://gist.github.com/renatodossantosleal/a963eff0b3665326f975aabf19ab37ee) example, updating with Assistant and some releases from node telegram api
