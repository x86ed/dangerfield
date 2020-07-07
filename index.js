"use strict";
import { Client } from 'discord.js';
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.author.id == client.user.id) {
        return;
    }
  if (msg.content === 'ping') {
    msg.reply('pong');
    msg.reply('ping');
  }
});

client.login(process.env.DANGERTOKEN);