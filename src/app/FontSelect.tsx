"use client";
import { Select } from "@/components/Select";
import { useState } from "react";

export const FontSelect = () => {
  const values = ["sans-serif", "serif", "mono"];
  const [index, setIndex] = useState(
    values.indexOf(localStorage.getItem("font") || "sans-serif")
  );
  const handleChange = (index: number) => {
    setIndex(index);
    document.documentElement.dataset["font"] = values[index];
    window.localStorage.setItem("font", values[index]);
  };
  return (
    <Select
      options={["Sans Serif", "Serif", "Mono"]}
      selectedOptionIndex={index}
      handleChange={handleChange}
    />
  );
};
