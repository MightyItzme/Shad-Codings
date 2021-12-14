const express = require("express")
const app = express()

app.get("/", (req, res) => {
res.send("Hello hell.")
})

app.listen(3000, () => {
console.log("The project is ready")
})

let Discord = require("discord.js")
let client = new Discord.Client()

client.on( "ready",() => {
  client.user.setActivity("?shelp", { type: "STREAMING", url: "https://twitch.tv/shad"})
})
client.snipe = new Discord.Collection()
client.on("messageDelete", deletedMsg => {
  client.snipe.set(deletedMsg.channel.id, deletedMsg)
}) 

client.on("message", message => {
  const args = message.content.split(" ").slice(1)
if(message.content === "Ping") {
    message.reply(`Pong! ${client.ws.ping} ms Latency`)
}
if(message.content.startsWith("?shelp")) {
 let embed = new Discord.MessageEmbed()
 .setTitle("View commands here")
   .setDescription("https://github.com/MightyItzme/Shad/tree/How-To-Use")
 .setColor("RANDOM")
 .setFooter("If meet command bug join support server to report")
 message.author.send(embed)
}
if(message.content.startsWith("?skick")) {
  if(message.member.hasPermission("KICK_MEMBERS")) {
    let member = message.mentions.members.first()
    if(!member) message.channel.send("Please mention someone to kick")
    else {
      member.kick().then(mem => {
        message.channel.send(`Kicked ${mem.user.username}!`)
      })
      }
    } else {
      message.reply("You do not have permission to do that")
    }
}
if(message.content.startsWith("?sban")) {
  if(message.member.hasPermission("BAN_MEMBERS")) {
    let member = message.mentions.members.first()
    if(!member) message.channel.send("Please mention someone to ban")
    else {
      member.kick().then(mem => {
        message.channel.send(`Banned ${mem.user.username}!`)
      })
      }
    } else {
      message.reply("You do not have permission to do that")
    }
}
if(message.content.startsWith("?smute")) {
  if(!message.member.hasPermission("KICK_MEMBERS")) return
  let role = message.guild.roles.cache.find(role => role.name === "Muted")
  let member = message.mentions.members.first()
  let reason = message.content.split(" ").slice(2).join(" ")
  if(!reason) reason = "No reason specified"
  if(!role) return message.channel.send("Please add Muted role in your server before you mute someone")
  if(!member) return message.channel.send("Please mention someone to mute")
  if(member.roles.cache.has(role.id)) return message.channel.send("That user have been muted")
  member.roles.add(role)
  .then(() => {
    message.channel.send(`Successfully muted ${member} with reason: ${reason}`)
  })
  .catch(() => {
    message.channel.send("Something went wrong")
  })
}
if(message.content.startsWith("?sunmute")) {
  if(!message.member.hasPermission("KICK_MEMBERS")) return
  let role = message.guild.roles.cache.find(role => role.name === "Muted")
  let member = message.mentions.members.first()
  let reason = message.content.split(" ").slice(2).join(" ")
  if(!reason) reason = "No reason specified"
  if(!role) return message.channel.send("Please add Muted role in your server before you mute someone")
  if(!member) return message.channel.send("Please mention someone to mute")
  if(!member.roles.cache.has(role.id)) return message.channel.send("That user is not muted")
  member.roles.remove(role)
  .then(() => {
    message.channel.send(`Successfully unmuted ${member} with reason: ${reason}`)
  })
  .catch(() => {
    message.channel.send("Something went wrong")
  })
}
if(message.content.startsWith("?ssnipe")) {
  let channel = message.mentions.channels.first() || message.channel
  let msg = client.snipe.get(channel.id)
  if(!msg) return message.channel.send("There is nothing to snipe")
  let embed = new Discord.MessageEmbed()
  .setTitle(msg.author.tag)
  .setThumbnail(msg.author.displayAvatarURL({dynamic: true}))
  .setColor("RANDOM")
  .setDescription(msg.content)
  if(msg.attachments.first()) embed.setImage(msg.attachments.first().url)
  message.channel.send(embed)
}
if(message.content.startsWith("?spurge")) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permission to do this")
  let amountToPurge = args[0]
  if(isNaN(amountToPurge)) return message.channel.send("Please provide an integer to purge")
  message.delete()
  message.channel.bulkDelete(amountToPurge)
  message.channel.send(`Successfully deleted ${amountToPurge} messages`).then(v => v.delete({timeout: 5000}))
}
if(message.content.startsWith("?sdm")) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
  let user = message.mentions.members.first()
    if(!user)
  return message.channel.send(`Please mention someone to dm`)
    if (!args.slice(1).join(" "))
        return message.channel.send("You did not specify your message")
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("That user could not be dmed"))
        .then(() => message.channel.send(`Successfully sent a message to ${user.user.username}`))
}
if(message.content.startsWith("?savatar")) {
 let user = message.mentions.users.first() || message.author;
 let member =
message.mentions.members.first() || message.member;
 let embed = new
   Discord.MessageEmbed()
 .setTitle(`${user.username}'s Avatar`)
 .setImage(user.displayAvatarURL({dynamic: true}))
 .setColor("RANDOM")
  message.channel.send(embed)
}
 if(message.content.startsWith("?smcount")) {
 let embed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setAuthor(`Member Count For ${message.guild}`)
 .setTitle("Members")
 .setDescription (`Total: ${message.guild.members.cache.size}\nHumans: ${message.guild.members.cache.filter(member => !member.user.bot).size}\nBots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
 .setThumbnail(message.guild.iconURL({ dynamic: true }))
 .setFooter(`Requested by ${message.author.username}`)

 message.channel.send(embed)
}
if(message.content.startsWith("?ssinfo")) {
  let embed = new
    Discord.MessageEmbed()
    .setColor("RANDOM")
  .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL({dynamic: true}))
  .setDescription(`Informations For ${message.guild.name}`)
    .addFields({ name: "Server ID", value: message.guild.id},
               { name: "Date Created", value: message.guild.createdAt},
               { name: "Verification Level", value: message.guild.verificationLevel}, 
               { name: "Owner", value: message.guild.owner},
               { name: "Total Members", value: message.guild.memberCount},
          { name: "Total Boosts", value: message.guild.premiumSubscriptionCount},
  { name: "Total Channels", value: message.guild.channels.cache.size},
               { name: "Total Roles", value: message.guild.roles.cache.size},
               { name: "Total Emotes", value: message.guild.emojis.cache.size},)
  .setFooter(`Requested by ${message.author.username}`)
  message.channel.send(embed)
}
if(message.content.startsWith("?suinfo")) {
  let user = message.mentions.users.first() || message.author;
 let member =
message.mentions.members.first() || message.member;
  let embed = new
    Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Userinfo")
    .setDescription(`${user.username}'s Userinfo`)
    .addFields({ name: "Usertag", value: user.tag},
               { name: "UserID", value: user.id},
               { name: "Status", value: user.presence.status},
               { name: "Created At", value: user.createdAt},
               { name: "Joined At", value: member.joinedAt},
               { name: "Nickname", value: member.displayName},
               { name: "Roles", value: member.roles.cache.filter(r => r.id !==message.guild.id).map(roles => `<@&${roles.id}>`).join(" **|** ")},)
.setThumbnail(user.displayAvatarURL({dynamic: true}))
  .setFooter(`Requested by ${message.author.username}`)
  message.channel.send(embed)
}
if(message.content.startsWith("?sbinfo")) {
  let embed = new 
    Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Botinfo")
  .setDescription(`${client.user.username}'s Informations`)
  .addFields({ name: "ID", value: client.user.id},
             { name: "Created At", value: client.user.createdAt},
             { name: "Total Servers Joined", value: client.guilds.cache.size},
             { name: "Discord.js", value: process.version},
             { name: "Current Latency", value: client.ws.ping},)
  .setFooter(`Requested by ${message.author.username}`)
  message.channel.send(embed)
}
if(message.content.startsWith("?sbotin")) {
  let embed = new 
    Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Shad is in...")
  .setDescription(`${client.guilds.cache.size} servers`)
  .setFooter(`Requested by ${message.author.username}`)
  message.channel.send(embed)
}
if(message.content.startsWith("?scoinflip")) {
 let replies = ["Heads", "Tails"]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
}
if(message.content.startsWith("?sabout")) {
  let embed = new
    Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Informations About Shad")
  .setDescription("Shad was made to be a private bot for a private server but me the bot developer aka Discord User: TheMightyItzme doesn't know why did I decided to add Shad to top.gg and it got approved so here is a little info about Shad and for more info go to Shad's top.gg have a look or just go to Shad's help command github link.Alright thats all,goodbye.")
  .setFooter(`Requested by ${message.author.username}`)
  message.channel.send(embed)
}
if(message.content === "Welcome") {
  message.channel.send("https://tenor.com/view/welcome-gif-18737601")
}
if(message.content === "Hi") {
  message.channel.send("Hello")
}
if(message.content ===  "How are you") {
  message.channel.send( "Good,what about you")
}
if (message.content ===  "Good too") {
  message.channel.send( "Glad to hear that")
}
if(message.content === "Bye") {
 message.channel.send("See ya")
}

})

client.login("paste bot token here")
