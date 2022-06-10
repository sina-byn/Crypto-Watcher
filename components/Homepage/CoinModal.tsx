import { FC, useContext } from "react";

// Importing Context + Interfaces
import { AppContext } from "../../context/AppContextProvider";
import { AppCtx } from "../../interfaces/interfaces";

// Importing Functions
import { moveInOut } from "../../helpers/animations";

const CoinModal: FC = () => {
  const ctx: AppCtx | null = useContext<AppCtx | null>(AppContext);
  if (ctx) {
    const { isModalShown, setIsModalShown, modalInfo, setIsScrollable } = ctx;

    const closeHandler = (): void => {
      moveInOut(".modal");
      setIsScrollable(true);
      setTimeout(() => {
        setIsModalShown(false);
      }, 200);
    };

    if (modalInfo) {
      const {
        name,
        symbol,
        current_price,
        market_cap,
        rank,
        explanation,
        img,
      } = modalInfo;

      return (
        <section
          className={`${
            isModalShown ? "flex" : "hidden"
          } modal items-end w-full max-w-sm h-screen fixed top-0 z-10 text-gray-200 translate-y-full transition-transform duration-300`}
        >
          <div
            className='backdrop h-full w-full absolute -z-10'
            onClick={closeHandler}
          ></div>
          <div className='flex items-end w-full bg-gradient-to-r from-stop-1 to-stop-2 rounded-t-3xl'>
            <div className='modal-data flex flex-col items-center justify-center gap-y-6 w-full relative bg-gradient-to-t from-primary-dark to-primary-light rounded-t-3xl translate-y-[3px]'>
              <figure className='absolute w-28 -top-14'>
                <img src={img} alt={name + "sign"} />
              </figure>
              <div className='text-center mt-20'>
                <p className='text-xl font-bold tracking-wider mb-1'>{name}</p>
                <p className='text-sm font-light'>{symbol?.toUpperCase()}</p>
              </div>
              <p className='w-10/12 max-w-xs text-center text-xs mx-auto mb-8'>
                {explanation}...
              </p>
              <div className='flex justify-between items-center w-full min-w-xs max-w-sm'>
                <div className='flex flex-col w-full items-center'>
                  <p className='text-xs font-light'>RANK</p>
                  <p className='font-bold mt-1'>#{rank}</p>
                </div>
                <div className='h-5 w-[1px] bg-gray-600'></div>
                <div className='flex flex-col w-full items-center'>
                  <p className='text-xs font-light'>LIVE PRICE</p>
                  <p className='font-bold mt-1'>${current_price}</p>
                </div>
                <div className='h-5 w-[1px] bg-gray-600'></div>
                <div className='flex flex-col w-full items-center'>
                  <p className='text-xs font-light'>MARKET CAP</p>
                  <p className='font-bold mt-1'>
                    {market_cap ? (market_cap / 1000000).toFixed(2) : "---"}M
                  </p>
                </div>
              </div>
              <button
                type='button'
                className='w-7/12 min-w-xs bg-gray-100 text-sm text-gray-900 font-bold rounded-full py-3 mt-6 mb-10'
              >
                PRICE HISTORY
              </button>
            </div>
          </div>
        </section>
      );
    }
  }

  return <p>Failed to Load Data Please Try Again</p>;
};

export default CoinModal;
