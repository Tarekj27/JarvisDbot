const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('beep')
		.setDescription('Boop!'),
	async execute(interaction) {
		return interaction.reply('Boop! 🤖How did you know i was a BOT!!!');
	},
};