import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import MyNavBar from "@/components/MyNavBar";
import HeroResponsive from "@/components/HeroResponsive";
import MyColleges from "@/components/MyColleges";
import H1 from "@/components/H1";
import MyCallToAction from "@/components/MyCallToAction";
import MyProductFeatures from "@/components/MyProductFeatures";
import MyFooter from "@/components/MyFooter";
import MyTestimonials from "@/components/MyTestimonials";
import MyHeroResponsive2 from "@/ui-components/MyHeroResponsive2";
import { withSSRContext } from "aws-amplify";
import { Colleges, Testimonials } from "@/models";
import { serializeModel } from "@aws-amplify/datastore/ssr";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProductFeatures from "@/components/ProductFeatures";
import TextWithLinks from "@/utils/TextWithLinks";

export async function getServerSideProps() {
  const { DataStore } = withSSRContext();
  const collegesList = await DataStore.query(Colleges);
  const testimonialList = await DataStore.query(Testimonials);
  return {
    props: {
      collegesList: serializeModel(collegesList),
      testimonialList: serializeModel(testimonialList),
    },
  };
}

export default function Home({
  collegesList,
  testimonialList,
  allProducts,
  total,
}) {
  const { t, i18n } = useTranslation();
  const textData = {
    text: t("colleges subtitle"),
    searchWord: "aquí",
    linkTo: "/add-college",
  };

  return (
    <>
      <Head>
        <title>{t("home title")}</title>
        <meta name="description" content={t("home description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ textAlign: "-webkit-center" }} className="">
        <HeroResponsive
          title={t("home hero title")}
          subtitle={t("home hero subtitle")}
          button={t("home hero call to action")}
        />

        <H1 subtitle={<TextWithLinks textData={textData} />}>
          {t("colleges title")}
        </H1>
        <MyColleges collegesList={collegesList} />
        <H1 subtitle={t("colleges subtitle 2")} style={{ paddingTop: "0px" }} />
        <div style={{ paddingBottom: "100px" }}>
          <br />
        </div>

        {/* <MyCallToAction
              mainText={
                "Alto Nivel Academico, gracias a la labor conjunta basada en resultados con nuestro equipo de expertos."
              }
            /> */}

        {/* <MyProductFeatures
          title={t("product features title")}
          content={t("product features content")}
          feature1={{title: t("product feature title 1"),content: t("product feature content 1")}}
          feature2={{title: t("product feature title 2"),content: t("product feature content 2")}}
          feature3={{title: t("product feature title 3"),content: t("product feature content 3")}}
          feature4={{title: t("product feature title 4"),content: t("product feature content 4")}}
        /> */}
        <ProductFeatures
          title={t("product features title")}
          content={t("product features content")}
          feature1={{
            title: t("product feature title 1"),
            content: t("product feature content 1"),
          }}
          feature2={{
            title: t("product feature title 2"),
            schools: t("product feature schools 2"),
            content: t("product feature content 2"),
          }}
          feature3={{
            title: t("product feature title 3"),
            content: t("product feature content 3"),
          }}
          feature4={{
            title: t("product feature title 4"),
            content: t("product feature content 4"),
          }}
        />
        <div style={{ paddingBottom: "100px" }}>
          <br />
        </div>
        <H1>{t("testimonials title")}</H1>
        <MyTestimonials testimonialList={testimonialList} />
      </main>
    </>
  );
}
