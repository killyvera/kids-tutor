import "@/styles/globals.css";
import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import awsexports from "src/aws-exports.js";
import { Authenticator } from "@aws-amplify/ui-react";
import { useState } from "react";

Amplify.configure({ ...awsexports, ssr: true });

export default function App({ Component, pageProps }) {
  const[ allProducts, setAllProducts] = useState(['hellooo', 1, true]);
  const[ total, setTotal] = useState(33);
  const [countProducts, setCountProducts] = useState(0)
  return (
    <Authenticator.Provider>
      {" "}
      <Component {...pageProps} allProducts={allProducts} total={total} />
    </Authenticator.Provider>
  );
}
