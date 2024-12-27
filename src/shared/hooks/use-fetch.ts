import { useState, useEffect, useMemo } from 'react';

import { apiClient } from '@/shared/api';

interface UseFetchParams {
  endpoint: string;
  queryParams?: Record<string, string>;
}

interface UseFetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export const useFetch = <T>({
  endpoint,
  queryParams
}: UseFetchParams): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const memoizedQueryParams = useMemo(
    () => queryParams,
    [JSON.stringify(queryParams)]
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await apiClient.get<T>({
          endpoint,
          queryParams: memoizedQueryParams
        });
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      setData(null);
      setError(null);
    };
  }, [endpoint, memoizedQueryParams]);

  return { data, isLoading, error };
};
