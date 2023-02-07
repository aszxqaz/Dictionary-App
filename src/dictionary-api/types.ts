export type Word = {
    word: string
    phonetic: string
    phonetics: Phonetic[]
    origin: string
    meanings: Meaning[]
    sourceUrls: string[]
}

type Phonetic = {
    text: string
    audio?: string
}

type Meaning = {
    partOfSpeech: string
    definitions: Definition[]
    synonyms: unknown[]
    antonyms: unknown[]
}

type Definition = {
    definition: string
    example: string
    synonyms: unknown[]
    antonyms: unknown[]
}