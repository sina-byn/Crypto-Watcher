import { FC } from "react";

// Importing interfaces
import { CoinDataProps } from "../interfaces/interfaces";
import CoinDataCell from "./UI/CoinDataCell";

interface Props {
  data: CoinDataProps;
}

const CoinDataTable: FC<Props> = ({ data }) => {
  return (
    <section className="px-6 py-4">
      <CoinDataCell
        circulating_supply={data.circulating_supply}
      />
      <CoinDataCell
        market_cap={data.market_cap}
        market_cap_change={data.market_cap_change_percentage_24h}
      />
      <CoinDataCell
        ath={data.ath}
        ath_change_percentage={data.ath_change_percentage}
        ath_date={data.ath_date}
      />
      <CoinDataCell
        atl={data.atl}
        atl_change_percentage={data.atl_change_percentage}
        atl_date={data.atl_date}
      />
    </section>
  );
};

export default CoinDataTable;
