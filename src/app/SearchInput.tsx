"use client"
import { TextInput } from "@/components/TextInput";
import { useState } from "react";
import searchIcon from "../assets/icons/search.svg";

export const SearchInput = () => {
  const [word, setWord] = useState("");

  return (
    <div className="container">
      <TextInput
        placeholder="Search for any word..."
        icon={searchIcon}
        value={word}
        handleChange={(t) => {
          console.log(t);
          setWord(t);
        }}
      />
      <p>dfsdfsdfsdf</p>
    </div>
  );
};
