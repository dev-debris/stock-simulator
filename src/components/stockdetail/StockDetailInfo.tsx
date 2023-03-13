import styled from '@emotion/styled';
import React from 'react';

const StockDetailInfo = ({
  market,
  trade_price,
  opening_price,
  acc_trade_price,
  acc_trade_price_24h,
  acc_trade_volume,
  acc_trade_volume_24h,
  change,
  change_price,
  change_rate,
  high_price,
  highest_52_week_date,
  highest_52_week_price,
  low_price,
  lowest_52_week_date,
  lowest_52_week_price,
  prev_closing_price,
  signed_change_price,
  signed_change_rate,
  timestamp,
  trade_date,
  trade_date_kst,
  trade_time,
  trade_time_kst,
  trade_timestamp,
  trade_volume,
}: TickerResponse) => {
  return (
    <>
      <DetailTitle>{market}</DetailTitle>
      <Grid>
        <GridItem>
          <Content>
            <ContentTerm>Price</ContentTerm>
            <ContentDesc>{trade_price}</ContentDesc>
          </Content>
          <Content>
            <ContentTerm>Open</ContentTerm>
            <ContentDesc>{opening_price}</ContentDesc>
          </Content>
          <Content>
            <ContentTerm>Close</ContentTerm>
            <ContentDesc>{prev_closing_price}</ContentDesc>
          </Content>
        </GridItem>
        <GridItem>
          <Content>
            <ContentTerm>High</ContentTerm>
            <ContentDesc>{high_price}</ContentDesc>
          </Content>
          <Content>
            <ContentTerm>Low</ContentTerm>
            <ContentDesc>{low_price}</ContentDesc>
          </Content>
          <Content>
            <ContentTerm>Volume</ContentTerm>
            <ContentDesc>{trade_volume}</ContentDesc>
          </Content>
        </GridItem>
        <GridItem>
          <Content>
            <ContentTerm>52-Week High</ContentTerm>
            <ContentDesc>{highest_52_week_price}</ContentDesc>
          </Content>
          <Content>
            <ContentTerm>52-Week Low</ContentTerm>
            <ContentDesc>{lowest_52_week_price}</ContentDesc>
          </Content>
        </GridItem>
      </Grid>
    </>
  );
};

const DetailTitle = styled.h2``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`;

const GridItem = styled.div``;

const Content = styled.dl`
  display: flex;
  justify-content: space-between;
  margin: 8px;
`;

const ContentTerm = styled.dt`
  font-weight: bold;
`;

const ContentDesc = styled.dd``;

export default StockDetailInfo;
