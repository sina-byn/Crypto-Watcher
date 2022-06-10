import { FC, createContext, ReactNode, useState, useEffect } from "react";
import useCoinsData from "../hooks/useCoinsData";

// Importing Interfaces
import { AppCtx, CoinProps } from "../interfaces/interfaces";

interface Props {
  children: ReactNode;
}

export const AppContext = createContext<AppCtx | null>(null);

const AppContextProvider: FC<Props> = ({ children }) => {
  const [apiPage, setApiPage] = useState<number>(1);
  const [isScrollable, setIsScrollable] = useState<boolean>(true);
  const [isModalShown, setIsModalShown] = useState<boolean>(false);
  const [modalInfo, setModalInfo] = useState<CoinProps>({
    name: "",
    symbol: "",
    current_price: 0,
    rank: 0,
    explanation: "---",
    img: "/",
  });
  
  const apiAddress: string =
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${apiPage}&sparkline=false`;
  const { data, error } = useCoinsData(apiAddress);
  
  const ctxData: AppCtx = {
    data,
    error,
    setApiPage,
    isScrollable,
    setIsScrollable,
    isModalShown,
    setIsModalShown,
    modalInfo,
    setModalInfo,
  };

  return <AppContext.Provider value={ctxData}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
