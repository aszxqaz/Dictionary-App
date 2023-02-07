"use client";
import { Select } from "@/components/Select";
import { useState } from "react";
import styles from "./FontSelect.module.scss";

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
      options={[
        {
          value: "Sans Serif",
          node: <span className={styles.sansSerif}>Sans Serif</span>,
        },
        { value: "Serif", node: <span className={styles.serif}>Serif</span> },
        { value: "Mono", node: <span className={styles.mono}>Mono</span> },
      ]}
      selectedOptionIndex={index}
      handleChange={handleChange}
    />
  );
};
