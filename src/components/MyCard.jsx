import Image from "next/image";
import Link from "next/link";
import MyBadgeList from "./MyBadgeList";

const MyCard = ({ element, type, categories, productCategories }) => {
  console.log(element, type, categories, productCategories)
  return (
    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 bg-white ">
      <Link href={"/" + type + "/" + element?.id} className="w-full">
      <Image
        alt=" image description from backend"
        height={"1"}
        width={"400"}
        src={element?.cover}
        className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
      />
      </Link>
      <div className="flex justify-between w-full mb-2">
        <p className="text-sm text-gray-500">{element?.author}</p>
        <p className="text-sm text-gray-500">
          {new Date(element?.createdAt).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <MyBadgeList resourceId={element?.id} categories={productCategories? getCategories(productCategories, categories, element.id) : categories}/>
      <Link
        href={"/" + type + "/" + element?.id}
        className="text-lg font-bold sm:text-xl md:text-2xl"
      >
        {element?.title}
      </Link>
      <p className="text-sm text-black">
        {element?.description
          ? element?.description?.slice(0, 150) + "..."
          : element?.content.slice(0, 150) + "..."}
      </p>
    </div>
  );
};
export default MyCard;

function getCategories(productCategories, categories, Id) {
  const categoryIds = productCategories
    .filter((pc) => pc.productId === Id)
    .map((pc) => pc.categoryId);

  const categoriesList = categories.filter((category) =>
    categoryIds.includes(category.id)
  );

  return categoriesList;
}
