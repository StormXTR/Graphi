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
  console.log(`Logged in as ${client.user.tag} ${client.guild.memberCount}!`);
});

client.on("guildMemberAdd", member => {
    let kanal = client.channels.find(ch => ch.name === "gelen-giden");
    if(!kanal){
        return console.log("gelen-giden adında bir kanal yok!");
    }else {
        kanal.send("Hoşgeldin `" + member.user.tag + "` seninle beraber `" + (client.guild.memberCount) + "` kişi olduk!");
        console.log((client.users.size - 1) + " Kişi oldu!");
        return;
    }
});
  
client.on("guildMemberRemove", member => {
    console.log(`${client.users.size} kişi kaldı!`);
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
