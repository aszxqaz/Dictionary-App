import { word } from "@/dictionary-api/example";
import { SearchInput } from "../SearchInput";
import { WordDefinition } from "../WordDefinition";
import useSWR from "swr";
import { query } from "@/dictionary-api/fetcher";

export default async function Home({ params }: { params: { word: string } }) {
  let data = null;
  const param = params.word;
  if (param) {
    data = await query(param);
  }
  // console.log(paramOrData);
  return (
    <main>
      <SearchInput initial={param} />
      {data[0] ? <WordDefinition word={data[0]} /> : null}
    </main>
  );
}
