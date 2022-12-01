import { data } from "../SnowAddonsData";
import Config from "../Config"
//const SnowAddons = new SnowAddonsData();


register("chat", (msg) => {
    if (!Config.watcherReadyNotifier) return
    let fullMessage = ChatLib.getChatMessage(msg); //making the message into a variable
    let fullMessage1= fullMessage.removeFormatting()
    if (fullMessage1.includes("[BOSS] The Watcher: That will be enough for now.")) {
        Client.showTitle("&cWATCHER READY", "", 5, 45, 5);
        World.playSound("ambient.weather.thunder", 1, 1);
        World.playSound("mob.blaze.breathe", 1, 4)
        World.playSound("random.orb", 1, 5.5);
        World.playSound("random.orb", 1, 6);
    }
})
