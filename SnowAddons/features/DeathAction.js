import { data } from "../SnowAddonsData";
import Config from "../Config"
//const SnowAddons = new SnowAddonsData();


register("chat", (msg) => {
    if (!Config.deathAction) return;
    let fullMessage = ChatLib.getChatMessage(msg); //making the message into a variable
    if (fullMessage.includes(`☠`) && fullMessage.endsWith("became a ghost.") && fullMessage.indexOf(":") == -1) { //making sure that someone died //making sure it's not send by a player
        let deadPlayer1 = fullMessage.split(" ")
        let deadPlayer2 = deadPlayer1.slice(2)
        let deadPlayer3 = deadPlayer2.toString()
        let deadPlayer = deadPlayer3.split(',')[0]
        if (deadPlayer = "You") return;
        let customMessage = Config.deathActionMessage.replace("player", deadPlayer)
        ChatLib.command("pc " + customMessage)         
    } 
})

