import Image from "next/image";
import Link from "next/link";
import MyBadgeList from "./MyBadgeList";
import MyTagList from "./MyTagList";

const MyPostCard = ({ element, type, categories, postCategories }) => {
  console.log(element, type, categories, postCategories)
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
      <MyBadgeList resourceId={element?.id} categories={postCategories? getCategories(postCategories, categories, element.id) : categories}/>
      <Link
        href={"/" + type + "/" + element?.id}
        className="text-lg font-bold sm:text-xl md:text-2xl"
      >
        {element?.title}
      </Link>
      <p className="text-sm text-black">
        {element?.short} 
      </p>
      <MyTagList tagList={element?.tags} />
    </div>
  );
};
export default MyPostCard;

function getCategories(postCategories, categories, Id) {
  const categoryIds = postCategories
    .filter((pc) => pc.blogPostId === Id)
    .map((pc) => pc.categoryId);

  const categoriesList = categories.filter((category) =>
    categoryIds.includes(category.id)
  );

  return categoriesList;
}
