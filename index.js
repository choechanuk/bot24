const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('online!');
})

client.on('message', (message) => {
    if(message.author.bot) return;
    console.log('message가 들어왔다');

    if(message.content == 'ㅋㅋ') 
    {
        message.reply('루빵삥퐁');
       
    }
    if(message.content == '이잉') {       
        message.reply('기뮤뤼잉');
        
    }
    if(message.content == '지건') {      
        message.reply('딱대 시발!');

    }
    if(message.content == '딱대') {
        message.reply('시발');
    }

})

client.login('NzA1MzY0ODY5Njg3NDEwNjg5.XqqoYA.wPCoUNJ4Y7ED-1CC71KF1aohhCA');
