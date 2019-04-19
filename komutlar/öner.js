const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {

    let mesaj = args.join(" ");
    if(mesaj.length < 0) return msg.reply("Bir mesaj giriniz.");

    let kisi = client.users.get("485515836707176458");
    let embed = new Discord.RichEmbed()
    .setAuthor(msg.author.tag + " adlı kişiden bir öneri", msg.author.avatarURL)
    .setColor("RANDOM")
    .addField("Gönderen Kişi ID", msg.author.id, true)
    .addField("Mesaj İçeriği", mesaj, true)
    .setFooter(client.user.tag + " v1.1");

    kisi.send(embed);

    msg.delete().catch(O_o=>{});

    msg.channel.send("Öneriniz için teşekkür ederiz.").then(msg => msg.delete(3000));
}
module.exports.help = {
    name: "öner"
}
