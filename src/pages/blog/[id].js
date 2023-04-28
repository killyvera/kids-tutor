import { serializeModel } from "@aws-amplify/datastore/ssr";
import { DataStore, Amplify, withSSRContext } from "aws-amplify";

import { BlogPost } from "@/models";
import MyCard from "@/components/MyCard";

export async function getStaticPaths() {
  const {DataStore} = withSSRContext();
  const posts = await DataStore.query(BlogPost);
  return {
    paths: posts.map((post) => ({ params: { id: post.id } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {DataStore} = withSSRContext();
  const post = await DataStore.query(BlogPost, context.params.id);
  return {
    props: { post: serializeModel(post) },
  };
}

export default function PostDetail({ post }) {
    return <MyCard element={post} />
}
