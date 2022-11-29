import { data } from "../SnowAddonsData";
import Config from "../Config"
//const SnowAddons = new SnowAddonsData();

register("chat", (msg) => {
    if (!Config.showExtraStats) return;
    let fullMessage = ChatLib.getChatMessage(msg); //making the message into a variable
    fullMessage1 = fullMessage.removeFormatting()
    if (fullMessage1.includes(`Catacombs Experience`)) { //making sure the dungeon has ended
        if (fullMessage1.indexOf(":") == -1) { //making sure it's not send by a player
                ChatLib.command("showextrastats")
        }  
    }
})