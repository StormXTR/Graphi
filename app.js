const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const ayar = require("./ayar.json");
client.commands = new Discord.Collection();

    fs.readdir("./komutlar/", (err, files) => {

        if(err) console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() === "js")
        if(jsfile.length <= 0){
            return console.log("Komut Bulunamadı!");
        }

        jsfile.forEach((f, i) => {
            let props = require(`./komutlar/${f}`);
            console.log(`[${i + 1}] - ${f} Yüklendi!`);
            client.commands.set(props.help.name, props);
        });
    });
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
    let kanal = member.guild.channels.find(ch => ch.name === `gelen`);
    let rol = member.guild.roles.find(rol => rol.name === "Üye");    
    member.addRole(rol).catch(console.error);

    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("gelen kanal log")
    .setThumbnail(member.user.avatarURL)
    .addField("İsim",member.user.tag)
    .addField("Kişi Sayısı",member.guild.members.size)
    .addField("Rol",rol.name)
    .setFooter("Graphi Bot v1.0");

    kanal.send(embed);
});
  
client.on("guildMemberRemove", member => {
    let kanal = member.guild.channels.find(ch => ch.name === `gelen`);
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("giden kanal log")
    .setThumbnail(member.user.avatarURL)
    .addField("İsim",member.user.tag)
    .addField("Kişi Sayısı",member.guild.members.size)
    .setFooter("Graphi Bot v1.0");

    kanal.send(embed);
});

client.on("message", msg => {

    let prefix = ayar.prefix;
    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,msg,args);

});

client.login(process.env.TOKEN);
