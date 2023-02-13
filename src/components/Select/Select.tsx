"use client"
import styles from "./Select.module.scss";
import arrow from "@/assets/icons/arrow_down.svg";
import Image from "next/image";
import { ReactNode, useCallback, useEffect, useState } from "react";

type SelectProps = {
  options: { value: string; node?: ReactNode }[];
  selectedOptionIndex: number;
  handleChange: (i: number) => void;
};

export const Select: React.FC<SelectProps> = ({
  options,
  selectedOptionIndex,
  handleChange,
}) => {
  const [isActive, setActive] = useState(false);

  const onClickOutside = useCallback((e: MouseEvent) => {
    if ((e.target as HTMLElement).closest(`.${styles.wrapper}`) === null) {
      setActive(false);
      document.body.removeEventListener("click", onClickOutside);
    }
  }, []);

  useEffect(() => {
    if (isActive) {
      document.body.addEventListener("click", onClickOutside);
    }

    return () => {
      document.body.removeEventListener("click", onClickOutside);
    };
  }, [isActive]);
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.pointerWrapper}
        onClick={() => {
          setActive((_) => !_);
        }}
      >
        <div className={styles.title}>
          {options[selectedOptionIndex].node ||
            options[selectedOptionIndex].value}
        </div>
        <div className={styles.arrow}>
          <Image src={arrow} alt="Options" />
        </div>
      </div>
      {isActive ? (
        <ul className={styles.optionslist}>
          {options.map((option, i) => (
            <li
              className={styles.optionsitem}
              key={option.value}
              onClick={() => {
                setActive(false);
                handleChange(i);
              }}
            >
              {option.node || option.value}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
