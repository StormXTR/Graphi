const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAthor(msg.author.tag + " adlı kişi botbilgi komutunu kullandı",msg.author.avatarURL)
    .addField("Sunucu Sayısı", client.guilds.size,true)
    .addField("Discord JS Sürümü", "v"+Discord.version, true)
    .addField("Ping", client.ping + " MS",true)
    .setThumbnail(client.user.avatarURL)
    .setFooter(client.user.username + " v1.1");

    msg.delete().catch(O_o=>{});
    msg.channel.send(embed);
}

module.exports.help = {
    name: "botbilgi"
}
