"use client"
import { createContext, PropsWithChildren, useContext } from "react";

type RadioGroupProps = {
  value: any;
  onChange: (value: any) => void;
};

const RadioGroupContext = createContext({
  value: null as unknown,
  onChange: (value: unknown) => {},
});

export const RadioGroup: React.FC<PropsWithChildren<RadioGroupProps>> = ({
  value,
  onChange,
  children,
}) => {
  return (
    <RadioGroupContext.Provider
      value={{
        value,
        onChange,
      }}
    >
      {children}
    </RadioGroupContext.Provider>
  );
};

export const useRadioGroupContext = () => useContext(RadioGroupContext)