const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {

    const miktar = parseInt(args[0], 10);

    if(miktar.length < 2 || miktar.length > 100)
        return msg.content.send("Miktar 2\'den az veya 100\'den fazla olmamalı!").then(msg => msg.delete(3000));
    
    const fetched = await msg.channel.fetchMessages({limit: miktar});
    msg.channel.bulkDelete(fetched)
    .catch(hata => console.log(`Hata: ${hata}`));

    msg.channel.send("`" + fetched + "` tane mesaj silindi!")
    .then(msg => msg.delete(3000)); // 3 saniye sonra mesajı siler
}

module.exports.help = {
    name: "sil"
}
