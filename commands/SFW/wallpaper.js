const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "wallpaper",
  category: "SFW",
  description: "sends random wallpaper",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.wallpaper());

        const wallpaper = new Discord.MessageEmbed()
        .setTitle("Random Wallpaper")
        .setImage(owo.url)
        .setColor(`#000000`)
        .setURL(owo.url);
        message.channel.send(wallpaper);

}

      work();
}
                };