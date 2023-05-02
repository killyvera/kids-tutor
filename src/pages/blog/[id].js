import { serializeModel } from "@aws-amplify/datastore/ssr";
import { DataStore, Amplify, withSSRContext } from "aws-amplify";
import Layout from "@/components/Layout";

import { BlogPost } from "@/models";
import MyCard from "@/components/MyCard";

export async function getStaticPaths({ req }) {
  const SSR = withSSRContext({ req });
  const posts = await SSR.DataStore.query(BlogPost);
  return {
    paths: posts.map((post) => ({ params: { id: post.id } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const SSR = withSSRContext({ context });
  const post = await SSR.DataStore.query(BlogPost, context.params.id);
  return {
    props: { post: serializeModel(post) },
  };
}

export default function PostDetail({ post }) {
    return <Layout><MyCard element={post} type={'post'}/></Layout>
}
