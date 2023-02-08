"use client";
import { usePathname } from "next/navigation";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type AppContext = {
  queryString: string;
  setQueryString: (s: string) => void;
};

const AppContext = createContext<AppContext>({
  queryString: "",
  setQueryString: () => {},
});

export const AppContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const pathname = usePathname();
  const [queryString, setQueryString] = useState(
    pathname?.replace("/", "") || ""
  );

  return (
    <AppContext.Provider
      value={{
        queryString,
        setQueryString,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
