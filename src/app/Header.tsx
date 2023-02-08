import styles from "./Header.module.scss";
import book from "../assets/icons/book.svg";
import { DarkModeSwitcher } from "./DarkModeSwitcher";
import Image from "next/image";
import dynamic from "next/dynamic";
import { VerticalLine } from "@/components/Lines/Lines";

const FontSelect = dynamic(
  (() =>
      import('./FontSelect').then(({ FontSelect }) => FontSelect)) as any,
  { ssr: false }
) as any;

export const Header = () => {
  return (
    <header className={`${styles.wrapper} container`}>
      <div>
        <Image src={book} alt="Logo" />
      </div>
      <div className={styles.fontselect}>
        <FontSelect />
      </div>
      <VerticalLine />
      <DarkModeSwitcher />
    </header>
  );
};
