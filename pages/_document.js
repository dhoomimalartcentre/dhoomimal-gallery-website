import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Dhoomimal Art Gallery – One of India's oldest and most prestigious fine art galleries, established in 1936, New Delhi." />
        <meta property="og:title" content="Dhoomimal Art Gallery" />
        <meta property="og:description" content="One of India's oldest and most prestigious fine art galleries." />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
