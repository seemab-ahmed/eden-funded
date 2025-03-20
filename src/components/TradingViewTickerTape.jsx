import React, { useEffect, useRef } from 'react';

const TradingViewTickerTape = () => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return; // Prevent duplicate script loading

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "light",
      locale: "en"
    });

    const container = document.querySelector('.tradingview-widget-container__widget');
    if (container) {
      container.appendChild(script);
      scriptLoaded.current = true; // Mark script as loaded
    }

    return () => {
      if (container && script.parentNode === container) {
        container.removeChild(script);
        scriptLoaded.current = false; // Reset script loading state
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container relative z-10">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
      </div>
    </div>
  );
};

export default TradingViewTickerTape;