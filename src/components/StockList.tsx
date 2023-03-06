import styled from '@emotion/styled';
import {useState, useEffect} from 'react';
import StockListItem from './StockListItem';

const options = {method: 'GET', headers: {accept: 'application/json'}};

function StockList() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    async function fetchStocks() {
      const response = await fetch('https://api.upbit.com/v1/market/all?isDetails=false', options);
      const newStocks = await response.json();

      setStocks(newStocks);
    }

    fetchStocks();
  }, []);

  console.log(stocks);

  return (
    <Wrapper>
      {stocks.map((stock, i) => (
        <StockListItem stock={stock} key={i} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1 1 auto;
`;

export default StockList;
