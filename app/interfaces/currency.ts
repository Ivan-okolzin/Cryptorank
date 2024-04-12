export enum SortOrder {
  Rank = 'rank',
  RankDescending = '-rank',
  Price = 'price',
  PriceDescending = '-price',
}

export interface FetchCurrenciesOptions {
  limit?: number;
  offset?: number;
  symbol?: string;
  sort?: SortOrder;
}

export interface CurrencyValueDetails {
  price: number;
}

export interface CurrencyValues {
  USD: CurrencyValueDetails;
}

export interface CurrencyImages {
  '16x16': string;
}

export interface Currency {
  id: number;
  slug: string;
  symbol: string;
  name: string;
  rank: number;
  values: CurrencyValues;
  images: CurrencyImages;
}
