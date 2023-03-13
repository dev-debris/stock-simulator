import styled from '@emotion/styled';
import {useEffect, useState} from 'react';
import {getTicker} from '@/http';

function StockListItem({stock}) {
  const [stockInfo, setStockInfo] = useState([]);

  useEffect(() => {
    getTicker({queries: {markets: stock.market}}).then(data => setStockInfo(data));
  }, []);

  if (!stockInfo.length) {
    return <div>loading</div>;
  }

  const fixedAccTradePrice = Math.floor(stockInfo[0].acc_trade_price_24h / 1000000);
  const fixedChangeRate = Math.round(stockInfo[0].change_rate * 100) / 100;

  return (
    <Wrapper>
      <StockName>{stock.korean_name}</StockName>
      <StockPrice>{stockInfo[0].trade_price}</StockPrice>
      <StockChangeRate>{fixedChangeRate}%</StockChangeRate>
      <StockAccTradePrice>{fixedAccTradePrice}백만</StockAccTradePrice>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 94px 98px 58px 98px;
  height: 45px;
  width: max-content;
  align-items: center;
  background: #f8f9fa;

  &:hover {
    background: #f1f1f4;
  }

  &:hover * {
    background: #f1f1f4;
  }

  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const StockName = styled.div`
  flex: 1;
  color: #333333;
  font-size: 12px;
  white-space: nowrap;
  background: #f8f9fa;
`;

const StockPrice = styled.div`
  flex: 1;
  color: #333333;
  font-size: 12px;
  white-space: nowrap;
  background: #f8f9fa;
`;

const StockChangeRate = styled.div`
  flex: 1;
  color: #333333;
  font-size: 12px;
  white-space: nowrap;
  background: #f8f9fa;
`;

const StockAccTradePrice = styled.div`
  flex: 1;
  color: #333333;
  font-size: 12px;
  white-space: nowrap;
  background: #f8f9fa;
`;

export default StockListItem;
