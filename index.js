const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
token: "MTEzMjA2ODI4ODUxMjQwNTU4NQ.GWKB3O.jNLdTTCe18nSzIAN9-vb4eRPcgJUZIipGJ7434",
prefix: "!",
intents: ["MessageContent", "Guilds", "GuildMessages"],
events: ["onMessage", "onMessageDelete"],
// aoiAutoUpdate: true,
database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./db/"
    }
});

//Command Example (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})

//Command Handler loader
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/') 
// const cmdsloader = new aoijs.LoadCommands(bot);
// cmdsloader.load(bot.cmd,'./commands/');

//Status Manager
    bot.status({
        text: "Hiroshima",
        type: "PLAYING",
        time: 2
    });
    bot.status({
        text: "avec la faction Nagasaki",
        type: "PLAYING",
        time: 2
    });
    bot.status({
        text: "Dev by PPC ✨",
        type: "WATCHING",
        time: 2
    });

//Variables
bot.variables({
    color: "#FFFF00",
    footer: "test",
    logs: "1124474983624753253",

    // Errors
    error: ":x: | Une erreure non identifiée est survenue !",
    noperm: ":x: | Vous n'avez pas la permission d'utiliser cette commande !",
    nocperm: ":x: | Vous n'avez pas la permission du bot requise, \`staff\` / \`staffp\` / \`admin\`",
    nobotperm: ":x: | Le bot n'a pas assesz de permissions !",
    nouser: ":x: | Merci de bien précier un utilisateur.",

    // Permissions
    staff: "false", // mute, warn, clear
    staffp: "false", // ban, kick
    admin: "false", // *
})

//Music Related
const {
  AoiVoice,
  PlayerEvents,
  PluginName,
  Cacher,
  Filter,
} = require(`@akarui/aoi.music`);

const voice = new AoiVoice(bot, {
    searchOptions: {
       // soundcloudClientId: "Sound Cloud Id",
        youtubegl: "US",
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
});
voice.addPlugin(PluginName.Cacher, new Cacher("disk" /* or "memory" */));
voice.addPlugin( PluginName.Filter, new Filter( {
    filterFromStart: false,
}));
