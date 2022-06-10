import { FC, createContext, ReactNode, useState } from "react";

// Importing Interfaces
import { AppCtx, CoinProps } from "../interfaces/interfaces";

interface Props {
  children: ReactNode;
}

export const AppContext = createContext<AppCtx | null>(null);

const AppContextProvider: FC<Props> = ({ children }) => {
  const [watchlist, setWatchlist] = useState<string[]>(['bitcoin', 'ethereum', 'tether', 'solana']);
  const [selectMode, setSelectMode] = useState<boolean>(false);
  const [isModalShown, setIsModalShown] = useState<boolean>(false);
  const [modalInfo, setModalInfo] = useState<CoinProps>({
    id: "",
    name: "",
    symbol: "",
    current_price: 0,
    rank: 0,
    explanation: "---",
    img: "/",
  });

  const ctxData: AppCtx = {
    watchlist,
    setWatchlist,
    selectMode,
    setSelectMode,
    isModalShown,
    setIsModalShown,
    modalInfo,
    setModalInfo,
  };

  return <AppContext.Provider value={ctxData}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
