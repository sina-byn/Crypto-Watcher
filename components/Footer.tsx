import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

// Importing Components
import PaginationButton from "./UI/PaginationButton";

interface FooterProps {
  apiPageNo: number;
  setApiPageNo: Dispatch<SetStateAction<number>>;
}

const Footer: FC<FooterProps> = ({ apiPageNo, setApiPageNo }) => {
  const [apiPages, setApiPages] = useState<number[]>();

  useEffect(() => {
    setApiPages([1, 2, 3, 4, 5]);
  }, []);

  return (
    <footer className='flex items-center justify-center gap-x-5 w-full max-w-sm h-16 fixed bottom-0 bg-black bg-opacity-90 mx-auto'>
      <span className="text-gray-200 tracking-wide">page:</span>
      {apiPages?.map((page) => {
        return <PaginationButton key={page} id={page} apiPageNo={apiPageNo} setApiPageNo={setApiPageNo} />;
      })}
    </footer>
  );
};

export default Footer;
