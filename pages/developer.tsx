import { NextPage } from "next";
import Head from "next/head";

// Importing Components
import Header from "../components/Header";
import DeveloperInfo from "../components/DeveloperInfo";
import ScrollTopButton from "../components/UI/ScrollTopButton";

const DeveloperPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Developer | Sina Bayandorian</title>
      </Head>
      <div className='container max-w-sm relative mx-auto'>
        <Header initialSlide={0} />
        <DeveloperInfo />
        <ScrollTopButton />
      </div>
    </>
  );
};

export default DeveloperPage;
