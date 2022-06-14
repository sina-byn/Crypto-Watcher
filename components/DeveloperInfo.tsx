import { FC } from "react";
import Image from "next/image";

const DeveloperInfo: FC = () => {
  return (
    <section className='flex flex-col items-center justify-center w-6/12 min-w-[250px] mx-auto'>
      <figure>
        <Image src='/pic.png' alt='Developer' width={600} height={780} loading={"eager"} />
      </figure>
      <div className='flex flex-col gap-y-3 text-gray-500 mx-auto mt-6'>
        <h4 className='font-bold'>
          Fullname:&nbsp;
          <span className='text-sm text-gray-200 font-light'>
            Sina Bayandorian
          </span>
        </h4>
        <div className='font-bold'>
          Education:
          <p className=' text-sm text-gray-200 font-light'>
            <span className='block'>Software Engineering Student at KIAU</span>
            <span className='block'>Karaj Islmic Azad University</span>
          </p>
        </div>
        <div className="font-bold">
            Skills:
            <p className="text-sm text-gray-200 font-light">
                <span className="block">HTML 5</span>
                <span className="block">CSS 3</span>
                <span className="block">Sass</span>
                <span className="block">Tailwind CSS</span>
                <span className="block">JavaScript</span>
                <span className="block">TypeScript</span>
                <span className="block">React.js</span>
                <span className="block">Next.js</span>
            </p>
        </div>
        <div className='flex w-full gap-x-4 mt-6 mb-10'>
          <a
            className='w-full text-xs text-center text-gray-200 border-2 border-gray-200 py-2 mx-auto hover:bg-gray-100 hover:bg-opacity-25'
            href='https://sina-byn.github.io/My-Portfolio/about-me.html'
            target='_blank'
            rel="noreferrer"
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
