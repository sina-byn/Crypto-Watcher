import useSWR, { Fetcher } from "swr";

// Importing Interfaces
import { CoinDataProps, ApiAddress, UseSWROptions } from "../interfaces/interfaces";

const useCoinsData = (apiAddress: ApiAddress | string, options: UseSWROptions) => {
  const fetcher: Fetcher<CoinDataProps[], string> = (url) =>
    fetch(url).then((res) => res.json());

  const { data, error } = useSWR(apiAddress, fetcher, options);

  return { data, error };
};

export default useCoinsData;
