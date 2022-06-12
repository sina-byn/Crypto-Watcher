import { FC } from "react";

// Importing interfaces
import { CoinDataCellProps } from "../interfaces/interfaces";

// Importing hooks
import useDate from "../hooks/useDate";

const CoinDataCell: FC<CoinDataCellProps> = (props) => {
  const {
    ath,
    ath_change_percentage,
    ath_date,
    atl,
    atl_change_percentage,
    atl_date,
    circulating_supply,
    market_cap,
    market_cap_change,
  } = props;

  const isPositive = (value: number): boolean => {
    if (value >= 0) {
      return true;
    }

    return false;
  };

  if (circulating_supply) {
    return (
      <div className='flex flex-col gap-y-1 text-gray-200 border-b-[1px] border-gray-700 border-opacity-[30%] pt-3 pb-2'>
        <h4 className='text-xs font-light'>Circulating Supply</h4>
        <p className='text-sm font-bold'>
          {circulating_supply.toLocaleString()}
          <span className="text-2xs font-light"> tokens</span>
        </p>
      </div>
    );
  }

  if (market_cap && market_cap_change) {
    return (
      <div className='flex justify-between items-end text-sm text-gray-200 font-bold border-b-[1px] border-gray-700 border-opacity-[30%] pt-5 pb-2'>
        <div className='flex flex-col gap-y-1'>
          <h4 className='text-xs font-light'>Market Cap</h4>
          <p>${market_cap.toLocaleString()}</p>
        </div>
        <div
          className={`
            ${isPositive(market_cap_change) ? "text-success" : "text-error"}
            flex
          `}
        >
          {isPositive(market_cap_change) ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'
              className='fill-success w-2 mr-1'
            >
              <path d='M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'
              className='fill-error w-2 mt-1 mr-1'
            >
              <path d='M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z' />
            </svg>
          )}
          {market_cap_change.toFixed(2)}%
        </div>
      </div>
    );
  }

  if (ath && ath_change_percentage && ath_date) {
    return (
      <div className='flex justify-between items-end text-sm text-gray-200 font-bold border-b-[1px] border-gray-700 border-opacity-[30%] pt-5 pb-2'>
        <div className='flex flex-col gap-y-1'>
          <h4 className='text-xs font-light'>
            All Time High ({useDate(ath_date)})
          </h4>
          <p>${ath.toLocaleString()}</p>
        </div>
        <div
          className={`
            ${isPositive(ath_change_percentage) ? "text-success" : "text-error"}
            flex
          `}
        >
          {isPositive(ath_change_percentage) ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'
              className='fill-success w-2 mr-1'
            >
              <path d='M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'
              className='fill-error w-2 mt-1 mr-1'
            >
              <path d='M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z' />
            </svg>
          )}
          {ath_change_percentage.toFixed(2)}%
        </div>
      </div>
    );
  }

  if (atl && atl_change_percentage && atl_date) {
    return (
      <div className='flex justify-between items-end text-sm text-gray-200 font-bold pt-5 pb-2'>
        <div className='flex flex-col gap-y-1'>
          <h4 className='text-xs font-light'>
            All Time Low ({useDate(atl_date)})
          </h4>
          <p>${atl.toLocaleString()}</p>
        </div>
        <div
          className={`
            ${isPositive(atl_change_percentage) ? "text-success" : "text-error"}
            flex
          `}
        >
          {isPositive(atl_change_percentage) ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'
              className='fill-success w-2 mr-1'
            >
              <path d='M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'
              className='fill-error w-2 mt-1 mr-1'
            >
              <path d='M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z' />
            </svg>
          )}
          {atl_change_percentage.toFixed(2)}%
        </div>
      </div>
    );
  }

  return <p className="text-2xl font-bold mt-24 mx-auto">Failed to Show Date - Please Try Again</p>;
};

export default CoinDataCell;
