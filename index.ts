import dotenv from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';

dotenv.config();

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.DirectMessageTyping,
		GatewayIntentBits.DirectMessageReactions,
	],
});

client.on('ready', () => {
	console.log(`${client.user?.tag} is now launched to the orbit!! 🚀`);
});

client.on('messageCreate', (message) => {

	if (message.content === 'ping') {
		message.channel.send('Pong!');
	}
});

client.on('messageDelete', (message) => {
	message.channel.send('Stop Deleting messages!!! 😠');
});

client.login(process.env.BOT_TOKEN);
