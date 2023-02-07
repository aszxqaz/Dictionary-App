import Image from "next/image";
import styles from "./TextInput.module.scss";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type TextInputProps = {
  placeholder?: string;
  icon?: string;
  invalid?: boolean;
  error?: string;
  handleChange: (t: string) => void;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const TextInput: React.FC<TextInputProps> = ({
  invalid,
  icon,
  error = "",
  handleChange,
  ...restProps
}) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <input
          className={`${styles.input} ${
            invalid || error ? styles.invalid : ""
          }`}
          style={{ paddingRight: icon ? 20 : undefined }}
          type="text"
          {...restProps}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        {icon ? (
          <Image className={styles.icon} src={icon} alt="Search" />
        ) : null}
      </div>
      <p className={styles.error} aria-hidden={error === ""}>
        {error}
      </p>
    </div>
  );
};
