import { Word } from "./types";

export class DictApiParser {
  constructor(private word: Word) {}

  public getWord() {
    return this.word.word;
  }

  public getPhonetic() {
    return this.word.phonetic;
  }

  public getSoundUrl() {
    return this.word.phonetics[0].audio;
  }

  public getMeanings() {
    return this.word.meanings;
  }

  public getSourceUrls() {
    return this.word.sourceUrls;
  }
}
