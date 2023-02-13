"use client";
import { PropsWithChildren } from "react";
import styles from "./RadioButton.module.scss";
import { useRadioGroupContext } from "./RadioGroup";

type RadioProps = {
  orientation?: "left" | "right";
  value: unknown;
};

export const Radio: React.FC<PropsWithChildren<RadioProps>> = ({
  children,
  orientation = "left",
  value,
}) => {
  const { onChange, value: groupValue } = useRadioGroupContext();
  const isChecked = groupValue === value;
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        console.log(value)
        onChange(value);
      }}
    >
      <input
        type="radio"
        style={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)", width: 1, height: 1 }}
      />
      <div className={`${styles.circle} ${isChecked ? styles.checked : ""}`} />
      <div>{children}</div>
    </div>
  );
};
