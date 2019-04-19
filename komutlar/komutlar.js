const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    msg.channel.sendCode("asciidoc", "= Yardım = ",
    "Merhaba"
    );
}

module.exports.help = {
    name: "yardım"
}
