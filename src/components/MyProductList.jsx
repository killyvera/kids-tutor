import MyResource from "@/ui-components/MyResource";
import { useState } from "react";
import MyBadgeList from "./MyBadgeList";
import MyCard from "./MyCard";
import Link from "next/link";
import MyProductCard from "./MyProductCard";
import MyProduct from "./MyProduct";

function MyProductList({ filterTranslate,list, categories, productCategories }) {
  const [filter, setFilter]= useState('todos')
  const [firstPost, ...postList] = list;
  const [filteredProducts, setFilteredProducts] = useState(list);

  const handleFilterClick = (filter) => {
    let filteredList = [];
    if (filter === "todos") {
      filteredList = list;
      setFilter('todos')
    } else {
      filteredList = list.filter((product) => product.type[filter]);
      setFilter(filter)
    }
    setFilteredProducts(filteredList);
  };

  // console.log(productCategories)

  return (
    <div className="text-gray-900 pr-0 pb-14 pl-0 bg-white">
      <div
        className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl"
      >
        {/* <div className="flex flex-col items-center sm:px-5 md:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
            <div
              className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5"
            >
              <div
                className="bg-yellow-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
              uppercase inline-block"
              >
                <p className="inline">
                  <svg
                    className="w-3.5 h-3.5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                  00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                  1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                  0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </p>
                <p className="inline text-xs font-medium">POST MÁS RECIENTE</p>
              </div>
              <Link href={'/blog/' + firstPost.id} className="text-3xl font-bold leading-none lg:text-3xl xl:text-4xl">
                {firstPost.title}
              </Link>
              <p className="text-sm text-black">
                {firstPost.content.slice(0, 150) + "..."}
              </p>
              <div className="flex justify-between w-full mb-2">
                <p className="text-sm text-gray-500">{firstPost.author}</p>
                <p className="text-sm text-gray-500">
                  {new Date(firstPost.createdAt).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="block">
              <img
                src={firstPost.cover}
                className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"
              />
            </div>
          </div>
        </div> */}
        <div className="space-x-1 flex flex-row justify-center">
          {/* <div className="bg-white-500 border border-gray-400 py-2 px-1 rounded text-gray-400">
            Filtrar productos por:
          </div> */}
          <button
            className={`px-1 rounded text-white ${filter === 'todos' ? 'bg-blue-500 text-white' : 'bg-gray-500 py-2'} transition hover:scale-125`}
            onClick={() => handleFilterClick("todos")}
          >
            {filterTranslate?.all}
          </button>
          <button className={`py-2 px-1 rounded text-white ${filter === "physical" ? 'bg-blue-500 text-white' : 'bg-gray-500 py-2'} transition hover:scale-125`}
          onClick={() => handleFilterClick("physical")}
          >
            {filterTranslate?.physical}
          </button>
          <button className={`py-2 px-1 rounded text-white ${filter === "downloadable" ? 'bg-blue-500 text-white' : 'bg-gray-500 py-2'} transition hover:scale-125`}
          onClick={() => handleFilterClick("downloadable")}
          >
            {filterTranslate?.downloadable}
          </button>
        </div>
        <div className="grid grid-cols-12 sm:px-5 sm:gap-x-8 gap-y-16">
          {filteredProducts.map((element) => (
            <MyProductCard
              categories={categories}
              productCategories={productCategories}
              element={element}
              type={"products"}
              key={element.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProductList;
