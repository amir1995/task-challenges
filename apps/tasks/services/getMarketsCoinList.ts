import { IMarketsCoinList } from '@/types/interface/serviceCallInterface';
import apiClient from '@/utils/apiClient';

type TMarketsCoinList = {
  page: number;
  perPage: number;
};
export const marketsCoinList = (props: TMarketsCoinList) => {
  const { perPage, page } = props;

  return apiClient<IMarketsCoinList>({
    url: `/api/getMarketsCoinList?page=${page}&per_page=${perPage}`,
    method: 'get',
  }).then(res => {
    return res.data;
  });
};
