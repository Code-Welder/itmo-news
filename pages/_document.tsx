import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=optional" rel="stylesheet" /> 
        
        <link
            rel="preload"
            href="/fonts/Muller/MullerBold.woff"
            as="font"
            crossOrigin=""
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}