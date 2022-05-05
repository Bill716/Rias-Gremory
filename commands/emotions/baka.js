const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "baka",
  category: "emotions",
  description: "idiot",
  usage: "[command] or [command] + [user]",
  run: async (client, message, args) => {
  //command

        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone call an idot to');

        async function work() {
        let owo = (await neko.sfw.baka());

        const baka = new Discord.MessageEmbed()
        .setTitle(" IDIOT! ")
        .setDescription((" BAKA!!! " + user.toString()))
        .setImage(owo.url)
        .setColor(`#000000`)
        .setURL(owo.url);
        message.channel.send(baka);

}

      work();
}
};