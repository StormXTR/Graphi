const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {

    msg.member.send("Deneme Mesaj");

}
module.exports.help = {
    name: "mesaj"
}
