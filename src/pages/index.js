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

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  collegesList,
  testimonialList,
  allProducts,
  total,
}) {
  // const { t, i18n } = useTranslation();
  return (
    <>
      <Head>
        <title>KidsTutor, aprender es divertirse.</title>
        <meta name="description" content="Con los juegos cartas y descargables de Kids Tutor tu hijo aprenderá de una manera divertida y con un estandar internacional certificado." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ textAlign: "-webkit-center" }} className="">
        <HeroResponsive />

        <H1>Colegios que usan nuestros métodos y productos de aprendizaje.</H1>
        <MyColleges collegesList={collegesList} />
        {/* <MyCallToAction
              mainText={
                "Alto Nivel Academico, gracias a la labor conjunta basada en resultados con nuestro equipo de expertos."
              }
            /> */}

        <MyProductFeatures />
        <H1>
          ¿Quieres saber cómo mejorar la educación de tus pequeños? Nuestros
          clientes satisfechos tienen historias que compartir.
        </H1>
        <MyTestimonials testimonialList={testimonialList} />
      </main>
    </>
  );
}
