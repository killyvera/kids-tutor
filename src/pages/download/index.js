import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { OnlinePurchase, Product } from "@/models";

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
    <div style={{ marginTop: "120px" }}>
      <h1>Download Page</h1>
      <p>User Email: {email}</p>
      {/* Render the download links based on the user's purchases */}
      {products &&
        products.map((product) => (
          <a
            key={product.id}
            // href={product.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {product.name}
          </a>
        ))}
    </div>
  );
};

export default DownloadPage;
