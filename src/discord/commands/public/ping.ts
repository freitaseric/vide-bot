import { Command } from '#base'
import { ApplicationCommandType } from 'discord.js'
import { $t } from 'i18n/index.js'

new Command({
	name: 'ping',
	description: "🎈 Replies with bot's latency.",
	descriptionLocalizations: { 'pt-BR': '🎈 Responde com a latência do bot.' },
	type: ApplicationCommandType.ChatInput,
	async run(interaction) {
		await interaction.reply($t('commands.ping', interaction))
	},
})
