import dotenv from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
	console.log(`${client.user?.tag} is now launched to the orbit!! 🚀`);
});

client.on('messageCreate', (message) => {

	if (message.content === 'ping') {
		message.channel.send('Pong!');
	}
});

client.login(process.env.BOT_TOKEN);
