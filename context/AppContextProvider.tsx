import { FC, createContext, ReactNode, useState } from "react";

// Importing Interfaces
import { AppCtx, CoinProps } from "../interfaces/interfaces";

interface Props {
  children: ReactNode;
}

export const AppContext = createContext<AppCtx | null>(null);

const AppContextProvider: FC<Props> = ({ children }) => {
  const [selectedCoins, setSelectedCoins] = useState<string[]>();
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
    selectedCoins,
    setSelectedCoins,
    isModalShown,
    setIsModalShown,
    modalInfo,
    setModalInfo,
  };

  return <AppContext.Provider value={ctxData}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
