import fetch from 'node-fetch'
import { Word } from './types'

export const query = async (word: string): Promise<Word[] | Error> => {
	const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
	console.log(url)
	return fetch(url)
		.then((r) => r.json() as Promise<Word[]>)
		.catch((err) => err)
}
