import Head from "next/head";
// import Image from "next/image";
import { Inter } from "next/font/google";
import MyNavBar from "@/components/MyNavBar";
import { withSSRContext } from "aws-amplify";
import { serializeModel } from "@aws-amplify/datastore/ssr";
import H1 from "@/components/H1";
import MyFooter from "@/components/MyFooter";
import MyPosts from "@/components/MyPosts";
import { BlogPost, BlogPostCategory, Category } from "@/models";
import {
  Authenticator,
  useTheme,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import Layout from "@/components/Layout";

export async function getServerSideProps() {
  const { DataStore } = withSSRContext();
  const postList = await DataStore.query(BlogPost);
  const postCategories = await DataStore.query(BlogPostCategory);
  const categoryIdsSet = new Set(postCategories.map((pc) => pc.categoryId));
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
      postList: serializeModel(postList),
      categories: serializeModel(categories),
      postCategories: serializeModel(postCategories),
    },
  };
}

function Blog({ allProducts, total, postList, categories, postCategories }) {
  console.log(postList, categories, postCategories);
  return (
    <>
      <Head>
        <title>Kids Tutor Blog</title>
        <meta
          name="description"
          content="Kids Tutor educational kits for children"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ textAlign: "-webkit-center" }} className="">
        <H1>Artículos de interés sobre educación y tu hijo.</H1>
        <MyPosts
          postList={postList}
          categories={categories}
          postCategories={postCategories}
        />
      </main>
    </>
  );
}

export default Blog;
