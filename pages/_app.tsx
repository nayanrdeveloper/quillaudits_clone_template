import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
          <link rel="icon" href="/main_logo.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="keywords"
            content="smart,contract,audit"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://quiedits.netlify.app/" />
          <meta
            property="og:title"
            content="QuillAudits - Free Smart Contract Audit"
          />
          <meta
            property="og:description"
            content="QuillAudits - Smart contract audit platform for dApps, DeFi and tokens by Quillhash. We are experts in blockchain based smart contracts security Audit"
          />
          <meta
            property="og:image"
            content="/logo.png"
          />

          <meta name="language" content="ES" />
          <meta
            name="author"
            content="Nayan Radadiya, nayanrdeveloper@gmail.com"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://quiedits.netlify.app/"
          />
          <meta
            property="twitter:title"
            content="QuillAudits - Free Smart Contract Audit "
          />
          <meta
            property="twitter:description"
            content="QuillAudits - Smart contract audit platform for dApps, DeFi and tokens by Quillhash. We are experts in blockchain based smart contracts security Audit"
          />
          <meta property="twitter:image" content="/logo.svg" />

          <meta name="url" content="https://quiedits.netlify.app/" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="QuillAudits - Smart contract audit platform for dApps, DeFi and tokens by Quillhash. We are experts in blockchain based smart contracts security Audit"
          />
          <link rel="apple-touch-icon" href="/logo.png" />
          <title>QuillAudits</title>
        </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
