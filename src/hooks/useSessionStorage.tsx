import { useState } from "react";

export default function useSessionStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = sessionStorage.getItem(key);

    if (item) {
      return JSON.parse(item) as T;
    }

    return initialValue;
  });

  const setValue = (value: T) => {
    setStoredValue(value);
    sessionStorage.setItem(key, JSON.stringify(value));
  };

  return { storedValue, setValue };
}
