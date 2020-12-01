/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
module.exports = {
  name: 'guessnumber',
  description: 'Botu yeniden başlatır',
  async execute(client, message, args) {
  this.games = new Set();
  if(this.games.has(message.channel.id)) await message.reply('Kanal başına sadece bir düello meydana gelebilir.');
    const islem = Math.floor(Math.random() * (100 - 1)) + 1
    const fixedlisonuç = islem
    let choice;
    let haklar = 10
    await message.react('👌')
    this.games.add(message.channel.id);
    await message.channel.send(stripIndents`
					${message.author}, Numarayı tahmin et 0 ve 100 Arası
					\`${haklar}\` Deneme Hakkın Var.
				`);
           let uwu = false;
            while (!uwu && haklar !== 0) {
                const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 15000 });
              if(!response.first()) { 
                this.games.delete(message.channel.id);
                message.channel.send(`${message.author}, Maalesef! Zaman doldu!`)
                message.channel.send(`${message.author}, :shrug: Kaybettin! Sayı: \`${fixedlisonuç}\` :shrug: `)
              }              
                const choice = response.first().content
                if(isNaN(choice)) {
                  continue;
                }
                if (choice !== fixedlisonuç)  {
                  haklar -= 1
                  if(fixedlisonuç > choice) {
                  await message.channel.send(stripIndents`
					          ${message.author}, :small_red_triangle: Daha büyük numara söylemelisin!
					          \`${haklar}\` Deneme Hakkın Var.
				          `);
                  continue;
                  }
                  if(fixedlisonuç < choice) {
                    await message.channel.send(stripIndents`
					          ${message.author}, :small_red_triangle_down: Daha kücük numara söylemelisin!
					          \`${haklar}\` Deneme Hakkın Var.
				          `);
                  continue;
                  }
                }
                if (choice == fixedlisonuç) {
                  uwu = true
                }
                }
                if (haklar == 0) {
                  this.games.delete(message.channel.id);
                  await message.channel.send(`${message.author}, :shrug: Kaybettin! Sayı: \`${fixedlisonuç}\` :shrug:`)
                }
                if (uwu) {
                  this.games.delete(message.channel.id);
                  await message.channel.send(`${message.author}, :tada:  Doğru Tahmin! Sayı: \`${fixedlisonuç}\` :tada:`)
                try {
            } catch(e) {
              this.games.delete(message.channel.id);
            message.channel.send('Bir hata oluştu')
        }
    } else {
      this.games.delete(message.channel.id);
      return console.log('Bir hata oluştu')
    }
}}
