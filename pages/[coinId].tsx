import { NextPage } from "next";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";

// Importing hooks
import useCoinsData from "../hooks/useCoinsData";

// Importing interfaces
import { CoinDataProps } from "../interfaces/interfaces";

// Importing Components
import Loader from "../components/UI/Loader";

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

  if (error) {
    return (
      <p className='text-2xl text-center text-gray-200 font-bold mt-24 mx-auto'>
        Failed To Fetch Data - Please Try Again
      </p>
    );
  }

  if (!data) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>{data[0].name} Price History</title>
      </Head>
      <div className='text-white'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At veritatis,
        facilis minus numquam minima debitis, hic atque asperiores expedita
        harum quaerat soluta dolor corrupti voluptatibus est laboriosam iste
        quos. Saepe.
      </div>
    </>
  );
};

export default CoinHistoryPage;
