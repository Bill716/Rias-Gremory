const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "lewdnekogif",
  category: "NSFW",
  description: "Sends random nsfw neko gfi",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

  //Checks channel for nsfw
  var errMessage = "This is not an NSFW Channel";
  if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 3000 })
      })
      
  }

        async function work() {
        let owo = (await neko.nsfw.nekoGif());

        const lewdnekogif = new Discord.MessageEmbed()
        .setTitle("NSFW Neko Gif")
        .setImage(owo.url)
        .setColor(`#FF0000`)
        .setURL(owo.url);
        message.channel.send(lewdnekogif);

}

      work();
}
                };