import { FC, useContext } from "react";

// Importing Context + Interfaces
import { AppContext } from "../../context/AppContextProvider";
import { AppCtx } from "../../interfaces/interfaces";

const WatchlistButton: FC = () => {
  const ctx = useContext<AppCtx | null>(AppContext);
  const selectMode = ctx?.selectMode;
  const setSelectMode = ctx?.setSelectMode;

  const submitHandler = (): void => {};

  return (
    <div className='flex items-center justify-center w-full mb-4'>
      {selectMode ? (
        <button
          type='button'
          className='min-w-[200px] text-sm text-gray-100 border-2 border-gray-200 pt-2 pb-3'
        >
          Done
        </button>
      ) : (
        <button
          type='button'
          className='min-w-[200px] text-sm text-gray-100 border-2 border-gray-200 pt-2 pb-3'
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

export default WatchlistButton;
