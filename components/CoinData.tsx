import { FC } from "react";

// Importing Functions
import { isPositive } from "../helpers/functions";

// Importing Interfaces
import { CoinDataProps } from "../interfaces/interfaces";

interface Props {
  data: CoinDataProps;
}

// Importing Components
import ChevronDownIcon from "./UI/ChevronDownIcon";
import ChevronTopIcon from "./UI/ChevronTopIcon";

const CoinData: FC<Props> = ({ data }) => {
  const { name, current_price, price_change_percentage_24h, image } = data;

  const fixedPrice: string | undefined = current_price?.toFixed(2);
  const priceWholePart: string | undefined = fixedPrice?.split(".")[0];
  const priceDecimalPart: string | undefined = "." + fixedPrice?.split(".")[1];

  const price_change: number | null = price_change_percentage_24h;

  const setBgColor = (): string => {
    if (price_change) {
      switch (price_change > 0) {
        case true:
          return "bg-success-dark";
        default:
          return "bg-error-dark";
      }
    }
    return "bg-gray-500";
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

  return (
    <section className='flex flex-col items-center w-full mx-auto'>
      <figure className='mt-16 mb-10'>
        <img src={image} alt={name + "sign"} className='w-24' />
      </figure>
      <div>
        <h2 className='flex items-baseline text-4xl text-center text-gray-200 font-bold mb-3'>
          <span className='self-start text-xl mr-1'>$</span>
          {priceWholePart?.toLocaleString()}
          <span className='text-2xl text-gray-500 font-medium'>
            {priceDecimalPart}
          </span>
        </h2>
        <div
          className={`${setBgColor()} flex items-center justify-center text-sm font-bold rounded-full px-2 pt-1 pb-[5.5px] mb-6`}
        >
          {isPositive(price_change) ? <ChevronTopIcon /> : <ChevronDownIcon />}
          <p className={`${setTextColor()} text-center`}>
            {price_change?.toFixed(2)}% (24h)
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoinData;
