import { FC, createContext, ReactNode, useState, useEffect } from "react";

// Importing Interfaces
import { AppCtx, CoinProps } from "../interfaces/interfaces";

// Importing hooks
import useLocalStorage from "../hooks/useLocalStorage";

interface Props {
  children: ReactNode;
}

export const AppContext = createContext<AppCtx | null>(null);

const AppContextProvider: FC<Props> = ({ children }) => {
  const [selectedCoins, setSelectedCoins] = useState<string[]>([
    "bitcoin",
    "ethereum",
    "tether",
    "solana",
  ]);
  const [watchlist, setWatchlist] = useState<string[]>();
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

  useEffect(() => {
    const watchlist = useLocalStorage("watchlist");
    if (watchlist.length === 0) {
      const defaultWatchlist: string[] = [
        "bitcoin",
        "ethereum",
        "tether",
        "solana",
      ];
      setWatchlist(defaultWatchlist);
      localStorage.setItem("watchlist", JSON.stringify(defaultWatchlist));
    }
  }, []);

  const ctxData: AppCtx = {
    selectedCoins,
    setSelectedCoins,
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
