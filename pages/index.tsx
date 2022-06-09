import { NextPage } from "next";
import Head from "next/head";

// Importing Components
import AllCoinsContextProvider from "../context/AllCoinsContextProvider";
import Navbar from "../components/HomePage/Navbar";
import Table from "../components/HomePage/CoinsTable";
import ScrollTopButton from "../components/UI/ScrollTopButton";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>SpotMarkets</title>
      </Head>
      <div className='container max-w-sm mx-auto'>
        <AllCoinsContextProvider>
          <Navbar />
          <Table />
        </AllCoinsContextProvider>
        <ScrollTopButton />
      </div>
    </>
  );
};

export default HomePage;
