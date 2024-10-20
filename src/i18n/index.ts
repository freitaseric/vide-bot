import * as fs from 'node:fs'
import * as path from 'node:path'
import type {
	CommandInteraction,
	MessageComponentInteraction,
	ModalSubmitInteraction,
} from 'discord.js'

export function $t(
	key: string,
	interaction:
		| MessageComponentInteraction
		| CommandInteraction
		| ModalSubmitInteraction,
) {
	const jsonMessages = fs
		.readFileSync(
			path.resolve(__dirname, 'messages', `${interaction.locale}.lang.json`),
		)
		.toString('utf8')

	let message = JSON.parse(jsonMessages)

	for (const k of key.split('.')) {
		message = message ? message[k] : 'undefined'
	}

	return message
}
