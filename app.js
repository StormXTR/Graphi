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

client.on("messageDelete", (messageDelete) =>{
    let kanal = messageDelete.guild.channels.find(ch => ch.name === "logs");
    if(!kanal) return console.log(kanal.name + " adlı kanal bulunamadı!");

    let mesajlog = new Discord.RichEmbed()
    .setTitle(messageDelete.channel.name + " adlı kanaldan " + messageDelete.author.tag + " adlı kişinin mesajı silindi.")
    .setColor("RANDOM")
    .addField("Mesaj İçeriği", messageDelete.content, true)
    .setThumbnail(client.user.avatarURL)
    .setFooter(client.user.username + " v1.0" , client.user.avatarURL);

    kanal.send(mesajlog);
});

client.on("guildMemberAdd", member => {
    let kanal = member.guild.channels.find(ch => ch.name === "gelen");
    if(!kanal) return console.log(kanal.name + " adlı kanal bulunamadı!");
    
    let rol = member.guild.roles.find(rol => rol.name === "Üye");
    if(!rol) return console.log(rol.name + " adlı rol bulunamadı!");

    member.addRole(rol).catch(console.error);

    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("gelen kanal log")
    .setThumbnail(member.user.avatarURL)
    .addField("İsim",member.user.tag,true)
    .addField("Kişi Sayısı",member.guild.members.size,true)
    .addField("Rol",rol.name,true)
    .setFooter("Graphi Bot v1.0",client.user.avatarURL);

    kanal.send(embed);
});
  
client.on("guildMemberRemove", member => {
    let kanal = member.guild.channels.find(ch => ch.name === "giden");
    if(!kanal) return console.log(kanal.name + " adlı kanal bulunamadı!");
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("giden kanal log")
    .setThumbnail(member.user.avatarURL)
    .addField("İsim",member.user.tag,true)
    .addField("Kişi Sayısı",member.guild.members.size,true)
    .setFooter("Graphi Bot v1.0",client.user.avatarURL);

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
