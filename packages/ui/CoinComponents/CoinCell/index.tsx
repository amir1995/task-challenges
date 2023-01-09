import Image from 'next/image';
import React from 'react';
import {CellProps} from "react-table";
import {TMarketCoinItem} from "tasks/types/types/serviceCallTypes";

export const CoinCell = ({ value, row }:CellProps<TMarketCoinItem>) => {
  const {original} = row;
  return (
    <div className="flex items-center">
      <div className="h-10 w-10 flex-shrink-0">
        <Image width={100} height={100} className="w-10 h-10" alt={value} src={original.image} />
      </div>
      <div className="mx-4">
        <div className="text-sm font-medium text-neutral-900">{value}</div>
        <div className="text-sm text-neutral-600">{row.original.symbol.toUpperCase()}</div>
      </div>
    </div>
  );
};
