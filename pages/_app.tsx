import { NextPage } from "next";
import { AppProps } from "next/app";
import "../styles/globals.css";
type nextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
}

type appPropsWithLayout = AppProps & {
  Component: nextPageWithLayout
}
export default function App({ Component, pageProps }: appPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);

  return getLayout(<Component {...pageProps} />);
}
