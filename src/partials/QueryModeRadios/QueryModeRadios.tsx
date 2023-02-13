"use client";
import { Radio } from "@/components/Radio/Radio";
import { RadioGroup } from "@/components/Radio/RadioGroup";
import { useState } from "react";
import styles from "./QueryModeRadios.module.scss";

export const QueryModeRadios = () => {
  const [isAuto, setIsAuto] = useState(true);

  return (
    <div className={styles.wrapper}>
      <RadioGroup onChange={setIsAuto} value={isAuto}>
        <Radio value={true}>
          <span className="paragraph-medium">Auto-search</span>
        </Radio>
        <Radio value={false}>
          <span className="paragraph-medium">Press "Enter" to search</span>
        </Radio>
      </RadioGroup>
    </div>
  );
};
