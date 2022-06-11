import { FC, useContext, useEffect, useRef, useState } from "react";

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
  const [isRemovable, setIsRemovable] = useState<boolean>(true);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const ctx = useContext<AppCtx | null>(AppContext);
  // const watchlist = ctx?.watchlist;
  // const setWatchlist = ctx?.setWatchlist;
  const selectedCoins = ctx?.selectedCoins;
  const setSelectedCoins = ctx?.setSelectedCoins;

  useEffect(() => {
    setIsRemovable(true);
    if (id) {
      const watchlist = useLocalStorage("watchlist");
      const defaultWatchlist = ["bitcoin", "ethereum", "tether", "solana"];
      if (defaultWatchlist.indexOf(id) > -1) {
        setIsRemovable(false);
      }
      if (watchlist.indexOf(id) > -1) {
        setIsSelected(true);
      }
    }
  }, []);

  const inputHandler = (): void => {
    if (isRemovable) {
      setIsSelected(checkboxRef.current?.checked);
    }
    if (setSelectedCoins && selectedCoins && id) {
      if (!isSelected) {
        const unifiedSelectedCoins: string[] = Array.from(
          new Set([...selectedCoins, id])
          );
          setSelectedCoins(unifiedSelectedCoins);
      } else {
        if (isRemovable) {
          const coinIDX: number = selectedCoins.indexOf(id);
          if (coinIDX !== -1) {
            selectedCoins.splice(coinIDX, 1);
            setSelectedCoins(selectedCoins);
          }
        }
      }
    }
  };

  return (
    <label
      onClick={inputHandler}
      htmlFor={`${id}-checkbox`}
      className='grid place-items-center h-full'
    >
      <div className='w-5 h-5 bg-gray-100 rounded-full cursor-pointer ml-2'>
        {isSelected ? (
          <img
            src='/icons/circle-check.svg'
            alt='Circle Check Icon'
            className='cursor-pointer'
          />
        ) : (
          ""
        )}
      </div>
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
