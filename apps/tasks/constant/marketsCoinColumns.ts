import React from 'react';
import {CellProps} from 'react-table';
import { CoinCell } from 'ui';

import { TMarketCoinItem } from '@/types/types/serviceCallTypes';

type TMarketsCoinColumns = {
  Header: string;
  accessor: string;
  Cell?: (t: CellProps<TMarketCoinItem, string | number | null>) => React.ReactNode;
  image?: string;
  symbol?: string;
};

export const marketsCoinColumns: TMarketsCoinColumns[] = [
  {
    Header: 'Coins',
    accessor: 'name',
    image: 'image',
    symbol: 'symbol',
    Cell: CoinCell,
  },
  {
    Header: 'Price',
    accessor: 'current_price',
  },
  {
    Header: '24H',
    accessor: 'price_change_percentage_24h',
  },
  {
    Header: '7D',
    accessor: 'price_change_percentage_7d_in_currency',
  },
  {
    Header: 'MARKET CAP',
    accessor: 'market_cap',
  },
  {
    Header: 'CIRCULATING SUPPLY',
    accessor: 'circulating_supply',
    symbol: 'symbol',
  },
];
