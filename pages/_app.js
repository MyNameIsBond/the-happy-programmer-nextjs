import '../styles/global.css'
import Script from 'next/script'
import Sitelayout from '../widget/Sitelayout'

function MyApp({ Component, pageProps }) {
  return (
    <Sitelayout>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${process.env.GTAG});
        `}
      </Script>
      <Component {...pageProps} />
    </Sitelayout>
  )
}

export default MyApp
