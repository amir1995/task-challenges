import type { NextApiRequest, NextApiResponse } from 'next';

import { baseUrl } from '@/config';
import { IMarketsCoinList } from '@/types/interface/serviceCallInterface';
import { TMarketCoinItem } from '@/types/types/serviceCallTypes';
import apiClient from '@/utils/apiClient';

export default async function getMarketsCoinList(
  req: NextApiRequest,
  res: NextApiResponse<IMarketsCoinList>,
) {
  await apiClient<TMarketCoinItem[]>({
    url: `${baseUrl}/coins/markets?vs_currency=usd&amp;page=${req.query.page}&amp;per_page=${req.query.perPage}&amp;price_change_percentage=24h,7d`,
    method: 'get',
  })
    .then(r => {
      return res.status(200).json({ data: r, status: 200 });
    })
    .catch(err => {
      return res.status(200).json({ data: err.data, status: err.status });
    });
}
