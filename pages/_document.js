import Document, { Html, Head, Main, NextScript } from 'next/document';

import Script from 'next/script'

class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head>
          <Script src="https://kit.fontawesome.com/76c92c789e.js" crossOrigin="anonymous"/>

          {/* OUTFIT FONT */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>


{/* MERRIWEATHER FONT */}
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>


{/* PAYTONE ONE FONT */}

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet"/>



          </Head>
          <title>site smiths</title>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;