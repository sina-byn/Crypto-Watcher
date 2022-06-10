import { FC, useContext, useEffect, useState } from "react";

// Importing Context + Interfaces
import { AppContext } from "../../context/AppContextProvider";
import { moveInOut } from "../../helpers/animations";
import { AppCtx } from "../../interfaces/interfaces";

// Importing Interfaces
import { CoinProps } from "../../interfaces/interfaces";

const CoinCard: FC<CoinProps> = (props) => {
  const {
    name,
    symbol,
    current_price,
    price_change,
    total_volume,
    market_cap,
    rank,
    img,
  } = props;
  const [cardTheme, setCardTheme] = useState<string>();
  const ctx: AppCtx | null = useContext<AppCtx | null>(AppContext);

  useEffect(() => {
    const setColor = (price_change: number | null | undefined): string => {
      if (price_change) {
        if (price_change > 0) {
          return "success";
        } else if (price_change < 0) {
          return "error";
        }
      }
      return "gray-500";
    };

    setCardTheme(setColor(price_change));
  }, [cardTheme]);

  const clickHandler = (): void => {
    if (ctx) {
      const { setIsModalShown, setModalInfo, setIsScrollable } = ctx;
      moveInOut(".modal");
      setIsScrollable(false);
      setIsModalShown(true);
      setModalInfo({
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

  return (
    <div
      className='card flex justify-end w-full h-20 relative overflow-hidden'
      onClick={clickHandler}
    >
      <div
        className={`card-design h-full w-1/2 absolute bg-gradient-to-l from-${cardTheme}`}
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
          <p className={`text-${cardTheme}`}>
            {price_change?.toLocaleString()}
            <span className='text-xs'>%</span>
          </p>
          <p className='text-xs text-gray-500'>
            ${current_price?.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
