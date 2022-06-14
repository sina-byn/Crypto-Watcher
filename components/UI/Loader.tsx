import { FC } from "react";

interface Props {
  classes: string;
}

const Loader: FC<Props> = ({ classes }) => {
  return (
    <div className={`grid place-items-center w-full ${classes}`}>
      <div className='loader w-20 h-20 border-8 border-gray-200 border-t-red-600 rounded-full animate-spin'></div>
    </div>
  );
};

export default Loader;