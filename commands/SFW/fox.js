const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "fox",
  category: "SFW",
  description: "sends random fox image",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.woof());

        const dog = new Discord.MessageEmbed()
        .setTitle("Random fox Image")
        .setImage("https://foxapi.dev/foxes")
        .setColor(`#000000`)
        .setURL(owo.url);
        message.channel.send(dog);

}

      work();
}
                };
