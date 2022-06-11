import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

// Importing Components
import AppContextProvider from "../context/AppContextProvider";
import Header from "../components/Header";
import HeaderButton from "../components/UI/HeaderButton";
import Table from "../components/HomePage/CoinsTable";
import CoinModal from "../components/HomePage/CoinModal";
import ScrollTopButton from "../components/UI/ScrollTopButton";
import Footer from "../components/HomePage/Footer";
import useCoinsData from "../hooks/useCoinsData";

const SpotMarketsPage: NextPage = () => {
  const [apiPageNo, setApiPageNo] = useState<number>();

  const { data, error } = useCoinsData(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${apiPageNo}&sparkline=false`
  );

  return (
    <>
      <Head>
        <title>Spot Markets</title>
      </Head>
      <div className='container max-w-sm min-h-screen relative mx-auto'>
        <AppContextProvider>
          <Header initialSlide={1}>
            <HeaderButton />
          </Header>
          <Table coins={data} error={error} />
          <CoinModal />
          <ScrollTopButton />
          <Footer setApiPageNo={setApiPageNo} />
        </AppContextProvider>
      </div>
    </>
  );
};

export default SpotMarketsPage;
