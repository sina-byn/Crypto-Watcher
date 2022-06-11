import { FC } from "react";
import Head from "next/head";

// Importing Components
import Header from "../components/Header";
import ProjectInfro from "../components/ProjectInfro";
import ScrollTopButton from "../components/UI/ScrollTopButton";

const AboutProjectPage: FC = () => {
  return (
    <>
      <Head>
        <title>About Project</title>
      </Head>
      <div className='container max-w-sm relative mx-auto'>
        <Header initialSlide={3} />
        <ProjectInfro />
        <ScrollTopButton />
      </div>
    </>
  );
};

export default AboutProjectPage;
