import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";   // mport Provider
import store from "@/store/store";        // import your store
import { CountProvider } from "@/context/CountContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>       {/* wrap app with Redux */}
      <CountProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CountProvider>
    </Provider>
  )
}