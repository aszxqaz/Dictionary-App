export const query = async (word: string) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  console.log(url)
  return fetch(url).then((r) => r.json());
};
