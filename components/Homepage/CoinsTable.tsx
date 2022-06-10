import { FC } from "react";

import { CoinDataProps } from "../../interfaces/interfaces";

// Importing Components
import CoinCard from "./CoinCard";

interface Props {
  coins: CoinDataProps[] | undefined;
  error: object | undefined;
}

const Table: FC<Props> = ({ coins, error }) => {
  if (error) {
    return (
      <p className='min-h-screen'>
        Failde to fetch Data - reload and try again
      </p>
    );
  }

  if (!coins) {
    return <p className='min-h-screen'>Loading ...</p>;
  }

  return (
    <section className='flex flex-col gap-y-3 min-h-screen px-6 pb-10'>
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
          />
        );
      })}
    </section>
  );
};

export default Table;
