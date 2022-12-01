import { data } from "../SnowAddonsData";
import Config from "../Config"
//const SnowAddons = new SnowAddonsData();


register("chat", (msg) => {
    if (!Config.watcherClearedNotifier) return
    let fullMessage = ChatLib.getChatMessage(msg); //making the message into a variable
    let fullMessage1= fullMessage.removeFormatting()
    let scoreboardInfoData = Scoreboard.getLines()
    let scoreboardInfo = scoreboardInfoData.join()
    if (fullMessage1 == "[BOSS] The Watcher: You have proven yourself. You may pass.") {
        if (!scoreboardInfo.includes("(F7)")) { //making sure it's in floor 7
            Client.showTitle("&dWATCHER CLEARED", "", 5, 45, 5);
            World.playSound("ambient.weather.thunder", 1, 1);
            World.playSound("mob.cow.hurt", 1, 4)
            World.playSound("random.orb", 1, 5.5);
            World.playSound("random.orb", 1, 6);
        }
    }
})
