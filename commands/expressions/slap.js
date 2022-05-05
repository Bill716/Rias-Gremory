const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "slap",
  category: "expressions",
  description: "slaps a mentioned user",
  usage: "[command] + [user]",
  run: async (client, message, args) => {
  //command

        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone to slap');

        async function work() {
        let owo = (await neko.sfw.slap());

        const slapemebd = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been slapped ")
        .setDescription((user.toString() + " got slapped by " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#000000`)
        .setURL(owo.url);
        message.channel.send(slapemebd);

}

      work();
}
                };