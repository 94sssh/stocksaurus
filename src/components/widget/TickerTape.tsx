import { useEffect, useRef } from 'react';

const TickerTape = () => {
  const tapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          description: 'TESLA',
          proName: 'NASDAQ:TSLA',
        },
        {
          description: 'NVIDIA',
          proName: 'NASDAQ:NVDA',
        },
        {
          description: 'GOOGLE',
          proName: 'NASDAQ:GOOGL',
        },
        {
          description: 'APPLE',
          proName: 'NASDAQ:AAPL',
        },
        {
          description: 'MICROSOFT',
          proName: 'NASDAQ:MSFT',
        },
        {
          description: 'META',
          proName: 'NASDAQ:META',
        },
        {
          description: 'AMAZON',
          proName: 'NASDAQ:AMZN',
        },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: 'adaptive',
      colorTheme: 'light',
      locale: 'en',
    });

    if (tapeRef.current) tapeRef.current.appendChild(script);

    return () => {
      if (tapeRef.current) tapeRef.current.innerHTML = '';
    };
  }, []);

  return <div ref={tapeRef} className='tradingview-widget-container' />;
};

export default TickerTape;
