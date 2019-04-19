const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {

    const miktar = parseInt(args[0], 10);

    if(!miktar || miktar.length < 2 || miktar.length > 100)
        return msg.content.send("Miktar boş veya 2 ve 100\'den fazla olmamalı!").then(msg => msg.delete(3000));
    
    const fetched = await msg.channel.fetchMessages({limit: miktar});
    msg.channel.bulkDelete(fetched).catch(hata => console.log(`Hata: ${hata}`));

}

module.exports.help = {
    name: "sil"
}
