"use client";

import styles from "./Switcher.module.scss";

type SwitcherProps = {
  value: boolean;
  handleClick: () => void;
};

export const Switcher: React.FC<SwitcherProps> = ({ value, handleClick }) => {
  return (
    <div
      className={`${styles.wrapper} ${
        value ? styles.wrapperOn : styles.wrapperOff
      }`}
      onClick={handleClick}
    >
      <div
        className={`${styles.circle} ${
          value ? styles.circleOn : styles.circleOff
        }`}
      />
    </div>
  );
};
