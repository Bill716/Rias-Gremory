const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "dog",
  category: "SFW",
  description: "sends random dog image",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.woof());

        const dog = new Discord.MessageEmbed()
        .setTitle("Random dog Image")
        .setImage(owo.url)
        .setColor(`#000000`)
        .setURL(owo.url);
        message.channel.send(dog);

}

      work();
}
                };