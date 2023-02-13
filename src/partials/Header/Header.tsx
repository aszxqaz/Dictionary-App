import styles from "./Header.module.scss";
import book from "@/assets/icons/book.svg";
import Image from "next/image";
import dynamic from "next/dynamic";
import { DarkModeSwitcher } from "../DarkModeSwitcher/DarkModeSwitcher";
import { VerticalLine } from "@/components/Lines/Lines";
import { Logo } from "@/components/Logo/Logo";

const FontSelect = dynamic(
  (() =>
    import("../FontSelect/FontSelect").then(
      ({ FontSelect }) => FontSelect
    )) as any,
  { ssr: false }
) as any;

export const Header = () => {
  return (
    <header className={`${styles.wrapper} container`}>
      <div>
        <Image src={book} alt="Logo" />
      </div>
      <div>
        <Logo />
      </div>
      <div className={styles.fontselect}>
        <FontSelect />
      </div>
      <VerticalLine />
      <DarkModeSwitcher />
    </header>
  );
};
