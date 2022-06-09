import { NextPage } from "next";
import Head from "next/head";

// Importing Components
import Navbar from "../components/HomePage/Navbar";
import Table from "../components/HomePage/CoinsTable";

const HomePage: NextPage = () => {
  return (
    <>
    <Head>
      <title>HomePage</title>
    </Head>
    <div className="container">
      <Navbar />
      <Table />
    </div>
    </>
  );
};

export default HomePage;