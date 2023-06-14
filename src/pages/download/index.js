import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { OnlinePurchase, Product } from "@/models";
import Head from "next/head";
import H1 from "@/components/H1";
import MyResources from "@/components/MyResources";
import MyDownloandList from "@/components/MyDownloandsList";
const DownloadPage = () => {
  const router = useRouter();
  const { email, uuid } = router.query;
  const [userPurchases, setUserPurchases] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchUserPurchases = async () => {
      console.log(email, uuid);
      const onlinePurchases = await DataStore.query(OnlinePurchase, (op) =>
        op.and((op) => [op.customer_email.eq(email), op.uuid.eq(uuid)])
      );

      if (onlinePurchases.length === 0) {
        return null;
      }
      const onlinePurchase = onlinePurchases[0];
      const productIds = onlinePurchase.details.products;
      console.log(typeof productIds, productIds);
      const products = await Promise.all(
        productIds.map((id) => DataStore.query(Product, id))
      );
      setUserPurchases(onlinePurchase);
      setProducts(products);
    };

    if (email && uuid) {
      fetchUserPurchases();
    }
  }, [email, uuid]);
  {
    console.log(userPurchases, products);
  }
  return (
    <>
      <Head>
        <title>Kids Tutor Blog</title>
        <meta name="description" content="Kids Tutor Downloand Products Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <H1>Todos tus productos digitales, aquí.</H1>
        <div className="bg-white">
          <MyDownloandList list={products} />
          {/* <p>User Email: {email}</p>

          {products?.map((product) => (
            <a
              key={product.id}
              // href={product.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {product.name}
            </a>
          ))} */}
        </div>
      </main>
    </>
  );
};

export default DownloadPage;
