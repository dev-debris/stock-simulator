import styled from '@emotion/styled';
import {useEffect, useState} from 'react';

const options = {method: 'GET', headers: {accept: 'application/json'}};

function StockListItem({stock}) {
  const [stockInfo, setStockInfo] = useState([]);

  useEffect(() => {
    async function fetchStockInfo() {
      const response = await fetch(`https://api.upbit.com/v1/ticker?markets=${stock.market}`, options);
      const newStockInfo = await response.json();

      setStockInfo(newStockInfo);
    }

    fetchStockInfo();
  }, [stock.market]);

  return (
    <Wrapper>
      <StockName>{stock.korean_name}</StockName>
      <StockPrice></StockPrice>
      <StockChangeRate />
      <StockAccTradePrice />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1 1 auto;
`;

const StockName = styled.div`
  flex: 1 1 auto;
`;

const StockPrice = styled.div`
  flex: 1 1 auto;
`;

const StockChangeRate = styled.div`
  flex: 1 1 auto;
`;

const StockAccTradePrice = styled.div`
  flex: 1 1 auto;
`;

export default StockListItem;
