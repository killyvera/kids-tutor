import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import MyNavBar from "@/components/MyNavBar";
import { DataStore, withSSRContext } from 'aws-amplify'
import { serializeModel } from '@aws-amplify/datastore/ssr';

import H1 from "@/components/H1";
import MyFooter from "@/components/MyFooter";
import MyProductList from "@/components/MyProductList";
import { Product } from "@/models";
import { list } from "postcss";
const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const { DataStore } = withSSRContext();
  const productList = await DataStore.query(Product);

  return {
    props: {
      productList: serializeModel(productList)
    },
  };
}

export default function Products({productList}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ textAlign: "-webkit-center" }} className="">
        <MyNavBar />
        <H1>Productos Certificados por expertos a tu alcance.</H1>
        <MyProductList list={productList} />
        <MyFooter />
      </main>
    </>
  );
}
