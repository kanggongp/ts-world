import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="witch project"></meta>
          <link
              href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;800;900&family=Poppins:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700&display=swap'
              rel='stylesheet'
              type='text/css'
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
