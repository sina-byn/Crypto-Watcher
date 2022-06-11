import { FC, useContext, useState } from "react";

// Importing Context + Interfaces
import { AppContext } from "../../context/AppContextProvider";
import { AppCtx } from "../../interfaces/interfaces";

// Importing hooks
import useWindowScrollY from "../../hooks/useWindowScrollY";

const ScrollTopButton: FC = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const ctx = useContext<AppCtx | null>(AppContext);
  const isModalShown = ctx?.isModalShown;

  useWindowScrollY(isShown, setIsShown);

  const clickHandler = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type='button'
      className={`${
        !isShown || isModalShown ? "hidden" : "initial"
      } w-8 h-8 sticky bottom-12 z-40 bg-gray-100 rounded-full px-2 ml-4 md:-ml-12`}
      onClick={clickHandler}
    >
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
        <path d='M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z' />
      </svg>
    </button>
  );
};

export default ScrollTopButton;
