import { DataStore } from "@aws-amplify/datastore";
import { OnlinePurchase, Product } from "@/models";
import Head from "next/head";
import H1 from "@/components/H1";
import MyResources from "@/components/MyResources";
import MyDownloadsList from "@/components/MyDownloadsList";
import {serializeModel} from '@aws-amplify/datastore/ssr'

const DownloadPage = ({ products }) => {
  return (
    <>
      <Head>
        <title>Kids Tutor Blog</title>
        <meta name="description" content="Kids Tutor Download Products Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <H1>Todos tus productos digitales, aquí.</H1>
        <div className="bg-white">
          <MyDownloadsList list={products} />
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  const { email, uuid } = context.query;

  if (!email || !uuid) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const onlinePurchases = await DataStore.query(OnlinePurchase, (op) =>
    op.and((op) => [op.customer_email.eq(email), op.uuid.eq(uuid)])
  );

  if (onlinePurchases.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const onlinePurchase = onlinePurchases[0];
  const productIds = onlinePurchase.details.products;
  const products = await Promise.all(
    productIds.map((id) => DataStore.query(Product, id))
  );
  return {
    props: {
      products: serializeModel(products),
    },
  };
}

export default DownloadPage;
