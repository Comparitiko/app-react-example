import { useEffect, useState } from "react";

interface useFetchProps {
  url: string;
  options?: RequestInit;
}

export default function useFetch<T>({ url, options }: useFetchProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [url, options]);

  return {
    isLoading,
    data,
    error,
  };
}
