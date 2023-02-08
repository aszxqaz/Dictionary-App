export const query = (word: string) =>
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((r) =>
    r.json()
  );
