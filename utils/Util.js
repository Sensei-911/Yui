 const mongoose = require("mongoose");
 module.exports = {
   canModifyQueue(member) {
     const { channel } = member.voice;
     const botChannel = member.guild.me.voice.channel;
 
     if (channel !== botChannel) {
       member.send("Önce bir sesli kanala katılmalısın!").catch(console.error);
       return false;
     }
 
     return true;
   }
 };