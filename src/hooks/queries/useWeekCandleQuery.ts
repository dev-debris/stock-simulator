import {useQuery} from '@tanstack/react-query';
import {MARKET_CODE, QUERY_KEYS} from '@/constants/request.const';
import {getWeeksCandles} from '@/http';

const useWeekCandleQuery = ({queries = {count: 20, market: MARKET_CODE['krw-btc']}}: WeekCandleRequest) => {
  return useQuery<WeekCandleResponse[]>([QUERY_KEYS.candles, 'week'], {
    queryFn: () => getWeeksCandles({queries}),
    initialData: [],
  });
};

export default useWeekCandleQuery;
