const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(msg.author.tag + " adlı kişi Yardım istedi", msg.author.avatarURL)
    .setColor("RANDOM")
    .setThumbnail(client.user.avatarURL)
    .addField("\'botbilgi", "Bot Hakkındaki bilgileri gösterir.",true)
    .addField("\'öner <mesaj>", "Bot önerilerinizi buradan ulaştıra bilirsiniz.",true)
    .setFooter(client.user.tag + " v1.1");
    
    msg.delete().catch(O_o=>{});
    msg.channel.send(embed);
}

module.exports.help = {
    name: "yardım"
}
