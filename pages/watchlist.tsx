import { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";

// Importing hooks
import useCoinsData from "../hooks/useCoinsData";
import useLocalStorage from "../hooks/useLocalStorage";
import useForceUpdate from "../hooks/useForceUpdate";

// Importing Components
import AppContextProvider from "../context/AppContextProvider";
import Header from "../components/Header";
import CoinsTable from "../components/CoinsTable";
import CoinModal from "../components/CoinModal";
import ScrollTopButton from "../components/UI/ScrollTopButton";

const WatchlistPage: NextPage = () => {
  const [ids, setIds] = useState<string[]>();

  const { data, error } = useCoinsData(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${
      ids?.length ? ids.join(",") : ""
    }`
  );

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const watchlist = useLocalStorage("watchlist");
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
          />
          <CoinModal />
          <ScrollTopButton />
        </AppContextProvider>
      </div>
    </>
  );
};

export default WatchlistPage;
