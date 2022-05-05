const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "goose",
  category: "SFW",
  description: "sends random goose image",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.goose());

        const goose = new Discord.MessageEmbed()
        .setTitle("Random goose Image")
        .setImage(owo.url)
        .setColor(`#000000`)
        .setURL(owo.url);
        message.channel.send(goose);

}

      work();
}
                };