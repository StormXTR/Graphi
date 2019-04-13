const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    let mesaj = args.join(" ");
    msg.delete().catch(O_o=>{}); // mesaj yakalama ve silme

    msg.channel.sendCode("asciidoc", mesaj);
}

module.exports.help = {
    name: "yazdır"
}
