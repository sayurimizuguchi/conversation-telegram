# conversation-telegram
Based project to understand how to integrate your Chatbot with Telegram.

### Integrate Telegram with Watson Assistant.

#### Steps: 

#### 1. First, open your Telegram app, and search for @BotFather.

#### 2. Send a `/newbot` command message and:
  - Enter your the name of your Chatbot
  - Enter your Username:
        * E.g: `WatsonChat<anyOtherNames>Bot` (Replace `<anyOtherNames>` with whatever you would like to)
        
#### 3. Once created, the @BotFather will give you an TOKEN, *save it*

#### 4. Clone the repository and add your TOKEN/credentials.
  - [Clone](https://github.com/sayurimizuguchi/conversation-telegram/archive/master.zip)
  - Add the saved *TOKEN* in the `.env` file or replace the value on the lign [#30](https://github.com/sayurimizuguchi/conversation-telegram/blob/master/app.js#L30)

#### 5. Run the command `npm install --save` and the required packages will be installed: 
   - dotenv
   - express
   - watson-developer-cloud
   - node-telegram-bot-api


##### Note: Rename the file `.env.example` with `.env` for the Enviroment Variables be available to get.


###### Obs.: This code is based on [Renato Leal](https://gist.github.com/renatodossantosleal/a963eff0b3665326f975aabf19ab37ee) example, updating with Assistant and some releases from Node Telegram API.
