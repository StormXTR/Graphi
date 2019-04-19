const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {

    const miktar = parseInt(args[0], 10);

    if(miktar.length < 2 || miktar.length > 100)
        return msg.content.send("Miktar 2\'den az veya 100\'den fazla olmamalı!").then(msg => msg.delete(3000));
    
    const fetched = await msg.channel.fetchMessages({limit: miktar});
    msg.channel.bulkDelete(fetched)
    .then(msg => msg.channel.send("`" + fetched + "` tane mesaj silindi!"))
    .catch(hata => console.log(`Hata: ${hata}`));
}

module.exports.help = {
    name: "sil"
}
