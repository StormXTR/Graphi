const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {

    let miktar = parseInt(args[0], 10);

    if(isNaN(miktar)){
        msg.delete();
        return msg.reply("Bir sayı girmelisin!")
            .then(msg => msg.delete(3000));
    }

    if(miktar < 2 || miktar > 100)
        return msg.reply("miktar 2\'den fazla ve 100\'den az olmalı!").then(msg => msg.delete(3000));

    if(!msg.member.hasPermission("MANAGE_MESSAGES")) {
        return msg.reply("Bu komutu kullanmak için gerekli izine sahip değilsin!")
            .then(msg => msg.delete(3000));
    }
            const fetched = await msg.channel.fetchMessages({limit: miktar + 1});
            msg.channel.bulkDelete(fetched)
                .catch(err => console.log(err));

            msg.channel.send("`" + miktar + "` tane mesaj silindi!")
                .then(msg => msg.delete(3000));
}

module.exports.help = {
    name: "sil"
}
