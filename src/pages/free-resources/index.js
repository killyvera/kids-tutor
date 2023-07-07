import Head from "next/head";
import Image from "next/image";
import H1 from "@/components/H1";
import MyResources from "@/components/MyResources";
import { DataStore, withSSRContext } from "aws-amplify";
import { Resources, ResourcesCategory, Category } from "@/models";
import { serializeModel } from "@aws-amplify/datastore/ssr";
import Layout from "@/components/Layout";
import MyAuth from "@/components/MyAuth";
import { Auth } from "aws-amplify";
import { useTranslation } from "react-i18next";

export async function getServerSideProps() {
  const { DataStore } = withSSRContext();
  const resourceList = await DataStore.query(Resources);
  const resourceCategories = await DataStore.query(ResourcesCategory);
  const categoryIdsSet = new Set(resourceCategories.map((pc) => pc.categoryId));
  const categoryIds = [...categoryIdsSet];

  let userId;
  try {
    const user = await Auth.currentAuthenticatedUser();
    userId = user.id;
  } catch (err) {
    userId = err.message; // Store the error message in userId
  }

  const cachedCategories = {};

  const categories = await Promise.all(
    categoryIds.map(async (categoryId) => {
      if (cachedCategories[categoryId]) {
        return [cachedCategories[categoryId]];
      } else {
        const category = await DataStore.query(Category, categoryId);
        cachedCategories[categoryId] = category;
        return category;
      }
    })
  );
  // console.log(userId);
  return {
    props: {
      resourceList: serializeModel(resourceList),
      categories: serializeModel(categories),
      resourceCategories: serializeModel(resourceCategories),
    },
  };
}

const FreeResources = ({ resourceList, categories, resourceCategories }) => {
  const { t, i18n } = useTranslation();
  // console.log(resourceList, categories, resourceCategories);

  return (
    <MyAuth>
      <>
        <Head>
          <title>{t("free resources title")}</title>
          <meta name="description" content={t("free resources content")} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="text-center">
          <H1>{t("free resources header")}</H1>
          <MyResources
            featureCard={{
              title: t("free resources subtitle"),
              badge: t("free resources subtitle badge"),
            }}
            resourceList={resourceList}
            categories={categories}
            resourceCategories={resourceCategories}
          />
        </main>
      </>
    </MyAuth>
  );
};

export default FreeResources;
