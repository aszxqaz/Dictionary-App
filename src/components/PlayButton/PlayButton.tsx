import styles from "./PlayButton.module.scss";

type PlayButtonProps = {
  active?: boolean;
};

export const PlayButton: React.FC<PlayButtonProps> = ({ active }) => {
  return (
    <svg
      className={`${styles.button} ${active ? styles.active : ""}`}
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className={styles.circle} cx="37.5" cy="37.5" r="37.5" />
      <path
        className={styles.arrow}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 27V48L50 37.5L29 27Z"
      />
    </svg>
  );
};
