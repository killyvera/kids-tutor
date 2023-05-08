import Image from "next/image";
import Link from "next/link";
import MyBadgeList from "./MyBadgeList";
import { Rating } from "@aws-amplify/ui-react";
import StripeTest from "./StripeTest";
import PrintableDownload from "./PrintableDownloand";

// https://tailwindcomponents.com/component/product-detail

const ProductDetail = ({ element, type, categories, productCategories }) => {
//   console.log(element, type, categories, productCategories);
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={element?.cover}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <div className="flex justify-between w-full mb-2">
        <h2 className="text-sm text-gray-500 tracking-widest">{' Kids Tutor Free Resources'}</h2>
        <p className="text-sm text-gray-500">
          {'1087 descargas'}
        </p>
      </div>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {element?.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <Rating
                  size="small"
                  value={element?.rating}
                  maxValue={5}
                  fillColor="orange"
                  emptyColor="purple"
                />
                <span className="text-gray-600 ml-3">
                  {element?.rating + " / 5"}
                </span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <a className="text-gray-500">
                  <svg
                    fill={"currentColor"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">{element?.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <MyBadgeList
                resourceId={element?.id}
                categories={
                  productCategories
                    ? getProductCategories(
                        productCategories,
                        categories,
                        element.id
                      )
                    : categories
                }
              />
            </div>
            <div className="flex flex-row justify-center" >
            <PrintableDownload a4Url={element?.files.a4} cartaUrl={element?.files.letter}/>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-2 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
            </div>
            </div>
          </div>
        </div>
    </section>
  );
};
export default ProductDetail;

function getProductCategories(productCategories, categories, productId) {
  const categoryIds = productCategories
    .filter((pc) => pc.productId === productId)
    .map((pc) => pc.categoryId);

  const categoriesList = categories.filter((category) =>
    categoryIds.includes(category.id)
  );

  return categoriesList;
}
