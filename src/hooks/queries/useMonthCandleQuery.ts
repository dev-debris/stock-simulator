import {useQuery} from '@tanstack/react-query';
import {MARKET_CODE, QUERY_KEYS} from '@/constants/request.const';
import {getMonthsCandles} from '@/http';

const useMonthCandleQuery = ({queries = {count: 20, market: MARKET_CODE['krw-btc']}}: MonthCandleRequest) => {
  return useQuery<MonthCandleResponse[]>([QUERY_KEYS.candles, 'month'], {
    queryFn: () => getMonthsCandles({queries}),
    initialData: [],
  });
};

export default useMonthCandleQuery;
