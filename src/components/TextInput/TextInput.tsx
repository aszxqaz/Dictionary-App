import Image from "next/image";
import styles from "./TextInput.module.scss";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  RefObject,
  useEffect,
  useRef,
} from "react";

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
  const inputRef = useRef() as RefObject<HTMLInputElement>;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus();
      inputRef.current.value = restProps.value as string;
    }
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = restProps.value as string;
    }
  }, [restProps.value]);

  return (
    <div>
      <div className={styles.wrapper}>
        <input
          // autoFocus={true}
          ref={inputRef}
          className={`${styles.input} ${
            invalid || error ? styles.invalid : ""
          }`}
          style={{ paddingRight: icon ? 20 : undefined }}
          type="text"
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        {icon ? (
          <Image className={styles.icon} src={icon} alt="Search" />
        ) : null}
      </div>
      <p className={`${styles.error} heading-small`} aria-hidden={error === ""}>
        {error}
      </p>
    </div>
  );
};
