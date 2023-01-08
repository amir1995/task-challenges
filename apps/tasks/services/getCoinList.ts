import {ICoinList} from "@/types/interface/serviceCallInterface";
import apiClient from "@/utils/apiClient";

export const coinList = () => {
  return apiClient<ICoinList>({url: '/api/getCoinList', method: "get"}).then(res => {
    return res.data;
  });
}
