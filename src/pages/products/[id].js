import { serializeModel } from "@aws-amplify/datastore/ssr";
import { DataStore, Amplify, withSSRContext } from "aws-amplify";
import Layout from "@/components/Layout";

import { Product, ProductCategory } from "@/models";
import MyProductCard from "@/components/MyProductCard";

export async function getStaticPaths({ req }) {
  const SSR = withSSRContext({ req });
  const products = await SSR.DataStore.query(Product);
  return {
    paths: products.map((product) => ({ params: { id: product.id } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const SSR = withSSRContext({ context });

  // Obtener el recurso correspondiente al ID dado en la ruta
  const product = await SSR.DataStore.query(Product, context.params.id);
  const categories = await SSR.DataStore.query(ProductCategory, c=>c.productId.eq(context.params.id))
  return {
    props: {
      product: serializeModel(product),
      categories: serializeModel(categories),
    },
  };
}

export default function productDetail({ product, categories }) {
  console.log(categories, product);
  return (
    <Layout>
      <MyProductCard element={product} type={'products'} />
    </Layout>
  );
}
