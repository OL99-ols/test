
                (async()=>{
                //hello :) hehe
                let process = require('process');
                process.on('uncaughtException', function (err) {
                    console.log(err);
                  });

                    const AntiLinkClient = require("anti-link-for-discord");
                    let DIG = require("discord-image-generation")
                    let Discord = require("discord.js")
                    let Database  = require("easy-json-database")
                    let logs = require("discord-logs")
                    let moment  = require("moment")
                     let { DB } = require("quickmongo");
                     let canvas = require("discord-canvas")
                     const Images = require("discord-images")
                     const images = new Images.Client()
                     let { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu }= require("discord.js")
                     let Invite = require("discord-inviter-tracker")
                     let https = require("https")
                                        let { GiveawaysManager }= require("discord-giveaways")
                                        let ytnotifier = require("youtube-notification-module")
                                        let { Player,QueueRepeatMode } = require("discord-player")
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    const s4d = {
                        Discord,
                        database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
                        joiningMember:null,
                        reply:null,
                        tokenInvalid:false,
                        tokenError: null,
                        player:null,
                        manager:null,
                        Inviter:null,
                        notifer:new ytnotifier({channels: [],checkInterval: 50}),
                        checkMessageExists() {
                            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    };
                    const badges = require("discord-badges");
                    s4d.client = new s4d.Discord.Client({
                        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                        partials: ["REACTION"]
                    });    
                    function getBadges(user){
                        return badges.badges(user).then((response) => {
                            return response
                        }).catch((e) => {
                            console.log(e);
                        });
                    } 
                    s4d.Inviter = new Invite(s4d.client)
                    logs(s4d.client);
                    s4d.Inviter.on("WARN",function(e){
                        console.log('WARN: '+e)
                    })
                    s4d.manager = new GiveawaysManager(s4d.client, {
                        storage: './giveaways.json',
                        default: {
                            botsCanWin: false,
                            embedColor: '#FF0000',
                            embedColorEnd: '#000000',
                            reaction: '🎉'
                        }
                    });
                    s4d.player = new Player(s4d.client)
                    let Cooldown = ""
                    if(s4d.database.has('cooldown')){
                        Cooldown = s4d.database.get('cooldown')
                        setInterval(()=>{
                            s4d.database.set('cooldown',Cooldown)
                        },1000)
                    }else{
                        Cooldown = new Set();
                        setInterval(()=>{
                            s4d.database.set('cooldown',Cooldown)
                        },1000)
                    }
                    const { DiscordTogether } = require('discord-together');

                    s4d.client.discordTogether = new DiscordTogether(s4d.client);
                    const antilink = new AntiLinkClient({
                        warnMessage: (message) => '<@'+message.author.id+'>, No links.',
                        muteCount: 5,
                        kickCount: 10,
                        banCount: 15,
                        deleteMessage: true,
                      });
                    function subsequenceFromStartLast(sequence, at1) {
  var start = at1;
  var end = sequence.length - 1 + 1;
  return sequence.slice(start, end);
}


await s4d.client.login('ODYyOTY3MzgyMjE3MzI2NTky.YOgDAQ.NAbaDK5-vxDM31zQrEGKneDSqVY').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('messageCreate', async (s4dmessage) => {
  if (((s4dmessage.content) || '').startsWith('webhook' || '')) {
    (s4dmessage.channel).createWebhook('Spidey Bot','https://discord.com/assets/1f0bfc0865d324c2587920a7d80c609b.png').then(webhook=>{
      webhook.edit({name:(s4dmessage.author.username),avatar:((s4dmessage.author).user.displayAvatarURL({format:"png"})),channel:(s4dmessage.channel).id});
      s4d.client.fetchWebhook((webhook.id),(webhook.token)).then(gwebhook =>{
        gwebhook.send(String((subsequenceFromStartLast(s4dmessage.content, 8))));

      });

    })
  }

});

                    return s4d
                    })();
            