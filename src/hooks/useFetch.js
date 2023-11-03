import {useQuery} from 'react-query'

export const useFetch = ({
    name,
    dependant,
    fn,
    enabled,
    cacheTime = 30000,
    refetchOnMount = false,
    refetchOnWindowFocus = false,
    retry = true,
    onSuccess = () => {},
    onError = () => {},
  }) => {
    const shouldRetry = retry;
  
    const query = useQuery([name, dependant], () => fn(), {
      enabled,
      cacheTime,
      staleTime: 60000,
      retry: (failureCount, error) => {
        if (error.status === 401 && shouldRetry) {
          if (failureCount > 2) {
            return false;
          }
          return true;
        }
        return false;
      },
      onSuccess,
      onError,
      keepPreviousData: true,
      refetchOnMount,
      refetchOnWindowFocus,
    });
  
    return query;
  };