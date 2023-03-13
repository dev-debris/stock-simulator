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
      <BorderNone>
        {stocks.slice(0, 10).map(stock => (
          <StockListItem stock={stock} key={stock.market} />
        ))}
      </BorderNone>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1 1 auto;
`;

const BorderNone = styled.table`
  padding: 0;
  margin: 0;
  border: 0;
  border-spacing: 0;
  width: 100%;
  table-layout: fixed;
  background: #f8f9fa;
  border: 1px solid rgba(0, 0, 0, 0);
  border-collapse: collapse;
`;

export default StockList;
