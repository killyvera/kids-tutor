import { serializeModel } from "@aws-amplify/datastore/ssr";
import { DataStore, Amplify, withSSRContext } from "aws-amplify";
import Layout from "@/components/Layout";

import { Resources } from "@/models";
import MyCard from "@/components/MyCard";

export async function getStaticPaths({ req }) {
  const SSR = withSSRContext({ req });
  const resources = await SSR.DataStore.query(Resources);
  return {
    paths: resources.map((resource) => ({ params: { id: resource.id } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const SSR = withSSRContext({ context });
  const resource = await SSR.DataStore.query(Resources, context.params.id);
  return {
    props: { resource: serializeModel(resource) },
  };
}

export default function ResourceDetail({ resource }) {
  return <Layout><MyCard element={resource} type={"free-resource"} /></Layout>;
}
