import { data } from "../SnowAddonsData";
import Config from "../Config"
//const SnowAddons = new SnowAddonsData();



const display = new Text("&aTerminals: &b" + data.totalTerminals)
  .setShadow(true)
  .setAlign(DisplayHandler.Align.CENTER)
  .setMaxWidth(100)
  .setScale(1)
  .setMaxLines(2);

register("renderOverlay", () => {
    if (!Config.terminalCounterMoveGui.isOpen() && (!Config.counterActive)) return
    display.draw(data.pixelx, data.pixely);
})


Config.terminalCounterMoveGui.registerMouseDragged(dragFunction);

function dragFunction(mouseX, mouseY) {
    data.pixelx = mouseX
    data.pixely = mouseY
    globalMouseX = mouseX;
    globalMouseY = mouseY;
    if (mouseX < Renderer.screen.getWidth() / 2) {
        offsetX = mouseX;
    } else {
        offsetX = Renderer.screen.getWidth() - mouseX
    } if (mouseY < Renderer.screen.getHeight() / 2) {
        offsetY = mouseY
    } else {
        offsetY = Renderer.screen.getHeight() - mouseY
    }
    display.setX(data.pixelx)
    display.setY(data.pixely)
}



var fullMessage; //creating the variable
var timeSinceLastDevice = Date.now()
register("chat", (msg) => {
    if (!Config.counterActive) return;
    fullMessage = ChatLib.getChatMessage(msg); //making the message into a variable
    playerName = Player.getName() //getting the username
    if (fullMessage.includes(playerName + " activated a terminal") && fullMessage.indexOf(":") == -1) { //Detecting terminals //making sure the message is not sent by a player
        data.totalTerminals += 1
        display.setString(("&aTerminals: &b" + data.totalTerminals)); 
    } else if (fullMessage.includes(playerName) + " completed a device" && fullMessage.indexOf(":") == -1) { //Detecting Devices //making sure the message is not sent by a player
        if ((Date.now() - timeSinceLastDevice) > 3000) {
            data.totalDevices += 1
            DeviceFunction()
        } 
    } else if (fullMessage.includes(playerName + " activated a lever") && fullMessage.indexOf(":") == -1) { //Detecting Levers //making sure the message is not sent by a player
        data.totalLevers += 1
    } else if (fullMessage.includes(playerName + " picked up an Energy Crystal" && fullMessage.indexOf(":") == -1)) { //Detecting crystals //making sure the message is not sent by a player
        data.totalCrystals += 1 
    }
});

function DeviceFunction(event) {
    timeSinceLastDevice = Date.now()
}





