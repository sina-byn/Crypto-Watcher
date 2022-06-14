import { FC, useContext } from "react";
import { NextRouter, useRouter } from "next/router";

// Importing Context + Interfaces
import { AppContext } from "../../context/AppContextProvider";
import { AppCtx } from "../../interfaces/interfaces";

// Importing hooks
import useLocalStorage from "../../hooks/useLocalStorage";

const HeaderButton: FC = () => {
  const router: NextRouter = useRouter();

  const ctx = useContext<AppCtx | null>(AppContext);
  const selectMode = ctx?.selectMode;
  const setSelectMode = ctx?.setSelectMode;
  const selectedCoins = ctx?.selectedCoins;

  const addHandler = (): void => {
    const watchlist = useLocalStorage('watchlist');
    if (setSelectMode && selectedCoins) {
      const newWatchlist: string[] = Array.from(new Set([...watchlist, ...selectedCoins]));
      localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
      setSelectMode(false);
      router.push('/watchlist');
    }
  };

  return (
    <div className='flex items-center justify-center w-full -mt-3 mb-6'>
      {selectMode ? (
        <button
          type='button'
          className='min-w-[150px] bg-gray-200 text-xs text-black font-bold border-2 border-gray-200 pt-2 pb-[9px]'
          onClick={addHandler}
        >
          Done
        </button>
      ) : (
        <button
          type='button'
          className='min-w-[150px] text-xs text-gray-100 border-2 border-gray-200 pt-2 pb-[9px]'
          onClick={() => {
            if (setSelectMode) setSelectMode(true);
          }}
        >
          Add To Watch List
        </button>
      )}
    </div>
  );
};

export default HeaderButton;
