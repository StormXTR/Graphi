const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {

    if(!msg.member.hasPermission("ADMINISTRATOR")) {
        return msg.reply("Bu mesajı sadece yetkililer kullanabilir!");
    }
    else{
        let mesaj = args.join(" ");
        if(mesaj.length < 0){
            return msg.channel.send("Bir mesaj giriniz.");
        }

        msg.guild.members.forEach(function(uyeler) {
            let embed = new Discord.RichEmbed()
            .setTitle("Dm Özel Mesaj")
            .setColor("RANDOM")
            .addField("Mesaj İçeriği", mesaj, true)
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp();
            uyeler.user.send(embed);
        });
        msg.delete().catch(O_o=>{});
        msg.reply("Mesajınız Gönderildi!").then(msg => msg.delete(3000));
    }
   
}

module.exports.help = {
    name: "ozelmesaj"
}
