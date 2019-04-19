const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    let sicon = msg.guild.iconURL;
    let embed = new Discord.RichEmbed()
        .setAuthor(msg.author.tag + " adlı kişi sunucudurum komutunu çalıştırdı", msg.author.avatarURL)
        .setColor("RANDOM")
        .setThumbnail(sicon)
        .addField("Sunucu Sahibi", msg.guild.owner,true)
        .addField("Kişi Sayısı", msg.guild.members.size,true)
        .addField("Sunucunun Bulunduğu bölge", msg.guild.region,true)
        .addField("Oluşturulma Tarihi", msg.guild.createdAt,true)
        .setFooter(client.user.tag + " v1.1", client.user.avatarURL);
    msg.channel.send(embed);
}
module.exports.help = {
    name: "sunucudurumu"
}
