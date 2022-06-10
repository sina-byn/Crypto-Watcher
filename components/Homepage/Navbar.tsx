import { FC } from "react";
import { NextRouter, useRouter } from "next/router";

// Importing Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Importing Components
import NavLink from "../UI/NavLink";

interface Props {
  initialSlide: number;
}

const Navbar: FC<Props> = ({ initialSlide }) => {
  const router: NextRouter = useRouter();

  return (
    <section className='flex flex-col justify-center w-full h-20 sticky top-0 left-0 z-20 bg-black bg-opacity-90 text-sm text-gray-100 font-bold tracking-wider my-6'>
      <div className='slider-design w-36 absolute right-0 h-full z-10 bg-gradient-to-l from-black to-transparent'></div>
      <div className='slider-design w-36 absolute left-0 h-full z-10 bg-gradient-to-r from-black to-transparent'></div>
      <Swiper
        className='w-[100%] mx-auto cursor-pointer'
        slidesPerView={2.5}
        centeredSlides={true}
        initialSlide={initialSlide}
        onActiveIndexChange={(Swiper) => {
          const idx: number = Swiper.activeIndex;

          setTimeout(() => {
            switch (idx) {
              case 1:
                router.push("/watchlist");
                break;
                default:
                router.push("/");
                break;
            }
          }, 800);
        }}
      >
        <SwiperSlide className='text-center select-none'>
          <NavLink text='Spot Markets' />
        </SwiperSlide>
        <SwiperSlide className='text-center select-none'>
          <NavLink text='Watchlist' />
        </SwiperSlide>
      </Swiper>
      <div className='indicator w-1 h-1 bg-gray-200 rounded-full mx-auto mt-2'></div>
    </section>
  );
};

export default Navbar;
