import { FC, useContext } from "react";

// Importing Context + Interfaces
import { AppContext } from "../../context/AppContextProvider";
import { AppCtx } from "../../interfaces/interfaces";

// Importing Interfaces
import { CoinProps } from "../../interfaces/interfaces";

// Importing Functions
import { moveInOut } from "../../helpers/animations";

// Importing Components
import Checkbox from "../UI/Checkbox";

const CoinCard: FC<CoinProps> = (props) => {
  const {
    id,
    name,
    symbol,
    current_price,
    price_change,
    total_volume,
    market_cap,
    rank,
    img,
  } = props;
  const ctx: AppCtx | null = useContext<AppCtx | null>(AppContext);
  const selectMode = ctx?.selectMode;

  const clickHandler = (): void => {
    if (ctx) {
      const { setIsModalShown, setModalInfo } = ctx;
      moveInOut(".modal");
      setIsModalShown(true);
      setModalInfo({
        id: id,
        name: name,
        symbol: symbol,
        current_price: current_price,
        market_cap: market_cap,
        rank: rank,
        explanation:
          "Launched in May 2003, Binance is the biggest cryptocurrency exchange globally based on daily",
        img: img,
      });
    }
  };

  const setColorStop = (): string => {
    if (price_change) {
      switch (price_change > 0) {
        case true:
          return "from-success";
        default:
          return "from-error";
      }
    }
    return "from-gray-500";
  };

  const setTextColor = (): string => {
    if (price_change) {
      switch (price_change > 0) {
        case true:
          return "text-success";
        default:
          return "text-error";
      }
    }
    return "text-gray-500";
  };

  if (price_change !== undefined && price_change !== null) {
    return (
      <div
        className='card flex justify-end w-full h-20 relative overflow-hidden cursor-pointer'
        onClick={clickHandler}
      >
        <div
          className={`card-design h-full w-1/2 absolute bg-gradient-to-l ${setColorStop()}`}
        ></div>
        <div className='card-data flex justify-between items-center gap-x-2 w-full h-full absolute bg-primary backdrop-blur-xl p-4'>
          <figure className='grid place-items-center w-14 h-14 rounded-full'>
            <img src={img} alt={name + "sign"} className='w-10' />
          </figure>
          <div className='flex flex-col flex-grow gap-y-1'>
            <p className='text-gray-100'>
              {symbol?.toUpperCase()}
              <span className='text-xs text-gray-500'>/USDT</span>
            </p>
            <p className='text-gray-500 text-xs'>
              Vol. {total_volume ? (total_volume / 1000000).toFixed(2) : "---"}M
            </p>
          </div>
          <div className='flex flex-col text-md items-end gap-y-1'>
            <p className={setTextColor()}>
              {price_change?.toLocaleString()}
              <span className='text-xs'>%</span>
            </p>
            <p className='text-xs text-gray-500'>
              ${current_price?.toLocaleString()}
            </p>
          </div>
          {selectMode ? <Checkbox id={id} /> : ""}
        </div>
      </div>
    );
  }

  return <p>Failed to Load data</p>;
};

export default CoinCard;
