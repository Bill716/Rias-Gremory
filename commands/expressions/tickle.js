const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "tickle",
  category: "expressions",
  description: "tickles a mentioned user",
  usage: "[command] + [user]",
  run: async (client, message, args) => {
  //command

        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone to tickle');

        async function work() {
        let owo = (await neko.sfw.poke());

        const tickleembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been tickled ")
        .setDescription((user.toString() + " got tickled by " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#000000`)
        .setURL(owo.url);
        message.channel.send(tickleembed);

}

      work();
}
                };