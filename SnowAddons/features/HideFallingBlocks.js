import Config from "../Config"

/* I GOT IT WRONG AHHHHHHHH
const FallingBlockEntity = Java.type("net.minecraft.entity.item.FallingBlockEntity")

register("renderEntity", (entity, pos, ticks, event) => {
    if (!Config.hideFallingBlocks || entity.getClassName() !== "FallingBlockEntity") return
    cancel(event)
}) */

// Correct one
register("RenderEntity", (x) => {
    if (!Config.hideFallingBlocks) return;
    if(x.getName() === "Falling Block") {
        x.getEntity().func_70106_y()
    }
})

register("PacketReceived", (x) => {
    if(x.toString().includes("Entity")) {
        
    }
})