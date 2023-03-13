import styled from '@emotion/styled';
import {useEffect, useState} from 'react';
import {getTicker} from '@/http';

function StockListItem({stock}) {
  const [stockInfo, setStockInfo] = useState([]);
  const [isFavorite, setFavortie] = useState(false);

  useEffect(() => {
    getTicker({queries: {markets: stock.market}}).then(data => setStockInfo(data));
  }, [stock.market]);

  console.log(stockInfo);

  if (!stockInfo.length) {
    return (
      <tbody>
        <tr>
          <td>
            <span>loading</span>
          </td>
        </tr>
      </tbody>
    );
  }

  const fixedAccTradePrice = Math.floor(stockInfo[0].acc_trade_price_24h / 1000000);
  const fixedChangeRate = Math.round(stockInfo[0].signed_change_rate * 1000) / 1000;
  const isPlus = fixedChangeRate >= 0 ? true : false;
  function toggleFavorite() {
    isFavorite ? setFavortie(false) : setFavortie(true);
  }

  return (
    <StockListBody>
      <tr>
        <td rowSpan={2}>
          <Favorites onClick={toggleFavorite}>{isFavorite ? '★' : '☆'}</Favorites>
        </td>
        <StockName>{stock.korean_name}</StockName>
        <StockPrice isPlus={isPlus}>{stockInfo[0].trade_price}</StockPrice>
      </tr>
      <tr>
        <StockChangeRate isPlus={isPlus}>{fixedChangeRate}%</StockChangeRate>
        <StockAccTradePrice>{fixedAccTradePrice}백만</StockAccTradePrice>
      </tr>
    </StockListBody>
  );
}
const StockListBody = styled.tbody`
  height: 45px;
  width: 100%;
  vertical-align: middle;
  background: #f8f9fa;
  &:hover,
  &:hover * {
    background: #f1f1f4;
  }
  border: 1px solid #dee2e6;
  border-collapse: collapse;
`;

const Favorites = styled.button`
  width: auto;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  color: gray;
  cursor: pointer;
`;

const StockName = styled.td`
  width: 50%;
  flex: 1;
  color: #333333;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #f8f9fa;
`;

const StockPrice = styled.td<{isPlus: boolean}>`
  width: 40%;
  flex: 1;
  color: ${props => (props.isPlus ? 'red' : 'blue')};
  font-size: 12px;
  white-space: nowrap;
  background: #f8f9fa;
`;

const StockChangeRate = styled.td<{isPlus: boolean}>`
  width: 50%;
  flex: 1;
  color: ${props => (props.isPlus ? 'red' : 'blue')};
  font-size: 12px;
  white-space: nowrap;
  background: #f8f9fa;
`;

const StockAccTradePrice = styled.td`
  width: 40%;
  flex: 1;
  color: #333333;
  font-size: 12px;
  white-space: nowrap;
  background: #f8f9fa;
`;

export default StockListItem;
