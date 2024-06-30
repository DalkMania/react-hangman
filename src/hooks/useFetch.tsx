import { useState, useEffect } from "react";

export type ApiResponse = {
  status: number;
  statusText: string;
  data: any;
  error: any;
  isLoading: boolean;
};

export const useFetch = (url: string) => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("");
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const apiResponse = await fetch(url);
        const json = await apiResponse.json();
        setStatus(apiResponse.status);
        setStatusText(apiResponse.statusText);
        setData(json);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { status, statusText, data, error, isLoading };
};
