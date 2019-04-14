const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {

    let mesaj = args.join(" ");

    let kisi = client.users.get("485515836707176458");
    let embed = new Discord.RichEmbed()
    .setTitle(msg.author.tag + " adlı kişiden bir mesaj")
    .setThumbnail(msg.author.avatarURL)
    .setColor("RANDOM")
    .addField("Gönderen Kişi ID", msg.author.id, true)
    .addField("Mesaj İçeriği", mesaj, true)
    .setTimestamp()
    .setFooter(client.user.tag, client.user.avatarURL);

    kisi.send(embed);

    msg.delete().catch(O_o=>{});

    msg.channel.send("Öneriniz için teşekkür ederiz.").then(msg => msg.delete(3000));
}
module.exports.help = {
    name: "öner"
}
