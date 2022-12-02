import PBObject from "PersistentData";

const prefix2 = '&8[&b&lSnowAddons&8]&r &7&l> &r';
const data = new PBObject("SnowAddons", {
    "firstTime": true,
    "counterActive": true,
    "pixelx": 160,
    "pixely": 160,
    "totalTerminals":0,
    "totalDevices": 0,
    "totalLevers": 0,
    "totalCrystals": 0,
});
export { data }
// export default class TerminalCounterData {
//     constructor() {
//         this.data = data;
//     }
// }

export { prefix2 }