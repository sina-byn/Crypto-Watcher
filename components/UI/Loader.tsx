import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className={`grid place-items-center w-full h-screen -mt-24`}>
      <div className='loader w-20 h-20 border-8 border-gray-200 border-t-red-600 rounded-full animate-spin'></div>
    </div>
  );
};

export default Loader;