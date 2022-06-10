import { NextPage } from "next";
import Head from "next/head";

// Importing Components
import AllCoinsContextProvider from "../context/AppContextProvider";
import Navbar from "../components/HomePage/Navbar";
import Table from "../components/HomePage/CoinsTable";
import CoinModal from "../components/HomePage/CoinModal";
import ScrollTopButton from "../components/UI/ScrollTopButton";
import Footer from "../components/HomePage/Footer";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>SpotMarkets</title>
      </Head>
      <div className='container max-w-sm min-h-screen mx-auto'>
        <AllCoinsContextProvider>
          <Navbar />
          <Table />
          <CoinModal />
          <ScrollTopButton />
          <Footer />
        </AllCoinsContextProvider>
      </div>
    </>
  );
};

export default HomePage;
