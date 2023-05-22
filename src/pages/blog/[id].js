import { serializeModel } from "@aws-amplify/datastore/ssr";
import { DataStore, Amplify, withSSRContext } from "aws-amplify";
import Layout from "@/components/Layout";

import { BlogPost, Category, BlogPostCategory } from "@/models";
import MyCard from "@/components/MyCard";
import PostDetail from "@/components/PostDetail";

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
  const postCategories = await SSR.DataStore.query(BlogPostCategory, (c) =>
    c.blogPostId.eq(context.params.id)
  );
  const categoryIds = postCategories.map((pc)=> pc.categoryId);

  const categories = await Promise.all(
    categoryIds.map(async (categoryId) => {
      return await SSR.DataStore.query(Category, categoryId);
    })
  );

  return {
    props: {
      post: serializeModel(post),
      categories: serializeModel(categories),
    },
  };
}

export default function post({ post, categories }) {
  return (
    <Layout>
      <PostDetail element={post} categories={categories} type={"post"} />
    </Layout>
  );
}
