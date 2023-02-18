"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { usePathname } from "next/navigation";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type AppContext = {
  queryString: string;
  setQueryString: (s: string) => void;
  isAutoQueryMode: boolean;
  setIsAutoQueryMode: (value: boolean) => void
};

const AppContext = createContext<AppContext>({
  queryString: "",
  setQueryString: () => {},
  isAutoQueryMode: true,
  setIsAutoQueryMode: () => {}
});

export const AppContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const pathname = usePathname();
  const [queryString, setQueryString] = useState(
    pathname?.replace("/", "") || ""
  );
  const [isAutoQueryMode, setIsAutoQueryMode] = useLocalStorage('queryMode', true)


  return (
    <AppContext.Provider
      value={{
        queryString,
        setQueryString,
        isAutoQueryMode,
        setIsAutoQueryMode
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
