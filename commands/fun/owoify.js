const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
name: "owoify",
category: "fun",
description: "owoifys text",
usage: "[command | your text]",
run: async (client, message, args) => {
//command
async function work() {

  let coolusertext = args.join(" ");
    if (!coolusertext) return message.channel.send('Please type some text to owoify.')
    if (coolusertext.length > 200) return message.channel.send(`I can't owoify your text, it is over 200 characters long!`)
  
          let owo = await neko.sfw.OwOify({text: coolusertext});
          message.channel.send(owo.owo).catch(error => {
              console.error(error);
          });
  
        }
  
        work();
}
};