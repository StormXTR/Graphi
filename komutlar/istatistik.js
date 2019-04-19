const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(msg.author.tag + " adlı kişi sunucudurum komutunu çalıştırdı", msg.author.avatarURL)
        .setColor("RANDOM")
        .setThumbnail("https://cdn.discordapp.com/icons/"+ client.guild.id + "/" + client.guild.icon + ".png")
        .addField("Sunucu Sahibi", client.guild.owner,true)
        .addField("Kişi Sayısı", client.guild.members.size,true)
        .addField("Sunucunun Bulunduğu bölge", client.guild.region,true)
        .addField("Oluşturulma Tarihi", client.guild.createdAt,true)
        .setFooter(client.user.tag + " v1.1", client.user.avatarURL);
    msg.channel.send(embed);
}
module.exports.help = {
    name: "sunucudurumu"
}
