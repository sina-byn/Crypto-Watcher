import { FC } from "react";

const DeveloperInfo: FC = () => {
  return (
    <section className='flex flex-col items-center justify-center w-6/12 min-w-[250px] mx-auto'>
      <figure>
        <img src='/pic.png' alt='Developer' />
      </figure>
      <div className='flex flex-col gap-y-3 text-gray-500 mx-auto mt-6'>
        <p className='font-bold'>
          Fullname:{" "}
          <span className='text-sm text-gray-200 font-light'>
            Sina Bayandorian
          </span>
        </p>
        <p className='font-bold'>
          Education:
          <p className=' text-sm text-gray-200 font-light'>
            <p>Software Engineering Student at KIAU</p>
            <p>Karaj Islmic Azad University</p>
          </p>
        </p>
        <div className='flex w-full gap-x-4 mt-6 mb-10'>
          <a
            className='w-full text-xs text-center text-gray-200 border-2 border-gray-200 py-2 mx-auto hover:bg-gray-100 hover:bg-opacity-25'
            href='https://sina-byn.github.io/My-Portfolio/about-me.html'
            target='_blank'
          >
            Portfolio
          </a>
          <a
            className='w-full text-xs text-center text-gray-200 border-2 border-gray-200 py-2 mx-auto hover:bg-gray-100 hover:bg-opacity-25'
            href='/sina-bayandorian.pdf'
            download
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeveloperInfo;
