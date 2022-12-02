import { data }from "../SnowAddonsData";
import Config from "../Config"
//const SnowAddons = new SnowAddonsData();


register("chat", (msg) => {
    if (!Config.rabbitHatNotifier) return;
    let fullMessage = ChatLib.getChatMessage(msg); //making the message into a variable
    let fullMessage1= fullMessage.removeFormatting()
    let scoreboardInfoData = Scoreboard.getLines()
    let scoreboardInfo = scoreboardInfoData.join()
    if (fullMessage1 == "[BOSS] The Watcher: You have proven yourself. You may pass." || fullMessage1.includes(":") && fullMessage1.endsWith("going"))
        if (scoreboardInfo.includes("(F7)")) { //making sure it's in floor 7
                Client.showTitle("&4RABBIT HAT", "", 5, 45, 5);
                World.playSound("random.orb", 1, 1.1);
                World.playSound("random.orb", 1, 1.2);
                World.playSound("random.orb", 1, 1.3);
            }
    })
    