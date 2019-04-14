const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {

    let mesaj = args.join(" ");

    msg.member.send("Duyuru mesaj"+ mesaj);
    msg.delete().catch(O_o=>{});

}
module.exports.help = {
    name: "mesaj"
}
