import styled from '@emotion/styled';
import {useState, useEffect} from 'react';
import {getMarkets} from '@/http';
import StockListItem from './StockListItem';

function StockList() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    getMarkets({queries: {isDetails: false}})
      .then(data => data.filter(stock => stock.market.includes('KRW')))
      .then(data => setStocks(data));
  }, []);

  return (
    <Wrapper>
      {stocks.slice(0, 10).map((stock, i) => (
        <StockListItem stock={stock} key={i} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1 1 auto;
`;

export default StockList;
