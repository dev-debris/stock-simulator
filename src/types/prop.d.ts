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

interface StockProp {
  stock: MarketResponse;
}
