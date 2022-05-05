const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');


module.exports = {
    name: "fact",
    category: "fun",
  description: "sends a random fact",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

    async function work() {

        let owo = (await neko.sfw.fact());
        message.channel.send(owo.fact).catch(error => {
            console.error(error);
        });

      }

      work();
  }
  };