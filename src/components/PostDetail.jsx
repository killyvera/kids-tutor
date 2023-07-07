import React from "react";
import MyBadgeList from "./MyBadgeList";
import MyTagList from "./MyTagList";
import RenderHTML from "./RenderHTML";

export default function PostDetail({
  element,
  type,
  categories,
  postCategories,
}) {
  // console.log(element, element.tags, categories, postCategories);
  return (
    // <!-- component -->
    <div className=" bg-slate-50">
      <main className="pt-20 max-w-screen-lg mx-auto">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight pb-9">
              {element?.title}
            </h2>
          </div>

          <img
            src={element?.cover}
            className="w-full object-cover lg:rounded"
            style={{ height: "28em" }}
          />
          <div style={{ textAlignLast: "left" }} className="pt-4">
            <MyBadgeList
              resourceId={element?.id}
              categories={
                postCategories
                  ? getPostCategories(postCategories, categories, element.id)
                  : categories
              }
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            <RenderHTML htmlContent={element?.content} />
            <div className="flex justify-between w-full mb-16">
              <p className="text-sm text-gray-500">{element?.author}</p>
              <p className="text-sm text-gray-500">
                {new Date(element?.createdAt).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
            <div className="p-4 border-t border-b md:border md:rounded">
              <div className="flex py-2">
                <img
                  src="/avatar.png"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-700 text-sm">
                    {" "}
                    Bernard Thomas{" "}
                  </p>
                  <p className="font-semibold text-gray-600 text-xs">
                    Creative & Entrepreneur
                  </p>
                </div>
              </div>
              <p className="text-gray-700 py-3">
                Aprender es diversión. Descubre cómo Kids Tutor está cambiando
                la forma en que los niños aprenden hoy.
              </p>
              <button className="px-2 py-1 text-gray-100 bg-blue-500 flex w-full items-center justify-center rounded">
                Mensaje
                <i className="bx bx-user-plus ml-2"></i>
              </button>
            </div>
            <MyTagList tagList={element?.tags} />
          </div>
        </div>
      </main>
    </div>
  );
}

function getPostCategories(postCategories, categories, blogPostId) {
  const categoryIds = postCategories
    .filter((pc) => pc.blogPostId === blogPostId)
    .map((pc) => pc.categoryId);

  const categoriesList = categories.filter((category) =>
    categoryIds.includes(category.id)
  );

  return categoriesList;
}
