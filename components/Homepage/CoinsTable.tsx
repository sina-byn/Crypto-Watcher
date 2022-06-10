import { FC, useContext } from "react";

// Importing Context + Interfaces
import { AppContext } from "../../context/AppContextProvider";
import { AppCtx } from "../../interfaces/interfaces";

// Importing Components
import CoinCard from "./CoinCard";

const Table: FC = () => {
  const ctx = useContext<AppCtx | null>(AppContext);
  const data = ctx?.data;
  const error = ctx?.error;

  if (error) {
    return <p>Failde to fetch Data - reload and try again</p>;
  }

  if (!data) {
    return <p>Loading ...</p>;
  }

  return (
    <section className='flex flex-col gap-y-3 min-h-screen px-6 pb-10'>
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
