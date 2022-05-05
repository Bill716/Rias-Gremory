const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "neko",
  category: "SFW",
  description: "sends random cute neko girl",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.neko());

        const neko = new Discord.MessageEmbed()
        .setTitle("Random neko Image")
        .setImage(owo.url)
        .setColor(`#000000`)
        .setURL(owo.url);
        message.channel.send(neko);

}

      work();
}
                };