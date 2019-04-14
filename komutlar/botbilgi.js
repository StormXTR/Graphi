const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(client.user.username + " Bot Bilgi")
    .addField("Hizmet verilen sunucu sayısı", client.guilds.size, true)
    .addField("Discord JS Sürümü", "v"+Discord.version, true)
    .addField("Ping", client.ping + " MS",true)
    .setFooter(client.user.username + " v1.0", client.user.avatarURL);

    msg.channel.send(embed);
}

module.exports.help = {
    name: "botbilgi"
}
