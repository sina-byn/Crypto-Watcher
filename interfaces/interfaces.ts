import { Dispatch, ReactNode, SetStateAction } from "react";

export interface CoinDataProps {
  ath: number | undefined | null;
  ath_change_percentage: number | undefined | null;
  ath_date: string | undefined | null;
  atl: number | undefined | null;
  atl_change_percentage: number | undefined | null;
  atl_date: string | undefined | null;
  circulating_supply: number | undefined | null;
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
}

export interface CoinProps {
  id: string | undefined | null;
  name: string | undefined | null;
  symbol: string | undefined | null;
  current_price: number | undefined | null;
  price_change?: number | null;
  total_volume?: number | undefined | null;
  market_cap?: number | undefined | null;
  rank?: number | undefined | null;
  explanation?: string;
  img: string | undefined;
}

export interface ApiAddress {
  url: string;
  ids?: string;
}

export interface AppCtx {
  selectedCoins: string[] | undefined;
  setSelectedCoins: Dispatch<SetStateAction<string[] | undefined>>;
  isModalShown: boolean;
  setIsModalShown: Dispatch<SetStateAction<boolean>>;
  modalInfo: CoinProps | undefined;
  setModalInfo: Dispatch<SetStateAction<CoinProps>>;
}

export interface HeaderProps {
  initialSlide: number;
  children?: ReactNode;
  selectMode?: boolean;
}

export interface GetLocalStorage {
  list: string[];
  isFalsy: boolean;
}

export interface CoinsTableProps {
  coins: CoinDataProps[] | undefined;
  error: object | undefined;
  ids?: string[] | undefined;
  forceUpdate?: Function;
  children: ReactNode;
  selectMode?:boolean;
  setSelectMode?: Dispatch<SetStateAction<boolean>>;
}

export interface CoinDataCellProps {
  ath?: number | null | undefined;
  ath_change_percentage?: number | null | undefined;
  ath_date?: string | null | undefined;
  atl?: number | null | undefined;
  atl_change_percentage?: number | null | undefined;
  atl_date?: string | null | undefined;
  circulating_supply?: number | null | undefined;
  market_cap?: number | null | undefined;
  market_cap_change?: number | null | undefined;
}

export interface CoinHistoryProps {
  market_caps: number[][];
  prices: number[][];
  total_volumes: number[][];
}

export interface TableData {
  x: number;
  y: number;
}

export interface CoinHistoryData {
  day: TableData[];
  week: TableData[];
  year: TableData[];
  month: TableData[];
  details: CoinDataProps;
}

export interface UseSWROptions {
  revalidateOnFocus: boolean;
  revalidateOnReconnect: boolean;
  refreshInterval: number;
  shoshouldRetryOnError: boolean;
}

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
