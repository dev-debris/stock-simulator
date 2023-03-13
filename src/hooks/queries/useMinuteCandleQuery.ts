import {useQuery, useQueryClient} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import {MARKET_CODE, QUERY_KEYS} from '@/constants/request.const';
import {getMinutesCandles} from '@/http';

const useMinuteCandleQuery = ({
  paths = [15],
  queries = {count: 20, market: MARKET_CODE['krw-btc']},
}: MinuteCandleRequest) => {
  const queryClient = useQueryClient();
  return useQuery<MinuteCandleResponse[]>([QUERY_KEYS.candles, 'minute'], {
    queryFn: () => getMinutesCandles({paths, queries}),
    initialData: queryClient.getQueryData<MinuteCandleResponse[]>([QUERY_KEYS.candles, 'minute']),
  });
};

export default useMinuteCandleQuery;
