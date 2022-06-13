import { FC } from "react";
import { isPositive } from "../helpers/functions";

// Importing Interfaces
import { CoinDataProps } from "../interfaces/interfaces";

interface Props {
  data: CoinDataProps;
}

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

  const chevronTopIcon = (): JSX.Element => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 320 512'
        className='fill-success w-2 mr-2'
      >
        <path d='M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z' />
      </svg>
    );
  };

  const chevronDownIcon = (): JSX.Element => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 320 512'
        className='fill-error w-2 mt-1 mr-2'
      >
        <path d='M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z' />
      </svg>
    );
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
          {isPositive(price_change) ? chevronTopIcon() : chevronDownIcon()}
          <p className={`${setTextColor()} text-center`}>
            {price_change?.toFixed(2)}% (24h)
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoinData;
