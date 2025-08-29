declare namespace JSX {
  interface IntrinsicElements {
    'coingecko-coin-ticker-widget': {
      'coin-id': string;
      currency: string;
      locale: string;
      'background-color': string;
      'font-color': string;
      'border-color': string;
    };
    'coingecko-coin-price-chart-widget': {
      'coin-id': string;
      currency: string;
      height: string;
      locale: string;
      'background-color': string;
      'font-color': string;
      'border-color': string;
    };
  }
}
