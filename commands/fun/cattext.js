const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');


module.exports = {
    name: "cattext",
    category: "fun",
  description: "sends owo nya cute anime waifu text stuff",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

    async function work() {

        let owo = (await neko.sfw.catText());
        message.channel.send(owo.cat).catch(error => {
            console.error(error);
        });

      }

      work();
  }
  };