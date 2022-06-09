import { NextPage } from "next";
import Head from "next/head";

// Importing Components
import Table from "../components/Homepage/CoinsTable";

const HomePage: NextPage = () => {
  return (
    <>
    <Head>
      <title>HomePage</title>
    </Head>
    <div>
      <Table />
    </div>
    </>
  );
};

export default HomePage;