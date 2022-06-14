import { NextPage } from "next";
import Head from "next/head";
import { Dispatch, SetStateAction, useState } from "react";

// Importing Components
import AppContextProvider from "../context/AppContextProvider";
import Header from "../components/Header";
import HeaderButton from "../components/UI/HeaderButton";
import Loader from "../components/UI/Loader";
import CoinsTable from "../components/CoinsTable";
import CoinModal from "../components/CoinModal";
import ScrollTopButton from "../components/UI/ScrollTopButton";
import Footer from "../components/Footer";
import useCoinsData from "../hooks/useCoinsData";

interface Props {
  selectMode: boolean;
  setSelectMode: Dispatch<SetStateAction<boolean>>;
}

const SpotMarketsPage: NextPage<Props> = ({ selectMode, setSelectMode }) => {
  const [apiPageNo, setApiPageNo] = useState<number>(1);

  const { data, error } = useCoinsData(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${apiPageNo}&sparkline=false`
  );

  return (
    <>
      <Head>
        <title>Spot Markets</title>
      </Head>
      <div className='container max-w-sm relative mx-auto'>
        <AppContextProvider>
          <Header initialSlide={1}>
            <HeaderButton
              selectMode={selectMode}
              setSelectMode={setSelectMode}
            />
          </Header>
          <CoinsTable
            coins={data}
            error={error}
            selectMode={selectMode}
            setSelectMode={setSelectMode}
          >
            <Loader classes='h-screen -mt-40 pt-20' />
          </CoinsTable>
          <CoinModal />
          <ScrollTopButton />
          <Footer apiPageNo={apiPageNo} setApiPageNo={setApiPageNo} />
        </AppContextProvider>
      </div>
    </>
  );
};

export default SpotMarketsPage;
