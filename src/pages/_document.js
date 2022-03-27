import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="Solana NFT Gallery"
            content="Use this site to view your and others NFTs"
          />
          <link rel="icon" href="/favicon.ico" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/robo_eye_woofer.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/robo_eye_woofer.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/robo_eye_woofer.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          {/* <meta name="theme-color" content="#ffffff" /> */}

          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="crossOrigin"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oxanium:wght@500&display=swap"
            rel="stylesheet"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
