"use client";
import { useEffect, useState } from "react";
import searchIcon from "@/assets/icons/search.svg";
import { useRouter } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import { useAppContext } from "@/context/ContextProvider";
import { TextInput } from "@/components/TextInput/TextInput";

type SearchInputProps = {
  initial: string;
};

export const SearchInput: React.FC<SearchInputProps> = ({ initial }) => {
  // const [word, setWord] = useState(initial);
  const { queryString, setQueryString } = useAppContext();
  const router = useRouter();

  const debouncePush = useDebounce((t: string) => {
    console.log(t);
    router.push(`/?word=${t}`);
  }, 500);

  return (
    <div>
      <TextInput
        placeholder="Search for any word..."
        icon={searchIcon}
        value={queryString || initial}
        handleChange={(t) => {
          setQueryString(t);
          // router.prefetch(`/${t}`);
          debouncePush(t);
        }}
      />
    </div>
  );
};
