import { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { OnlinePurchase, Product } from "@/models";
import Head from "next/head";
import H1 from "@/components/H1";
import MyDownloadsList from "@/components/MyDownloadsList";
import { useRouter } from "next/router";
import Link from "next/link";

const DownloadPage = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { email } = router.query;
  console.log(router.query)

  useEffect(() => {
    const fetchData = async () => {
      if (!email) {
        // Redireccionar lógica
        return;
      }

      const onlinePurchases = await DataStore.query(
        OnlinePurchase,
        (op) => op.customer_email.eq(email)
      );

      if (onlinePurchases.length === 0) {
        // Redireccionar lógica
        router.push("/")
        return;
      }

      const productIds = onlinePurchases.flatMap(
        (purchase) => purchase.details.products
      );
      const products = await Promise.all(
        productIds.map((id) => DataStore.query(Product, id))
      );

      setProducts(products);
    };

    fetchData();
  }, [email, router]);

  return (
    <>
      <Head>
        <title>Kids Tutor. Descarga tus productos.</title>
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

export default DownloadPage;
