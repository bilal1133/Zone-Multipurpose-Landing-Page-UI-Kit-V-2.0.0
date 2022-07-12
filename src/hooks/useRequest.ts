import useSWR, { SWRConfiguration } from 'swr';
// utils
import axios from '../utils/axios';

// ----------------------------------------------------------------------

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function useRequest(url: string, options?: SWRConfiguration) {
  const { data, error, isValidating, mutate } = useSWR(url, fetcher, options);

  return {
    data,
    error,
    mutate,
    isValidating,
    isLoading: !error && !data,
  };
}
