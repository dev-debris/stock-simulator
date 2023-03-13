interface AdditionalUriInfo {
  paths?: (string | number)[];
  queries?: IndexdObject;
}

interface CandleRequest extends AdditionalUriInfo {
  queries: {
    market: string;
    to?: string;
    count?: number;
  };
}

type MinuteCandleRequest = CandleRequest & {
  paths: [unit: 1 | 3 | 5 | 15 | 10 | 30 | 60 | 240];
};

type DayCandleRequest = CandleRequest & {
  queries: {convertingPriceUnit?: string};
};

type WeekCandleRequest = CandleRequest;

type MonthCandleRequest = CandleRequest;

interface TickerRequest extends AdditionalUriInfo {
  queries: {markets: string};
}

interface MarketRequest extends AddtionalUriInfo {
  queries: {isDetails: boolean};
}

type CandleType = 'minute' | 'day' | 'week' | 'month';
