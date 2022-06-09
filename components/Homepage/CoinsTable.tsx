import { FC, useContext } from "react";

// Importing Context + Interfaces
import { AllCoinsContext } from "../../context/AllCoinsContextProvider";
import { AllCoinsCtx } from "../../interfaces/interfaces";

// Importing Components
import CoinCard from "./CoinCard";

const Table: FC = () => {
  const ctx = useContext<AllCoinsCtx | null>(AllCoinsContext);
  const data = ctx?.data;
  const error = ctx?.error;

  if (error) {
    return <p>Failde to fetch Data - reload and try again</p>;
  }

  if (!data) {
    return <p>Loading ...</p>;
  }

  return (
    <section className='flex flex-col gap-y-3 px-6'>
      {data?.map((coin) => {
        return (
          <CoinCard
            key={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            total_volume={coin.total_volume}
            price_change={coin.price_change_percentage_24h}
            current_price={coin.current_price}
            img={coin.image}
          />
        );
      })}
    </section>
  );
};

export default Table;
