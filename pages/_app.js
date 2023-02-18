import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const clientid =
    "392787716680-gjhli5mvl1ia7ij8ca70h2n7ipo3hutv.apps.googleusercontent.com";
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
