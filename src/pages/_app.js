import "@/styles/globals.css";
import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import awsexports from "src/aws-exports.js";
import { Authenticator, View } from "@aws-amplify/ui-react";

Amplify.configure({ ...awsexports, ssr: true });

export default function App({ Component, pageProps }) {
  return (
    <Authenticator.Provider>
      {" "}
      <Component {...pageProps} />
    </Authenticator.Provider>
  );
}
