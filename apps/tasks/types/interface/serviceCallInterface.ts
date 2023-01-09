import {TMarketCoinItem, TStatus} from '@/types/types/serviceCallTypes';

export interface ICoinList extends TStatus {
  data: string[];
}

export interface IMarketsCoinList extends TStatus {
  data: TMarketCoinItem[]
}
