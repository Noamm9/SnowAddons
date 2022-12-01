import { data } from "../SnowAddonsData";
import Config from "../Config"
//const SnowAddons = new SnowAddonsData();
register("chat", (msg) => {
    if (!Config.bigSpecial270Message) return;
    let fullMessage = ChatLib.getChatMessage(msg); //making the message into a variable
    let lowerCaseFullMessage = fullMessage.toLowerCase()
    let playerName = Player.getName()
    if (lowerCaseFullMessage.includes(`270 score`) && fullMessage.indexOf(playerName) == -1 && fullMessage.includes("Party") && fullMessage.indexOf(":") != -1) { //detecting score message and making sure it's not sent by the user itself(to prevent spam and also it's weird) and making sure it's only in party chat //making sure it's send by a player
        ChatLib.command(`pc ゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜ ゛゜゛████゜████゛████゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛ ゜゛゜゛゜゛█゛゜゛゜█゜█゜゛█゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜ ゛゜゛゜██゛゜゛゜█゜゛█゛゛█゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛ ゜゛゜█゜゛゜゛゜█゜゛゜█゜゛█゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜ ゛゜゛████゜゛█゛゜゛████゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛ ゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜`)
    }     
})