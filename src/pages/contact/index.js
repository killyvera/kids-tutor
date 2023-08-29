import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import MyNavBar from "@/components/MyNavBar";
import HeroResponsive from "@/components/HeroResponsive";
import MyColleges from "@/components/MyColleges";

import { Amplify } from "aws-amplify";
import awsexports from "src/aws-exports.js";

import H1 from "@/components/H1";
import MyCallToAction from "@/components/MyCallToAction";
import MyProductFeatures from "@/components/MyProductFeatures";
import MyFooter from "@/components/MyFooter";
import MyTestimonials from "@/components/MyTestimonials";
import MyHeroResponsive2 from "@/ui-components/MyHeroResponsive2";
import { ProductCollection } from "@/ui-components";
import YoutubeBackground from "@/components/YoutubeBackground";
import Spacer from "@/components/Spacer";
import MyResources from "@/components/MyResources";
import MyPostList from "@/ui-components/MyPostList";
import ContactCreateForm from "@/components/ContactCreateForm";
import MyContact from "@/components/MyContact";
import { useTranslation } from "react-i18next";

Amplify.configure(awsexports);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("contact title")}</title>
        <meta name="description" content={"contact description"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ textAlign: "-webkit-center" }} className="">
        <H1>{t("contact header")}</H1>
        <MyContact
          translation={{
            title: t("contact form title"),
            content: t("contact form content"),
            contactDirection: t("contact direction"),
            contactPhone: t("contact Phone"),
            email: t("email"),
            formikVerification: t("formik verification"),
            formikEmailCheck: t("formik email check")
          }}
        />
      </main>
    </>
  );
}
