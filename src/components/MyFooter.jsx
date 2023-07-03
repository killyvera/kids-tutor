import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function MyFooter() {
  const { t, i18n } = useTranslation();
  return (
    <footer style={{ backgroundColor: "#de6868" }}>
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <Image
              width={50}
              height={50}
              src="/logoFull.png"
              className=" mr-3 transition hover:scale-125"
              alt="Kids Tutor Logo"
            />
            <span className="text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Kids Tutor
            </span>
          </Link>
          <ul>
            <SocialMediaIcons />
          </ul>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-100 sm:mb-0">
            <Link href="/" className="mr-4 hover:underline md:mr-6 ">
              {t("home")}
            </Link>
            <Link href="/products" className="mr-4 hover:underline md:mr-6 ">
              {t("products")}
            </Link>
            <Link
              href="/free-resources"
              className="mr-4 hover:underline md:mr-6 "
            >
              {t("free resources")}
            </Link>
            <Link href="/contact" className="mr-4 hover:underline md:mr-6 ">
              {t("contact")}
            </Link>
          </ul>
          <ul>
            <Link
              href={"/privacy-policy"}
              className="text-white mr-4 hover:underline text-sm"
            >
              {t("privacy policy")}
            </Link>
            <Link
              href={"/terms-and-conditions"}
              className="text-white mr-4 hover:underline text-sm"
            >
              {t("terms and conditions")}
            </Link>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto  lg:my-8" />
        <span className="block text-sm  sm:text-center text-gray-100">
          © 2023{" "}
          <a href="https://kidstutor.co/" className="hover:underline">
            Kids Tutor™
          </a>
          .{t("all rights")}.
        </span>
      </div>
    </footer>
  );
}
