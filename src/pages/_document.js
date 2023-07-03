import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap"
        rel="stylesheet"
      ></link>
      <body className="bg-red-400 font-lato">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
