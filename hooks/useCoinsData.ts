import useSWR, { Fetcher } from "swr";

// Importing Interfaces
import { CoinDataProps, ApiAddress } from "../interfaces/interfaces";

const useCoinsData = (apiAddress: ApiAddress | string) => {
  const fetcher: Fetcher<CoinDataProps[], string> = (url) =>
    fetch(url).then((res) => res.json());

  const { data, error } = useSWR(apiAddress, fetcher);

  return { data, error };
};

export default useCoinsData;
