import { serializeModel } from "@aws-amplify/datastore/ssr";
import { DataStore, Amplify, withSSRContext } from "aws-amplify";
import Layout from "@/components/Layout";

import { Product, ProductCategory, Category } from "@/models";
import MyProductCard from "@/components/MyProductCard";
import ProductDetails from "@/components/ProductDetails";

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
  const productCategories = await SSR.DataStore.query(ProductCategory, (c) =>
    c.productId.eq(context.params.id)
  );
  const categoryIds = productCategories.map((pc) => pc.categoryId);

  const categories = await Promise.all(
    categoryIds.map(async (categoryId) => {
      return await SSR.DataStore.query(Category, categoryId);
    })
  );

  return {
    props: {
      product: serializeModel(product),
      categories: serializeModel(categories),
    },
  };
}

export default function product({ product, categories }) {
  console.log(categories, product);
  return <ProductDetails element={product} categories={categories} />;
}
