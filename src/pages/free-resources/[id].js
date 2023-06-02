import { serializeModel } from "@aws-amplify/datastore/ssr";
import { DataStore, Amplify, withSSRContext } from "aws-amplify";
import Layout from "@/components/Layout";

import { Resources, ResourcesCategory, Category } from "@/models";
import ResourceDetail from "@/components/ResourceDetail";

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

  // Obtener el recurso correspondiente al ID dado en la ruta
  const resource = await SSR.DataStore.query(Resources, context.params.id);
  const resourceCategories = await SSR.DataStore.query(ResourcesCategory, (c) =>
    c.resourcesId.eq(context.params.id)
  );
  const categoryIds = resourceCategories.map((rc) => rc.categoryId);

  const categories = await Promise.all(
    categoryIds.map(async (categoryId) => {
      return await SSR.DataStore.query(Category, categoryId);
    })
  );

  return {
    props: {
      resource: serializeModel(resource),
      categories: serializeModel(categories),
    },
  };
}

export default function resource({ resource, categories }) {
  console.log(categories, resource);
  return (
    <ResourceDetail
      element={resource}
      type={"free-resources"}
      categories={categories}
    />
  );
}
