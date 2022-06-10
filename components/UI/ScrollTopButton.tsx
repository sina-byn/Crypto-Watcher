import { FC, useContext } from "react";

// Importing Context + Interfaces
import { AppContext } from "../../context/AppContextProvider";
import { AppCtx } from "../../interfaces/interfaces";

const ScrollTopButton: FC = () => {
  const ctx = useContext<AppCtx | null>(AppContext);
  const isModalShown = ctx?.isModalShown;

  const clickHandler = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type='button'
      className={`${
        isModalShown ? "hidden" : "initial"
      } w-8 h-8 sticky bottom-12 z-40 bg-gray-100 rounded-full px-2 ml-4 md:-ml-12`}
      onClick={clickHandler}
    >
      <img src='/icons/chevron-up.svg' alt='Chevron Top Icon' />
    </button>
  );
};

export default ScrollTopButton;
