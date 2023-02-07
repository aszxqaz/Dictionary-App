import { word } from "@/dictionary-api/example";
import { SearchInput } from "./SearchInput";
import { WordDefinition } from "./WordDefinition";

export default function Home() {
  return (
    <main>
      <SearchInput />
      <WordDefinition word={word} />
    </main>
  );
}
