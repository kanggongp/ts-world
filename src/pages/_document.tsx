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
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          />
        {/*<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>*/}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
