import { FC, useContext, useEffect } from "react";

// Importing Context + Interfaces
import { AppContext } from "../../context/AppContextProvider";
import { AppCtx } from "../../interfaces/interfaces";

const ScrollTopButton: FC = () => {
  const ctx: AppCtx | null = useContext<AppCtx | null>(AppContext);
  const isScrollable = ctx?.isScrollable;

  const clickHandler = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type='button'
      className={`${
        isScrollable ? "initial" : "hidden"
      } w-8 h-8 sticky bottom-10 bg-gray-100 rounded-full px-2 ml-10 md:-ml-12`}
      onClick={clickHandler}
    >
      <img src='/icons/chevron-up.svg' alt='Chevron Top Icon' />
    </button>
  );
};

export default ScrollTopButton;
