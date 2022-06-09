import { FC, createContext, ReactNode } from "react";
import useCoinsData from "../hooks/useCoinsData";

// Importing Interfaces
import { AllCoinsCtx } from "../interfaces/interfaces";

interface Props {
  children: ReactNode;
}

export const AllCoinsContext = createContext<AllCoinsCtx | null>(null);

const AllCoinsContextProvider: FC<Props> = ({ children }) => {
  const apiAddress: string =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const { data, error } = useCoinsData(apiAddress);

  const ctxData: AllCoinsCtx = { data, error };

  return (
    <AllCoinsContext.Provider value={ctxData}>
      {children}
    </AllCoinsContext.Provider>
  );
};

export default AllCoinsContextProvider;
