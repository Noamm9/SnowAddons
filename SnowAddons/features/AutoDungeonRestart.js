import { data } from "../SnowAddonsData";
import Config from "../Config"
//const SnowAddons = new SnowAddonsData();

register("chat", (msg) => {
    if (!Config.autoRestart) return;
    let fullMessage = ChatLib.getChatMessage(msg); //making the message into a variable
    if (!fullMessage.includes(`Catacombs Experience`) && !fullMessage.indexOf(":") == -1) return;
    new Thread(() => {
        Thread.sleep(Config.autoRestartDelay)
        restartDungeon()
    }).start()
})

const RestartKeybind = new KeyBind("AutoRestart the dungeon", Keyboard.KEY_NONE, "SnowAddons")
register("tick", function(){
    if(RestartKeybind.isPressed()){
        if(Config.keybindAutoRestart) {
            restartDungeon()
        }
    }
});

function restartDungeon() {
    let scoreboardInfoData = Scoreboard.getLines()
    let scoreboardInfo = scoreboardInfoData.join()
    if (scoreboardInfo.includes("(F1)")) ChatLib.command(`joindungeon catacombs 1`)
    if (scoreboardInfo.includes("(F2)")) ChatLib.command(`joindungeon catacombs 2`)
    if (scoreboardInfo.includes("(F3)")) ChatLib.command(`joindungeon catacombs 3`)
    if (scoreboardInfo.includes("(F4)")) ChatLib.command(`joindungeon catacombs 4`)
    if (scoreboardInfo.includes("(F5)")) ChatLib.command(`joindungeon catacombs 5`)
    if (scoreboardInfo.includes("(F6)")) ChatLib.command(`joindungeon catacombs 6`)
    if (scoreboardInfo.includes("(F7)")) ChatLib.command(`joindungeon catacombs 7`)
    if (scoreboardInfo.includes("(M1)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 1`)
    if (scoreboardInfo.includes("(M2)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 2`)
    if (scoreboardInfo.includes("(M3)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 3`)
    if (scoreboardInfo.includes("(M4)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 4`)
    if (scoreboardInfo.includes("(M5)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 5`)
    if (scoreboardInfo.includes("(M6)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 6`)
    if (scoreboardInfo.includes("(M7)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 7`)
    // Could that have been coded in a cooler way? Yes. Do I have the energy to do that and save 3 lines of code? No.
    
}
