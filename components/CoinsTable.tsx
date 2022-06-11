import { FC } from "react";
import Link from "next/link";

// Importing interfaces
import { CoinsTableProps } from "../interfaces/interfaces";

// Importing Components
import CoinCard from "./CoinCard";
import Loader from "./UI/Loader";

const CoinsTable: FC<CoinsTableProps> = ({
  coins,
  error,
  ids,
  forceUpdate,
}) => {
  if (error) {
    return (
      <p className='text-3xl text-gray-200 font-bold mt-24'>
        Failde To Fetch Data - Please Try Again
      </p>
    );
  }

  if (!ids?.length && ids) {
    return (
      <>
        <p className='text-3xl text-gray-200 font-bold mt-24'>
          Your Watchlist is Empty.
        </p>
        <Link href='/'>
          <a>Add Coins</a>
        </Link>
      </>
    );
  }

  if (!coins) {
    return <Loader />;
  }

  return (
    <section className='flex flex-col gap-y-3 px-6 pb-10'>
      {coins?.map((coin) => {
        return (
          <CoinCard
            key={coin.id}
            id={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            current_price={coin.current_price}
            price_change={coin.price_change_percentage_24h}
            total_volume={coin.total_volume}
            market_cap={coin.market_cap}
            rank={coin.market_cap_rank}
            img={coin.image}
            ids={ids}
            forceUpdate={forceUpdate}
          />
        );
      })}
    </section>
  );
};

export default CoinsTable;
