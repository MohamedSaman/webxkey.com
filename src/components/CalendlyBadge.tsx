// components/CalendlyBadge.tsx
import { useEffect } from "react";
import Head from "next/head";

// Extend the Window interface to include Calendly
declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
      }) => void;
    };
  }
}

const CalendlyBadge = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== "undefined" && window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/webxkey-info/30min",
          text: "Schedule time with me",
          color: "#0069ff",
          textColor: "#ffffff",
        });
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
      </Head>
    </>
  );
};

export default CalendlyBadge;
