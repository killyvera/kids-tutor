import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import MyNavBar from "@/components/MyNavBar";
import { DataStore, withSSRContext } from "aws-amplify";
import { serializeModel } from "@aws-amplify/datastore/ssr";
import H1 from "@/components/H1";
import MyProductList from "@/components/MyProductList";
import { Product, ProductCategory, Category } from "@/models";
import { useTranslation } from "react-i18next";
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
  total,
}) {
  // console.log(productList, categories, productCategories)
  const { t, i18n } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("products title")}</title>
        <meta name="description" content={t("products description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ textAlign: "-webkit-center" }} className="">
        <H1 subtitle={t("products header subtitle")} >{t("products header")}</H1>
        <MyProductList
          filterTranslate={{
            all: t("all"),
            physical: t("physical"),
            downloadable: t("downloadable"),
          }}
          list={productList}
          categories={categories}
          productCategories={productCategories}
        />
      </main>
    </>
  );
}
