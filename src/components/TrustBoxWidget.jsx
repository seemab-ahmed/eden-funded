import React, { useEffect } from "react";

const TrustBoxWidget = () => {
  useEffect(() => {
    // Load Trustpilot script dynamically
    const script = document.createElement("script");
    script.src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="trustpilot-widget"
      data-locale="en-US"
      data-template-id="53aa8912dec7e10d38f59f36"
      data-businessunit-id="6807fb0d39171fdff8dec88c"
      data-style-height="140px"
      data-style-width="100%"
      data-theme="dark"
      data-stars="5"
      data-review-languages="en"
    >
      <a
        href="https://www.trustpilot.com/review/eden-fx.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#fff" }}
      >
        Trustpilot
      </a>
    </div>
  );
};

export default TrustBoxWidget;
