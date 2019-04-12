const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("Kişi Sayısı",client.guilds.size + " sunucu sayısı!");

    msg.channel.send(embed);

}

module.exports.help = {
    name: "botbilgi"
}