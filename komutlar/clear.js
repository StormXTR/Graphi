const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {

    let miktar = args.join(" ");

    if (!msg.member.hasPermission("MANAGE_MESSAGES")){
        return msg.reply("Bu komutu kullanmak için gerekli izine sahip değilsin!");
    }else{
        msg.channel.bulkDelete(miktar).then(() => {
            msg.channel.send("`" + miktar + "` tane mesaj silindi!").then(msg => msg.delete(3000));
        });
    }

}

module.exports.help = {
    name: "sil"
}
