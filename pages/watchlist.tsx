import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

// Importing hooks
import useCoinsData from "../hooks/useCoinsData";
import useLocalStorage from "../hooks/useLocalStorage";

// Importing Components
import AppContextProvider from "../context/AppContextProvider";
import Header from "../components/Header";
import CoinsTable from "../components/HomePage/CoinsTable";
import ScrollTopButton from "../components/UI/ScrollTopButton";
import CoinModal from "../components/HomePage/CoinModal";

const WatchlistPage: NextPage = () => {
  const [ids, setIds] = useState<string[]>();

  const { data, error } = useCoinsData(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${
      ids?.length ? ids.join(",") : ""
    }`
  );

  useEffect(() => {
    const watchlist = useLocalStorage("watchlist");
    if (watchlist.length === 0) {
      const defaultWatchlist = ["bitcoin"];
      setIds(defaultWatchlist);
    } else {
      setIds(watchlist);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Your WatchList</title>
      </Head>
      <div className='container max-w-sm min-h-screen relative mx-auto text-white'>
        <AppContextProvider>
          <Header initialSlide={1} />
          <CoinsTable coins={data} error={error} />
          <CoinModal />
          <ScrollTopButton />
        </AppContextProvider>
      </div>
    </>
  );
};

export default WatchlistPage;
