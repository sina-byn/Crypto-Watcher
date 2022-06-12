import { NextPage } from "next";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

// Importing hooks
import useCoinsData from "../hooks/useCoinsData";

// Importing Components
import Loader from "../components/UI/Loader";
import CoinData from "../components/CoinData";

const CoinHistoryPage: NextPage = () => {
  const router: NextRouter = useRouter();
  const qurey: ParsedUrlQuery = router.query;
  const coinId: string | string[] | undefined = qurey.coinId;

  const { data, error } = useCoinsData(
    `${
      coinId
        ? `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinId}`
        : ""
    }`
  );

  //   console.log(data);

  if (error) {
    return (
      <p className='text-2xl text-center text-gray-200 font-bold mt-24 mx-auto'>
        Failed To Fetch Data - Please Try Again
      </p>
    );
  }

  if (!data) {
    return (
      <div className="mt-24">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{data[0].name} Price History</title>
      </Head>
      <div className='container flex flex-col justify-end max-w-sm min-h-screen relative mx-auto'>
        <CoinData data={data[0]} />
      </div>
    </>
  );
};

export default CoinHistoryPage;