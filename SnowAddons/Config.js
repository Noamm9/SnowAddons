//import SnowAddonsData from "./SnowAddonsData";
//const SnowAddons = new SnowAddonsData();

import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
    @SliderProperty
} from '../Vigilance/index';

@Vigilant("SnowAddons", "SnowAddons", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General", "Dungeon", "Automatic Messages", "Terminal"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})
class Config {
    constructor() {
        this.initialize(this)
        this.setCategoryDescription("General", 
        "&8[&b&lSnowAddons&8]\n\n" +
        "&e➜ &7/SnowAddons&8, &7/sa &e- &bOpens this menu\n" +
        "\n" +
        "&8[&b&lAutomatic Messages&8]\n\n" +
        "&cAll settings in this category are &lUse At Your Own Risk.\n" +
        "&r&7The automatic death message feature should be safe though\n" +
        "\n" +
        "&8[&b&lTerminal&8]\n\n" +
        "&e➜ &7/terminal reset &e- &bTo reset all counters\n" +
        "&e➜ &7/terminal statistics&8, &7stats &e- &bShows your statistics\n" +
        "&e➜ &7/terminal help &e- &bGives a help menu in chat\n" +
        "&e➜ &7/scanmap &e- &bWill scan the map for terminals and highlight them. You can use this if the automatic scans somehow doesn't work.\n" +
        "\n\n" +
        "&bSnomn123 is very cool and smart and definetly knows everthing"
        )
    }

    speedMoveGui = new Gui()
    partyOverlayMoveGui = new Gui()
    runSplitsMoveGui = new Gui()
    cooldownMoveGui = new Gui()
    runOverviewMoveGui = new Gui()
    terminalCounterMoveGui = new Gui()

        // ---------------------------------------------------------------
    // General

    // ---------------------------------------------------------------
    @TextProperty({
        name: "Hypixel Api Key",
        description: `&7Put your api key here to get some feautures to function!&7"`,
        category: "General",
        subcategory: "API",
        placeholder: "Put your api key here!"
    })
    APIKEY = "";
    

    // ---------------------------------------------------------------
    // Dungeon

    // ---------------------------------------------------------------
    @SwitchProperty({
        name: "Rabbit Hat Notifier",
        description: "&7Gives a alert when the watcher has been &ccleared &7in &cfloor 7",
        category: "Dungeon",
        subcategory: "Blood Room Alerts"
    })
    rabbitHatNotifier = false

    @SwitchProperty({
        name: "Blood Door Opened Notifier",
        description: "&7Gives an alert when the &cblood door&7 has been opened",
        category: "Dungeon",
        subcategory: "Blood Room Alerts"
    })
    bloodOpenedNotifer = false

    @SwitchProperty({
        name: "Watcher Ready",
        description: "&7Gives an alert when the watcher is ready to clear in &call floors",
        category: "Dungeon",
        subcategory: "Blood Room Alerts"
    })
    watcherReadyNotifier = false

    @SwitchProperty({
        name: "Watcher Cleared",
        description: "&7Gives an alert when the watcher has been cleared in &call floors &7except &cfloor&7. Use Rabbit Hat Notifier for floor 7",
        category: "Dungeon",
        subcategory: "Blood Room Alerts"
    })
    watcherClearedNotifier = false

    @SwitchProperty({
        name: "Bonzo Notifier",
        description: "&7Gives an alert when &cbonzo&r is hitable",
        category: "Dungeon",
        subcategory: "Boss Alerts"
    })
    bonzoNotifier = false

    @SwitchProperty({
        name: "Scarf Notifier",
        description: "&7Gives an alert when &cScarf&r and his &dminions&r spawn!",
        category: "Dungeon",
        subcategory: "Boss Alerts"
    })
    scarfNotifier = false

    @SwitchProperty({
        name: "The Professor Notifier",
        description: "&7Gives an alert when &cThe Professor&r spawns, and when to go to &dmid&r!",
        category: "Dungeon",
        subcategory: "Boss Alerts"
    })
    professorNotifier = false
    

    @SwitchProperty({
        name: "Show Extra Stats",
        description: "&7Automatically runs &c/showextrastats &7at the end of the run to show you extra strats (secrets, deaths, enemies killed and total damage)",
        category: "Dungeon",
        subcategory: "Show Extra stats"
    })
    showExtraStats = false

    @SwitchProperty({
        name: "AutoRestart",
        description: "&c&l&nWARNING: COULD BE CONSIDERED AS INVWALK IF YOU ARE OPENING A CHEST, IN THE ESCAPE MENU\n&c&l&nOR IN YOUR INVENTORY\n\n&7Automatically re-enters the dungeon you entered once it's finished with a &ccooldown&7 you choose yourself.\n\n&aRequires 5/5 player in the party \n&4You could potentially warp out when you have profit",
        category: "Dungeon",
        subcategory: "Auto Restart Dungeon"
    })
    autoRestart = false

    @SliderProperty({
        name: "Delay",
        description: "&7Delay until starts the dungeon agains, for the AutoRestart.\n&bDelay is in &9milliseconds &7(1000ms = 1s)",
        category: "Dungeon",
        subcategory: "Auto Restart Dungeon",
        min: 8000,
        max: 25000
    })
    autoRestartDelay = 12000;

    @SwitchProperty({
        name: "KeyBind AutoRestart",
        description: "&8[&3Tip&8] &9Much more safer than auto restart\n&7When you press a key, automatically re-enters the dungeon you entered once it's finished, ignoring the delay.\n&7Keybind can be found in: ESC > OPTIONS > CONTROLS\n&aRequires 5/5 player in the party",
        category: "Dungeon",
        subcategory: "Auto Restart Dungeon"
    })
    keybindAutoRestart = false

    
    // ---------------------------------------------------------------
    // Automatic Actions

    // ---------------------------------------------------------------
    

    @SwitchProperty({
        name: "300 Score",
        description: "&c&lWARNING: USE AT YOUR OWN RISK&r\n&r&7Automatically says in party chat a special 300-score message after a party member said it",
        category: "Automatic Messages",
        subcategory: "Special Score Message"
    })
    special300Message = false

    @SwitchProperty({
        name: "270 Score",
        description: "&c&lWARNING: USE AT YOUR OWN RISK&r\n&r&7Automatically says in party chat a special 270-score message after a party member said it",
        category: "Automatic Messages",
        subcategory: "Special Score Message"
    })
    special270Message = false

    @SwitchProperty({
        name: "Toxic Death Message",
        description: `&7Will automatically say what you decide(&cbellow&7) when a player dies. \n&c&lWARNING: THIS IS TOXIC AS HELL`,
        category: "Automatic Messages",
        subcategory: "Toxic Death Message"
    })
    deathAction = false

    @TextProperty({
        name: "Message to say in chat",
        description: `&7Write your toxic message that will be sent everytime a player dies. If you write "&cplayer&7", it will be replaced by the IGN of the player who died. Example: "&cplayer died and this is why he's not in my friend list&7"`,
        category: "Automatic Messages",
        subcategory: "Toxic Death Message",
        placeholder: "Toxic Death Message"
    })
    deathActionMessage = "";


    // ---------------------------------------------------------------
    // Terminal

    // ---------------------------------------------------------------
  

    @SwitchProperty({
        name: "Terminal Counter",
        description: "Toggle the terminal counter. It will not count your terminal while this is disabled.",
        category: "Terminal",
        subcategory: "Terminal Counter"
    })
    counterActive = false


    @ButtonProperty({
        name: "Move",
        description: "Move the TerminalCounter display text",
        category: "Terminal",
        subcategory: "Terminal Counter",
        placeholder: "Move"
    })
    MoveTerminalGui() {
        this.terminalCounterMoveGui.open()
    };

    @SwitchProperty({
        name: "Terminal Highlighter",
        description: "Toggle the terminal highlighter. The terminal highlighter will highlight the terminals (&aGreen &7For Active, &cRed &7for Inactive)",
        category: "Terminal",
        subcategory: "Terminal Highlighter"
    })
    overlayActive = false
}
export default new Config()