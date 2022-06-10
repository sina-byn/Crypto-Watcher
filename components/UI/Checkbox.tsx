import { FC, useContext, useRef, useState } from "react";

// Importing Context + Interfaces
import { AppContext } from "../../context/AppContextProvider";
import { AppCtx } from "../../interfaces/interfaces";

// Importing hooks
import useLocalStorage from "../../hooks/useLocalStorage";

interface Props {
  id: string | null | undefined;
}

const Checkbox: FC<Props> = ({ id }) => {
  const [isSelected, setIsSelected] = useState<boolean | undefined>(false);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const ctx = useContext<AppCtx | null>(AppContext);
  const watchlist = ctx?.watchlist;
  const setWatchlist = ctx?.setWatchlist;

  const inputHandler = (): void => {
    setIsSelected(checkboxRef.current?.checked);
    if (setWatchlist && watchlist && id) {
      if (!isSelected) {
        const unifiedWatchlist: string[] = Array.from(
          new Set([...watchlist, id])
        );
        setWatchlist(unifiedWatchlist);
        useLocalStorage(unifiedWatchlist);
      } else {
        const coinIDX: number = watchlist.indexOf(id);
        if (coinIDX !== -1) {
          watchlist.splice(coinIDX, 1);
          setWatchlist(watchlist);
          useLocalStorage(watchlist);
        }
      }
    }
  };

  return (
    <label
      onClick={inputHandler}
      htmlFor={`${id}-checkbox`}
      className={`${isSelected ? "bg-blue-500" : ""} w-4 h-4 bg-gray-100 ml-2`}
    >
      <input
        ref={checkboxRef}
        type='checkbox'
        id={`${id}-checkbox`}
        className='hidden'
      />
    </label>
  );
};

export default Checkbox;
