module.exports = {
    name: "purge",
    category: "moderation",
    description: "Deletes messages in a text channel or specified number of messages in a text channel.",
    usage: "[COMMAND] OR [COMMAND] + [number of messages]",
    run: async (client, message, args) => {
        message.channel.send(`Command under construction!`);

    }
}
