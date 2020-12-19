const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '-';
 
const fs = require('fs');
var http = require('http');  

http.createServer(function (req, res) {   
  res.write("I'm alive");   
  res.end(); 
}).listen(8080);


client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Slimebot is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 

        if(command === 'ping'){
            client.commands.get('ping').execute(message, args);
        } else if(command =='uzi'){
            message.channel.send('uzi is the goat')
        }else if(command =='jarrod'){
            message.channel.send('jarrod gets all the hoes')
        }else if(command =='reese'){
            message.channel.send('Reese has a large dick')
        }else if(command =='mystic'){
            message.channel.send('mystic has juice wrld titties')
        }else if (command=='caleb'){
            message.channel.send('caleb is the cutest mfr')
        }else if (command == 'jake'){
            message.channel.send('jake is the founder of the slime emojis')
        }else if (command =='warren'){
            message.channel.send('warren is the founder of the gay gang and a goat')
        }else if (command == 'slazzer'){
            message.channel.send('slazzy is a loyal member of the gang <3')
        }else if(command=='don'){
            message.channel.send('don is a sexy mfr with a high IQ')
        }else if (command=='cash'){
            message.channel.send('cash is loyal to the boys')
        }else if (command =='jonny'){
            message.channel.send('Wonny!')
        }else if (command =='harold'){
            message.channel.send('not PL')
    } 
});
 
client.login('NzgyNTg3NTczOTU1OTg1NDA4.X8OXeQ.H0UPc2danO5XHYNdLK5oauiutkM');
