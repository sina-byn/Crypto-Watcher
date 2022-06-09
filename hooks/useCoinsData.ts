import useSWR, { Fetcher } from "swr";

const useCoinsData = (apiAdd: string, options?: any) => {
  const apiAddress: string = apiAdd;
  const fetcher: Fetcher<any[], string> = (...args) =>
    fetch(...args).then((res) => res.json());

    const { data, error } = useSWR(apiAddress, fetcher, options);
    return { data, error };
};

export default useCoinsData;