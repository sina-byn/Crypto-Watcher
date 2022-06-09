export interface CoinDataProps {
  ath: number | undefined | null;
  ath_change_percentage: number | undefined | null;
  ath_date: string | undefined | null;
  atl: number | undefined | null;
  atl_change_percentage: number | undefined | null;
  atl_date: string | undefined | null;
  circulating_suuply: number | undefined | null;
  current_price: number | undefined | null;
  fully_diluted_valuation: number | undefined | null;
  high_24h: number | undefined | null;
  id: string | undefined | null;
  image: string | undefined;
  last_updated: string | undefined | null;
  low_24h: number | undefined | null;
  market_cap: number | undefined | null;
  market_cap_change_24h: number | undefined | null;
  market_cap_change_percentage_24h: number | null;
  market_cap_rank: number | undefined | null;
  max_supply: number | undefined | null;
  name: string | undefined | null;
  price_change_24h: number | undefined | null;
  price_change_percentage_24h: number | null;
  roi: object | undefined | null;
  symbol: string | undefined | null;
  total_supply: number | undefined | null;
  total_volume: number | undefined | null;
};

export interface CoinCardProps {
  name: string | undefined | null;
  symbol: string | undefined | null;
  price_change: number | null;
  current_price: number | undefined | null;
  total_volume: number | undefined | null;
  img: string | undefined;
};

export interface NavLinkProps {
  id: number;
  text: string;
  href: string;
  classes?: string;
};

// ath: 69045
// ath_change_percentage: -55.7648
// ath_date: "2021-11-10T14:24:11.849Z"
// atl: 67.81
// atl_change_percentage: 44941.35792
// atl_date: "2013-07-06T00:00:00.000Z"
// circulating_supply: 19062700
// current_price: 30536
// fully_diluted_valuation: 641522611552
// high_24h: 30715
// id: "bitcoin"
// image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
// last_updated: "2022-06-09T10:54:53.512Z"
// low_24h: 30040
// market_cap: 582340623202
// market_cap_change_24h: 2203964261
// market_cap_change_percentage_24h: 0.3799
// market_cap_rank: 1
// max_supply: 21000000
// name: "Bitcoin"
// price_change_24h: 93.95
// price_change_percentage_24h: 0.30862
// roi: null
// symbol: "btc"
// total_supply: 21000000
// total_volume: 19139528118
