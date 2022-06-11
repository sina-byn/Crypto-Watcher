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
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            fill='#00ba00'
            className='cursor-pointer'
          >
            <path d='M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z' />
          </svg>
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
