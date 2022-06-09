import { FC } from "react";

// Importing Interfaces
import { CoinCardProps } from "../../interfaces/interfaces";

const CoinCard: FC<CoinCardProps> = (props) => {
  const { name, symbol, total_volume, price_change, current_price, img } =
    props;

  const setColor = (price_change: number | null, property: string): string => {
    if (price_change) {
      if (price_change > 0) {
        return `${property}-success`;
      } else if (price_change < 0) {
        return `${property}-error`;
      }
    }
    return `${property}-gray-500`;
  };

  return (
    <div className='card flex justify-end w-full h-20 relative overflow-hidden'>
      <div
        className={`card-design h-full w-1/2 absolute bg-gradient-to-l ${setColor(
          price_change,
          "from"
        )}`}
      ></div>
      <div className='card-data flex justify-between items-center gap-x-2 w-full h-full absolute bg-primary backdrop-blur-xl p-4'>
        <figure className='grid place-items-center w-14 aspect-square rounded-full'>
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
          <p className={setColor(price_change, "text")}>
            {price_change?.toLocaleString()}
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
