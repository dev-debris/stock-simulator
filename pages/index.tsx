import styled from '@emotion/styled';
import {useQuery} from '@tanstack/react-query';
import {Container, Portfolio, Search, StockDetail, StockList, Trade} from '@/components';
import {MARKET_CODE, QUERY_KEYS} from '@/constants/request.const';
import {getTicker} from '../src/http/index';

function HomePage() {
  const {data} = useQuery([QUERY_KEYS.markets], {
    queryFn: () => getTicker({queries: {markets: MARKET_CODE['krw-btc']}}),
  });

  return (
    <Container>
      <Root>
        <Left>
          <LeftChild>
            {/**
             * @todo 실제 값으로 대체하기
             */}
            <Portfolio
              netAssets={123456789}
              remainingCash={10000000000}
              coinList={[
                {
                  name: '비트코인',
                  subName: 'BTC',
                  averagePrice: 29773000,
                  currentPrice: 30000000,
                  quantity: 100,
                },
                {
                  name: '이더리움',
                  subName: 'ETH',
                  averagePrice: 30000000,
                  currentPrice: 29773000,
                  quantity: 1200,
                },
              ]}
            />
            <Trade />
          </LeftChild>
          <LeftChild>
            <Search />
            <StockList />
          </LeftChild>
        </Left>
        <Right>{data && <StockDetail ticker={data[0]} />}</Right>
      </Root>
    </Container>
  );
}

const Root = styled.div`
  display: flex;
  height: 100%;
`;

const Left = styled.div`
  width: 50%;
  display: flex;
`;

const LeftChild = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  width: 50%;
`;

export default HomePage;
