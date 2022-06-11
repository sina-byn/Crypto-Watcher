import { NextPage } from "next";
import Head from "next/head";

// Importing Components
import Header from "../components/Header";
// import ScrollTopButton from "../components/UI/ScrollTopButton";

const developer: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spot Markets</title>
      </Head>
      <div className='container max-w-sm min-h-screen relative mx-auto'>
        <Header initialSlide={0} />
        {/* <ScrollTopButton /> */}
      </div>
    </>
  );
};

export default developer;
