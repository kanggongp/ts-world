import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/shared/Layout/Layout';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
    }
    h1, h2, h3, h4, h5{
      margin: 0;
      padding: 0;
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
