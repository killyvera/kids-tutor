import Image from "next/image";
import MyBadgeList from "./MyBadgeList";

const MyCard = ({ element, type }) => {
  console.log(element + " " + type);

  return (
    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 bg-white ">
      <Image
        alt="Blog image description from backend"
        height={"1"}
        width={"400"}
        src={element.cover}
        className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
      />
      <div className="flex justify-between w-full mb-2">
        <p className="text-sm text-gray-500">{element.author}</p>
        <p className="text-sm text-gray-500">
          {new Date(element.createdAt).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <MyBadgeList resourceId={element?.id} />
      <a className="text-lg font-bold sm:text-xl md:text-2xl">
        {element.title}
      </a>
      <p className="text-sm text-black">
        {element?.content.slice(0, 150) + "..."}
      </p>
    </div>
  );
};
export default MyCard;