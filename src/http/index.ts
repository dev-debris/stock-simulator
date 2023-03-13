import axios from 'axios';
import {PUBLIC_API_ENDPOINT} from '@/constants/request.const';

const UPBIT_API_ENDPOINT = PUBLIC_API_ENDPOINT.upbit;

const generateFullUri = (url: string, {paths, queries}: AdditionalUriInfo) => {
  if (paths?.length) {
    url += `/${paths.join('/')}`;
  }

  if (Object.keys(queries).length) {
    url += `?${Object.entries(queries)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}=${v}`)
      .join('&')}`;
  }

  return url;
};

const getRequest = <T extends AdditionalUriInfo>(endpoint: string) => {
  return async function (additionalUriInfo: T) {
    const uri = generateFullUri(endpoint, additionalUriInfo);
    const {data} = await axios(uri, {method: 'GET', headers: {accept: 'application/json'}});
    return data;
  };
};

export const getMinutesCandles = getRequest<MinuteCandleRequest>(`${UPBIT_API_ENDPOINT}/candles/minutes`);
export const getDaysCandles = getRequest<DayCandleRequest>(`${UPBIT_API_ENDPOINT}/candles/days`);
export const getWeeksCandles = getRequest<WeekCandleRequest>(`${UPBIT_API_ENDPOINT}/candles/weeks`);
export const getMonthsCandles = getRequest<MonthCandleRequest>(`${UPBIT_API_ENDPOINT}/candles/months`);
export const getTicker = getRequest<TickerRequest>(`${UPBIT_API_ENDPOINT}/ticker`);
export const getMarkets = getRequest<MarketRequest>(`${UPBIT_API_ENDPOINT}/market/all`);
