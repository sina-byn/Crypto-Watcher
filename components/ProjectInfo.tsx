import { FC } from "react";
import Image from "next/image";

// Importing Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProjectInfro: FC = () => {
  return (
    <section className='flex flex-col items-center justify-center w-6/12 min-w-[300px] mx-auto'>
      <div className='text-gray-200 text-sm'>
        <h4 className='text-gray-500 text-base font-bold'>
          Project Tech Stack and Utilities :
        </h4>
        <p className='mt-1 ml-6'>Next.js</p>
        <p className='mt-1 ml-6'>TypeScript</p>
        <p className='mt-1 ml-6'>Tailwind CSS</p>
        <p className='mt-1 ml-6'>Pure CSS</p>
        <p className='mt-1 ml-6'>useSwr hook - Client-side Data Fetching</p>
        <p className='mt-1 ml-6'>React custom hooks</p>
        <p className='mt-1 ml-6'>React App-wide State - React Context</p>
        <h4 className='text-gray-500 text-base font-bold mt-4'>API:</h4>
        <p className='mt-1 ml-6'>
          <a
            className='hover:text-red-500'
            href='https://www.coingecko.com/'
            target='_blank'
          >
            Coingecko API - Click to Navigate
          </a>
        </p>
        <h4 className='text-gray-500 text-base font-bold mt-4'>Design:</h4>
        <p className='mt-1 ml-6'>
          Inspired By <span className='text-red-500'>Malik Abimanyu</span> on
          Dribbble
        </p>
        <a
          className='block border-b-[1px] border-gray-200 mt-3 ml-6 pb-2 hover:text-red-500 hover:border-red-500'
          href='https://dribbble.com/abimanyu17'
          target='_blank'
        >
          ={">"} Designer Profile
        </a>
        <a
          className='block border-b-[1px] border-gray-200 mt-3 ml-6 pb-2 hover:text-red-500 hover:border-red-500'
          href='https://dribbble.com/shots/17142286-CoinGyeek-Crypto-Coin-Price-Tracker/attachments/12239375?mode=media'
          target='_blank'
        >
          ={">"} Project Address
        </a>
        <p className='mt-4 ml-6'>FontAwesome Icons</p>
        <p className='mt-1 ml-6'>Google Fonts - lato Font</p>
      </div>
      <p className="text-gray-500 font-bold mt-10 mx-auto">Original Design</p>
      <Swiper
        className='w-full mt-6 mb-8 mx-auto cursor-grab'
        initialSlide={1}
        slidesPerView={1.5}
        centeredSlides={true}
        spaceBetween={10}
      >
        <SwiperSlide>
          <Image src='/design-2.png' alt='design-2' width={400} height={860} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/design-1.png' alt='design-1' width={400} height={860} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/design-3.png' alt='design-3' width={400} height={860} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ProjectInfro;
