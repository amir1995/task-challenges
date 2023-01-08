import React from 'react';

type TCoinCardProps = {
  coinName: string;
};

export const CoinCard = (props: TCoinCardProps) => {
  const { coinName } = props;

  return (
    <div className="text-sb w-12.7 m-1 inline-block rounded-xl rounded-xl bg-neutral-200 px-2 py-1 pb-1.5 text-center font-medium text-neutral-900">
      {coinName}
    </div>
  );
};
