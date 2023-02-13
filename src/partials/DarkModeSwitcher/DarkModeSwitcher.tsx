"use client";

import styles from "./DarkModeSwitcher.module.scss";
// import { Switcher } from "@/components/Switcher";
import { useEffect, useState } from "react";
import moon from "@/assets/icons/moon.svg";
import Image from "next/image";
import dynamic from "next/dynamic";

const Switcher = dynamic(
  (() =>
      import('@/components/Switcher/Switcher').then(({ Switcher }) => Switcher)) as any,
  { ssr: false }
) as any;

export const DarkModeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  }, [isDarkMode]);
  return (
    <div className={styles.wrapper}>
      <Switcher
        value={isDarkMode}
        handleClick={() => setIsDarkMode((_) => !_)}
      />
      <div className={styles.moon}>
        <Image src={moon} alt="Moon" />
      </div>
    </div>
  );
};
