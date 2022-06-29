import { NextPage } from "next";
import Head from "next/head";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

// Importing hooks
import useCoinsData from "../hooks/useCoinsData";
import useForceUpdate from "../hooks/useForceUpdate";

// Importing Functions
import { getLocalStorage } from "../helpers/functions";

// Importing Components
import AppContextProvider from "../context/AppContextProvider";
import Header from "../components/Header";
import CoinsTable from "../components/CoinsTable";
import Loader from "../components/UI/Loader";
import CoinModal from "../components/CoinModal";
import ScrollTopButton from "../components/UI/ScrollTopButton";

interface Props {
  selectMode: boolean;
  setSelectMode: Dispatch<SetStateAction<boolean>>;
}

const WatchlistPage: NextPage<Props> = ({ selectMode, setSelectMode }) => {
  const [ids, setIds] = useState<string[]>();

  const { data, error } = useCoinsData(
    `${
      ids?.length
        ? `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids.join(
            ","
          )}`
        : ""
    }`
  );

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const watchlist = getLocalStorage("watchlist");
    setIds(watchlist);
  }, []);

  return (
    <>
      <Head>
        <title>Your WatchList</title>
      </Head>
      <div className='container max-w-sm relative mx-auto'>
        <AppContextProvider>
          <Header initialSlide={2} />
          <CoinsTable
            coins={data}
            error={error}
            ids={ids}
            forceUpdate={forceUpdate}
            selectMode={selectMode}
            setSelectMode={setSelectMode}
          >
            <Loader classes='h-screen -mt-40 pt-32' />
          </CoinsTable>
          <CoinModal />
          <ScrollTopButton />
        </AppContextProvider>
      </div>
    </>
  );
};

export default WatchlistPage;