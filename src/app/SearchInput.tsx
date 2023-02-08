"use client";
import { TextInput } from "@/components/TextInput/TextInput";
import { useEffect, useState } from "react";
import searchIcon from "../assets/icons/search.svg";
import { useRouter } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import { useAppContext } from "@/context/ContextProvider";

type SearchInputProps = {
  initial: string;
};

export const SearchInput: React.FC<SearchInputProps> = ({ initial }) => {
  // const [word, setWord] = useState(initial);
  const { queryString, setQueryString } = useAppContext();
  const router = useRouter();

  const debouncePush = useDebounce((t: string) => {
    console.log(t);
    router.push(`/${t}`);
  }, 500);

  return (
    <div className="container">
      <TextInput
        placeholder="Search for any word..."
        icon={searchIcon}
        value={queryString}
        handleChange={(t) => {
          setQueryString(t);
          // router.prefetch(`/${t}`);
          debouncePush(t);
        }}
      />
    </div>
  );
};
