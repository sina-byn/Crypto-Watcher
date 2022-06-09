import { FC } from "react";

// Importing Custom hooks
import useCoinsData from "../../hooks/useCoinsData";

// Importing Components
import CoinCard from "./CoinCard";

const Table: FC = () => {
  const apiAddress: string =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const { data, error } = useCoinsData(apiAddress);

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
