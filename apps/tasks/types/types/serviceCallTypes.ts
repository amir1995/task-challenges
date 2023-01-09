export type TStatus = {
  status: number;
};
export type TCoinListResponse = string[];

export type TMarketCoinItem = {
  symbol: string
  name: string
  image: string
  current_price: number
  price_change_percentage_24h: number
  price_change_percentage_7d_in_currency: number
  market_cap: number
  circulating_supply: number
}
