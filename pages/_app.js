import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }) {
  const clientid =
    "392787716680-gjhli5mvl1ia7ij8ca70h2n7ipo3hutv.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientid}>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}
