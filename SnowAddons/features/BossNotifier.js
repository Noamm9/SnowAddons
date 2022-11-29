import { data } from "../SnowAddonsData";
import Config from "../Config"
//const SnowAddons = new SnowAddonsData();

// Bonzo
register("chat", (msg) => {
    if (!Config.bonzoNotifier) return
    let fullMessage = ChatLib.getChatMessage(msg); //making the message into a variable
    let fullMessage1= fullMessage.removeFormatting()
    if (fullMessage1.includes("[BOSS] Bonzo: I can summon lots of undead! Check this out.")) {
        Client.showTitle("&cBONZO", "", 5, 45, 5);
        World.playSound("ambient.weather.thunder", 1, 1);
        World.playSound("mob.cow.hurt", 1, 4)
        World.playSound("random.orb", 1, 5.5);
        World.playSound("random.orb", 1, 6);
    }
})

// Scarf
register("chat", (msg) => {
    if (!Config.scarfNotifier) return
    let fullMessage = ChatLib.getChatMessage(msg); //making the message into a variable
    let fullMessage1= fullMessage.removeFormatting()
    if (fullMessage1.includes("[BOSS] Scarf: ARISE, MY CREATIONS!")) {
        Client.showTitle("&dMinions", "", 5, 45, 5);
        World.playSound("ambient.weather.thunder", 1, 1);
        World.playSound("mob.cow.hurt", 1, 4)
        World.playSound("random.orb", 1, 5.5);
        World.playSound("random.orb", 1, 6);
    }
})

register("chat", (msg) => {
    if (!Config.scarfNotifier) return
    let fullMessage = ChatLib.getChatMessage(msg); //making the message into a variable
    let fullMessage1= fullMessage.removeFormatting()
    if (fullMessage1.includes("[BOSS] Scarf: Did you forget? I was taught by the best! Let's dance.")) {
        Client.showTitle("&cSCARF", "", 5, 45, 5);
        World.playSound("ambient.weather.thunder", 1, 1);
        World.playSound("mob.cow.hurt", 1, 4)
        World.playSound("random.orb", 1, 5.5);
        World.playSound("random.orb", 1, 6);
    }
})

// The Professor
register("chat", (msg) => {
    if (!Config.professorNotifier) return
    let fullMessage = ChatLib.getChatMessage(msg); //making the message into a variable
    let fullMessage1= fullMessage.removeFormatting()
    if (fullMessage1.includes("[BOSS] The Professor: This time I'll be your opponent!")) {
        Client.showTitle("&cPROFESSOR", "", 5, 45, 5);
        World.playSound("ambient.weather.thunder", 1, 1);
        World.playSound("mob.cow.hurt", 1, 4)
        World.playSound("random.orb", 1, 5.5);
        World.playSound("random.orb", 1, 6);
    }
})

register("chat", (msg) => {
    if (!Config.professorNotifier) return
    let fullMessage = ChatLib.getChatMessage(msg); //making the message into a variable
    let fullMessage1= fullMessage.removeFormatting()
    if (fullMessage1.includes("[BOSS] The Professor: I see. You have forced me to use my ultimate technique.")) {
        Client.showTitle("&dMIDDLE", "", 5, 45, 5);
        World.playSound("ambient.weather.thunder", 1, 1);
        World.playSound("mob.cow.hurt", 1, 4)
        World.playSound("random.orb", 1, 5.5);
        World.playSound("random.orb", 1, 6);
    }
})