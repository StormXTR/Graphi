const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    if(!msg.member.hasPermission("MANAGE_MESSAGES")){
        return msg.channel.send("Bu komutu kullanmak için gerekli izine sahip değilsin!");
    }
        let mesaj = args.join(" ");

        msg.delete().catch(O_o=>{}); // mesaj yakalama ve silme
        msg.channel.send(mesaj);

}

module.exports.help = {
    name: "yazdır"
}
