const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {

    let gidenkanal = client.guild.channels.find(ch => ch.name === "giden");
    let gelenkanal = client.guild.channels.find(ch => ch.name === "gelen");
    let logkanal = client.guild.channels.find(ch => ch.name === "logs")

    if(!gidenkanal && !gelenkanal && !logkanal){
        msg.reply("Bot'un odaları kurmasını onaylıyor musunuz? 10 saniye içerisinde cevaplayın!").then(() => {
            msg.channel.awaitMessage(rp => rp.content === "evet",{
                max: 1,
                time: 10000,
                errors: ['time'],
            })
            .then((collected) => {
                msg.channel.send("** Odalar Kuruluyor **").then(msg => {
                    client.guild.createChannel("gelen" ,"text")
                    client.guild.createChannel("giden" ,"text")
                    client.guild.createChannel("logs" ,"text");
                }).catch(console.error)
            })
            .catch(() => {
                msg.channel.send("** Kurulum iptal edildi **");
            });
        });
    }
}

module.exports.help = {
    name: "kur"
}
