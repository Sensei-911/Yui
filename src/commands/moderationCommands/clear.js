module.exports = {
name: "clear",
aliases: ['purge','clean'],
permissions:["sendMessages", "manageMessages"],
memberPermissions: ['manageMessages'],
cooldown: 5,
async execute(Yui, message, args) {    
const messageAmount =     args[0]
if (!messageAmount)        return message.channel.createMessage("Please specify how many messages will be deleted.")
if (isNaN(messageAmount))  return message.channel.createMessage("Please enter a number.")
if (messageAmount > 200)   return message.channel.createMessage("Keep it under 200 messages.")
if (messageAmount < 0)     return message.channel.createMessage("I can't delete messages in negative numbers.")
parseInt(messageAmount)
const getMessages = await Yui.getMessages(message.channel.id, messageAmount, message.id)
Yui.deleteMessages(message.channel.id, getMessages.map(a => a.id), messageAmount)
message.channel.createMessage(`♻ Cleared \`${messageAmount}\` messages`)
}}