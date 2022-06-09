import { FC } from "react";

// Importing Custom hooks
import useCoinsData from "../../hooks/useCoinsData";

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
    <div>
      {data?.map((coin) => {
        return <p key={coin.id}>{coin.name}</p>;
      })}
    </div>
  );
};

export default Table;
