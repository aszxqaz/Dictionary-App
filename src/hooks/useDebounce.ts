import { useCallback, useRef } from "react";

export const useDebounce = (fn: (...args: any[]) => any, delay: number) => {
  const prev = useRef<NodeJS.Timeout | undefined>(undefined);
  let debounced = useCallback(
    (...args: any[]) => {
      clearTimeout(prev.current);
      prev.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [delay]
  );

  return debounced;
};
