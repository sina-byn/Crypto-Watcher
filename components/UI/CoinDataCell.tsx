import { FC } from "react";

// Importing interfaces
import { CoinDataCellProps } from "../../interfaces/interfaces";

// Importing Functions
import { isPositive, formatDate } from "../../helpers/functions";


// Importing Components
import ChevronTopIcon from "./ChevronTopIcon";
import ChevronDownIcon from "./ChevronDownIcon";

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

  if (circulating_supply) {
    return (
      <div className='flex flex-col gap-y-1 text-gray-200 border-b-[1px] border-gray-700 border-opacity-[30%] pt-3 pb-2'>
        <h4 className='text-xs font-light'>Circulating Supply</h4>
        <p className='text-sm font-bold'>
          {circulating_supply.toLocaleString()}
          <span className='text-2xs font-light'> tokens</span>
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
            <ChevronTopIcon />
          ) : (
            <ChevronDownIcon />
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
            All Time High ({formatDate(ath_date)})
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
            <ChevronTopIcon />
          ) : (
            <ChevronDownIcon />
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
            All Time Low ({formatDate(atl_date)})
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
            <ChevronTopIcon />
          ) : (
            <ChevronDownIcon />
          )}
          {atl_change_percentage.toFixed(2)}%
        </div>
      </div>
    );
  }

  return (
    <p className='text-2xl text-gray-200 font-bold mt-24 mx-auto'>
      Failed to Fetch Date - Please Try Again
    </p>
  );
};

export default CoinDataCell;
