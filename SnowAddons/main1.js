// Notes + Credit at the END

// 1.
// Importing stuff
//

import { prefix2, data } from "./SnowAddonsData";
import Config from "./Config"
//const SnowAddons = data
import RenderLib from "../RenderLib/index.js";
import "./features"

const apiKey = Config.APIKEY;

//test
ChatLib.chat(`${prefix2} &7Loaded Succefully!`)


// 2.
// All commands here
// 

//Main command
register("command", (args) => {
    argument = args
    if (argument == "help" || argument == "") {
        ChatLib.chat("&e[&6SnowAddons Help Menu&e]");
        if (Config.counterActive) {
            ChatLib.chat("&rTerminalCounter is &aactive");
            ChatLib.chat("&e➨ &7/terminal &e- &bPrefix for all commands in this");
            ChatLib.chat("&e➨ &7/terminal reset &e- &bTo reset all counters");
            ChatLib.chat("&e➨ &7/terminal statistics&8, &7stats &e- &bShows your statistics");
            ChatLib.chat("&e➨ &7/terminal help&8, &7/SnowAddons &e- &bDisplays this help menu");

        } else {
            ChatLib.chat("&rTerminalCounter is &cinactive.");
            ChatLib.chat("&e➨ &7/terminal &e- &bPrefix for all commands in this");
            ChatLib.chat("&e➨ &7/terminal reset &e- &bTo reset all counters");
            ChatLib.chat("&e➨ &7/terminal statistics&8, &7stats &e- &bShows your statistics");
            ChatLib.chat("&e➨ &7/terminal help&8, &7/t help &e- &bDisplays this help menu");
        }
    } else if (argument == "toggle") {
        if (!Config.counterActive) {
            Client.showTitle("&e&lIt's now &4shown.", "", 10, 30, 10);
            Config.counterActive = true;
        } else {
            Client.showTitle("&e&lIt's now &4Hidden.", "", 10, 30, 10);
            Config.counterActive = false;
        }
    } else if (argument == "stats") {
        terminalCount = data.totalTerminals
        deviceCount = data.totalDevices
        leversCount = data.totalLevers
        crystalsCount = data.totalCrystals

        ChatLib.chat("&e➨ &6Total terminals: " + terminalCount)
        ChatLib.chat("&e➨ &6Total devices: " + deviceCount) 
        ChatLib.chat("&e➨ &6Total levers: " + leversCount)  
        ChatLib.chat("&e➨ &6Total crystals: " + crystalsCount)  
    } else if (argument == "statistics") {
        terminalCount = data.totalTerminals
        deviceCount = data.totalDevices
        leversCount = data.totalLevers
        crystalsCount = data.totalCrystals

        ChatLib.chat("&e➨ &6Total terminals: " + terminalCount)
        ChatLib.chat("&e➨ &6Total devices: " + deviceCount) 
        ChatLib.chat("&e➨ &6Total levers: " + leversCount)   
        ChatLib.chat("&e➨ &6Total crystals: " + crystalsCount) 
    } else if (argument == "reset") {
        reset()
    }
}).setName("terminal").setName("t")

// Enter dungeon floors commands



// Command that opens the main gui (gui from Vigilance)
register("command", (args) => {
    argument = args
    if (argument == "api") {
        ChatLib.chat("&8[&b&lSnowAddons API&8]&r " + apiKey);
    } else if (argument == "sus" || argument == "SusImage" || argument == "uwu") {
        ChatLib.chat("&8[&b&lSnowAddons SusImage&8]&r " + "https://i.imgur.com/fZh6GT4.png")
    } else {
        Config.openGUI()
    } 
}).setName("SnowAddons").setName("sa");


// First Install
register("step", () => {
    if (!data.firstTime) return
    data.firstTime = false
    data.save()
    let msgs = [
        `&a&lThank you for installing SnowAddons!\n`,
        `&aTo get started, use &b/sa&a.`
    ]
    ChatLib.chat(`&b&m${ChatLib.getChatBreak(" ")}`)
    msgs.map(a => ChatLib.chat(ChatLib.getCenteredText(a)))
    ChatLib.chat(`&b&m${ChatLib.getChatBreak(" ")}`)
}).setFps(5)


// 3.
// A function used in a command
//


function reset() {
    data.totalTerminals = 0;
    data.totalDevices = 0;
    data.totalLevers = 0;
    data.totalCrystals = 0;
}

/*
4. Credit and extra notes



Credit:
 I'd like to thank the ScathaAlert and Bloom modules for helping me SOOOO MUCH. Like I basically copied everything, modified some stuff here and there and I got my module done (sorta, hehe).


Contact: Snomn#3858 (Don't just send me a random friend request, I'm most likely gonna decline it)

*/