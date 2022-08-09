const Discord = require("discord.js"),
disbut = require("discord-buttons");

exports.run = async (client, message, args) => {
    var help = new Discord.MessageEmbed()
    .setAuthor('Help :')
    .setDescription(`Prefix : ${client.config.prefix}\nList of commands :`)
    .addField('NSFW  :underage: :', '`4k`, `futa`, `gonewild`, `blowjob`, `hthigh`, `feet`, `hyuri`, `lewdneko`, `paizuri`, `thigh`, `anal`, `ass`, `hentai_anal`, `boobs`, `hanal`, `hass`, `hboobs`, `hentai`, `hkitsune`, `hmidriff`, `hneko`, `holo`, `kemonomimi`, `neko`, `pgif`, `pussy`, `yaoi`')
    .addField('NSW :', '`food`, `coffee`')
    .addField('Other :', '`help`, `gah`, `kanna`, `stats`')
    .setTimestamp()

    message.channel.send(help)
};

exports.help = {
  name: "help",
  description: "Give all commands of the bot.",
  usage: "help",
  example: "help"
};

exports.conf = {
  aliases: [],
  cooldown: 5 // Integer = second.
};