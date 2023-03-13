import {useQuery} from '@tanstack/react-query';
import {MARKET_CODE, QUERY_KEYS} from '@/constants/request.const';
import {getDaysCandles} from '@/http';

const useDayCandleQuery = ({queries = {market: MARKET_CODE['krw-btc'], count: 20}}: DayCandleRequest) => {
  return useQuery<DayCandleResponse[]>([QUERY_KEYS.candles, 'day'], {
    queryFn: () => getDaysCandles({queries}),
    initialData: [],
  });
};

export default useDayCandleQuery;
