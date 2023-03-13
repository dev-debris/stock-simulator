import {Hydrate, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {AppProps} from 'next/app';
import {useState} from 'react';
import {RecoilRoot} from 'recoil';
import {MARKET_CODE, QUERY_KEYS} from '@/constants/request.const';
import {getMinutesCandles} from '@/http';
import {GlobalStyle} from '@/styles';

function MyApp({Component, pageProps}: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.candles, 'minute'],
    queryFn: () => getMinutesCandles({paths: [15], queries: {market: MARKET_CODE['krw-btc'], count: 20}}),
  });

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle />
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
