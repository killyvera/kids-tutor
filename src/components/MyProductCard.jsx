import Image from "next/image";
import Link from "next/link";
import MyBadgeList from "./MyBadgeList";
import titleToLink from "@/helpers/titleToLink";
import Marketplaces from "./Marketplaces";
import MyTagList from "./MyTagList";
import { useState,useEffect} from "react";
import { Storage } from "aws-amplify";

const MyProductCard = ({ element, type, categories, productCategories }) => {
  const [image, setImage] = useState("")
  // console.log(element, type, categories, productCategories);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const file = await Storage.get("images/products/KT-NUM-20.cover.webp", {
          level: "public",
        });
        setImage(file);
      } catch (error) {
        console.log("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);
  console.log(image && image);

  console.log(element)
  return (
    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 bg-white ">
      <Link href={"/" + type + "/" + element?.id} className="w-full">
        <Image
          alt=" image description from backend"
          height={400}
          width={400}
          src={image}
          className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 transition hover:scale-[1.15]"
        />
      </Link>
      <MyBadgeList
        resourceId={element?.id}
        categories={
          productCategories
            ? getProductCategories(productCategories, categories, element.id)
            : categories
        }
      />
      <Link
        href={"/" + type + "/" + element?.id}
        className="text-lg font-bold sm:text-xl md:text-2xl"
      >
        {element?.name}
      </Link>
      <p className="text-sm text-black">
        {element?.short}
      </p>
      <div className="self-center w-full" >
      {/* <div className="flex flex-row py-10 justify-between items-center">
          <p className="text-red-500 mr-9" >{'MXN $' + element?.price + '.00'}</p>
          <Link
          href={"/" + type + "/" + element?.id}
          >
          <button className="bg-blue-500 py-2 px-3 rounded text-white transition hover:scale-110" >Adquierelo aquí</button>
          </Link>
        </div> */}
        <Marketplaces marketplaces={element?.marketplaces} />

      </div>
      {/* <MyTagList tagList={element?.tags} /> */}
    </div>
  );
};
export default MyProductCard;

function getProductCategories(productCategories, categories, productId) {
  const categoryIds = productCategories
    .filter((pc) => pc.productId === productId)
    .map((pc) => pc.categoryId);

  const categoriesList = categories.filter((category) =>
    categoryIds.includes(category.id)
  );

  return categoriesList;
}
