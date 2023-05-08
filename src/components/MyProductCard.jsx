import Image from "next/image";
import Link from "next/link";
import MyBadgeList from "./MyBadgeList";
import titleToLink from "@/helpers/titleToLink";
import Marketplaces from "./Marketplaces";
const MyProductCard = ({ element, type, categories, productCategories }) => {
  // console.log(element, type, categories, productCategories);
  console.log(element)
  return (
    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 bg-white ">
      <Link href={"/" + type + "/" + element?.id} className="w-full">
        <Image
          alt=" image description from backend"
          height={"1"}
          width={"400"}
          src={element?.cover}
          className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 transition hover:scale-105"
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
        {element?.description.slice(0, 150) + "..."}
      </p>
      <div className="self-center w-full" >
        <Marketplaces marketplaces={element?.marketplaces} />
        <div className="flex flex-row py-10 justify-between items-center">
          <p className="text-red-500 mr-9" >{'MXN $' + element?.price + '.00'}</p>
          <button className="bg-red-400 py-2 px-3 rounded text-white" >Adquierelo aquí</button>
        </div>
      </div>
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
