import useSWR, { Fetcher } from "swr";

// Importing Interfaces
import { CoinDataProps } from "../interfaces/interfaces";

// options object has to be type explicitly while setting the configuration
const useCoinsData = (apiAdd: string, options?: any) => {
  const apiAddress: string = apiAdd;
  const fetcher: Fetcher<CoinDataProps[], string> = (...args) =>
    fetch(...args).then((res) => res.json());

    const { data, error } = useSWR(apiAddress, fetcher, options);
    return { data, error };
};

export default useCoinsData;