export interface Coin {
  id: string;
  name: string;
  image: string;
  symbol:string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
  total_volume: number;
  sparkline_in_7d: {
    price: number[];
  };
}