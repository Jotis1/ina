const Discord = require("discord.js")
const client = new Discord.Client()


const prefix = "i!"

client.on("ready", () => {

    console.log("Blurp") 
    client.user.setPresence({
        status: "online",
        activity: {
            name: "HOLOLIVE",
            type: "WATCHING"

        }
    })  
})



const embed = new Discord.MessageEmbed()
.setTitle('BIENVENIDO A 🎌|HOLOLIVE ADDICTS|🎌')
.setDescription('Para poder ver todos los canales empieza dándole al emoji de abajo')
.setImage('https://cdn.discordapp.com/attachments/746179353829703691/809863288464211989/Nenechi_Gif.gif')
.setColor('RANDOM')


client.on('message', async message => {
if (message.content.startsWith(`${prefix}vf`)){
    const msg = await message.channel.send(embed)
    msg.react('🎌')
    message.delete()
        
    }
})

client.on('messageReactionAdd', async (reaction, user) =>{
    if(reaction.message.partial) await reaction.message.fetch()
    if(reaction.partial) await reaction.fetch()
    if(user.bot) return
    if(reaction.emoji.name === "🎌") await reaction.message.guild.members.cache.get(user.id).roles.add('806232380872327268')     
         
})
client.on('messageReactionRemove', async (reaction, user) =>{
    if(reaction.message.partial) await reaction.message.fetch()
    if(reaction.partial) await reaction.fetch()
    if(user.bot) return
    if(reaction.emoji.name === "🎌") await reaction.message.guild.members.cache.get(user.id).roles.remove('806232438421717033')       
    
})

const embed2 = new Discord.MessageEmbed()
.setTitle('AÚN QUEDA 1 PASO')
.setDescription('Selecciona el color `morado` si eres **SEGUIDOR DE TWITCH** y el `rojo` si eres **SEGUIDOR DE YOUTUBE**.')
.setImage('https://cdn.discordapp.com/attachments/806615412271611934/809866290595758140/amelia_vib.gif')
.setColor('RANDOM')


client.on('message', async message => {
if (message.content.startsWith(`${prefix}yt2`)){
    const msg = await message.channel.send(embed2)
    msg.react('💜')
    msg.react('♥️')
    message.delete()
        
    }
})

client.on('messageReactionAdd', async (reaction, user) =>{
    if(reaction.message.partial) await reaction.message.fetch()
    if(reaction.partial) await reaction.fetch()
    if(user.bot) return
    if(reaction.emoji.name === "💜") await reaction.message.guild.members.cache.get(user.id).roles.add('806231915287281754') 
    if(reaction.emoji.name === "♥️") await reaction.message.guild.members.cache.get(user.id).roles.add('806231988667285535')    
        
})
client.on('messageReactionRemove', async (reaction, user) =>{
    if(reaction.message.partial) await reaction.message.fetch()
    if(reaction.partial) await reaction.fetch()
    if(user.bot) return    
    if(reaction.emoji.name === "💜") await reaction.message.guild.members.cache.get(user.id).roles.remove('806232380872327268') 
    if(reaction.emoji.name === "♥️") await reaction.message.guild.members.cache.get(user.id).roles.remove('806232380872327268')         
    
})
client.login(process.env.TOKEN)