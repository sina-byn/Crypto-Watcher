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
      } w-8 h-8 test sticky bottom-12 z-40 bg-gray-100 rounded-full px-2 ml-4 md:-ml-12`}
      onClick={clickHandler}
    >
      <img src='/icons/chevron-up.svg' alt='Chevron Top Icon' />
    </button>
  );
};

export default ScrollTopButton;
