import Head from "next/head";
// import Image from "next/image";
import { Inter } from "next/font/google";
import MyNavBar from "@/components/MyNavBar";
import { withSSRContext } from "aws-amplify";
import { serializeModel } from "@aws-amplify/datastore/ssr";
import H1 from "@/components/H1";
import MyFooter from "@/components/MyFooter";
import MyPosts from "@/components/MyPosts";
import { BlogPost } from "@/models";
import { Authenticator, useTheme, useAuthenticator } from "@aws-amplify/ui-react";
import Layout from "@/components/Layout";

export async function getServerSideProps() {
  const { DataStore } = withSSRContext();
  const list = await DataStore.query(BlogPost);

  return {
    props: {
      list: serializeModel(list),
    },
  };
}

function Blog({ list, signOut, user, allProducts, total }) {
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
        <Layout allProducts={allProducts} total={total} >
        <H1>Conoce la opinion de nuestros expertos.</H1>
        <MyPosts list={list} />
        </Layout>
      </main>
      </>
  )

}

export default Blog;
