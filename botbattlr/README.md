# Bot Army

This is a web app that allows you to create and manage your own bot army. You can browse through different bots, add them to your army, release them, or discharge them permanently.

## Installation

To run this app locally, you need to have Node.js and npm installed on your machine. Then, follow these steps:

- Clone this repository to your local machine.
- Install the dependencies.
- Run `npm run dev` to launch the app in your browser.

## Usage

The app has two main components: `BotCollection` and `YourBotArmy`.

- `BotCollection` displays the profiles of all available bots. You can see their name, image, and description. 
- `YourBotArmy` shows the bots that you have added to your army using `add Bots`button. You can see their name, and image. You can also remove them from your army by clicking on `Release` button or discharge them permanently by clicking the `DELETE`button.

To add a bot to your army, simply click on  `add Bots`it in the `BotCollection`. The bot will appear in the `YourBotArmy` component. You can only add a bot once, and the bot will not disappear from the `BotCollection`.

To release a bot from your army, click on `Release` in the `YourBotArmy`. The bot will disappear from the `YourBotArmy` component, but it will still be available in the `BotCollection`.

To discharge a bot from your service forever, click the red `DELETE` button on the bot in the `YourBotArmy`. The bot will be deleted from both the backend and the frontend, and you will not be able to add it again.