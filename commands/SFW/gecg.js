const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "gecg",
  category: "SFW",
  description: "Genetically engineered catgirl",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.gecg());

        const wtf = new Discord.MessageEmbed()
        .setTitle("Genetically engineered catgirl")
        .setImage(owo.url)
        .setColor(`#000000`)
        .setURL(owo.url);
        message.channel.send(wtf);

}

      work();
}
                };