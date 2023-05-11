import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import MyNavBar from "@/components/MyNavBar";
import { DataStore, withSSRContext } from "aws-amplify";
import { serializeModel } from "@aws-amplify/datastore/ssr";
import { useState } from "react";

import H1 from "@/components/H1";
import MyFooter from "@/components/MyFooter";
import MyProductList from "@/components/MyProductList";
import { Product, ProductCategory, Category } from "@/models";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const { DataStore } = withSSRContext();
  const productList = await DataStore.query(Product);
  const productCategories = await DataStore.query(ProductCategory);
  const categoryIdsSet = new Set(productCategories.map((pc) => pc.categoryId));
  const categoryIds = [...categoryIdsSet];

  const cachedCategories = {};

  const categories = await Promise.all(
    categoryIds.map(async (categoryId) => {
      if (cachedCategories[categoryId]) {
        return cachedCategories[categoryId];
      } else {
        const category = await DataStore.query(Category, categoryId);
        cachedCategories[categoryId] = category;
        return category;
      }
    })
  );

  return {
    props: {
      productList: serializeModel(productList),
      categories: serializeModel(categories),
      productCategories: serializeModel(productCategories),
    },
  };
}

export default function Products({
  productList,
  categories,
  productCategories,
  allProducts,
  total
}) {
  // console.log(productList, categories, productCategories)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ textAlign: "-webkit-center" }} className="">
        <Layout allProducts={allProducts} total={total} >
          <H1>Productos Certificados por expertos a tu alcance.</H1>
          <MyProductList
            list={productList}
            categories={categories}
            productCategories={productCategories}
          />
        </Layout>
      </main>
    </>
  );
}
