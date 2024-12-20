import { useEffect, useRef } from 'react';

const TickerWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: 'FOREXCOM:SPXUSD',
          title: 'S&P 500',
        },
        {
          description: 'NASDAQ 100',
          proName: 'NASDAQ:NDX',
        },
        {
          description: '원/달러 환율',
          proName: 'FX_IDC:USDKRW',
        },
        {
          description: 'Bitcoin',
          proName: 'COINBASE:BTCUSD',
        },
      ],
      isTransparent: false,
      showSymbolLogo: true,
      colorTheme: 'light',
      locale: 'en',
    });

    if (widgetRef.current) widgetRef.current.appendChild(script);

    return () => {
      if (widgetRef.current) widgetRef.current.innerHTML = '';
    };
  }, []);

  return <div ref={widgetRef} className='tradingview-widget-container' />;
};

export default TickerWidget;
