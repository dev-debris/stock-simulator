interface ChildrenProp {
  children: import('react').ReactNode;
}

interface PortfolioProp {
  netAssets: number;
  remainingCash: number;
  coinList: Array<{
    name: string;
    subName: string;
    averagePrice: number;
    currentPrice: number;
    quantity: number;
  }>;
}

interface StockDetailProp {
  ticker: TickerResponse;
}

interface StockChartProp {
  datas: CandleResponse[];
}

interface ApexChartProp {
  type?:
    | 'line'
    | 'area'
    | 'bar'
    | 'histogram'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'treemap'
    | 'boxPlot'
    | 'candlestick'
    | 'radar'
    | 'polarArea'
    | 'rangeBar';
  series?: ApexOptions['series'];
  width?: string | number;
  height?: string | number;
  options?: ApexOptions;
  [key: string]: any;
}
