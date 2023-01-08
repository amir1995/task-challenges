import type { NextApiRequest, NextApiResponse } from 'next';

import { baseUrl } from '@/config';
import { ICoinList } from '@/types/interface/serviceCallInterface';
import { TCoinListResponse } from '@/types/types/serviceCallTypes';
import apiClient from '@/utils/apiClient';

export default async function getCoinList(req: NextApiRequest, res: NextApiResponse<ICoinList>) {
  await apiClient<TCoinListResponse>({
    url: `${baseUrl}/simple/supported_vs_currencies`,
    method: 'get',
  })
    .then(r => {
      return res.status(200).json({ data: r, status: 200 });
    })
    .catch(err => {
      return res.status(200).json({ data: err.data, status: err.status });
    });
}
