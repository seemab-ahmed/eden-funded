import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const TradingViewTickerTape = () => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return; // Prevent duplicate script loading

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: "XAUUSD", proName: "OANDA:XAUUSD" },
        { description: "EURUSD", proName: "FX:EURUSD" },
        { description: "USDCAD", proName: "OANDA:USDCAD" },
        { description: "GBPUSD", proName: "FX:GBPUSD" },
        { description: "EURNZD", proName: "OANDA:EURNZD" },
        { description: "BTC", proName: "BITSTAMP:BTCUSD" },
        { description: "ETH", proName: "COINBASE:ETHUSD" },
        { description: "NZDUSD", proName: "OANDA:NZDUSD" },
        { description: "USDCAD", proName: "OANDA:USDCAD" }
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "dark",
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
        scriptLoaded.current = false; // Reset script loading state on cleanup
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container relative z-10 -mt-20 max-lg:-mt-8 max-lg:mb-10">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <Link to="https://www.tradingview.com/" rel="noopener nofollow" target="_blank" className=''>
          <motion.span className=" text-customGreen underline leading-tight"
           animate={{ color: ['#0ef3a5', '#FFFFFF', '#0ef3a5'] }} 
           transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>Track all markets on TradingView</motion.span>
        </Link>
      </div>
    </div>
  );
};

export default TradingViewTickerTape;
