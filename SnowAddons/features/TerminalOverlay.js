import { data } from "../SnowAddonsData";
import Config from "../Config"
//const SnowAddons = new SnowAddonsData();
import RenderLib from "../../RenderLib/index";

let phase3 = false
let queueRenderRed = []
let queueRenderGreen = []
register('renderWorld', () => {
    if (!Config.overlayActive) return;
    queueRenderRed.forEach( (i) => {
        RenderLib.drawInnerEspBox(i.x + 0.5, i.y, i.z + 0.5, 1.05, 1.05, 1, 0, 0, 0.4, true); // Red box
        Tessellator.drawString('Inactive Terminal', i.x + 0.5, i.y + 1, i.z + 0.5, Renderer.color(255, 20, 0), true, 0.05, false)
    })
    queueRenderGreen.forEach( (i) => {
        RenderLib.drawInnerEspBox(i.x + 0.5, i.y, i.z + 0.5, 1.05, 1.05, 0, 1, 0.3, 0.4, true) // Red box
        Tessellator.drawString('Inactive Terminal', i.x + 0.5, i.y + 1, i.z + 0.5, Renderer.color(0, 255, 20), true, 0.05, false)
    })
});



register("command", (msg) => {
    ScanMap()
}).setName("ScanMap");




/*

    Auto Scans
    --



*/


register("chat", (msg) => {
    fullMessage = ChatLib.getChatMessage(msg)
    fullMessage1 = fullMessage.removeFormatting()
    if (fullMessage1.includes("[BOSS] Necron: Goodbye.")) {
        queueRenderGreen = []
        queueRenderRed = []
        phase3 = false
    }
})

register("chat", (msg) => {
    fullMessage = ChatLib.getChatMessage(msg); //making the message into a variable
    fullMessage1 = fullMessage.removeFormatting()
    if (fullMessage1.includes("activated a terminal") && fullMessage.indexOf(":") == -1) { //Detecting terminals
        new Thread(() => {
                Thread.sleep(1500)
                ScanMap()
        }).start()
    } else if (fullMessage1.startsWith("[BOSS] Goldor")) {
        ScanMap()
    }
});


register("chat", (msg) => {
    fullMessage = ChatLib.getChatMessage(msg)
    fullMessage1 = fullMessage.removeFormatting()
    if (fullMessage1.includes("[BOSS] Goldor: Little ants, plotting and scheming, thinking they are invincible…")) {
        ScanMap()
        phase3 = true
        ChatLib.chat(phase3)
    }    
})

register("step", () => {
    if (phase3 == true) {
       //timeout = setTimeout(ScanMap(), 1200)
       //setTimeout(ScanMap(), 3000);
       ScanMap()
    }
}).setDelay(3)

function ScanMap () {
    //ChatLib.chat("&bWell at least I went here")
    queueRenderRed = []
    queueRenderGreen = []
    listEntitiesData1 = World.getAllEntitiesOfType((net.minecraft.entity.item.EntityArmorStand))
    listTileEntitiesData1 = World.getAllTileEntitiesOfType(net.minecraft.tileentity.TileEntityCommandBlock)
    //console.log(listEntitiesData1.join())
    listTileEntitiesData1.forEach((i) => {
        listEntitiesData1.forEach((i2) => {
            if (i2.name.includes("Inactive Terminal")) {
                if ((i2.x - i.x) > -3 && (i2.x - i.x) < 3 && (i2.y - i.y) > -3 && (i2.y - i.y) < 3 && (i2.z - i.z) > -3 && (i2.z - i.z) < 3) {
                    //ChatLib.chat("&8&c FOUND! &r&9" + i2 + '&e ' + i + "&6 " + (i2.x - i.x))
                    queueRenderRed.push(i)
                }      
            } else if (i2.name.includes("Terminal Active")) {
                if ((i2.x - i.x) > -3 && (i2.x - i.x) < 3 && (i2.y - i.y) > -3 && (i2.y - i.y) < 3 && (i2.z - i.z) > -3 && (i2.z - i.z) < 3) {
                    //ChatLib.chat("&8&a FOUND! &r&9" + i2 + '&e ' + i + "&6 " + (i2.x - i.x))
                    queueRenderGreen.push(i)                   
                }
            }
        })
    })
}

