import "@/styles/globals.css";
import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import awsexports from "src/aws-exports.js";
import { Authenticator } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@aws-amplify/ui-react";
import Layout from "@/components/Layout";
import { CartProvider } from "@/context/CartContext";
import { I18nextProvider } from "react-i18next";
import i18n from "../utils/i18n";
Amplify.configure({ ...awsexports, ssr: true });

export default function App({ Component, pageProps }) {
  const [allProducts, setAllProducts] = useState(["hellooo", 1, true]);
  const [total, setTotal] = useState();
  const [countProducts, setCountProducts] = useState(0);

  // useEffect(() => {
  //   // Obtener el idioma del almacenamiento local
  //   const storedLanguage = localStorage.getItem("i18nextLng");

  //   // Configurar el idioma en i18n
  //   if (storedLanguage) {
  //     i18n.changeLanguage(storedLanguage);
  //     console.log(storedLanguage)
  //   }
  // }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Authenticator.Provider>
        <ThemeProvider>
          <CartProvider>
            <Layout>
              <Component
                {...pageProps}
                allProducts={allProducts}
                total={total}
              />
            </Layout>
          </CartProvider>
        </ThemeProvider>
      </Authenticator.Provider>
    </I18nextProvider>
  );
}
