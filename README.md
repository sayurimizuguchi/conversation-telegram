# conversation-telegram

Basic example of how to integrate your Watson chatbot with Telegram app.

### Steps on Telegram app:

#### 1. First, open your Telegram app, and tap on search button, type `@BotFather`.

#### 2. Send a `/newbot` command message and:
  - Enter your the name of your Chatbot
  - Enter your Username:
        * E.g: `WatsonChat<anyOtherNames>Bot` (Replace `<anyOtherNames>` with whatever you would like to)

#### 3. Once created, the `@BotFather` will give you an `TOKEN`, *save it*


### Steps for using the repo:

#### 1. Clone the repository or download it
  - [Download](https://github.com/sayurimizuguchi/conversation-telegram/archive/master.zip)
  
#### 2. Rename the env.example for `.env`, add your `TOKEN` & Watson Assistant credentials.
  - Token is the code generated by @BotFather in your conversation on Telegram. (Check in `@BotFather` conversation)

#### 3. Run the command `npm install --save` and the required packages will be installed:
   - dotenv
   - express
   - ibm-watson
   - node-telegram-bot-api
   - eslint

#### 4. Run the command `node app` to start your server!
   - `Use localhost:8080 on the browser to check if the server is working`

#### 5. Time of testing your bot!
 - Open your Telegram app, tap _search_, and type your bot `username` that you have created. (You can also check in `@BotFather` conversation)
 - Try to sent a message!


#### 6. Troubleshooting

- "My server is returning an error" Don't forget you need to rename the file `.env.example` with `.env` for the Enviroment Variables be recognized. If not, you will get an error message when try to start the server as the information will not be found.

##### The `WATSON_URL` might depends on the Region of your Watson API, check this [link](https://cloud.ibm.com/docs/containers?topic=containers-regions-and-zones) to know more about which URL you need to use according to your Cloud setup. Below I'm adding the most common ones

##### Service endpoints by location

- Dallas: https://api.us-south.assistant.watson.cloud.ibm.com
- Washington, DC: https://api.us-east.assistant.watson.cloud.ibm.com
- Frankfurt: https://api.eu-de.assistant.watson.cloud.ibm.com
- Sydney: https://api.au-syd.assistant.watson.cloud.ibm.com
- Tokyo: https://api.jp-tok.assistant.watson.cloud.ibm.com
- London: https://api.eu-gb.assistant.watson.cloud.ibm.com
- Seoul: https://api.kr-seo.assistant.watson.cloud.ibm.com

###### This code is based on [Renato Leal](https://gist.github.com/renatodossantosleal/a963eff0b3665326f975aabf19ab37ee) example.
