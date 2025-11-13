// components/GoogleAnalytics.tsx
import Script from "next/script";

const GoogleAnalytics = () => (
  <>
    <Script
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-YYVB7ZSMYF"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-YYVB7ZSMYF');
      `}
    </Script>
  </>
);

export default GoogleAnalytics;
