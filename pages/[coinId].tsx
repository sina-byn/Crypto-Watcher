import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

// Importing axios
import axios from "axios";
import axiosObj from "../services/Api";

// Importing Interfaces
import { CoinHistoryData } from "../interfaces/interfaces";

// Importing Components
import Loader from "../components/UI/Loader";
import CoinHistoryChart from "../components/CoinHistoryChart";
import CoinDataTable from "../components/CoinDataTable";
import TimeFormatButtons from "../components/TimeFormatButtons";
import CoinData from "../components/CoinData";

const CoinHistoryPage: NextPage = () => {
  const router: NextRouter = useRouter();
  const qurey: ParsedUrlQuery = router.query;
  const coinId = qurey.coinId as string;

  const [coinData, setCoinData] = useState<CoinHistoryData>();
  const [hasError, setHasError] = useState<boolean>(false);
  const [timeFormat, setTimeFormat] = useState<string>("24h");

  const formatData = (data: any) => {
    return data.map((el: any) => {
      return {
        x: el[0],
        y: el[1],
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .all([
          axiosObj.get(`/coins/${coinId}/market_chart/`, {
            params: {
              vs_currency: "usd",
              days: "1",
            },
          }),
          axiosObj.get(`/coins/${coinId}/market_chart/`, {
            params: {
              vs_currency: "usd",
              days: "7",
            },
          }),
          axiosObj.get(`/coins/${coinId}/market_chart/`, {
            params: {
              vs_currency: "usd",
              days: "30",
            },
          }),
          axiosObj.get(`/coins/${coinId}/market_chart/`, {
            params: {
              vs_currency: "usd",
              days: "365",
            },
          }),
          axiosObj.get(`/coins/markets`, {
            params: {
              vs_currency: "usd",
              ids: coinId,
            },
          }),
        ])
        .then(
          axios.spread(
            (resultsDay, resultsWeek, resultsMontn, resultsYear, details) => {
              setCoinData({
                day: formatData(resultsDay.data.prices),
                week: formatData(resultsWeek.data.prices),
                month: formatData(resultsMontn.data.prices),
                year: formatData(resultsYear.data.prices),
                details: details.data[0],
              });
            }
          )
        )
        .catch(() => {
          setHasError(true);
        });
    };

    const refetchOnInterval = () => {
      setInterval(fetchData, 20000);
    };

    if (router.isReady) {
      fetchData();
      refetchOnInterval();
    }
  }, [coinId, router.isReady]);

  if (hasError) {
    return (
      <p className='text-2xl text-center text-gray-200 font-bold mt-24 mx-auto'>
        Failed To Fetch Data - Please Try Again
      </p>
    );
  }

  if (!coinData) {
    return (
      <div className='mt-24'>
        <Loader classes='h-screen -mt-40 pt-32' />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Price History</title>
      </Head>
      <div className='container flex flex-col justify-end max-w-sm min-h-screen relative mx-auto'>
        <div className='gradient-custom pb-6'>
          <CoinData data={coinData.details} />
          <CoinHistoryChart coinData={coinData} timeFormat={timeFormat} />
          <TimeFormatButtons
            timeFormat={timeFormat}
            setTimeFormat={setTimeFormat}
          />
        </div>
        <CoinDataTable data={coinData.details} />
      </div>
    </>
  );
};

export default CoinHistoryPage;
